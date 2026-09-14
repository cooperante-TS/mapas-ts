# Mapas TS

Repositorio institucional de Treball Solidari para los mapas territoriales y el globo de cooperación.

La copia canónica institucional fue recuperada y verificada el 14/09/2026: 46/46 archivos originales coincidían con el manifiesto SHA-256. La aplicación es estática y no requiere backend, secretos ni variables de entorno.

## Estructura funcional
- `/`: portada.
- `/globo/`: globo mundial.
- `/paises/?pais=...`: mapas territoriales.
- `paises/data/`: GeoJSON locales de los territorios.
- `globo/assets/ods/` y `paises/assets/ods/`: iconos ODS.
- `docs/`: documentación de arquitectura, despliegue y mantenimiento.

## Destino institucional
El repositorio GitHub de Treball Solidari debe ser la fuente de verdad. El destino de producción previsto es Cloudflare Pages bajo control institucional.

Durante el traspaso no debe retirarse el despliegue anterior hasta validar rutas, mapas, GeoJSON, iconos y navegación en el nuevo hosting.
