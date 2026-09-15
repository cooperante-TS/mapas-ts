# Mapas TS — manual de gestión para personal no técnico

Mapas TS no necesita mantenimiento diario. Si la web funciona y se ve bien, no hay que hacer nada.

## 1. Dónde está la web

Producción institucional:

https://mapas-ts.pages.dev/

Rutas principales:

- portada: `/`
- globo mundial: `/globo/`
- mapas territoriales: `/paises/?pais=...`

## 2. Cambiar un texto o una ficha

No edites archivos a mano si no tienes experiencia técnica.

Usa ChatGPT/Codex con acceso al repositorio institucional y pide el cambio indicando:

- país;
- región;
- texto actual;
- texto nuevo;
- ODS que deben aparecer, si cambian.

Prompt recomendado:

> Trabaja sobre `cooperante-TS/mapas-ts`. Lee `README.md`, `AGENTS.md` y `docs/` antes de modificar. Quiero cambiar [DESCRIPCIÓN]. Mantén las rutas públicas, el aspecto actual, los GeoJSON canónicos y el comportamiento móvil. No simplifiques ni sustituyas geometrías salvo que sea imprescindible. Haz el cambio de forma reversible y comprueba la web antes de terminar.

## 3. Añadir una región o territorio

Esta tarea sí requiere comprobación técnica. Antes de publicar debe verificarse:

1. nombre exacto de la región dentro del GeoJSON;
2. configuración de la región en `paises/assets/mapa-pais.js`;
3. título, resumen y ODS;
4. que la región se colorea correctamente;
5. que la ficha abre y cierra;
6. que no se rompen otras regiones.

## 4. Qué no hacer

- No descargar un GeoJSON nuevo para sustituir el actual sin comparar la geometría.
- No usar una versión simplificada porque pese menos.
- No borrar archivos de `globo/data/` o `paises/data/`.
- No añadir contraseñas o tokens al código.
- No editar producción manualmente en Cloudflare.
- No volver a vincular el proyecto a una cuenta personal.

## 5. Cómo se publica un cambio

La producción sale de la rama `main` del repositorio institucional. Cloudflare Pages despliega automáticamente.

Después de cualquier modificación comprueba:

- https://mapas-ts.pages.dev/
- `/globo/`
- `/paises/`
- las regiones afectadas;
- los iconos ODS;
- móvil y ordenador.

## 6. Si una modificación rompe la web

1. No sigas haciendo cambios al azar.
2. Identifica el último commit que funcionaba.
3. Restaura ese commit en GitHub.
4. Espera al nuevo despliegue automático de Cloudflare.
5. Comprueba de nuevo la portada, globo y mapas.

## 7. Dónde está cada cosa

- Código: `cooperante-TS/mapas-ts`.
- Globo: `globo/assets/globo.js`.
- Mapas de país: `paises/assets/mapa-pais.js`.
- Geometrías: `globo/data/` y `paises/data/`.
- Iconos ODS: carpetas `assets/ods/` correspondientes.
- Copia canónica y backups: carpeta `Mapas TS` dentro de `TRASPASO DIGITAL TS — INSTITUCIONAL` en Google Drive.

## 8. Comprobación mensual recomendada

Una vez al mes, abrir portada, globo y dos mapas de país desde ordenador y móvil. Si todo funciona, no tocar nada.
