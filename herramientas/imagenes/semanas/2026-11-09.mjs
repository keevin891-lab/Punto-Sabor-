// Imágenes de publicaciones/semana-09-al-15-noviembre.md
import { R } from "../recortes.mjs";
import { foto, texto, filas } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-09-lun-2000-lomo-roquefort.jpg", diseño: foto({
    titulo: ["LUNES", "INTENSO"], sub: "LOMO ROQUEFORT CON PAPAS", crop: R.lomoRoquefort, precio: "$14.000" }) },
  { archivo: "2026-11-09-lun-2300-pancho-lata.jpg", diseño: foto({
    titulo: ["ANTOJO", "DE LUNES"], sub: "SÚPER PANCHO + LATA BIEN FRÍA", crop: R.pancho, precio: "$5.000", chico: "PANCHO + LATA" }) },

  { archivo: "2026-11-10-mar-2000-milanesa-criolla-tradicion.jpg", diseño: texto({
    titulo: ["DÍA DE LA", "TRADICIÓN 🇦🇷"], subs: ["MILANESA CRIOLLA", "JAMÓN · QUESO · HUEVO · SALSA CRIOLLA · CON PAPAS"], precio: "$13.000" }) },
  { archivo: "2026-11-10-mar-2300-napolitana.jpg", diseño: texto({
    titulo: ["TRADICIÓN", "DE PIZZERÍA"], subs: ["PIZZA NAPOLITANA", "RECIÉN HORNEADA"], precio: "$11.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-11-11-mie-2000-tradicional-doble.jpg", diseño: foto({
    titulo: ["DOBLE", "O NADA"], sub: "HAMBURGUESA TRADICIONAL DOBLE CON PAPAS", crop: R.hamburguesa, precio: "$10.000" }) },
  { archivo: "2026-11-11-mie-2300-calabresa.jpg", diseño: foto({
    titulo: ["MIÉRCOLES", "PICANTE"], sub: "PIZZA CALABRESA", crop: R.pizzaCalabresa, precio: "$12.000" }) },

  { archivo: "2026-11-12-jue-2000-tostado-lata.jpg", diseño: foto({
    titulo: ["ALGO", "RÁPIDO"], sub: "TOSTADO DE JAMÓN Y QUESO + LATA", crop: R.tostado, precio: "$6.500", chico: "TOSTADO + LATA" }) },
  { archivo: "2026-11-12-jue-2300-fugazzeta.jpg", diseño: texto({
    titulo: ["CERO", "CULPA"], subs: ["PIZZA FUGAZZETA", "CEBOLLA Y MUCHA MUZZARELLA"], precio: "$11.000", fondo: R.pizzaRoquefort }) },

  { archivo: "2026-11-13-vie-2000-viernes-13.jpg", diseño: foto({
    titulo: ["¿VIERNES", "13?"], sub: "LA ÚNICA MALA SUERTE: QUEDARTE SIN CENAR", crop: R.dosHamburguesas, precio: "$15.000", chico: "2 HAMBURGUESAS + PAPAS" }) },
  { archivo: "2026-11-13-vie-2300-2-lomos.jpg", diseño: foto({
    titulo: ["NOCHE", "CON SUERTE 🍀"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },

  { archivo: "2026-11-14-sab-2000-sabado-de-juntada.jpg", diseño: filas({
    titulo: "SÁBADO DE JUNTADA", filas: [
      { crop: R.dosPizzas, nombre: "2 PIZZAS A ELECCIÓN", monto: "$21.000" },
      { crop: R.dosLomos, nombre: "2 LOMOS", monto: "$22.000" },
      { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
    ] }) },
  { archivo: "2026-11-14-sab-2300-hamburguesa-gold.jpg", diseño: foto({
    titulo: ["SE MERECE", "UNA GOLD"], sub: "DOBLE MEDALLÓN · CHEDDAR · PANCETA", crop: R.burgerLocal, precio: "$12.000", chico: "CON PAPAS" }) },

  { archivo: "2026-11-15-dom-2000-muzza.jpg", diseño: texto({
    titulo: ["NADIE", "COCINA"], subs: ["PIZZA MUZZA", "CON HUEVO: $11.000"], precio: "$10.500", fondo: R.pizzaRoquefort }) },
  { archivo: "2026-11-15-dom-2300-cono-de-papas.jpg", diseño: texto({
    titulo: ["PARA", "PICAR"], subs: ["CONO DE PAPAS FRITAS", "TOPPINGS A ELECCIÓN"], precio: "$3.500", fondo: R.conoPapas }) },
];
