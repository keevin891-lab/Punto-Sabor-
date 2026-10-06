// Convierte las imágenes de una semana (4:5) en estados/historias verticales 9:16 (1080x1920)
// para WhatsApp, Instagram y Facebook.
// Uso: node herramientas/imagenes/historias.mjs imagenes/<semana> imagenes/<semana>/historias
import { chromium } from "playwright";
import { mkdirSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const [entrada, salida] = process.argv.slice(2);
if (!entrada || !salida) {
  console.error("Uso: node historias.mjs <carpeta de imágenes> <carpeta de salida>");
  process.exit(1);
}
mkdirSync(salida, { recursive: true });

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: 1080, height: 1920 } });
await pagina.goto(pathToFileURL(path.join(aqui, "historia.html")).href);
await pagina.evaluate(() => document.fonts.load("40px Anton"));

for (const nombre of readdirSync(entrada).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort()) {
  const src = pathToFileURL(path.resolve(entrada, nombre)).href;
  await pagina.evaluate((s) => window.cargar(s), src);
  const destino = path.join(salida, nombre.replace(/\.(jpe?g|png)$/i, "-historia.jpg"));
  await pagina.locator("#historia").screenshot({ path: destino, type: "jpeg", quality: 90 });
  console.log("historia ", path.basename(destino));
}
await navegador.close();
