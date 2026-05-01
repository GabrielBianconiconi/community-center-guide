import { Pool } from "pg";

type ProgressRow = {
  completed: Record<string, boolean>;
};

let pool: Pool | undefined;
let initialized = false;

function getPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  pool ??= new Pool({ connectionString });
  return pool;
}

async function ensureProgressTable() {
  if (initialized) {
    return;
  }

  await getPool().query(`
    CREATE TABLE IF NOT EXISTS progress (
      client_id TEXT PRIMARY KEY,
      completed JSONB NOT NULL DEFAULT '{}'::jsonb,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  initialized = true;
}

export async function getProgress(clientId: string) {
  await ensureProgressTable();

  const result = await getPool().query<ProgressRow>(
    "SELECT completed FROM progress WHERE client_id = $1",
    [clientId],
  );

  return result.rows[0]?.completed ?? null;
}

export async function saveProgress(
  clientId: string,
  completed: Record<string, boolean>,
) {
  await ensureProgressTable();

  await getPool().query(
    `
      INSERT INTO progress (client_id, completed, updated_at)
      VALUES ($1, $2::jsonb, NOW())
      ON CONFLICT (client_id)
      DO UPDATE SET completed = EXCLUDED.completed, updated_at = NOW()
    `,
    [clientId, JSON.stringify(completed)],
  );
}
