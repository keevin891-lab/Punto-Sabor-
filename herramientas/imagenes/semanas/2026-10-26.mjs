// Imágenes de publicaciones/semana-26-oct-al-01-nov-halloween.md
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-10-26-lun-2000-fin-de-mes-pancho.jpg", diseño: foto({
    titulo: ["FIN DE MES", "PANZA LLENA"], sub: "SÚPER PANCHO + LATA BIEN FRÍA", crop: R.pancho, precio: "$5.000", chico: "PANCHO + LATA" }) },
  { archivo: "2026-10-26-lun-2300-faltan-5-halloween.jpg", diseño: texto({
    numero: "5", titulo: ["DÍAS PARA", "HALLOWEEN 🎃"], subs: ["SÁBADO 31 · ABIERTOS HASTA LAS 3 AM"] }) },

  { archivo: "2026-10-27-mar-2000-tostado-lata.jpg", diseño: foto({
    titulo: ["SIMPLE", "Y RICO"], sub: "TOSTADO DE JAMÓN Y QUESO + LATA", crop: R.tostado, precio: "$6.500", chico: "TOSTADO + LATA" }) },
  { archivo: "2026-10-27-mar-2300-pizza-especial.jpg", diseño: texto({
    titulo: ["SOLO", "HAMBRE"], subs: ["PIZZA ESPECIAL", "CON HUEVO: $11.500"], precio: "$11.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-10-28-mie-2000-lomo-tradicional.jpg", diseño: foto({
    titulo: ["EL QUE", "NUNCA FALLA"], sub: "LOMO TRADICIONAL CON PAPAS", crop: R.lomo, precio: "$13.000", chico: "TRADICIONAL" }) },
  { archivo: "2026-10-28-mie-2300-faltan-3-halloween.jpg", diseño: texto({
    numero: "3", titulo: ["DÍAS PARA", "HALLOWEEN 🎃"], subs: ["¿DISFRAZ LISTO? LA COMIDA, POR NUESTRA CUENTA"] }) },

  { archivo: "2026-10-29-jue-2000-milanesa-criolla.jpg", diseño: texto({
    titulo: ["MILANESA", "CRIOLLA"], subs: ["JAMÓN · QUESO · HUEVO · SALSA CRIOLLA", "CON PORCIÓN DE PAPAS"], precio: "$13.000" }) },
  { archivo: "2026-10-29-jue-2300-pancho-y-cono.jpg", diseño: texto({
    titulo: ["BAJÓN", "RESUELTO"], subs: ["SÚPER PANCHO + CONO DE PAPAS", "$3.500 + $3.500 · TOPPINGS A ELECCIÓN"], precio: "$7.000", fondo: R.conoPapas }) },

  { archivo: "2026-10-30-vie-2000-previa-halloween.jpg", diseño: foto({
    titulo: ["PREVIA DE", "HALLOWEEN 🎃"], sub: "2 PIZZAS A ELECCIÓN PARA LA BANDA", crop: R.dosPizzas, precio: "$21.000", chico: "2 PIZZAS" }) },
  { archivo: "2026-10-30-vie-2300-manana-halloween.jpg", diseño: foto({
    titulo: ["MAÑANA ES", "HALLOWEEN"], sub: "EL ÚNICO SUSTO: QUEDARTE CON HAMBRE", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },

  { archivo: "2026-10-31-sab-2000-truco-o-trato.jpg", diseño: foto({
    titulo: ["¿TRUCO", "O TRATO?"], sub: "TRATO: 2 HAMBURGUESAS + PORCIÓN DE PAPAS", crop: R.dosHamburguesas, precio: "$15.000" }) },
  { archivo: "2026-10-31-sab-2300-noche-de-bajon.jpg", diseño: texto({
    titulo: ["NOCHE DE BRUJAS,", "NOCHE DE BAJÓN"], subs: ["PIZZA BAJONERA", "HOY HASTA LAS 3 AM"], precio: "$14.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-11-01-dom-2000-lomo-de-la-casa.jpg", diseño: foto({
    titulo: ["DATE EL", "GUSTO"], sub: "LOMO DE LA CASA: PIMIENTOS · PANCETA · CHEDDAR", crop: R.lomo, precio: "$15.000", chico: "CON PAPAS" }) },
  { archivo: "2026-11-01-dom-2300-tradicional-doble.jpg", diseño: foto({
    titulo: ["DOBLE PARA", "CERRAR"], sub: "HAMBURGUESA TRADICIONAL DOBLE CON PAPAS", crop: R.burgerLocal, precio: "$10.000" }) },
];
