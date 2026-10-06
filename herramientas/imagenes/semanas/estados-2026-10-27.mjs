// Imágenes de estados/plan-7-dias-27-oct-al-02-nov.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-10-27-mar-estado-equipo.jpg", diseño: foto({
    titulo: ["DETRÁS DE", "CADA PEDIDO"], sub: "HAY UN EQUIPO QUE LO HACE CON GANAS", crop: R.local }) },
  { archivo: "2026-10-28-mie-estado-halloween-sin-demoras.jpg", diseño: texto({
    titulo: ["HALLOWEEN", "SIN DEMORAS 🎃"], subs: ["1 · PEDÍ CON TIEMPO", "2 · TODO EN UN MENSAJE: PEDIDO, ENTREGA Y PAGO", "3 · SI RETIRÁS, AVISÁ A QUÉ HORA PASÁS"], fondo: R.local }) },
  { archivo: "2026-10-29-jue-estado-disfraz-o-pijama.jpg", diseño: texto({
    titulo: ["¿DISFRAZ", "O PIJAMA?"], subs: ["🎃 O 😴 · RESPONDÉ", "LA COMIDA LA PONEMOS NOSOTROS"] }) },
  { archivo: "2026-10-30-vie-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "VIERNES"], sub: "TOSTADO DE JAMÓN Y QUESO + LATA", crop: R.tostado, precio: "$6.500", chico: "SOLO HOY" }) },
  { archivo: "2026-10-31-sab-estado-bajonera.jpg", diseño: texto({
    titulo: ["LA PIZZA OFICIAL", "DE HALLOWEEN 🎃"], subs: ["PIZZA BAJONERA", "HOY HASTA LAS 3 AM"], precio: "$14.000", fondo: R.pizzaPepperoni }) },
  { archivo: "2026-11-01-dom-estado-despues-de-halloween.jpg", diseño: foto({
    titulo: ["¡GRACIAS,", "FRÍAS!"], sub: "ASÍ QUEDAMOS DESPUÉS DE HALLOWEEN 😅", crop: R.mesaCompleta }) },
  { archivo: "2026-11-02-lun-estado-gracias-octubre.jpg", diseño: texto({
    titulo: ["GRACIAS POR", "OCTUBRE ❤️"], subs: ["¿QUÉ FUE LO QUE MÁS TE GUSTÓ?", "CONTANOS EN UN MENSAJE"], fondo: R.mesaCompleta }) },
];
