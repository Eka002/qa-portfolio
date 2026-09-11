import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("portfolio contains core content and no starter metadata", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const worker = await readFile(new URL("../worker/index.ts", import.meta.url), "utf8");
  const wrangler = await readFile(new URL("../wrangler.jsonc", import.meta.url), "utf8");

  assert.match(page, /Екатерина Дедяшкина/);
  assert.match(page, /Formatta/);
  assert.match(page, /Universe‑soft/);
  assert.match(page, /Более 150/);
  assert.match(page, /165\+/);
  assert.match(page, /Автоматизация на пяти уровнях системы/);
  assert.match(page, /Backend & Data/);
  assert.match(page, /Operations/);
  assert.match(page, /Web \/ API \/ Backend/);
  assert.match(page, /NDA‑safe/);
  assert.match(layout, /QA Engineer/);
  assert.match(worker, /Response\.redirect\(requestUrl\.toString\(\), 308\)/);
  assert.match(worker, /hostname === "localhost"/);
  assert.match(worker, /env\.ASSETS\.fetch\(request\)/);
  assert.match(worker, /assetResponse\.status !== 404/);
  assert.match(worker, /Strict-Transport-Security/);
  assert.match(wrangler, /"preview_urls": false/);
  assert.doesNotMatch(page, /Базовый контур автотестов с нуля/);
  assert.doesNotMatch(`${page}${layout}`, /codex-preview|_sites-preview|Starter Project/);
});
