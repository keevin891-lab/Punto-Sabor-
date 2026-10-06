// Imágenes del anuncio pago (anuncios/anuncio-meta-punto-sabor.md)
import { R } from "../recortes.mjs";
import { foto, filas } from "../diseños.mjs";

export const posts = [
  { archivo: "anuncio-a-hambre-en-frias.jpg", diseño: foto({
    titulo: ["¿HAMBRE", "EN FRÍAS?"], sub: "HAMBURGUESAS · LOMOS · PIZZAS · MILANESAS", crop: R.mesaCompleta,
    precio: "HASTA LAS 3 AM", chico: "TODOS LOS DÍAS · DELIVERY Y RETIRO", precioSize: 76 }) },
  { archivo: "anuncio-b-promos.jpg", diseño: filas({
    titulo: "PROMOS PARA COMPARTIR", filas: [
      { crop: R.dosLomos, nombre: "2 LOMOS CON PAPAS", monto: "$22.000" },
      { crop: R.dosPizzas, nombre: "2 PIZZAS A ELECCIÓN", monto: "$21.000" },
      { crop: R.dosHamburguesas, nombre: "2 HAMBURGUESAS + PAPAS", monto: "$15.000" },
    ] }) },
  { archivo: "anuncio-c-al-paso.jpg", diseño: foto({
    titulo: ["AL PASO, FRENTE", "A LA PLAZA"], sub: "MITRE 146 · FRÍAS · PEDÍ POR WHATSAPP", crop: R.local,
    precio: "HASTA LAS 3 AM", chico: "TODOS LOS DÍAS", precioSize: 76 }) },
  { archivo: "anuncio-d-local-original.png", copiar: "local-al-paso.png" },
];
