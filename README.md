# Punto Sabor: publicidad en redes

Contenido para Instagram (@punto.sabor9julio) y Facebook de Punto Sabor, comidas rápidas al paso en Mitre 146, frente a la plaza 9 de Julio, Frías. WhatsApp 385 456-6585 o 385 444-4487.

| Archivo | Para qué sirve |
|---|---|
| `publicaciones/` | Las publicaciones de cada semana (20:00 y 23:00 hs), listas para programar en Meta Business Suite |
| `imagenes/` | Las imágenes de cada publicación (1080×1350), con el día y la hora en el nombre. En `historias/` están las versiones 9:16 para estados e historias |
| `estados/` | Planes de 7 días de estados (WhatsApp Business, historias de Instagram y Facebook). Sus imágenes están en `imagenes/estados-*` |
| `anuncios/` | Anuncio pago para Facebook e Instagram: imágenes, textos y cómo cargarlo |
| `whatsapp/` | Perfil de WhatsApp Business: descripción, mensajes automáticos y respuestas rápidas |
| `guia-de-estilo.md` | Cómo generar en ChatGPT imágenes con el estilo de la marca |
| `calendario/` | Fechas importantes para aprovechar |
| `prompts/publicidad-diaria-punto-sabor.md` | Prompt para generar publicaciones nuevas en ChatGPT, con la carta completa |
| `prompts/estados-whatsapp-facebook-instagram.md` | Prompt para generar estados e historias en ChatGPT, y cómo publicarlos desde la cuenta del negocio |
| `referencias/` | Imágenes originales del local (carta, promos, nuevos sabores) |
| `herramientas/imagenes/` | Generador de las imágenes (ver abajo) |

## Rutina semanal (unos 30 minutos)

1. Abrí la semana en `publicaciones/`.
2. Descargá las imágenes de la semana en `imagenes/` (o generá otras en ChatGPT con `guia-de-estilo.md`).
3. En business.facebook.com → **Planificador**, programá cada publicación en Instagram + Facebook a las 20:00 y a las 23:00.
4. En Meta Business Suite → **Crear historia**, programá las versiones de `historias/` en Instagram + Facebook a las 20:00 y a las 23:00.
5. Estados de WhatsApp Business: subilos a mano a las 20:00 y a las 23:00 (WhatsApp no permite programarlos).
6. En los grupos de Frías, publicá a mano los textos marcados "Grupos de Frías" (1 o 2 veces por semana en cada grupo).

## Generar imágenes

Las imágenes se arman con recortes de las fotos de `referencias/` y los colores y tipografías de la marca.

```bash
cd herramientas/imagenes && npm install && cd ../..
node herramientas/imagenes/generar.mjs herramientas/imagenes/semanas/2026-10-13.mjs imagenes/semana-13-al-18-octubre
```

Para las versiones 9:16 (estados e historias):

```bash
node herramientas/imagenes/historias.mjs imagenes/semana-13-al-18-octubre imagenes/semana-13-al-18-octubre/historias
```

Cada semana tiene un archivo en `herramientas/imagenes/semanas/` con los diseños (`foto`, `texto`, `filas`, `doble`, definidos en `diseños.mjs`). Si suman fotos reales de productos a `referencias/`, agregá su recorte en `recortes.mjs`.
