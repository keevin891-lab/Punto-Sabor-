// Genera las imágenes de las publicaciones (1080x1350) a partir de un archivo de diseños.
// Uso: node herramientas/imagenes/generar.mjs herramientas/imagenes/semanas/<archivo>.mjs imagenes/<carpeta>
import { chromium } from "playwright";
import { mkdirSync, copyFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const [archivo, salida] = process.argv.slice(2);
if (!archivo || !salida) {
  console.error("Uso: node generar.mjs <diseños.mjs> <carpeta de salida>");
  process.exit(1);
}
const { posts } = await import(pathToFileURL(path.resolve(archivo)).href);
const { TAMAÑOS, REFERENCIAS } = await import("./recortes.mjs");
mkdirSync(salida, { recursive: true });

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: 1080, height: 1350 } });
await pagina.goto(pathToFileURL(path.join(aqui, "plantilla.html")).href);
await pagina.evaluate(() => Promise.all([document.fonts.load("40px Marker"), document.fonts.load("40px Anton")]));
// Precarga las imágenes de referencia para que los recortes salgan completos.
await pagina.evaluate((srcs) => Promise.all(srcs.map((s) => new Promise((ok) => {
  const im = new Image(); im.onload = im.onerror = ok; im.src = "../../referencias/" + s;
}))), Object.keys(TAMAÑOS));

for (const p of posts) {
  const destino = path.join(salida, p.archivo);
  if (p.copiar) {
    // Publicaciones que usan una imagen ya diseñada por el local.
    copyFileSync(path.join(REFERENCIAS, p.copiar), destino);
    console.log("copiada  ", p.archivo);
    continue;
  }
  await pagina.evaluate(([diseño, tamaños]) => window.renderPost(diseño, tamaños), [p.diseño, TAMAÑOS]);
  await pagina.waitForTimeout(150);
  await pagina.locator("#post").screenshot({ path: destino, type: destino.endsWith(".png") ? "png" : "jpeg", quality: destino.endsWith(".png") ? undefined : 92 });
  console.log("generada ", p.archivo);
}
await navegador.close();
