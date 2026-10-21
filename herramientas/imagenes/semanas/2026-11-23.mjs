// Imágenes de publicaciones/semana-23-al-29-noviembre-black-friday.md
import { R } from "../recortes.mjs";
import { foto, texto, filas } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-11-23-lun-2000-lomo-tradicional.jpg", diseño: foto({
    titulo: ["FERIADO Y", "ABIERTOS"], sub: "LOMO TRADICIONAL CON PAPAS", crop: R.lomo, precio: "$13.000", chico: "TRADICIONAL" }) },
  { archivo: "2026-11-23-lun-2300-faltan-4-black-friday.jpg", diseño: texto({
    numero: "4", titulo: ["DÍAS PARA EL", "BLACK FRIDAY 🖤"], subs: ["VIERNES 27 · TODAS LAS PROMOS JUNTAS"] }) },

  { archivo: "2026-11-24-mar-2000-milanesa-completa.jpg", diseño: texto({
    titulo: ["CON", "TODO"], subs: ["MILANESA COMPLETA", "LECHUGA · TOMATE · HUEVO · JAMÓN · QUESO · CON PAPAS"], precio: "$13.000" }) },
  { archivo: "2026-11-24-mar-2300-calabresa.jpg", diseño: foto({
    titulo: ["CON", "CARÁCTER 🌶️"], sub: "PIZZA CALABRESA", crop: R.pizzaCalabresa, precio: "$12.000" }) },

  { archivo: "2026-11-25-mie-2000-tradicional.jpg", diseño: foto({
    titulo: ["FIN", "DE MES"], sub: "HAMBURGUESA TRADICIONAL CON PAPAS", crop: R.hamburguesa, precio: "$8.000", chico: "TRADICIONAL" }) },
  { archivo: "2026-11-25-mie-2300-faltan-2-black-friday.jpg", diseño: texto({
    numero: "2", titulo: ["DÍAS PARA EL", "BLACK FRIDAY 🖤"], subs: ["TODAS LAS PROMOS EN UN SOLO LUGAR"] }) },

  { archivo: "2026-11-26-jue-2000-tostado-lata.jpg", diseño: foto({
    titulo: ["ALGO", "RÁPIDO"], sub: "TOSTADO DE JAMÓN Y QUESO + LATA", crop: R.tostado, precio: "$6.500", chico: "TOSTADO + LATA" }) },
  { archivo: "2026-11-26-jue-2300-manana-black-friday.jpg", diseño: texto({
    titulo: ["MAÑANA", "BLACK FRIDAY 🖤"], subs: ["TODAS NUESTRAS PROMOS JUNTAS", "ACTIVÁ LAS NOTIFICACIONES"] }) },

  { archivo: "2026-11-27-vie-2000-black-friday-para-compartir.jpg", diseño: filas({
    titulo: "BLACK FRIDAY 🖤", filas: [
      { crop: R.dosLomos, nombre: "2 LOMOS CON PAPAS", monto: "$22.000" },
      { crop: R.dosPizzas, nombre: "2 PIZZAS A ELECCIÓN", monto: "$21.000" },
      { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
    ] }) },
  { archivo: "2026-11-27-vie-2300-black-friday-para-uno.jpg", diseño: filas({
    titulo: "BLACK FRIDAY · NOCHE", filas: [
      { crop: R.combo, nombre: "HAMBURGUESA + PAPAS + GASEOSA", monto: "$10.000" },
      { crop: R.pancho, nombre: "PANCHO + LATA", monto: "$5.000" },
      { crop: R.tostado, nombre: "TOSTADO + LATA", monto: "$6.500" },
    ] }) },

  { archivo: "2026-11-28-sab-2000-2-lomos.jpg", diseño: foto({
    titulo: ["SÁBADO DE", "JUNTADA"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },
  { archivo: "2026-11-28-sab-2300-hamburguesa-gold.jpg", diseño: foto({
    titulo: ["CERRALO CON", "UNA GOLD 🏆"], sub: "DOBLE MEDALLÓN · CHEDDAR · PANCETA", crop: R.burgerLocal, precio: "$12.000", chico: "CON PAPAS" }) },

  { archivo: "2026-11-29-dom-2000-muzza-con-huevo.jpg", diseño: texto({
    titulo: ["DOMINGO", "TRANQUI"], subs: ["PIZZA MUZZA CON HUEVO", "Y NADIE LAVA PLATOS"], precio: "$11.000", fondo: R.pizzaRoquefort }) },
  { archivo: "2026-11-29-dom-2300-despedidas.jpg", diseño: texto({
    titulo: ["¿DESPEDIDA", "DE AÑO? 🎉"], subs: ["TE ARMAMOS EL PEDIDO PARA TODOS", "TRABAJO · CURSO · AMIGOS"], fondo: R.mesaCompleta }) },
];
