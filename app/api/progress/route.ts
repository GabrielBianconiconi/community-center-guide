import { getProgress, saveProgress } from "@/lib/progress-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function jsonResponse(body: unknown, status = 200) {
  return Response.json(body, { status });
}

function isProgress(value: unknown): value is Record<string, boolean> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return Object.values(value).every((entry) => typeof entry === "boolean");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clientId = searchParams.get("clientId");

  if (!clientId) {
    return jsonResponse({ error: "clientId is required" }, 400);
  }

  try {
    const completed = await getProgress(clientId);
    return jsonResponse({ completed });
  } catch (error) {
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Failed to load progress" },
      500,
    );
  }
}

export async function PUT(request: Request) {
  const body = await request.json().catch(() => null);
  const clientId = body?.clientId;
  const completed = body?.completed;

  if (typeof clientId !== "string" || !clientId) {
    return jsonResponse({ error: "clientId is required" }, 400);
  }

  if (!isProgress(completed)) {
    return jsonResponse({ error: "completed must be an object of booleans" }, 400);
  }

  try {
    await saveProgress(clientId, completed);
    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Failed to save progress" },
      500,
    );
  }
}
