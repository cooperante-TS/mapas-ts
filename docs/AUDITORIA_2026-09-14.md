# Auditoría de traspaso — 14/09/2026

## Integridad

Paquete de origen recuperado desde `E:\ts-mapas-vercel`.

- 46 archivos originales.
- 1,87 MB.
- Manifiesto SHA-256 original verificado: 46/46 coincidencias.
- `globo/data/countries.geo.json`: válido, 180 features.
- Los cinco GeoJSON territoriales: válidos.
- JavaScript activo `globo.js`: sintaxis válida.
- JavaScript activo `mapa-pais.js`: sintaxis válida.
- Referencias locales HTML: sin rutas rotas detectadas.

## Hallazgos

1. `.vercel/project.json` vinculaba la copia local a un proyecto personal de Vercel; se excluye de la versión institucional.
2. La portada conserva un placeholder Vercel para el modo de archivo local. En producción servida, los códigos iframe se generan con `window.location.origin`, por lo que el dominio real del hosting se usa automáticamente.
3. El sitio depende de CDN externos para Globe.gl, Leaflet y texturas del globo.
4. Había ficheros históricos `backup`; se han separado en `_archivo_pretraspaso/`.
5. No se han encontrado secretos, tokens o variables de entorno en el código auditado.

## Vercel

La copia local identifica el proyecto histórico `mapas-ts`, pero la conexión Vercel disponible en ChatGPT devuelve 403 al intentar acceder al proyecto. La versión institucional no dependerá de esa conexión.
