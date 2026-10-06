# Punto Sabor: publicidad en redes

Contenido para Instagram (@punto.sabor9julio) y Facebook de Punto Sabor, Frías. WhatsApp 385 456-6585.

| Archivo | Para qué sirve |
|---|---|
| `publicaciones/` | Las publicaciones de cada semana (20:00 y 23:00 hs), listas para programar en Meta Business Suite |
| `imagenes/` | Las imágenes de cada publicación (1080×1350), con el día y la hora en el nombre |
| `guia-de-estilo.md` | Cómo generar en ChatGPT imágenes con el estilo de la marca |
| `calendario/` | Fechas importantes para aprovechar |
| `prompts/publicidad-diaria-punto-sabor.md` | Prompt para generar publicaciones nuevas en ChatGPT, con la carta completa |
| `referencias/` | Imágenes originales del local (carta, promos, nuevos sabores) |
| `herramientas/imagenes/` | Generador de las imágenes (ver abajo) |

## Rutina semanal (unos 30 minutos)

1. Abrí la semana en `publicaciones/`.
2. Descargá las imágenes de la semana en `imagenes/` (o generá otras en ChatGPT con `guia-de-estilo.md`).
3. En business.facebook.com → **Planificador**, programá cada publicación en Instagram + Facebook a las 20:00 y a las 23:00.
4. En los grupos de Frías, publicá a mano los textos marcados "Grupos de Frías" (1 o 2 veces por semana en cada grupo).

## Generar imágenes

Las imágenes se arman con recortes de las fotos de `referencias/` y los colores y tipografías de la marca.

```bash
cd herramientas/imagenes && npm install && cd ../..
node herramientas/imagenes/generar.mjs herramientas/imagenes/semanas/2026-10-13.mjs imagenes/semana-13-al-18-octubre
```

Cada semana tiene un archivo en `herramientas/imagenes/semanas/` con los diseños (`foto`, `texto`, `filas`, `doble`, definidos en `diseños.mjs`). Si suman fotos reales de productos a `referencias/`, agregá su recorte en `recortes.mjs`.
