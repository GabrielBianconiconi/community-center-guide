import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";

const projectRoot = process.cwd();
const imagesSourcePath = path.join(projectRoot, "lib", "community-center", "images.ts");
const outputDir = path.join(projectRoot, "public", "stardew", "items");

async function getWikiFileUrl(fileName) {
  const params = new URLSearchParams({
    action: "query",
    titles: `File:${fileName}`,
    prop: "imageinfo",
    iiprop: "url",
    format: "json",
  });

  const response = await fetch(
    `https://stardewvalleywiki.com/mediawiki/api.php?${params.toString()}`,
    {
      headers: {
        "user-agent": "Mozilla/5.0 community-center-guide asset downloader",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`API HTTP ${response.status}`);
  }

  const data = await response.json();
  const pages = data?.query?.pages ?? {};
  const page = Object.values(pages)[0];
  const url = page?.imageinfo?.[0]?.url;

  if (typeof url !== "string") {
    throw new Error("API did not return an image URL");
  }

  return url;
}

async function readItemImageFiles() {
  const source = await readFile(imagesSourcePath, "utf8");
  const match = source.match(
    /export const itemImageFiles:\s*Record<string,\s*string>\s*=\s*({[\s\S]*?\n});/,
  );

  if (!match) {
    throw new Error(`Could not find itemImageFiles in ${imagesSourcePath}`);
  }

  return vm.runInNewContext(`(${match[1]})`, Object.create(null), {
    timeout: 1000,
  });
}

async function downloadImage(fileName) {
  const imageUrl = await getWikiFileUrl(fileName);
  const response = await fetch(imageUrl, {
    headers: {
      "referer": "https://stardewvalleywiki.com/",
      "user-agent": "Mozilla/5.0 community-center-guide asset downloader",
    },
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("image/")) {
    throw new Error(`Unexpected content type: ${contentType || "unknown"}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

await mkdir(outputDir, { recursive: true });

const itemImageFiles = await readItemImageFiles();
const uniqueFileNames = [...new Set(Object.values(itemImageFiles))].sort();
const failures = [];
let cached = 0;
let downloaded = 0;

for (const fileName of uniqueFileNames) {
  const outputPath = path.join(outputDir, fileName);

  if (existsSync(outputPath)) {
    cached += 1;
    continue;
  }

  try {
    const bytes = await downloadImage(fileName);
    await writeFile(outputPath, bytes);
    downloaded += 1;
    console.log(`Downloaded ${fileName}`);
  } catch (error) {
    failures.push({ fileName, reason: error instanceof Error ? error.message : String(error) });
    console.warn(`Failed ${fileName}: ${failures.at(-1).reason}`);
  }
}

console.log("");
console.log(`Images downloaded: ${downloaded}`);
console.log(`Images already cached: ${cached}`);
console.log(`Images failed: ${failures.length}`);

if (failures.length > 0) {
  console.log("");
  console.log("Failed files:");
  for (const failure of failures) {
    console.log(`- ${failure.fileName}: ${failure.reason}`);
  }
}
