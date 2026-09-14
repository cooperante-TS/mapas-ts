# Arquitectura

Mapas TS es un sitio HTML/CSS/JavaScript estático.

## Globo

`globo/index.html` carga Globe.gl y `globo/assets/globo.js`.
`globo/assets/globo.js` consume `globo/data/countries.geo.json` y resalta los países configurados por Treball Solidari.

## Mapas territoriales

`paises/index.html` carga Leaflet y `paises/assets/mapa-pais.js`.

El parámetro `?pais=` selecciona una de estas configuraciones:

- nicaragua
- guatemala
- burkina-faso
- senegal
- el-salvador

Cada configuración apunta a un GeoJSON local dentro de `paises/data/`.

## Datos incluidos

- Mundo: 180 features.
- Burkina Faso: 13 regiones.
- Guatemala: 22.
- Senegal: 14.
- Nicaragua: 17.
- El Salvador: 14.

## Dependencias externas

La lógica y los datos TS son locales. Globe.gl, Leaflet y dos texturas del globo se cargan actualmente desde unpkg. Si se requiere funcionamiento totalmente autocontenido, deben versionarse localmente esas dependencias y actualizar las rutas.
