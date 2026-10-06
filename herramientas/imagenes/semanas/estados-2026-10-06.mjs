// Imágenes de estados/plan-7-dias-06-al-12-octubre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto, doble } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-10-06-mar-estado-presentacion.jpg", diseño: foto({
    titulo: ["¿YA NOS", "CONOCÉS?"], sub: "MITRE 146 · FRENTE A LA PLAZA 9 DE JULIO", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "TODOS LOS DÍAS · DELIVERY Y RETIRO", precioSize: 76 }) },
  { archivo: "2026-10-07-mie-estado-lomo-roquefort.jpg", diseño: foto({
    titulo: ["¿YA LO", "PROBASTE?"], sub: "NUEVO EN LA CARTA: LOMO ROQUEFORT", crop: R.lomoRoquefort,
    precio: "$14.000", chico: "CON PAPAS" }) },
  { archivo: "2026-10-08-jue-estado-lomo-o-hamburguesa.jpg", diseño: doble({
    titulo: ["¿LOMO O", "HAMBURGUESA?"], izq: { crop: R.dosLomos, nombre: "LOMO" }, der: { crop: R.hamburguesa, nombre: "HAMBURGUESA" },
    precio: "🥩 O 🍔", chico: "VOTÁ O RESPONDÉ" }) },
  { archivo: "2026-10-09-vie-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "VIERNES"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "SOLO HOY" }) },
  { archivo: "2026-10-10-sab-estado-detras-de-escena.jpg", diseño: foto({
    titulo: ["ASÍ SE ARMA", "TU PEDIDO"], sub: "TODO HECHO EN EL MOMENTO · MITRE 146", crop: R.mesaCompleta }) },
  { archivo: "2026-10-11-dom-estado-testimonios.jpg", diseño: texto({
    titulo: ["¿QUÉ ES LO QUE", "MÁS TE GUSTA?"], subs: ["CONTANOS EN UN MENSAJE", "COMPARTIMOS LAS MEJORES RESPUESTAS"], fondo: R.mesaCompleta }) },
  { archivo: "2026-10-12-lun-estado-como-pedir.jpg", diseño: texto({
    titulo: ["PEDÍ EN", "1 MENSAJE"], subs: ["1 · QUÉ QUERÉS", "2 · DELIVERY (CON DIRECCIÓN) O RETIRO", "3 · CÓMO PAGÁS", "FERIADO: ABIERTOS HASTA LAS 3 AM"], fondo: R.local }) },
];
