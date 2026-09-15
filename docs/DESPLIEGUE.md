# Despliegue institucional

## Producción vigente

- URL: https://mapas-ts.pages.dev/
- Hosting: Cloudflare Pages
- Repositorio: `cooperante-TS/mapas-ts`
- Rama de producción: `main`

El proyecto es estático y no necesita build, backend, secretos ni variables de entorno.

## Configuración Cloudflare Pages

- Framework preset: None / Static HTML.
- Build command: vacío o `exit 0` según configuración del proyecto.
- Output directory: raíz del repositorio (`.`).
- Rama: `main`.

Cloudflare despliega automáticamente cuando cambia `main`.

## Comprobación después de un cambio

Abrir:

- `/`
- `/globo/`
- `/paises/?pais=nicaragua`
- `/paises/?pais=guatemala`
- `/paises/?pais=burkina-faso`
- `/paises/?pais=senegal`
- `/paises/?pais=el-salvador`
- `/manual.html`

Comprobar también móvil y ordenador.

## Si el despliegue sale mal

No editar archivos directamente en Cloudflare.

1. Restaurar en GitHub el último commit estable.
2. Esperar al despliegue automático.
3. Volver a comprobar portada, globo y mapas.

La referencia canónica y copias de seguridad están archivadas en Google Drive institucional.
