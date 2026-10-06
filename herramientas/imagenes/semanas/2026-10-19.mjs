// Imágenes de publicaciones/semana-19-al-25-octubre.md
import { R } from "../recortes.mjs";
import { foto, texto, filas, doble } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-10-19-lun-2000-tradicional.jpg", diseño: foto({
    titulo: ["LUNES", "SIN VUELTAS"], sub: "HAMBURGUESA TRADICIONAL CON PAPAS", crop: R.hamburguesa, precio: "$8.000", chico: "TRADICIONAL" }) },
  { archivo: "2026-10-19-lun-2300-cono-de-papas.jpg", diseño: texto({
    titulo: ["ANTOJO", "CHIQUITO"], subs: ["CONO DE PAPAS FRITAS", "TOPPINGS A ELECCIÓN"], precio: "$3.500", fondo: R.dosHamburguesas }) },

  { archivo: "2026-10-20-mar-2000-combo.jpg", diseño: foto({
    titulo: ["TODO", "INCLUIDO"], sub: "HAMBURGUESA + PAPAS + GASEOSA", crop: R.combo, precio: "$10.000" }) },
  { archivo: "2026-10-20-mar-2300-fugazzeta.jpg", diseño: texto({
    titulo: ["LA FUGAZZETA", "NO FALLA"], subs: ["CEBOLLA Y MUCHA MUZZARELLA", "RECIÉN SALIDA DEL HORNO"], precio: "$11.000", fondo: R.pizzaRoquefort }) },

  { archivo: "2026-10-21-mie-2000-burger-roquefort.jpg", diseño: foto({
    titulo: ["BURGER", "ROQUEFORT"], sub: "PARA LOS QUE VAN POR SABOR INTENSO", crop: R.burgerRoquefort, precio: "$12.000", chico: "CON PAPAS" }) },
  { archivo: "2026-10-21-mie-2300-napolitana.jpg", diseño: texto({
    titulo: ["MIÉRCOLES", "DE CLÁSICOS"], subs: ["PIZZA NAPOLITANA", "RECIÉN HORNEADA"], precio: "$11.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-10-22-jue-2000-milanesa.jpg", diseño: texto({
    titulo: ["RICO", "Y BARATO"], subs: ["SÁNDWICH DE MILANESA", "CON MAYONESA CASERA"], precio: "$7.000" }) },
  { archivo: "2026-10-22-jue-2300-calabresa.jpg", diseño: foto({
    titulo: ["PIZZA", "CALABRESA"], sub: "PARA LOS QUE QUIEREN ALGO CON CARÁCTER", crop: R.pizzaCalabresa, precio: "$12.000" }) },

  { archivo: "2026-10-23-vie-2000-2-hamburguesas.jpg", diseño: foto({
    titulo: ["VIERNES", "CON AMIGOS"], sub: "2 HAMBURGUESAS + PORCIÓN DE PAPAS", crop: R.dosHamburguesas, precio: "$15.000" }) },
  { archivo: "2026-10-23-vie-2300-2-lomos.jpg", diseño: foto({
    titulo: ["LA NOCHE", "RECIÉN EMPIEZA"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },

  { archivo: "2026-10-24-sab-2000-calabresa-o-roquefort.jpg", diseño: doble({
    titulo: ["¿CALABRESA O", "ROQUEFORT?"], izq: { crop: R.pizzaCalabresa, nombre: "CALABRESA" }, der: { crop: R.pizzaRoquefort, nombre: "ROQUEFORT" },
    precio: "$21.000", chico: "2 PIZZAS A ELECCIÓN" }) },
  { archivo: "2026-10-24-sab-2300-elegi-tu-promo.jpg", diseño: filas({
    titulo: "ELEGÍ TU PROMO", filas: [
      { crop: R.dosLomos, nombre: "2 LOMOS", monto: "$22.000" },
      { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
      { crop: R.pancho, nombre: "PANCHO + LATA", monto: "$5.000" },
    ] }) },

  { archivo: "2026-10-25-dom-2000-muzza.jpg", diseño: texto({
    titulo: ["DOMINGO", "CLÁSICO"], subs: ["PIZZA MUZZA", "CON HUEVO: $11.000"], precio: "$10.500", fondo: R.pizzaRoquefort }) },
  { archivo: "2026-10-25-dom-2300-halloween.jpg", diseño: texto({
    titulo: ["SE VIENE", "HALLOWEEN"], subs: ["SÁBADO 31", "LO ÚNICO QUE DA MIEDO ES QUEDARTE SIN PIZZA"] }) },
];
