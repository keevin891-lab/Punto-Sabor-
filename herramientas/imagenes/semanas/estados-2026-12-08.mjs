// Imágenes de estados/plan-7-dias-08-al-14-diciembre.md (después se pasan a 9:16 con historias.mjs)
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-12-08-mar-estado-feriado.jpg", diseño: foto({
    titulo: ["FERIADO Y", "ABIERTOS 🙌"], sub: "MITRE 146 · FRENTE A LA PLAZA 9 DE JULIO", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "DELIVERY Y RETIRO", precioSize: 76 }) },
  { archivo: "2026-12-09-mie-estado-recalentar-pizza.jpg", diseño: texto({
    titulo: ["¿TE SOBRÓ", "PIZZA? 🍕"], subs: ["1 · SARTÉN A FUEGO MEDIO, SIN ACEITE", "2 · PONÉ LA PORCIÓN Y TAPÁ", "3 · 3 O 4 MINUTOS: CROCANTE OTRA VEZ"], fondo: R.pizzaRoquefort }) },
  { archivo: "2026-12-10-jue-estado-pizza-favorita.jpg", diseño: texto({
    titulo: ["¿LA PIZZA FAVORITA", "DE FRÍAS?"], subs: ["MUZZA · FUGAZZETA · CALABRESA · ARGENTINA", "VOTÁ O RESPONDÉ"], fondo: R.pizzaPepperoni }) },
  { archivo: "2026-12-11-vie-estado-solo-hoy.jpg", diseño: foto({
    titulo: ["SOLO HOY", "VIERNES"], sub: "TOSTADO DE JAMÓN Y QUESO + LATA", crop: R.tostado, precio: "$6.500", chico: "SOLO HOY" }) },
  { archivo: "2026-12-12-sab-estado-detras-de-escena.jpg", diseño: foto({
    titulo: ["DICIEMBRE EN", "LA COCINA 🔥"], sub: "GRACIAS POR CADA DESPEDIDA", crop: R.mesaCompleta }) },
  { archivo: "2026-12-13-dom-estado-burger-roquefort.jpg", diseño: foto({
    titulo: ["DOMINGO DE", "SABOR FUERTE"], sub: "BURGER ROQUEFORT CON PAPAS", crop: R.burgerRoquefort, precio: "$12.000" }) },
  { archivo: "2026-12-14-lun-estado-testimonios.jpg", diseño: texto({
    titulo: ["LO QUE NOS", "DICEN ❤️"], subs: ["DESPUÉS DE LAS DESPEDIDAS", "¿Y VOS QUÉ OPINÁS?"], fondo: R.mesaCompleta }) },
];
