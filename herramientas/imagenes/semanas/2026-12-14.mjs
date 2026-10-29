// Imágenes de publicaciones/semana-14-al-20-diciembre.md
import { R } from "../recortes.mjs";
import { foto, texto, filas, doble } from "../diseños.mjs";

export const posts = [
  { archivo: "2026-12-14-lun-2000-hamburguesa-gold.jpg", diseño: foto({
    titulo: ["SEMANA", "DE ORO 🏆"], sub: "HAMBURGUESA GOLD: DOBLE MEDALLÓN · PANCETA", crop: R.burgerLocal, precio: "$12.000", chico: "CON PAPAS" }) },
  { archivo: "2026-12-14-lun-2300-pizza-roquefort.jpg", diseño: foto({
    titulo: ["LUNES", "INTENSO"], sub: "PIZZA ROQUEFORT", crop: R.pizzaRoquefort, precio: "$12.000" }) },

  { archivo: "2026-12-15-mar-2000-milanesa-completa.jpg", diseño: texto({
    titulo: ["MARTES DE", "CLÁSICOS"], subs: ["MILANESA COMPLETA", "LECHUGA · TOMATE · HUEVO · JAMÓN · QUESO · CON PAPAS"], precio: "$13.000" }) },
  { archivo: "2026-12-15-mar-2300-muzza-con-huevo.jpg", diseño: texto({
    titulo: ["SIN", "VUELTAS"], subs: ["PIZZA MUZZA CON HUEVO", "SIMPLE Y RICA"], precio: "$11.000", fondo: R.pizzaRoquefort }) },

  { archivo: "2026-12-16-mie-2000-lomo-gold.jpg", diseño: foto({
    titulo: ["LOMO", "DE ORO 🏆"], sub: "LOMO GOLD: PANCETA · CHEDDAR · CEBOLLA MORADA", crop: R.lomo, precio: "$14.000", chico: "CON PAPAS" }) },
  { archivo: "2026-12-16-mie-2300-pizza-argentina.jpg", diseño: texto({
    titulo: ["EL ANTOJO", "MÁS ARGENTO"], subs: ["PIZZA ARGENTINA", "PAPAS FRITAS · HUEVO · JAMÓN · MUZZARELLA"], precio: "$13.000", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-12-17-jue-2000-gold-o-roquefort.jpg", diseño: doble({
    titulo: ["¿GOLD O", "ROQUEFORT?"], izq: { crop: R.dosLomos, nombre: "LOMO GOLD" }, der: { crop: R.lomoRoquefort, nombre: "LOMO ROQUEFORT" },
    precio: "$14.000", chico: "CADA UNO, CON PAPAS" }) },
  { archivo: "2026-12-17-jue-2300-especial-con-huevo.jpg", diseño: texto({
    titulo: ["LA DE", "SIEMPRE"], subs: ["PIZZA ESPECIAL CON HUEVO", "TRASNOCHE DE JUEVES"], precio: "$11.500", fondo: R.pizzaPepperoni }) },

  { archivo: "2026-12-18-vie-2000-se-festeja.jpg", diseño: filas({
    titulo: "AGUINALDO: SE FESTEJA 🎉", filas: [
      { crop: R.dosLomos, nombre: "2 LOMOS", monto: "$22.000" },
      { crop: R.dosPizzas, nombre: "2 PIZZAS A ELECCIÓN", monto: "$21.000" },
      { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
    ] }) },
  { archivo: "2026-12-18-vie-2300-2-hamburguesas.jpg", diseño: foto({
    titulo: ["LA DESPEDIDA", "SIGUE"], sub: "2 HAMBURGUESAS + PORCIÓN DE PAPAS", crop: R.dosHamburguesas, precio: "$15.000" }) },

  { archivo: "2026-12-19-sab-2000-2-lomos.jpg", diseño: foto({
    titulo: ["ÚLTIMO SÁBADO", "ANTES DE NAVIDAD"], sub: "2 LOMOS CON PORCIÓN DE PAPAS", crop: R.dosLomos, precio: "$22.000", chico: "2 LOMOS" }) },
  { archivo: "2026-12-19-sab-2300-fugazzeta.jpg", diseño: texto({
    titulo: ["NO", "FALLA"], subs: ["PIZZA FUGAZZETA", "CEBOLLA Y MUCHA MUZZARELLA"], precio: "$11.000", fondo: R.pizzaRoquefort }) },

  { archivo: "2026-12-20-dom-2000-tostado-lata.jpg", diseño: foto({
    titulo: ["DOMINGO DE", "DESCANSO"], sub: "TOSTADO DE JAMÓN Y QUESO + LATA", crop: R.tostado, precio: "$6.500", chico: "TOSTADO + LATA" }) },
  { archivo: "2026-12-20-dom-2300-se-viene-navidad.jpg", diseño: texto({
    titulo: ["SE VIENE", "NAVIDAD 🎄"], subs: ["PRONTO, LOS HORARIOS DE LAS FIESTAS", "ACTIVÁ LAS NOTIFICACIONES"], fondo: R.local }) },
];
