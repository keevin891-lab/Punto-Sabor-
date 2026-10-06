// Recortes de las imágenes originales del local (carpeta referencias/), en píxeles de la imagen original.
import path from "node:path";
import { fileURLToPath } from "node:url";

export const REFERENCIAS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../referencias");
const base = "../../referencias/";

export const TAMAÑOS = {
  "este-lunes.png": [1024, 1536],
  "nuevos-sabores.png": [941, 1671],
  "promos.png": [1024, 1536],
  "logo.jpg": [1512, 1512],
  "local-al-paso.png": [1254, 1254],
};

const r = (src, x, y, w, h) => ({ base, src, x, y, w, h });

export const R = {
  logo: r("logo.jpg", 100, 106, 1312, 1312),
  lomo: r("este-lunes.png", 0, 845, 480, 270),
  hamburguesa: r("este-lunes.png", 495, 860, 529, 310),
  lomoYHamburguesa: r("este-lunes.png", 0, 850, 1024, 320),
  pizzaPepperoni: r("este-lunes.png", 0, 1120, 1024, 180),
  lomoRoquefort: r("nuevos-sabores.png", 0, 690, 530, 290),
  burgerRoquefort: r("nuevos-sabores.png", 515, 680, 426, 330),
  pizzaCalabresa: r("nuevos-sabores.png", 0, 985, 570, 215),
  pizzaRoquefort: r("nuevos-sabores.png", 590, 1010, 351, 190),
  dosLomos: r("promos.png", 15, 470, 490, 262),
  dosPizzas: r("promos.png", 519, 480, 490, 235),
  combo: r("promos.png", 15, 935, 490, 200),
  dosHamburguesas: r("promos.png", 519, 930, 490, 203),
  pancho: r("promos.png", 15, 1325, 490, 181),
  tostado: r("promos.png", 519, 1330, 490, 176),
  local: r("local-al-paso.png", 60, 330, 840, 310),
  milanesa: r("local-al-paso.png", 20, 950, 460, 140),
  mesaCompleta: r("local-al-paso.png", 0, 640, 1254, 440),
  burgerLocal: r("local-al-paso.png", 172, 690, 408, 282),
  lomoYPancho: r("local-al-paso.png", 643, 752, 548, 328),
  conoPapas: r("local-al-paso.png", 549, 658, 258, 220),
};
