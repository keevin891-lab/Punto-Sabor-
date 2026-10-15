// Imágenes de estados/plan-7-dias-10-al-16-noviembre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-10-mar-estado-tradicion.jpg", diseño: texto({
    titulo: ["¡FELIZ DÍA DE LA", "TRADICIÓN! 🇦🇷"], subs: ["DE PARTE DE TODO EL EQUIPO DE PUNTO SABOR", "HOY LA MILANESA CRIOLLA ESTÁ DE FIESTA"], fondo: R.local }) },
  { archivo: "2026-11-11-mie-estado-pedidos-grandes.jpg", diseño: texto({
    titulo: ["¿JUNTADA", "ESTE FINDE?"], subs: ["1 · LA LISTA DE TODOS EN UN SOLO MENSAJE", "2 · AVISÁ A QUÉ HORA LO QUERÉS", "3 · APROVECHÁ LAS PROMOS PARA COMPARTIR"], fondo: R.mesaCompleta }) },
  { archivo: "2026-11-12-jue-estado-muzza-o-fugazzeta.jpg", diseño: texto({
    titulo: ["¿MUZZA O", "FUGAZZETA?"], subs: ["🧀 O 🧅 · VOTÁ O RESPONDÉ"], fondo: R.pizzaRoquefort }) },
  { archivo: "2026-11-13-vie-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "VIERNES 13"], sub: "HAMBURGUESA + PAPAS + GASEOSA", crop: R.combo, precio: "$10.000", chico: "SOLO HOY" }) },
  { archivo: "2026-11-14-sab-estado-detras-de-escena.jpg", diseño: foto({
    titulo: ["SÁBADO DE", "JUNTADAS 🔥"], sub: "ASÍ SALEN LOS PEDIDOS", crop: R.mesaCompleta }) },
  { archivo: "2026-11-15-dom-estado-gold.jpg", diseño: foto({
    titulo: ["DOMINGO", "DE ORO 🏆"], sub: "HAMBURGUESA GOLD: DOBLE MEDALLÓN · PANCETA", crop: R.burgerLocal, precio: "$12.000", chico: "CON PAPAS" }) },
  { archivo: "2026-11-16-lun-estado-lo-que-dice-frias.jpg", diseño: texto({
    titulo: ["LO QUE DICEN", "LOS VECINOS ❤️"], subs: ["GRACIAS POR CADA MENSAJE", "¿Y VOS QUÉ OPINÁS?"], fondo: R.mesaCompleta }) },
];
