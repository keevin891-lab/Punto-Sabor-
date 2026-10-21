// Imágenes de estados/plan-7-dias-24-al-30-noviembre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-24-mar-estado-que-pedis.jpg", diseño: texto({
    titulo: ["¿QUÉ PEDÍS EN EL", "BLACK FRIDAY? 🖤"], subs: ["🍕 PIZZA · 🍔 HAMBURGUESA · 🥩 LOMO", "VIERNES 27"], fondo: R.mesaCompleta }) },
  { archivo: "2026-11-25-mie-estado-pedidos-grupos.jpg", diseño: texto({
    titulo: ["¿PEDIDO PARA", "MUCHOS? 🙌"], subs: ["1 · AVISANOS CON TIEMPO CUÁNTOS SON", "2 · LA LISTA COMPLETA EN UN SOLO MENSAJE", "3 · A QUÉ HORA LO QUERÉS"], fondo: R.mesaCompleta }) },
  { archivo: "2026-11-26-jue-estado-lomo-de-la-casa.jpg", diseño: foto({
    titulo: ["EL ORGULLO", "DE LA CASA 👑"], sub: "LOMO DE LA CASA: PIMIENTOS · PANCETA · CHEDDAR", crop: R.lomo, precio: "$15.000", chico: "CON PAPAS" }) },
  { archivo: "2026-11-27-vie-estado-primera-vez.jpg", diseño: foto({
    titulo: ["¿PRIMERA VEZ EN", "PUNTO SABOR?"], sub: "HAMBURGUESAS · LOMOS · PIZZAS · MILANESAS · PANCHOS", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "DELIVERY Y RETIRO", precioSize: 76 }) },
  { archivo: "2026-11-28-sab-estado-detras-de-escena.jpg", diseño: foto({
    titulo: ["SÁBADO A LA NOCHE", "EN LA COCINA 🔥"], sub: "TODO SALE RECIÉN HECHO", crop: R.mesaCompleta }) },
  { archivo: "2026-11-29-dom-estado-testimonios.jpg", diseño: texto({
    titulo: ["LO QUE NOS", "DICEN ❤️"], subs: ["LOS VECINOS DE FRÍAS", "¿Y VOS QUÉ OPINÁS?"], fondo: R.mesaCompleta }) },
  { archivo: "2026-11-30-lun-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "FIN DE MES"], sub: "SÚPER PANCHO + LATA BIEN FRÍA", crop: R.pancho, precio: "$5.000", chico: "SOLO HOY" }) },
];
