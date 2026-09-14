# Despliegue institucional

## Cloudflare Pages

Este proyecto no necesita build.

Configuración recomendada:
- framework preset: None / Static HTML;
- build command: vacío;
- output directory: raíz del repositorio.

La cuenta Cloudflare y el repositorio GitHub deben pertenecer a Treball Solidari.

## Validación

Comprobar:
- `/`
- `/globo/`
- `/paises/?pais=nicaragua`
- `/paises/?pais=guatemala`
- `/paises/?pais=burkina-faso`
- `/paises/?pais=senegal`
- `/paises/?pais=el-salvador`
- `/manual.html`

Después, verificar los iframes generados en la portada y actualizar los embeds de WordPress únicamente cuando el dominio institucional sea definitivo.
