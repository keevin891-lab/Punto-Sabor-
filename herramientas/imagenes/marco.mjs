// Adapta una imagen ya diseñada a un formato fijo (por defecto 4:5, 1080x1350) sin recortarla:
// la centra sobre un fondo desenfocado y le agrega abajo el pie con los dos WhatsApp y la dirección.
// Uso: node herramientas/imagenes/marco.mjs <imagen> <salida.jpg> [ancho] [alto]
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const [entrada, salida, ancho = "1080", alto = "1350"] = process.argv.slice(2);
if (!entrada || !salida) {
  console.error("Uso: node marco.mjs <imagen> <salida.jpg> [ancho] [alto]");
  process.exit(1);
}
const w = Number(ancho), h = Number(alto);

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: w, height: h } });
await pagina.goto(pathToFileURL(path.join(aqui, "marco.html")).href);
await pagina.evaluate(() => document.fonts.load("40px Anton"));
await pagina.evaluate(([s, a, b]) => window.cargar(s, a, b), [pathToFileURL(path.resolve(entrada)).href, w, h]);
await pagina.locator("#marco").screenshot({ path: salida, type: "jpeg", quality: 92 });
console.log("marco    ", path.basename(salida));
await navegador.close();
