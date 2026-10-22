// Imágenes de publicaciones/semana-07-al-13-diciembre.md
import { R } from "../recortes.mjs";
import { foto, texto, doble } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-12-07-lun-2000-tradicional-doble.jpg", diseño: foto({
    titulo: ["HOY SE", "CENA DOBLE"], sub: "HAMBURGUESA TRADICIONAL DOBLE CON PAPAS", crop: R.hamburguesa, precio: "$10.000" }) },
  { archivo: "2026-12-07-lun-2300-napolitana.jpg", diseño: texto({
    titulo: ["MAÑANA NO", "SE MADRUGA"], subs: ["PIZZA NAPOLITANA", "RECIÉN HORNEADA"], precio: "$11.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-12-08-mar-2000-2-pizzas-feriado.jpg", diseño: foto({
    titulo: ["FERIADO EN", "FAMILIA"], sub: "2 PIZZAS A ELECCIÓN · HOY HASTA LAS 3 AM", crop: R.dosPizzas, precio: "$21.000", chico: "2 PIZZAS" }) },
  { archivo: "2026-12-08-mar-2300-lomo-roquefort.jpg", diseño: foto({
    titulo: ["CERRÁ EL", "FERIADO"], sub: "LOMO ROQUEFORT CON PAPAS", crop: R.lomoRoquefort, precio: "$14.000" }) },

  { archivo: "2026-12-09-mie-2000-milanesa-gold.jpg", diseño: texto({
    titulo: ["VUELTA A", "LA RUTINA"], subs: ["MILANESA GOLD", "CHEDDAR · PANCETA · CEBOLLA MORADA · CON PAPAS"], precio: "$14.000" }) },
  { archivo: "2026-12-09-mie-2300-calabresa.jpg", diseño: foto({
    titulo: ["CALABRESA", "Y A DORMIR"], sub: "PIZZA CALABRESA", crop: R.pizzaCalabresa, precio: "$12.000" }) },

  { archivo: "2026-12-10-jue-2000-combo.jpg", diseño: foto({
    titulo: ["JUEVES", "DE COMBO"], sub: "HAMBURGUESA + PAPAS + GASEOSA", crop: R.combo, precio: "$10.000" }) },
  { archivo: "2026-12-10-jue-2300-bajonera.jpg", diseño: texto({
    titulo: ["EL BAJÓN TIENE", "SOLUCIÓN"], subs: ["PIZZA BAJONERA", "CARNE PICADA · CEBOLLA MORADA · MUZZARELLA"], precio: "$14.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-12-11-vie-2000-2-lomos.jpg", diseño: foto({
    titulo: ["DESPEDIDA", "DEL LABURO 🥂"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },
  { archivo: "2026-12-11-vie-2300-2-hamburguesas.jpg", diseño: foto({
    titulo: ["DESPUÉS DEL", "BRINDIS"], sub: "2 HAMBURGUESAS + PORCIÓN DE PAPAS", crop: R.dosHamburguesas, precio: "$15.000" }) },

  { archivo: "2026-12-12-sab-2000-van-las-dos.jpg", diseño: doble({
    titulo: ["VAN", "LAS DOS 😎"], izq: { crop: R.pizzaCalabresa, nombre: "CALABRESA" }, der: { crop: R.pizzaRoquefort, nombre: "ROQUEFORT" },
    precio: "$21.000", chico: "2 PIZZAS A ELECCIÓN" }) },
  { archivo: "2026-12-12-sab-2300-lomo-de-la-casa.jpg", diseño: foto({
    titulo: ["EL MÁS", "COMPLETO 👑"], sub: "LOMO DE LA CASA: PIMIENTOS · PANCETA · CHEDDAR", crop: R.lomo, precio: "$15.000", chico: "CON PAPAS" }) },

  { archivo: "2026-12-13-dom-2000-fugazza-doble.jpg", diseño: foto({
    titulo: ["DOMINGO DE", "FUGAZZA"], sub: "DOBLE MEDALLÓN · CHEDDAR · CEBOLLA CARAMELIZADA", crop: R.burgerLocal, precio: "$11.000", chico: "CON PAPAS" }) },
  { archivo: "2026-12-13-dom-2300-aguinaldo.jpg", diseño: texto({
    titulo: ["SE VIENE EL", "AGUINALDO 💸"], subs: ["¿CÓMO LO FESTEJÁS?", "NOSOTROS TENEMOS IDEAS… CON PAPAS"], fondo: R.mesaCompleta }) },
];
