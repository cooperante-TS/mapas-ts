# AGENTS.md — Mapas TS

Este repositorio pertenece a Treball Solidari.

Antes de modificar:
1. Lee `README.md`.
2. Lee `docs/ARQUITECTURA.md`, `docs/MANUAL_GESTION.md` y `docs/DESPLIEGUE.md`.
3. Mantén el proyecto estático salvo que exista una razón institucional explícita para añadir backend.
4. No añadas contraseñas, tokens, claves ni información reservada.
5. Trabaja en una rama/Pull Request y revisa una preview antes de publicar.

## Áreas sensibles

- `globo/assets/globo.js`: países destacados, contenido y comportamiento del globo.
- `globo/data/countries.geo.json`: geometría mundial.
- `paises/assets/mapa-pais.js`: configuración territorial, textos, ODS y selección de regiones.
- `paises/data/*.geojson`: límites administrativos.
- `index.html`: portada y códigos iframe para WordPress.

## Reglas

- No sustituir fuentes geográficas sin documentar procedencia y compatibilidad de nombres.
- No cambiar claves de regiones a ciegas: deben coincidir con los atributos reales de los GeoJSON.
- Mantener responsive y funcionamiento táctil.
- No depender de rutas locales de Windows ni de cuentas personales.
- Cualquier dominio escrito en el código debe ser institucional o derivarse de `window.location.origin`.
