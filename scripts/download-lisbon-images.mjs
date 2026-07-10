#!/usr/bin/env node
/**
 * Download Lisbon / Portugal images from Wikimedia Commons (CC-licensed).
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA = "LisbonShoreExcursions/1.0 (https://lisbonshoreexcursions.com; image setup)";

/** Unique primary subjects for Portugal photography. */
const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Lisboa_-_Tram_28_(35194687503).jpg",
    "File:Elevador da Glória - Lisbon (52684199907).jpg",
    "File:Alfama, Lisbon (52123889163).jpg",
  ],
  "og-default.jpg": [
    "File:Torre de Belém - Lisbon (52684199907).jpg",
    "File:Torre de Belém July 2018-1.jpg",
    "File:Belem Tower in Lisbon.jpg",
  ],
  "cruise-port.jpg": [
    "File:Lisbon Cruise Terminal.jpg",
    "File:Terminal de Cruzeiros de Lisboa (2021).jpg",
    "File:Praça do Comércio - Lisbon (52684199907).jpg",
    "File:Praça do Comércio (Lisbon).jpg",
  ],
  "sintra.jpg": [
    "File:Palácio Nacional da Pena - Sintra (52684199907).jpg",
    "File:Pena National Palace - Sintra (3).jpg",
    "File:Palacio da Pena Sintra.jpg",
  ],
  "belem.jpg": [
    "File:Torre de Belém July 2018-1.jpg",
    "File:Mosteiro dos Jerónimos - Lisbon.jpg",
    "File:Belem Tower in Lisbon.jpg",
  ],
  "cascais.jpg": [
    "File:Cascais Marina.jpg",
    "File:Cascais, Portugal (52123889163).jpg",
    "File:Cascais bay.jpg",
  ],
  "tram.jpg": [
    "File:Lisboa_-_Tram_28_(35194687503).jpg",
    "File:Tram 28 Lisbon.jpg",
    "File:Lisbon tram 28.jpg",
  ],
  "alfama.jpg": [
    "File:Alfama, Lisbon (52123889163).jpg",
    "File:Alfama Lisbon streets.jpg",
    "File:Lisbon Alfama district.jpg",
  ],
  "historic.jpg": [
    "File:Praça do Comércio (Lisbon).jpg",
    "File:Baixa Lisbon.jpg",
    "File:Rossio Square Lisbon.jpg",
  ],
  "food.jpg": [
    "File:Pastéis de Belém.jpg",
    "File:Pastel de nata.jpg",
    "File:Portuguese seafood.jpg",
  ],
  "pasteis.jpg": [
    "File:Pastéis de Belém.jpg",
    "File:Pastel de nata.jpg",
    "File:Pasteis de Belem pastry.jpg",
  ],
  "coast.jpg": [
    "File:Cabo da Roca.jpg",
    "File:Cabo da Roca lighthouse.jpg",
    "File:Atlantic coast Cascais.jpg",
  ],
  "miradouro.jpg": [
    "File:Miradouro da Senhora do Monte.jpg",
    "File:Miradouro de Santa Luzia.jpg",
    "File:Viewpoint Lisbon.jpg",
  ],
  "compare.jpg": [
    "File:Palácio Nacional da Pena - Sintra (52684199907).jpg",
    "File:Praça do Comércio (Lisbon).jpg",
  ],
  "family.jpg": [
    "File:Cascais Marina.jpg",
    "File:Praça do Comércio (Lisbon).jpg",
  ],
  "wine.jpg": [
    "File:Portuguese wine.jpg",
    "File:Port wine glasses.jpg",
    "File:Vinho verde.jpg",
  ],
  "walking.jpg": [
    "File:Alfama, Lisbon (52123889163).jpg",
    "File:Lisbon cobblestone street.jpg",
  ],
  "photography.jpg": [
    "File:Palácio Nacional da Pena - Sintra (52684199907).jpg",
    "File:Torre de Belém July 2018-1.jpg",
  ],
  "private.jpg": [
    "File:Cascais bay.jpg",
    "File:Sintra mountains.jpg",
    "File:Cabo da Roca.jpg",
  ],
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJson(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function searchCommons(query) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=5&format=json`;
  const data = await fetchJson(api);
  return (data.query?.search ?? []).map((s) => s.title);
}

async function resolveImageUrl(fileTitle) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&iiurlwidth=1920&format=json`;
  const data = await fetchJson(api);
  const pages = data.query?.pages ?? {};
  const page = Object.values(pages)[0];
  if (!page || page.missing) return null;
  const info = page.imageinfo?.[0];
  return info?.thumburl ?? info?.url ?? null;
}

async function downloadOne(filename, titles) {
  const tried = [...titles];
  // Fallback: search by subject keyword from filename
  const keyword = filename.replace(".jpg", "").replace(/-/g, " ");
  try {
    await sleep(400);
    const found = await searchCommons(`${keyword} Lisbon OR Sintra OR Cascais OR Belém Portugal`);
    for (const t of found) {
      if (!tried.includes(t)) tried.push(t);
    }
  } catch {
    /* ignore search failures */
  }

  for (const title of tried) {
    try {
      await sleep(500);
      const url = await resolveImageUrl(title);
      if (!url) continue;
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 8000) continue;
      writeFileSync(join(OUT, filename), buf);
      writeFileSync(join(SOURCE, filename), buf);
      console.log(`✓ ${filename} ← ${title} (${Math.round(buf.length / 1024)}KB)`);
      return true;
    } catch (e) {
      console.warn(`  skip ${title}: ${e.message}`);
    }
  }
  console.error(`✗ ${filename} — no source found`);
  return false;
}

mkdirSync(OUT, { recursive: true });
mkdirSync(SOURCE, { recursive: true });

const targets = process.argv.slice(2);
const entries = Object.entries(IMAGE_FILES).filter(
  ([name]) => targets.length === 0 || targets.includes(name),
);

let ok = 0;
let fail = 0;
for (const [filename, titles] of entries) {
  const success = await downloadOne(filename, titles);
  if (success) ok++;
  else fail++;
}

console.log(`\nDone: ${ok} downloaded, ${fail} failed.`);
