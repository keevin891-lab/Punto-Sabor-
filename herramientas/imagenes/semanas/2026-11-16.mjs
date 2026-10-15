// Imágenes de publicaciones/semana-16-al-22-noviembre.md
import { R } from "../recortes.mjs";
import { foto, texto, filas } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-16-lun-2000-milanesa-gold.jpg", diseño: texto({
    titulo: ["MILANESA", "DE ORO 🏆"], subs: ["MILANESA GOLD", "CHEDDAR · PANCETA · CEBOLLA MORADA · CON PAPAS"], precio: "$14.000" }) },
  { archivo: "2026-11-16-lun-2300-pizza-roquefort.jpg", diseño: foto({
    titulo: ["QUESO", "INTENSO"], sub: "PIZZA ROQUEFORT", crop: R.pizzaRoquefort, precio: "$12.000" }) },

  { archivo: "2026-11-17-mar-2000-lomo-de-la-casa.jpg", diseño: foto({
    titulo: ["EL DE", "LA CASA 👑"], sub: "LOMO DE LA CASA: PIMIENTOS · PANCETA · CHEDDAR", crop: R.lomo, precio: "$15.000", chico: "CON PAPAS" }) },
  { archivo: "2026-11-17-mar-2300-pizza-bajonera.jpg", diseño: texto({
    titulo: ["MARTES", "DE BAJÓN"], subs: ["PIZZA BAJONERA", "CARNE PICADA · CEBOLLA MORADA · MUZZARELLA"], precio: "$14.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-11-18-mie-2000-burger-roquefort.jpg", diseño: foto({
    titulo: ["SABOR", "FUERTE"], sub: "BURGER ROQUEFORT CON PAPAS", crop: R.burgerRoquefort, precio: "$12.000" }) },
  { archivo: "2026-11-18-mie-2300-especial-con-huevo.jpg", diseño: texto({
    titulo: ["NUNCA", "DECEPCIONA"], subs: ["PIZZA ESPECIAL CON HUEVO", "RECIÉN SALIDA DEL HORNO"], precio: "$11.500", fondo: R.pizzaRoquefort }) },

  { archivo: "2026-11-19-jue-2000-combo-finde-largo.jpg", diseño: foto({
    titulo: ["ARRANCA EL", "FINDE LARGO"], sub: "HAMBURGUESA + PAPAS + GASEOSA", crop: R.combo, precio: "$10.000", chico: "COMBO" }) },
  { archivo: "2026-11-19-jue-2300-finde-de-3-dias.jpg", diseño: texto({
    numero: "3", titulo: ["DÍAS DE", "FINDE LARGO"], subs: ["SÁBADO · DOMINGO · LUNES FERIADO"] }) },

  { archivo: "2026-11-20-vie-2000-2-pizzas.jpg", diseño: foto({
    titulo: ["ARRANCA EL", "FINDE LARGO"], sub: "2 PIZZAS A ELECCIÓN", crop: R.dosPizzas, precio: "$21.000", chico: "2 PIZZAS" }) },
  { archivo: "2026-11-20-vie-2300-2-lomos.jpg", diseño: foto({
    titulo: ["PRIMERA", "NOCHE 🌙"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },

  { archivo: "2026-11-21-sab-2000-arma-la-juntada.jpg", diseño: filas({
    titulo: "ARMÁ LA JUNTADA", filas: [
      { crop: R.dosPizzas, nombre: "2 PIZZAS A ELECCIÓN", monto: "$21.000" },
      { crop: R.dosLomos, nombre: "2 LOMOS", monto: "$22.000" },
      { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
    ] }) },
  { archivo: "2026-11-21-sab-2300-fugazza-doble.jpg", diseño: foto({
    titulo: ["TRASNOCHE", "DE SÁBADO"], sub: "FUGAZZA DOBLE: CHEDDAR Y CEBOLLA CARAMELIZADA", crop: R.burgerLocal, precio: "$11.000", chico: "CON PAPAS" }) },

  { archivo: "2026-11-22-dom-2000-2-hamburguesas.jpg", diseño: foto({
    titulo: ["HOY NADIE", "COCINA"], sub: "2 HAMBURGUESAS + PORCIÓN DE PAPAS", crop: R.dosHamburguesas, precio: "$15.000" }) },
  { archivo: "2026-11-22-dom-2300-black-friday.jpg", diseño: texto({
    titulo: ["BLACK", "FRIDAY 🖤"], subs: ["VIERNES 27", "TODAS NUESTRAS PROMOS JUNTAS"] }) },
];
