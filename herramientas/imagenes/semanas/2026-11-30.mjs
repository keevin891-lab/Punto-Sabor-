// Imágenes de publicaciones/semana-30-nov-al-06-diciembre.md
import { R } from "../recortes.mjs";
import { foto, texto, filas } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-30-lun-2000-lomo-fugazza.jpg", diseño: texto({
    titulo: ["CHAU", "NOVIEMBRE 👋"], subs: ["LOMO FUGAZZA", "CHEDDAR Y CEBOLLA CARAMELIZADA · CON PAPAS"], precio: "$14.000", fondo: R.lomoYPancho }) },
  { archivo: "2026-11-30-lun-2300-fugazzeta.jpg", diseño: texto({
    titulo: ["DORMÍ", "CONTENTO"], subs: ["PIZZA FUGAZZETA", "CEBOLLA Y MUCHA MUZZARELLA"], precio: "$11.000", fondo: R.pizzaRoquefort }) },

  { archivo: "2026-12-01-mar-2000-lomo-gold.jpg", diseño: foto({
    titulo: ["ARRANCÓ", "DICIEMBRE 🎄"], sub: "LOMO GOLD: PANCETA · CHEDDAR · CEBOLLA MORADA", crop: R.lomo, precio: "$14.000", chico: "CON PAPAS" }) },
  { archivo: "2026-12-01-mar-2300-pizza-argentina.jpg", diseño: texto({
    titulo: ["LA MÁS", "ARGENTA 🇦🇷"], subs: ["PIZZA ARGENTINA", "PAPAS FRITAS · HUEVO · JAMÓN · MUZZARELLA"], precio: "$13.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-12-02-mie-2000-para-la-despedida.jpg", diseño: filas({
    titulo: "PARA LA DESPEDIDA 🎉", filas: [
      { crop: R.dosPizzas, nombre: "2 PIZZAS A ELECCIÓN", monto: "$21.000" },
      { crop: R.dosLomos, nombre: "2 LOMOS", monto: "$22.000" },
      { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
    ] }) },
  { archivo: "2026-12-02-mie-2300-burger-roquefort.jpg", diseño: foto({
    titulo: ["PARA LOS", "QUE SABEN"], sub: "BURGER ROQUEFORT CON PAPAS", crop: R.burgerRoquefort, precio: "$12.000" }) },

  { archivo: "2026-12-03-jue-2000-milanesa-criolla.jpg", diseño: texto({
    titulo: ["JUEVES", "CRIOLLO"], subs: ["MILANESA CRIOLLA", "JAMÓN · QUESO · HUEVO · SALSA CRIOLLA · CON PAPAS"], precio: "$13.000" }) },
  { archivo: "2026-12-03-jue-2300-pizza-especial.jpg", diseño: texto({
    titulo: ["TRASNOCHE", "DE JUEVES"], subs: ["PIZZA ESPECIAL", "CON HUEVO: $11.500"], precio: "$11.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-12-04-vie-2000-2-hamburguesas.jpg", diseño: foto({
    titulo: ["DESPEDIDA CON", "LOS CHICOS 🎉"], sub: "2 HAMBURGUESAS + PORCIÓN DE PAPAS", crop: R.dosHamburguesas, precio: "$15.000" }) },
  { archivo: "2026-12-04-vie-2300-2-pizzas.jpg", diseño: foto({
    titulo: ["LA NOCHE", "SIGUE 🌙"], sub: "2 PIZZAS A ELECCIÓN", crop: R.dosPizzas, precio: "$21.000", chico: "2 PIZZAS" }) },

  { archivo: "2026-12-05-sab-2000-2-lomos.jpg", diseño: foto({
    titulo: ["PARA", "FESTEJAR 🎉"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },
  { archivo: "2026-12-05-sab-2300-hamburguesa-gold.jpg", diseño: foto({
    titulo: ["TIENE NOMBRE:", "GOLD 🏆"], sub: "DOBLE MEDALLÓN · CHEDDAR · PANCETA", crop: R.burgerLocal, precio: "$12.000", chico: "CON PAPAS" }) },

  { archivo: "2026-12-06-dom-2000-muzza.jpg", diseño: texto({
    titulo: ["DOMINGO", "SIN COCINAR"], subs: ["PIZZA MUZZA", "CON HUEVO: $11.000"], precio: "$10.500", fondo: R.pizzaRoquefort }) },
  { archivo: "2026-12-06-dom-2300-feriado-martes-8.jpg", diseño: texto({
    titulo: ["MARTES 8", "FERIADO"], subs: ["ABIERTOS HASTA LAS 3 AM", "DELIVERY Y RETIRO EN MITRE 146"], fondo: R.local }) },
];
