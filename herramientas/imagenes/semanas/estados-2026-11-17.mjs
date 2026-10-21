// Imágenes de estados/plan-7-dias-17-al-23-noviembre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-17-mar-estado-direccion-clara.jpg", diseño: texto({
    titulo: ["DELIVERY", "VOLANDO 🛵"], subs: ["CALLE Y NÚMERO", "UNA REFERENCIA: COLOR DE CASA, ESQUINA, PORTÓN", "UN TELÉFONO DE CONTACTO"], fondo: R.local }) },
  { archivo: "2026-11-18-mie-estado-lomo-roquefort.jpg", diseño: foto({
    titulo: ["PARA LOS QUE AMAN", "EL ROQUEFORT"], sub: "LOMO ROQUEFORT CON PAPAS", crop: R.lomoRoquefort, precio: "$14.000" }) },
  { archivo: "2026-11-19-jue-estado-finde-largo.jpg", diseño: texto({
    titulo: ["¿CÓMO PASÁS EL", "FINDE LARGO?"], subs: ["🏠 EN CASA · 🎉 JUNTADA · 🚗 VIAJE", "SI TE QUEDÁS, LA COMIDA LA PONEMOS NOSOTROS"], fondo: R.mesaCompleta }) },
  { archivo: "2026-11-20-vie-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "VIERNES"], sub: "TOSTADO DE JAMÓN Y QUESO + LATA", crop: R.tostado, precio: "$6.500", chico: "SOLO HOY" }) },
  { archivo: "2026-11-21-sab-estado-abiertos-finde-largo.jpg", diseño: foto({
    titulo: ["ABIERTOS TODO", "EL FINDE LARGO"], sub: "SÁBADO · DOMINGO · LUNES · MITRE 146", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "DELIVERY Y RETIRO", precioSize: 76 }) },
  { archivo: "2026-11-22-dom-estado-detras-de-escena.jpg", diseño: foto({
    titulo: ["LA COCINA", "NO PARA 🔥"], sub: "DOMINGO DE FINDE LARGO", crop: R.mesaCompleta }) },
  { archivo: "2026-11-23-lun-estado-resenas.jpg", diseño: texto({
    titulo: ["¿TE GUSTÓ", "TU PEDIDO?"], subs: ["CONTANOS EN UN MENSAJE", "O DEJÁ TU RESEÑA EN FACEBOOK 🙏"], fondo: R.mesaCompleta }) },
];
