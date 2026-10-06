// Imágenes de estados/plan-7-dias-20-al-26-octubre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto, doble } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-10-20-mar-estado-delivery-o-al-paso.jpg", diseño: foto({
    titulo: ["¿DELIVERY O", "AL PASO?"], sub: "LAS DOS: VOS ELEGÍS · MITRE 146", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "TODOS LOS DÍAS", precioSize: 76 }) },
  { archivo: "2026-10-21-mie-estado-retirar-sin-esperar.jpg", diseño: texto({
    titulo: ["RETIRÁ", "SIN ESPERAR"], subs: ["1 · MANDÁ TU PEDIDO POR WHATSAPP", "2 · AVISÁ TU NOMBRE Y A QUÉ HORA PASÁS", "3 · PASÁ POR MITRE 146 Y LISTO"], fondo: R.local }) },
  { archivo: "2026-10-22-jue-estado-pizza-o-lomo.jpg", diseño: doble({
    titulo: ["¿PIZZA O", "LOMO?"], izq: { crop: R.dosPizzas, nombre: "PIZZA" }, der: { crop: R.dosLomos, nombre: "LOMO" },
    precio: "🍕 O 🥩", chico: "VOTÁ O RESPONDÉ" }) },
  { archivo: "2026-10-23-vie-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "VIERNES"], sub: "2 PIZZAS A ELECCIÓN", crop: R.dosPizzas, precio: "$21.000", chico: "SOLO HOY" }) },
  { archivo: "2026-10-24-sab-estado-calabresa.jpg", diseño: foto({
    titulo: ["LLEGÓ PARA", "QUEDARSE"], sub: "PIZZA CALABRESA", crop: R.pizzaCalabresa, precio: "$12.000" }) },
  { archivo: "2026-10-25-dom-estado-detras-de-escena.jpg", diseño: foto({
    titulo: ["DOMINGO EN", "LA COCINA"], sub: "TODO HECHO EN EL MOMENTO", crop: R.mesaCompleta }) },
  { archivo: "2026-10-26-lun-estado-tu-opinion.jpg", diseño: texto({
    titulo: ["TU OPINIÓN", "VALE ORO 🏆"], subs: ["¿YA NOS PROBASTE? CONTANOS", "DEJANOS TU RESEÑA EN FACEBOOK"], fondo: R.mesaCompleta }) },
];
