// Imágenes de estados/plan-7-dias-01-al-07-diciembre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-12-01-mar-estado-diciembre.jpg", diseño: foto({
    titulo: ["DICIEMBRE EN", "PUNTO SABOR 🎄"], sub: "MITRE 146 · FRENTE A LA PLAZA 9 DE JULIO", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "TODOS LOS DÍAS · DELIVERY Y RETIRO", precioSize: 76 }) },
  { archivo: "2026-12-02-mie-estado-pedi-temprano.jpg", diseño: texto({
    titulo: ["TIP DE", "DICIEMBRE ⏰"], subs: ["VIERNES Y SÁBADOS: PEDÍ TEMPRANO", "O AVISANOS A QUÉ HORA LO QUERÉS"], fondo: R.mesaCompleta }) },
  { archivo: "2026-12-03-jue-estado-despedida.jpg", diseño: texto({
    titulo: ["¿DESPEDIDA CON", "EL LABURO O AMIGOS?"], subs: ["💼 LABURO · 🍻 AMIGOS", "ARMAMOS EL PEDIDO PARA TODOS"], fondo: R.mesaCompleta }) },
  { archivo: "2026-12-04-vie-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "VIERNES"], sub: "HAMBURGUESA + PAPAS + GASEOSA", crop: R.combo, precio: "$10.000", chico: "SOLO HOY" }) },
  { archivo: "2026-12-05-sab-estado-detras-de-escena.jpg", diseño: foto({
    titulo: ["SÁBADO DE", "DESPEDIDAS 🎉"], sub: "ASÍ SALEN LOS PEDIDOS", crop: R.mesaCompleta }) },
  { archivo: "2026-12-06-dom-estado-calabresa.jpg", diseño: foto({
    titulo: ["DOMINGO DE", "CALABRESA 🌶️"], sub: "LA PIZZA CON MÁS CARÁCTER", crop: R.pizzaCalabresa, precio: "$12.000" }) },
  { archivo: "2026-12-07-lun-estado-testimonios.jpg", diseño: texto({
    titulo: ["GRACIAS POR", "ESTE AÑO ❤️"], subs: ["¿QUÉ FUE LO MEJOR QUE PROBASTE?", "CONTANOS EN UN MENSAJE"], fondo: R.mesaCompleta }) },
];
