// Imágenes de estados/plan-7-dias-06-al-12-octubre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-10-06-mar-estado-presentacion.jpg", diseño: foto({
    titulo: ["¿YA NOS", "CONOCÉS?"], sub: "MITRE 146 · FRENTE A LA PLAZA 9 DE JULIO", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "TODOS LOS DÍAS · DELIVERY Y RETIRO", precioSize: 76 }) },
  { archivo: "2026-10-07-mie-estado-lomo-roquefort.jpg", diseño: foto({
    titulo: ["¿YA LO", "PROBASTE?"], sub: "NUEVO EN LA CARTA: LOMO ROQUEFORT", crop: R.lomoRoquefort,
    precio: "$14.000", chico: "CON PAPAS" }) },
];
