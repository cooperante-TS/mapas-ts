# Mapas TS

Repositorio institucional de Treball Solidari para el globo mundial y los mapas territoriales de cooperación.

## Producción institucional

- Web: https://mapas-ts.pages.dev/
- Hosting: Cloudflare Pages
- Repositorio: `cooperante-TS/mapas-ts`
- Rama de producción: `main`
- Tipo: sitio estático

La referencia canónica fue restaurada y validada el 15/09/2026. La aplicación no necesita backend, secretos ni variables de entorno.

## Rutas principales

- `/`: portada.
- `/globo/`: globo mundial.
- `/paises/?pais=...`: mapas territoriales.
- `paises/data/`: GeoJSON territoriales.
- `globo/data/`: geometría mundial.
- `globo/assets/ods/` y `paises/assets/ods/`: iconos ODS.
- `docs/`: documentación de arquitectura, despliegue y mantenimiento.
- `manual.html`: manual sencillo para el equipo de TS.

## Para una persona no técnica

Mapas TS no necesita mantenimiento diario. Si todo se ve bien, no hay que tocar nada.

Para cambiar un texto, una región, un ODS o una ficha, es preferible pedir el cambio a ChatGPT/Codex sobre el repositorio institucional en vez de editar archivos a mano.

Prompt recomendado:

> Trabaja sobre `cooperante-TS/mapas-ts`. Lee `README.md`, `AGENTS.md` y `docs/` antes de modificar nada. Quiero este cambio: [DESCRIBIR]. Mantén el aspecto actual, las rutas `/globo/` y `/paises/`, los GeoJSON canónicos y el comportamiento móvil. Haz el cambio de forma reversible y comprueba la web antes de terminar.

## Qué no tocar sin necesidad

- No sustituir GeoJSON por versiones simplificadas o descargadas al azar.
- No volver a introducir la carpeta `.vercel` personal.
- No cambiar rutas públicas.
- No añadir secretos o claves.
- No editar producción manualmente.

## Publicación

Cloudflare Pages está conectado a GitHub. Los cambios aceptados en `main` se despliegan automáticamente.

Después de un cambio hay que comprobar:

- portada;
- `/globo/`;
- `/paises/`;
- regiones y fichas;
- iconos ODS;
- móvil y ordenador.

## Recuperación

GitHub institucional es la fuente de verdad del código. Google Drive institucional conserva la referencia canónica restaurada y copias de seguridad. Si una modificación rompe la web, restaurar el último commit estable en GitHub y dejar que Cloudflare vuelva a desplegarlo.
