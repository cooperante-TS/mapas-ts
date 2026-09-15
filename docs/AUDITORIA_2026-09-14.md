# Auditoría de cierre de Mapas TS — 15/09/2026

## Resultado

Estado: **OPERATIVO Y TRANSFERIBLE**.

Producción: https://mapas-ts.pages.dev/

Repositorio: `cooperante-TS/mapas-ts`.

## Integridad de la referencia canónica

El paquete de origen `ts-mapas-vercel` fue recuperado y utilizado como referencia visual y funcional.

- geometría mundial completa restaurada;
- cinco GeoJSON ADM1 restaurados para Nicaragua, Guatemala, Burkina Faso, Senegal y El Salvador;
- iconos ODS conservados;
- portada, globo y mapas territoriales restaurados;
- `.vercel` personal excluido;
- copias de recuperación archivadas en Drive institucional.

El usuario confirmó visualmente la producción institucional el 15/09/2026.

## Simplificación realizada en la auditoría final

Durante la revisión de mantenimiento se detectó un helper temporal `assets/geojson-source.js` que interceptaba `fetch` para intentar cargar primero geometrías desde GitHub externo y usar las copias locales como fallback.

Como las geometrías canónicas completas ya están almacenadas en el propio repositorio, ese mecanismo añadía una dependencia innecesaria y podía dificultar el mantenimiento.

Se ha eliminado:

- la referencia al helper en `globo/index.html`;
- la referencia al helper en `paises/index.html`;
- el archivo `assets/geojson-source.js`;
- el workflow de restauración de una sola vez que descargaba los GeoJSON.

Desde ahora las geometrías TS se sirven directamente desde los archivos locales del repositorio institucional.

## Dependencias externas que permanecen

- Globe.gl desde CDN.
- Leaflet desde CDN.
- recursos/texturas externas que use el globo.

Son dependencias visibles y no contienen secretos. Si en el futuro se quiere funcionamiento completamente autocontenido, pueden versionarse localmente, pero no es necesario para el funcionamiento actual.

## Mantenimiento recomendado

No hay mantenimiento diario.

Después de cualquier modificación comprobar:

- portada;
- `/globo/`;
- `/paises/`;
- regiones afectadas;
- iconos ODS;
- móvil y ordenador.

Para cambios ordinarios usar `docs/MANUAL_GESTION.md`.

## Qué no hacer

- no sustituir GeoJSON por versiones simplificadas sin comparación;
- no borrar datos geográficos para reducir tamaño;
- no volver a introducir metadatos personales de Vercel;
- no editar producción directamente en Cloudflare;
- no introducir secretos en código.

## Recuperación

GitHub institucional es la fuente de verdad del código. Google Drive institucional conserva la referencia canónica restaurada y los backups.

Si una modificación rompe producción, restaurar el último commit estable en GitHub y dejar que Cloudflare Pages despliegue de nuevo `main`.
