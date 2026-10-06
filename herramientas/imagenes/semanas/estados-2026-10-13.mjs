// Imágenes de estados/plan-7-dias-13-al-19-octubre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-10-13-mar-estado-cuanto-pedir.jpg", diseño: texto({
    titulo: ["¿CUÁNTO PIDO", "EL DOMINGO?"], subs: ["1 PIZZA CADA 2 O 3 PERSONAS", "1 LOMO O 1 HAMBURGUESA POR PERSONA", "SUMÁ UN CONO DE PAPAS PARA PICAR"],
    fondo: R.mesaCompleta }) },
  { archivo: "2026-10-14-mie-estado-comida-de-mama.jpg", diseño: texto({
    titulo: ["¿LA COMIDA", "FAVORITA DE MAMÁ?"], subs: ["CONTANOS Y EL DOMINGO SE LA PREPARAMOS", "DOMINGO 18 · DÍA DE LA MADRE"] }) },
  { archivo: "2026-10-15-jue-estado-hamburguesa-gold.jpg", diseño: foto({
    titulo: ["LE DECIMOS GOLD", "POR ALGO"], sub: "DOBLE MEDALLÓN · CHEDDAR · PANCETA", crop: R.burgerLocal, precio: "$12.000", chico: "CON PAPAS" }) },
  { archivo: "2026-10-16-vie-estado-preparandonos.jpg", diseño: foto({
    titulo: ["NOS ESTAMOS", "PREPARANDO"], sub: "PARA QUE EL DOMINGO MAMÁ NO COCINE", crop: R.local }) },
  { archivo: "2026-10-17-sab-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "SÁBADO"], sub: "2 HAMBURGUESAS + PORCIÓN DE PAPAS", crop: R.dosHamburguesas, precio: "$15.000", chico: "SOLO HOY" }) },
  { archivo: "2026-10-18-dom-estado-feliz-dia.jpg", diseño: texto({
    titulo: ["¡FELIZ DÍA,", "MAMÁ!"], subs: ["DE PARTE DE TODO EL EQUIPO DE PUNTO SABOR", "HOY LA COCINA LA PONEMOS NOSOTROS"], fondo: R.local }) },
  { archivo: "2026-10-19-lun-estado-gracias.jpg", diseño: texto({
    titulo: ["LO QUE DICE", "FRÍAS ❤️"], subs: ["GRACIAS POR CADA MENSAJE", "¿Y VOS QUÉ OPINÁS?"], fondo: R.mesaCompleta }) },
];
