const mapElement = document.getElementById("ts-country-map");
const panel = document.getElementById("ts-region-panel");
const panelContent = document.getElementById("ts-region-panel-content");
const panelClose = document.getElementById("ts-panel-close");
const hint = document.getElementById("ts-map-hint");

function mostrarError(mensaje) {
  if (!mapElement) return;

  mapElement.innerHTML = `
    <div class="ts-map-error">
      <strong>No se pudo cargar el mapa.</strong>
      <span>${mensaje}</span>
    </div>
  `;
}

if (!mapElement) {
  console.error("No existe el contenedor #ts-country-map");
} else if (typeof L === "undefined") {
  mostrarError("Leaflet no se ha cargado. Revisa la conexión o el CDN en index.html.");
} else {
  iniciarMapaPais();
}

function iniciarMapaPais() {
  const ODS = {
    1: { numero: "1", texto: "Fin de la pobreza", archivo: "ods-01.png" },
    2: { numero: "2", texto: "Hambre cero", archivo: "ods-02.png" },
    3: { numero: "3", texto: "Salud y bienestar", archivo: "ods-03.png" },
    4: { numero: "4", texto: "Educación de calidad", archivo: "ods-04.png" },
    5: { numero: "5", texto: "Igualdad de género", archivo: "ods-05.png" },
    6: { numero: "6", texto: "Agua limpia y saneamiento", archivo: "ods-06.png" },
    8: { numero: "8", texto: "Trabajo decente y crecimiento económico", archivo: "ods-08.png" },
    9: { numero: "9", texto: "Industria, innovación e infraestructura", archivo: "ods-09.png" },
    10: { numero: "10", texto: "Reducción de las desigualdades", archivo: "ods-10.png" },
    11: { numero: "11", texto: "Ciudades y comunidades sostenibles", archivo: "ods-11.png" },
    13: { numero: "13", texto: "Acción por el clima", archivo: "ods-13.png" },
    16: { numero: "16", texto: "Paz, justicia e instituciones sólidas", archivo: "ods-16.png" }
  };

  const CONFIG = {
    nicaragua: {
      nombre: "Nicaragua",
      archivo: "data/nicaragua-adm1.geojson",
      centroInicial: [13.05, -85.05],
      zoomInicial: 7,
      zonas: [
        {
          keys: ["Madriz"],
          titulo: "Madriz",
          subtitulo: "Corredor Seco",
          resumen:
            "Núcleo territorial de cooperación con INPRHU Somoto, articulado en comunidades rurales e indígenas Chorotegas del Corredor Seco.",
          lineas:
            "Agua segura, saneamiento, gestión comunitaria, alimentación, resiliencia climática, protección y oportunidades para mujeres y jóvenes.",
          ods: [1, 2, 5, 6, 8, 10, 13]
        }
      ]
    },

    guatemala: {
      nombre: "Guatemala",
      archivo: "data/guatemala-adm1.geojson",
      centroInicial: [15.45, -90.25],
      zoomInicial: 7,
      zonas: [
        {
          keys: ["Quetzaltenango"],
          titulo: "Quetzaltenango",
          subtitulo: "Plataforma occidental",
          resumen:
            "Territorio vinculado a la trayectoria histórica de Treball Solidari con organizaciones del Altiplano Occidental.",
          lineas:
            "Derechos y autonomía de mujeres indígenas, empleo juvenil, seguridad alimentaria, cadenas de valor, organización y participación territorial.",
          ods: [1, 2, 5, 8, 10, 16]
        },
        {
          keys: ["Totonicapán", "Totonicapan"],
          titulo: "Totonicapán",
          subtitulo: "Plataforma occidental",
          resumen:
            "Departamento de alta presencia indígena donde se priorizan pertinencia cultural, organización comunitaria y derechos de las mujeres.",
          lineas:
            "Autonomía económica, participación, fortalecimiento organizativo, seguridad alimentaria y procesos culturalmente pertinentes.",
          ods: [1, 2, 5, 8, 10, 16]
        },
        {
          keys: ["Sololá", "Solola"],
          titulo: "Sololá",
          subtitulo: "Plataforma occidental",
          resumen:
            "Zona prioritaria del Altiplano Occidental para procesos con mujeres indígenas, familias rurales y comunidades organizadas.",
          lineas:
            "Soberanía alimentaria, educación nutricional, derechos de las mujeres, economía local, organización y participación comunitaria.",
          ods: [1, 2, 3, 5, 6, 8, 10]
        },
        {
          keys: ["San Marcos"],
          titulo: "San Marcos",
          subtitulo: "Plataforma occidental",
          resumen:
            "Departamento integrado en la plataforma occidental, con prioridad en mujeres indígenas, formación, economía territorial y seguridad alimentaria.",
          lineas:
            "Emprendimientos, producción familiar, cadenas de valor, organización de mujeres, acceso a recursos y autonomía económica.",
          ods: [1, 2, 5, 6, 8, 10]
        },
        {
          keys: ["Huehuetenango"],
          titulo: "Huehuetenango",
          subtitulo: "Plataforma occidental",
          resumen:
            "Territorio vinculado a la región Huista, con trabajo orientado a mujeres y jóvenes, formación técnica, empleo y economía territorial.",
          lineas:
            "Formación, empleo, emprendimiento, organización juvenil y de mujeres, economía local y reducción de desigualdades.",
          ods: [1, 4, 5, 8, 10]
        },
        {
          keys: ["Alta Verapaz"],
          titulo: "Alta Verapaz",
          subtitulo: "Plataforma norte",
          resumen:
            "Territorio rural e indígena Maya Q’eqchi’ donde se priorizan alimentación, agua, salud comunitaria y liderazgo de mujeres.",
          lineas:
            "Soberanía alimentaria, acceso y gestión del agua, salud e higiene, resiliencia climática y fortalecimiento comunitario.",
          ods: [1, 2, 3, 5, 6, 10, 13]
        },
        {
          keys: ["Petén", "Peten"],
          titulo: "Petén",
          subtitulo: "Plataforma norte",
          resumen:
            "Departamento de la plataforma norte, orientado a comunidades rurales e indígenas y a la sostenibilidad de los medios de vida.",
          lineas:
            "Alimentación, agua, salud comunitaria, adaptación climática, liderazgo de mujeres y fortalecimiento organizativo.",
          ods: [1, 2, 3, 5, 6, 10, 13]
        }
      ]
    },

    "burkina-faso": {
      nombre: "Burkina Faso",
      archivo: "data/burkina-faso-adm1.geojson",
      centroInicial: [12.35, -1.65],
      zoomInicial: 6,
      zonas: [
        {
          keys: ["Kadiogo", "Centre"],
          titulo: "Kadiogo",
          subtitulo: "Ouagadougou",
          resumen:
            "Trabajo en la periferia urbana de Ouagadougou, especialmente en barrios donde se concentran vulnerabilidad, movilidad y crecimiento urbano.",
          lineas:
            "Educación, oportunidades económicas, liderazgo de mujeres, organización comunitaria, empleo digno y desarrollo socioeconómico sostenible.",
          ods: [1, 4, 5, 8, 10, 16]
        },
        {
          keys: ["Nando", "Centre-Ouest", "Centre Ouest"],
          titulo: "Nando",
          subtitulo: "Ténado / Sanguié",
          resumen:
            "Plataforma rural en torno a Ténado, con trabajo continuado con mujeres y comunidades campesinas.",
          lineas:
            "Alfabetización funcional, actividades generadoras de ingresos, microcréditos, agroecología, seguridad alimentaria y liderazgo femenino comunitario.",
          ods: [1, 2, 4, 5, 8, 10]
        },
        {
          keys: ["Boucle du Mouhoun"],
          titulo: "Boucle du Mouhoun",
          subtitulo: "Territorio de referencia",
          resumen:
            "Región vinculada a la trayectoria histórica de trabajo en medios de vida, desarrollo socioeconómico y apoyo a comunidades vulnerables.",
          lineas:
            "Producción agroecológica, economía local, seguridad alimentaria, fortalecimiento comunitario y resiliencia territorial.",
          ods: [1, 2, 5, 8, 13]
        }
      ]
    },

    senegal: {
      nombre: "Senegal",
      archivo: "data/senegal-adm1.geojson",
      centroInicial: [14.55, -14.45],
      zoomInicial: 7,
      zonas: [
        {
          keys: ["Dakar"],
          titulo: "Dakar",
          subtitulo: "Plataforma urbana",
          resumen:
            "Región clave por su presión urbana, movilidad interna y concentración de oportunidades y desigualdades.",
          lineas:
            "Formación, emprendimiento, digitalización, acompañamiento sociolaboral, juventud, mujeres, migración y desarrollo comunitario.",
          ods: [1, 4, 5, 8, 9, 10, 11]
        },
        {
          keys: ["Thiès", "Thies"],
          titulo: "Thiès",
          subtitulo: "Prioridad territorial",
          resumen:
            "Región prioritaria para generar oportunidades laborales y económicas conectadas con las capacidades de socios locales.",
          lineas:
            "Empleo justo, formación profesional, emprendimiento, intermediación financiera, liderazgo de mujeres y dinamización económica local.",
          ods: [1, 4, 5, 8, 9, 10]
        },
        {
          keys: ["Fatick"],
          titulo: "Fatick",
          subtitulo: "Prioridad territorial",
          resumen:
            "Territorio prioritario para acompañar procesos de desarrollo socioeconómico, resiliencia comunitaria y oportunidades de vida digna.",
          lineas:
            "Emprendimiento, formación, economía local, mujeres, juventud, sostenibilidad ambiental y alternativas frente a la migración irregular.",
          ods: [1, 4, 5, 8, 10, 13]
        }
      ]
    },

    "el-salvador": {
      nombre: "El Salvador",
      archivo: "data/el-salvador-adm1.geojson",
      centroInicial: [13.72, -88.9],
      zoomInicial: 8,
      zonas: [
        {
          keys: ["San Salvador", "San Salvador Centro", "San Salvador Norte", "San Salvador Sur", "San Salvador Este", "San Salvador Oeste"],
          titulo: "San Salvador",
          subtitulo: "Plataforma central",
          resumen:
            "Territorio principal de trabajo con Las Mélidas en derechos laborales, autonomía económica y organización de mujeres trabajadoras.",
          lineas:
            "Derechos laborales, empleabilidad, cuidados, asesoría jurídico-laboral, redes de trabajadoras, liderazgo e incidencia.",
          ods: [5, 8, 10, 16]
        },
        {
          keys: ["Cuscatlán", "Cuscatlan", "Cuscatlán Norte", "Cuscatlán Sur", "Cuscatlan Norte", "Cuscatlan Sur"],
          titulo: "Cuscatlán",
          subtitulo: "Plataforma central",
          resumen:
            "Territorio de posible continuidad programática desde la plataforma central cuando exista justificación territorial y recursos suficientes.",
          lineas:
            "Mujeres trabajadoras, autonomía económica, organización, cuidados, derechos laborales e incidencia local.",
          ods: [5, 8, 10, 16]
        },
        {
          keys: ["La Paz", "La Paz Centro", "La Paz Este", "La Paz Oeste"],
          titulo: "La Paz",
          subtitulo: "Plataforma central",
          resumen:
            "Territorio de posible continuidad desde la plataforma central para procesos con mujeres trabajadoras y economía informal.",
          lineas:
            "Empleabilidad, derechos laborales, autonomía económica, redes de apoyo, organización e incidencia.",
          ods: [5, 8, 10, 16]
        },
        {
          keys: ["San Vicente", "San Vicente Norte", "San Vicente Sur"],
          titulo: "San Vicente",
          subtitulo: "Plataforma central",
          resumen:
            "Departamento considerado para continuidad programática de la plataforma central según necesidades, capacidad operativa y financiación.",
          lineas:
            "Derechos de las mujeres, cuidados, empleabilidad, organización comunitaria e incidencia territorial.",
          ods: [5, 8, 10, 16]
        },
        {
          keys: ["Morazán", "Morazan", "Morazán Norte", "Morazán Sur", "Morazan Norte", "Morazan Sur"],
          titulo: "Morazán",
          subtitulo: "Plataforma oriental",
          resumen:
            "Núcleo territorial de trabajo con ASPS en salud, agua, saneamiento, alimentación saludable y participación comunitaria.",
          lineas:
            "Salud pública, vigilancia epidemiológica, agua segura, saneamiento, gestión de riesgos, agroecología y resiliencia comunitaria.",
          ods: [2, 3, 5, 6, 8, 13]
        },
        {
          keys: ["La Unión", "La Union", "La Unión Norte", "La Unión Sur", "La Union Norte", "La Union Sur"],
          titulo: "La Unión",
          subtitulo: "Plataforma oriental",
          resumen:
            "Territorio de articulación sanitaria y comunitaria vinculado a la plataforma oriental y al trabajo con ASPS.",
          lineas:
            "Salud comunitaria, agua y saneamiento, alimentación, participación local, gestión ambiental y adaptación climática.",
          ods: [2, 3, 5, 6, 8, 13]
        }
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const paisParam = params.get("pais") || "nicaragua";
  const pais = CONFIG[paisParam] || CONFIG.nicaragua;

  const map = L.map("ts-country-map", {
    zoomControl: true,
    scrollWheelZoom: false,
    dragging: true,
    touchZoom: true,
    doubleClickZoom: true,
    boxZoom: true,
    keyboard: true,
    attributionControl: false,
    minZoom: 5,
    maxZoom: 12,
    zoomSnap: 0.25,
    zoomDelta: 0.5
  }).setView(pais.centroInicial, pais.zoomInicial);

  const estiloBase = {
    color: "#111111",
    weight: 1,
    fillColor: "#ffffff",
    fillOpacity: 0.72
  };

  const estiloBaseHover = {
    color: "#405943",
    weight: 1.7,
    fillColor: "#f7f7ef",
    fillOpacity: 0.92
  };

  const estiloActivo = {
    color: "#111111",
    weight: 1.8,
    fillColor: "#405943",
    fillOpacity: 0.95
  };

  const estiloActivoSeleccionado = {
    color: "#d8d300",
    weight: 2.8,
    fillColor: "#111111",
    fillOpacity: 1
  };

  const estiloHover = {
    color: "#d8d300",
    weight: 2.6,
    fillColor: "#2f4232",
    fillOpacity: 1
  };

  let capaPais = null;
  let zonaSeleccionada = null;

  function normalizar(texto) {
    return String(texto || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function getValoresRegion(feature) {
    const props = feature?.properties || {};

    const preferidos = [
      props.shapeName,
      props.NAME_1,
      props.NAME,
      props.name,
      props.NAME_EN,
      props.admin1Name,
      props.shapeISO
    ];

    const todos = Object.values(props)
      .filter((valor) => typeof valor === "string" || typeof valor === "number")
      .map((valor) => String(valor));

    return [...new Set([...preferidos, ...todos].filter(Boolean))];
  }

  function getNombreRegion(feature) {
    return getValoresRegion(feature)[0] || "";
  }

  function coincideTextoConZona(texto, zona) {
    const nombre = normalizar(texto);

    if (!nombre) return false;

    return zona.keys.some((key) => {
      const clave = normalizar(key);

      if (!clave) return false;

      if (nombre === clave) {
        return true;
      }

      const permitirParcial = clave.includes(" ");

      if (!permitirParcial) {
        return false;
      }

      return (
        nombre.startsWith(`${clave} `) ||
        nombre.endsWith(` ${clave}`) ||
        nombre.includes(` ${clave} `) ||
        clave.startsWith(`${nombre} `)
      );
    });
  }

  function getZonaPorNombre(feature) {
    const valores = getValoresRegion(feature);

    return pais.zonas.find((zona) => {
      return valores.some((valor) => coincideTextoConZona(valor, zona));
    });
  }

  function getZonaPorTitulo(titulo) {
    return pais.zonas.find((zona) => normalizar(zona.titulo) === normalizar(titulo));
  }

  function extraerPuntosGeojson(coordinates, puntos = []) {
    if (!Array.isArray(coordinates)) return puntos;

    if (
      typeof coordinates[0] === "number" &&
      typeof coordinates[1] === "number"
    ) {
      puntos.push({
        lng: coordinates[0],
        lat: coordinates[1]
      });

      return puntos;
    }

    coordinates.forEach((item) => extraerPuntosGeojson(item, puntos));

    return puntos;
  }

  function getCentroFeature(feature) {
    const puntos = extraerPuntosGeojson(feature?.geometry?.coordinates || []);

    if (!puntos.length) return null;

    const bounds = puntos.reduce(
      (acc, punto) => {
        acc.minLat = Math.min(acc.minLat, punto.lat);
        acc.maxLat = Math.max(acc.maxLat, punto.lat);
        acc.minLng = Math.min(acc.minLng, punto.lng);
        acc.maxLng = Math.max(acc.maxLng, punto.lng);
        return acc;
      },
      {
        minLat: Infinity,
        maxLat: -Infinity,
        minLng: Infinity,
        maxLng: -Infinity
      }
    );

    return {
      lat: (bounds.minLat + bounds.maxLat) / 2,
      lng: (bounds.minLng + bounds.maxLng) / 2
    };
  }

  function distanciaCentroide(a, b) {
    const dLat = a.lat - b.lat;
    const dLng = a.lng - b.lng;

    return Math.sqrt(dLat * dLat + dLng * dLng);
  }

  function getZonaElSalvadorPorCentro(feature) {
    if (paisParam !== "el-salvador") return null;

    const centro = getCentroFeature(feature);

    if (!centro) return null;

    const referencias = [
      { titulo: "San Salvador", centro: { lat: 13.72, lng: -89.20 }, radio: 0.18 },
      { titulo: "Cuscatlán", centro: { lat: 13.84, lng: -89.04 }, radio: 0.20 },
      { titulo: "La Paz", centro: { lat: 13.49, lng: -88.95 }, radio: 0.23 },
      { titulo: "San Vicente", centro: { lat: 13.60, lng: -88.76 }, radio: 0.24 },
      { titulo: "Morazán", centro: { lat: 13.80, lng: -88.10 }, radio: 0.28 },
      { titulo: "La Unión", centro: { lat: 13.34, lng: -87.87 }, radio: 0.25 }
    ];

    const coincidencias = referencias
      .map((referencia) => ({
        ...referencia,
        distancia: distanciaCentroide(centro, referencia.centro)
      }))
      .filter((referencia) => referencia.distancia <= referencia.radio)
      .sort((a, b) => a.distancia - b.distancia);

    if (!coincidencias.length) return null;

    return getZonaPorTitulo(coincidencias[0].titulo);
  }

  function getZona(feature) {
    const zonaPorNombre = getZonaPorNombre(feature);

    if (zonaPorNombre) {
      return zonaPorNombre;
    }

    return getZonaElSalvadorPorCentro(feature);
  }

  function getEstilo(feature) {
    const zona = getZona(feature);

    if (!zona) {
      return estiloBase;
    }

    if (zonaSeleccionada && zona.titulo === zonaSeleccionada.titulo) {
      return estiloActivoSeleccionado;
    }

    return estiloActivo;
  }

  function crearODSIconos(odsLista = []) {
    if (!odsLista.length) return "";

    const iconos = odsLista
      .map((numero) => {
        const item = ODS[numero];
        if (!item) return "";

        return `
          <img
            class="ts-sdg-icon"
            src="assets/ods/${item.archivo}"
            alt="ODS ${item.numero}: ${item.texto}"
            title="ODS ${item.numero}: ${item.texto}"
            loading="lazy"
          />
        `;
      })
      .join("");

    return `
      <div class="ts-sdg-block">
        <strong class="ts-sdg-title">ODS vinculados</strong>
        <div class="ts-sdg-list">
          ${iconos}
        </div>
      </div>
    `;
  }

  function crearContenidoPanel(zona) {
    return `
      <article class="ts-region-card">
        <span class="ts-region-eyebrow">${pais.nombre} · ${zona.subtitulo}</span>

        <h2>${zona.titulo}</h2>

        <div class="ts-region-item">
          <strong>Enfoque territorial</strong>
          <span>${zona.resumen}</span>
        </div>

        <div class="ts-region-item">
          <strong>Líneas de trabajo</strong>
          <span>${zona.lineas}</span>
        </div>

        ${crearODSIconos(zona.ods)}
      </article>
    `;
  }

  function abrirPanel(zona) {
    if (!panel || !panelContent) return;

    panelContent.innerHTML = crearContenidoPanel(zona);
    panel.hidden = false;
    panel.style.pointerEvents = "auto";

    ocultarHint();
  }

  function cerrarPanel(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!panel) return;

    panel.hidden = true;
    zonaSeleccionada = null;

    if (capaPais) {
      capaPais.setStyle(getEstilo);
      map.fitBounds(capaPais.getBounds(), {
        padding: [22, 22]
      });
    }
  }

  function abrirZona(zona, layer) {
    zonaSeleccionada = zona;

    if (capaPais) {
      capaPais.setStyle(getEstilo);
    }

    abrirPanel(zona);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      map.fitBounds(layer.getBounds(), {
        paddingTopLeft: [24, 28],
        paddingBottomRight: [24, 270],
        maxZoom: 9
      });

      return;
    }

    const mapWidth = mapElement.offsetWidth;
    const panelSpace = Math.min(620, mapWidth * 0.52);

    map.fitBounds(layer.getBounds(), {
      paddingTopLeft: [64, 74],
      paddingBottomRight: [panelSpace, 74],
      maxZoom: 9
    });
  }

  function ocultarHint() {
    if (!hint) return;

    hint.style.opacity = "0";
    hint.style.transform = "translateX(-50%) translateY(8px)";

    setTimeout(() => {
      hint.style.display = "none";
    }, 260);
  }

  fetch(pais.archivo)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No se encontró el archivo ${pais.archivo}`);
      }

      return response.json();
    })
    .then((geojson) => {
      capaPais = L.geoJSON(geojson, {
        style: getEstilo,

        onEachFeature: function (feature, layer) {
          const zona = getZona(feature);

          layer.on({
            mouseover: function (event) {
              if (zona) {
                if (!zonaSeleccionada || zonaSeleccionada.titulo !== zona.titulo) {
                  event.target.setStyle(estiloHover);
                }

                event.target.bringToFront();
                return;
              }

              event.target.setStyle(estiloBaseHover);
            },

            mouseout: function (event) {
              event.target.setStyle(getEstilo(feature));
            }
          });

          if (!zona) {
            return;
          }

          layer.on({
            add: function () {
              const element = layer.getElement();

              if (element) {
                element.classList.add("ts-region-active");
                element.setAttribute("tabindex", "0");
                element.setAttribute("role", "button");
                element.setAttribute(
                  "aria-label",
                  `Ver información de ${zona.titulo}, ${pais.nombre}`
                );
              }
            },

            click: function () {
              abrirZona(zona, layer);
            },

            keypress: function (event) {
              if (event.originalEvent.key === "Enter") {
                abrirZona(zona, layer);
              }
            }
          });
        }
      }).addTo(map);

      map.fitBounds(capaPais.getBounds(), {
        padding: [22, 22]
      });
    })
    .catch((error) => {
      console.error(error);
      mostrarError(
        "Revisa que los archivos GeoJSON existan en la carpeta data y que abras la web desde un servidor local."
      );
    });

  if (panel) {
    panel.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    panel.addEventListener("touchstart", (event) => {
      event.stopPropagation();
    });
  }

  if (panelClose) {
    panelClose.addEventListener("click", cerrarPanel);
    panelClose.addEventListener("touchend", cerrarPanel);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      cerrarPanel(event);
    }
  });
}
