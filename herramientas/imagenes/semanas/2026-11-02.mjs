// Imágenes de publicaciones/semana-02-al-08-noviembre.md
import { R } from "../recortes.mjs";
import { foto, texto, filas } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-02-lun-2000-lomo-gold.jpg", diseño: foto({
    titulo: ["DATE EL", "GUSTO"], sub: "LOMO GOLD: PANCETA · CHEDDAR · CEBOLLA MORADA", crop: R.lomo, precio: "$14.000", chico: "CON PAPAS" }) },
  { archivo: "2026-11-02-lun-2300-pizza-roquefort.jpg", diseño: foto({
    titulo: ["SABOR", "DE VERDAD"], sub: "PIZZA ROQUEFORT", crop: R.pizzaRoquefort, precio: "$12.000" }) },

  { archivo: "2026-11-03-mar-2000-fugazza-doble.jpg", diseño: foto({
    titulo: ["MARTES", "RESUELTO"], sub: "FUGAZZA DOBLE: CHEDDAR Y CEBOLLA CARAMELIZADA", crop: R.burgerLocal, precio: "$11.000", chico: "CON PAPAS" }) },
  { archivo: "2026-11-03-mar-2300-muzza-con-huevo.jpg", diseño: texto({
    titulo: ["UN CLÁSICO", "QUE NO FALLA"], subs: ["PIZZA MUZZA CON HUEVO", "RECIÉN SALIDA DEL HORNO"], precio: "$11.000", fondo: R.pizzaRoquefort }) },

  { archivo: "2026-11-04-mie-2000-milanesa-completa.jpg", diseño: texto({
    titulo: ["MILANESA", "CON TODO"], subs: ["LECHUGA · TOMATE · HUEVO · JAMÓN · QUESO", "MAYONESA CASERA · CON PAPAS"], precio: "$13.000" }) },
  { archivo: "2026-11-04-mie-2300-lomo-fugazza.jpg", diseño: texto({
    titulo: ["¿HACE FALTA", "DECIR MÁS?"], subs: ["LOMO FUGAZZA", "CHEDDAR Y CEBOLLA CARAMELIZADA · CON PAPAS"], precio: "$14.000", fondo: R.lomoYPancho }) },

  { archivo: "2026-11-05-jue-2000-combo.jpg", diseño: foto({
    titulo: ["JUEVES", "DE COMBO"], sub: "HAMBURGUESA + PAPAS + GASEOSA", crop: R.combo, precio: "$10.000" }) },
  { archivo: "2026-11-05-jue-2300-pizza-argentina.jpg", diseño: texto({
    titulo: ["HOY ES", "EL DÍA"], subs: ["PIZZA ARGENTINA", "PAPAS FRITAS · HUEVO · JAMÓN · MUZZARELLA"], precio: "$13.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-11-06-vie-2000-2-lomos.jpg", diseño: foto({
    titulo: ["VIERNES", "DE AMIGOS"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },
  { archivo: "2026-11-06-vie-2300-elegi-la-tuya.jpg", diseño: filas({
    titulo: "ELEGÍ LA TUYA", filas: [
      { crop: R.dosPizzas, nombre: "2 PIZZAS A ELECCIÓN", monto: "$21.000" },
      { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
      { crop: R.pancho, nombre: "PANCHO + LATA", monto: "$5.000" },
    ] }) },

  { archivo: "2026-11-07-sab-2000-2-pizzas.jpg", diseño: foto({
    titulo: ["NADIE", "COCINA"], sub: "SÁBADO EN FAMILIA: 2 PIZZAS A ELECCIÓN", crop: R.dosPizzas, precio: "$21.000", chico: "2 PIZZAS" }) },
  { archivo: "2026-11-07-sab-2300-hamburguesa-gold.jpg", diseño: foto({
    titulo: ["ALGO", "DE ORO"], sub: "HAMBURGUESA GOLD: DOBLE MEDALLÓN · PANCETA", crop: R.hamburguesa, precio: "$12.000", chico: "CON PAPAS" }) },

  { archivo: "2026-11-08-dom-2000-burger-roquefort.jpg", diseño: foto({
    titulo: ["DOMINGO", "TRANQUI"], sub: "BURGER ROQUEFORT CON PAPAS", crop: R.burgerRoquefort, precio: "$12.000" }) },
  { archivo: "2026-11-08-dom-2300-dia-de-la-tradicion.jpg", diseño: texto({
    titulo: ["DÍA DE LA", "TRADICIÓN 🇦🇷"], subs: ["MARTES 10", "MILANESA CRIOLLA CON PAPAS"], precio: "$13.000" }) },
];
