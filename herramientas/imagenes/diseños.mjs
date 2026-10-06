// Diseños reutilizables para las publicaciones. Cada función devuelve el objeto que entiende plantilla.html.
import { R } from "./recortes.mjs";

const lineas = (t, size) => t.map((texto, i) => ({ texto, color: i % 2 ? "amarillo" : "blanco", size }));

// Producto con foto grande: título de 2 líneas, subtítulo en pincel rojo, foto y precio.
export function foto({ titulo, sub, crop, precio, chico, precioSize = 100 }) {
  return {
    logo: R.logo,
    titulo: { top: 238, lineas: lineas(titulo, 112) },
    pinceles: sub ? [{ top: 478, texto: sub, size: 44 }] : [],
    fotos: [{ left: 60, top: 570, width: 960, height: 560, crop }],
    precios: precio ? [{ texto: precio, chico, pos: "right:44px;top:1040px", size: precioSize }] : [],
  };
}

// Texto protagonista sobre foto desenfocada; opcional número gigante de cuenta regresiva.
export function texto({ titulo, subs = [], precio, chico, numero, fondo = R.lomoYHamburguesa }) {
  const conNumero = Boolean(numero);
  const size = conNumero ? 92 : 140;
  const altoTitulo = titulo.length * size * 0.95;
  const gap = conNumero ? 50 : 70;
  // Sin número, centra el bloque (título + pinceles + precio) entre el logo y el pie.
  const altoBloque = altoTitulo + gap + subs.reduce((a, _, i) => a + (i ? 90 : 105), 0) + (precio ? 180 : 0);
  const top = conNumero ? 730 : Math.round(250 + (960 - altoBloque) / 2);
  let y = top + altoTitulo + gap;
  const pinceles = subs.map((s, i) => {
    const p = { top: y, texto: s, size: i ? 38 : 48, amarillo: i > 0 };
    y += i ? 90 : 105;
    return p;
  });
  return {
    logo: R.logo,
    fondo,
    numero: conNumero ? { top: 215, texto: numero } : null,
    titulo: { top, lineas: lineas(titulo, size) },
    pinceles,
    precios: precio ? [{ texto: precio, chico, pos: `left:50%;top:${y + 10}px;translate:-50% 0`, size: 120 }] : [],
  };
}

// Tres promos en filas, cada una con foto, nombre y precio.
export function filas({ titulo, filas }) {
  return {
    logo: R.logo,
    titulo: { top: 248, lineas: [{ texto: titulo, color: "amarillo", size: 92 }] },
    filas: filas.map((f, i) => ({ ...f, top: 400 + i * 268 })),
  };
}

// Dos productos lado a lado para comparar.
export function doble({ titulo, izq, der, precio, chico }) {
  return {
    logo: R.logo,
    titulo: { top: 238, lineas: lineas(titulo, 112) },
    fotos: [
      { left: 50, top: 500, width: 480, height: 560, crop: izq.crop, etiqueta: izq.nombre },
      { left: 550, top: 500, width: 480, height: 560, crop: der.crop, etiqueta: der.nombre },
    ],
    precios: [{ texto: precio, chico, pos: "left:50%;top:1010px;translate:-50% 0", size: 100 }],
  };
}
