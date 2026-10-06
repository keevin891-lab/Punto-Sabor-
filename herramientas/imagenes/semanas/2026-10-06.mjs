// Imágenes de publicaciones/semana-06-al-12-octubre.md
import { R } from "../recortes.mjs";
import { foto, texto } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-10-06-mar-2000-promos.png", copiar: "promos.png" },
  { archivo: "2026-10-06-mar-2300-pancho-lata.jpg", diseño: foto({
    titulo: ["¿HAMBRE", "A LAS 11?"], sub: "SÚPER PANCHO + LATA BIEN FRÍA", crop: R.pancho, precio: "$5.000", chico: "PANCHO + LATA" }) },

  { archivo: "2026-10-07-mie-2000-nuevos-sabores.png", copiar: "nuevos-sabores.png" },
  { archivo: "2026-10-07-mie-2300-pizza-bajonera.jpg", diseño: texto({
    titulo: ["¿TE AGARRÓ", "EL BAJÓN?"], subs: ["PIZZA BAJONERA", "CARNE PICADA · CEBOLLA MORADA · MUZZARELLA"],
    precio: "$14.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-10-08-jue-2000-2-pizzas.jpg", diseño: foto({
    titulo: ["2 PIZZAS", "A ELECCIÓN"], sub: "LA CENA DE LA FAMILIA, RESUELTA", crop: R.dosPizzas, precio: "$21.000", chico: "2 PIZZAS" }) },
  { archivo: "2026-10-08-jue-2300-tostado-lata.jpg", diseño: foto({
    titulo: ["ANTOJO DE", "MEDIANOCHE"], sub: "TOSTADO DE JAMÓN Y QUESO + LATA", crop: R.tostado, precio: "$6.500", chico: "TOSTADO + LATA" }) },

  { archivo: "2026-10-09-vie-2000-2-lomos.jpg", diseño: foto({
    titulo: ["VIERNES", "DE LOMO"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },
  { archivo: "2026-10-09-vie-2300-2-hamburguesas.jpg", diseño: foto({
    titulo: ["PARA LA", "PREVIA"], sub: "2 HAMBURGUESAS + PORCIÓN DE PAPAS", crop: R.dosHamburguesas, precio: "$15.000" }) },

  { archivo: "2026-10-10-sab-2000-lomo-de-la-casa.jpg", diseño: foto({
    titulo: ["LOMO DE", "LA CASA"], sub: "PIMIENTOS · CEBOLLA · PANCETA · CHEDDAR", crop: R.lomo, precio: "$15.000", chico: "CON PAPAS" }) },
  { archivo: "2026-10-10-sab-2300-hamburguesa-gold.jpg", diseño: foto({
    titulo: ["HAMBURGUESA", "GOLD"], sub: "DOBLE MEDALLÓN · CHEDDAR · PANCETA", crop: R.hamburguesa, precio: "$12.000", chico: "CON PAPAS" }) },

  { archivo: "2026-10-11-dom-2000-pizza-argentina.jpg", diseño: texto({
    titulo: ["¿PIZZA CON", "PAPAS FRITAS?"], subs: ["SÍ, EXISTE: PIZZA ARGENTINA", "PAPAS FRITAS · HUEVO · JAMÓN · MUZZARELLA"],
    precio: "$13.000", fondo: R.pizzaPepperoni }) },
  { archivo: "2026-10-11-dom-2300-milanesa-gold.jpg", diseño: texto({
    titulo: ["MAÑANA", "ES FERIADO"], subs: ["MILANESA GOLD CON PAPAS", "CHEDDAR · PANCETA · CEBOLLA MORADA"], precio: "$14.000" }) },

  { archivo: "2026-10-12-lun-2000-este-lunes.png", copiar: "este-lunes.png" },
  { archivo: "2026-10-12-lun-2300-dia-de-la-madre-adelanto.jpg", diseño: texto({
    titulo: ["MAMÁ", "NO COCINA"], subs: ["DOMINGO 18 · DÍA DE LA MADRE", "SE VIENE ALGO…"] }) },
];
