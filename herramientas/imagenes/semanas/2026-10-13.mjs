// Imágenes de publicaciones/semana-13-al-18-octubre-dia-de-la-madre.md
import { R } from "../recortes.mjs";
import { foto, texto, filas, doble } from "../diseños.mjs";

const promosMama = [
  { crop: R.dosPizzas, nombre: "2 PIZZAS A ELECCIÓN", monto: "$21.000" },
  { crop: R.dosLomos, nombre: "2 LOMOS", monto: "$22.000" },
  { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
];

export const posts = [
  { archivo: "2026-10-13-mar-2000-fugazza-doble.jpg", diseño: foto({
    titulo: ["FUGAZZA", "DOBLE"], sub: "DOBLE MEDALLÓN · CHEDDAR · CEBOLLA CARAMELIZADA", crop: R.burgerRoquefort, precio: "$11.000", chico: "CON PAPAS" }) },
  { archivo: "2026-10-13-mar-2300-faltan-5-dias.jpg", diseño: texto({
    numero: "5", titulo: ["DÍAS PARA QUE", "MAMÁ NO COCINE"], subs: ["DOMINGO 18 · DÍA DE LA MADRE"] }) },

  { archivo: "2026-10-14-mie-2000-gold-o-fugazza.jpg", diseño: doble({
    titulo: ["¿GOLD O", "FUGAZZA?"], izq: { crop: R.lomo, nombre: "LOMO GOLD" }, der: { crop: R.dosLomos, nombre: "LOMO FUGAZZA" },
    precio: "$14.000", chico: "CADA UNO, CON PAPAS" }) },
  { archivo: "2026-10-14-mie-2300-especial-con-huevo.jpg", diseño: texto({
    titulo: ["TRASNOCHE", "DE PIZZA"], subs: ["PIZZA ESPECIAL CON HUEVO", "RECIÉN SALIDA DEL HORNO"], precio: "$11.500", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-10-15-jue-2000-milanesa.jpg", diseño: texto({
    titulo: ["MILANESA", "COMPLETA"], subs: ["O CRIOLLA · CON PORCIÓN DE PAPAS", "COMO LA DE CASA, SIN ENSUCIAR LA COCINA"], precio: "$13.000" }) },
  { archivo: "2026-10-15-jue-2300-el-mejor-regalo.jpg", diseño: texto({
    titulo: ["EL MEJOR", "REGALO"], subs: ["UN DOMINGO SIN COCINAR", "DOMINGO 18 · DÍA DE LA MADRE"] }) },

  { archivo: "2026-10-16-vie-2000-viernes-en-familia.jpg", diseño: foto({
    titulo: ["VIERNES", "EN FAMILIA"], sub: "2 PIZZAS A ELECCIÓN", crop: R.dosPizzas, precio: "$21.000", chico: "2 PIZZAS" }) },
  { archivo: "2026-10-16-vie-2300-faltan-2-dias.jpg", diseño: texto({
    numero: "2", titulo: ["DÍAS PARA EL", "DÍA DE LA MADRE"], subs: ["ESCRIBINOS CON TIEMPO"] }) },

  { archivo: "2026-10-17-sab-2000-lomo-roquefort.jpg", diseño: foto({
    titulo: ["LOMO", "ROQUEFORT"], sub: "NUEVO EN LA CARTA", crop: R.lomoRoquefort, precio: "$14.000", chico: "CON PAPAS" }) },
  { archivo: "2026-10-17-sab-2300-manana-mama-no-cocina.jpg", diseño: filas({
    titulo: "MAÑANA MAMÁ NO COCINA", filas: promosMama }) },

  { archivo: "2026-10-18-dom-2000-hoy-mama-no-cocina.jpg", diseño: foto({
    titulo: ["HOY MAMÁ", "NO COCINA"], sub: "¡FELIZ DÍA A TODAS LAS MAMÁS!", crop: R.lomoYHamburguesa }) },
  { archivo: "2026-10-18-dom-2300-gracias.jpg", diseño: texto({
    titulo: ["GRACIAS,", "FRÍAS"], subs: ["FELIZ DÍA A TODAS LAS MAMÁS", "MANDANOS TU FOTO Y LA COMPARTIMOS"] }) },
];
