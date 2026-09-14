# Manual de gestión

## Cambio sencillo con ChatGPT/Codex

Prompt recomendado:

> Lee `AGENTS.md`, `README.md` y `docs/` antes de modificar. Quiero cambiar [descripción exacta]. Mantén el sitio estático, no añadas secretos y no modifiques GeoJSON salvo que sea necesario. Trabaja en una rama, revisa rutas y JavaScript y deja una Pull Request con instrucciones de prueba.

## Cambiar contenido de un territorio

La mayoría de textos territoriales están en `paises/assets/mapa-pais.js`.

Indica:
- país;
- región;
- texto antiguo;
- texto nuevo;
- ODS que deben aparecer, si cambian.

Después comprobar visualmente el mapa del país.

## Añadir un territorio

Antes de editar:
1. comprobar el nombre exacto de la región dentro del GeoJSON;
2. añadir la región en `zonas`;
3. definir título, subtítulo, resumen, líneas y ODS;
4. probar que se pinta y que abre su ficha.

## Cambiar información global

Los países y fichas globales están en `globo/assets/globo.js`.

## Publicación

Nunca editar producción manualmente. Usar:
rama → Pull Request → preview → revisión → merge → producción.

## Recuperación

Si una versión falla:
1. volver al último commit estable;
2. revisar rutas de GeoJSON y assets;
3. comprobar la consola del navegador;
4. verificar disponibilidad de los CDN externos;
5. restaurar el commit anterior si no se identifica rápidamente el problema.
