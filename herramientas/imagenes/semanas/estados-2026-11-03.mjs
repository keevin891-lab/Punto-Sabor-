// Imágenes de estados/plan-7-dias-03-al-09-noviembre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-03-mar-estado-agendanos.jpg", diseño: texto({
    titulo: ["¿NO VES", "LAS PROMOS?"], subs: ["AGENDÁ 385 456-6585 Y 385 444-4487", "GUARDALOS COMO \"PUNTO SABOR\""], fondo: R.mesaCompleta }) },
  { archivo: "2026-11-04-mie-estado-lomo-fugazza.jpg", diseño: texto({
    titulo: ["LOMO", "FUGAZZA"], subs: ["BIFE DE LOMO · CHEDDAR · CEBOLLA CARAMELIZADA", "CON PORCIÓN DE PAPAS"], precio: "$14.000", fondo: R.lomoYPancho }) },
  { archivo: "2026-11-05-jue-estado-tu-pedido-de-siempre.jpg", diseño: texto({
    titulo: ["¿TU PEDIDO", "DE SIEMPRE?"], subs: ["CONTANOS EN UN MENSAJE", "LOS MÁS VOTADOS VAN A LAS HISTORIAS"] }) },
  { archivo: "2026-11-06-vie-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "VIERNES"], sub: "SÚPER PANCHO + LATA BIEN FRÍA", crop: R.pancho, precio: "$5.000", chico: "SOLO HOY" }) },
  { archivo: "2026-11-07-sab-estado-sabado-a-full.jpg", diseño: foto({
    titulo: ["SÁBADO", "A FULL 🔥"], sub: "TODO SALE RECIÉN HECHO", crop: R.mesaCompleta }) },
  { archivo: "2026-11-08-dom-estado-todo-lo-que-hacemos.jpg", diseño: foto({
    titulo: ["TODO", "AL PASO"], sub: "HAMBURGUESAS · LOMOS · PIZZAS · MILANESAS · PANCHOS", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "DELIVERY Y RETIRO", precioSize: 76 }) },
  { archivo: "2026-11-09-lun-estado-resenas.jpg", diseño: texto({
    titulo: ["TU OPINIÓN", "NOS AYUDA 🙏"], subs: ["DEJANOS TU RESEÑA EN FACEBOOK", "O CONTANOS POR WHATSAPP"], fondo: R.mesaCompleta }) },
];
