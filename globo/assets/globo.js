const globeElement = document.getElementById("ts-globe");
const panel = document.getElementById("ts-country-panel");
const panelContent = document.getElementById("ts-country-panel-content");
const panelClose = document.getElementById("ts-panel-close");
const hint = document.getElementById("ts-globe-hint");

function mostrarError(mensaje) {
  if (!globeElement) return;

  globeElement.innerHTML = `
    <div class="ts-globe-error">
      <strong>No se pudo cargar el globo.</strong>
      <span>${mensaje}</span>
    </div>
  `;
}

if (!globeElement) {
  console.error("No existe el contenedor #ts-globe");
} else if (typeof Globe === "undefined") {
  mostrarError("La librería Globe.gl no se ha cargado. Revisa la conexión o el CDN en index.html.");
} else {
  iniciarGlobo();
}

function iniciarGlobo() {
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

  const paisesTS = {
    Nicaragua: {
      nombre: "Nicaragua",
      subtitulo: "Madriz · Corredor Seco",
      resumen:
        "Cooperación concentrada en Madriz y el Corredor Seco, junto a INPRHU Somoto y comunidades rurales e indígenas Chorotegas.",
      lineas:
        "Agua segura, saneamiento, gestión comunitaria, alimentación, resiliencia climática, protección y oportunidades para mujeres y jóvenes.",
      ods: [1, 2, 5, 6, 8, 10, 13],
      lat: 12.9,
      lng: -85.2
    },

    Guatemala: {
      nombre: "Guatemala",
      subtitulo: "Plataformas occidental y norte",
      resumen:
        "Estrategia territorial organizada en dos plataformas complementarias con mujeres indígenas, jóvenes, familias rurales y organizaciones comunitarias.",
      lineas:
        "Autonomía de mujeres indígenas, empleo juvenil, soberanía alimentaria, agua, salud comunitaria, resiliencia climática, organización y participación territorial.",
      ods: [1, 2, 3, 4, 5, 6, 8, 10, 13, 16],
      lat: 15.8,
      lng: -90.2
    },

    "El Salvador": {
      nombre: "El Salvador",
      subtitulo: "Plataformas central y oriental",
      resumen:
        "Cooperación articulada con Las Mélidas en la plataforma central y con ASPS en la plataforma oriental.",
      lineas:
        "Derechos laborales, autonomía económica, cuidados, organización de mujeres trabajadoras, salud comunitaria, agua, saneamiento, alimentación y resiliencia.",
      ods: [2, 3, 5, 6, 8, 10, 13, 16],
      lat: 13.7,
      lng: -89.2
    },

    "Burkina Faso": {
      nombre: "Burkina Faso",
      subtitulo: "Kadiogo y Nando",
      resumen:
        "Trabajo territorial en Kadiogo/Ouagadougou y Nando/Ténado, combinando periferia urbana y comunidades rurales.",
      lineas:
        "Educación, alfabetización funcional, microcréditos, actividades generadoras de ingresos, seguridad alimentaria, liderazgo de mujeres y desarrollo socioeconómico sostenible.",
      ods: [1, 2, 4, 5, 8, 10, 13],
      lat: 12.2,
      lng: -1.6
    },

    Senegal: {
      nombre: "Senegal",
      subtitulo: "Estrategia país 2024-2028",
      resumen:
        "Estrategia activa centrada en oportunidades laborales, formación, emprendimiento y acompañamiento comunitario.",
      lineas:
        "Empleo justo, formación profesional, digitalización, emprendimiento, liderazgo de mujeres, juventud, migración y desarrollo socioeconómico local.",
      ods: [1, 4, 5, 8, 9, 10, 11, 13],
      lat: 14.5,
      lng: -14.5
    }
  };

  let paisSeleccionado = null;
  let datosGeojson = null;

  const globe = Globe()(globeElement)
    .backgroundColor("rgba(0,0,0,0)")
    .showAtmosphere(true)
    .atmosphereColor("#405943")
    .atmosphereAltitude(0.20)
    .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")

    .polygonAltitude((feature) => {
      const nombre = getNombrePais(feature);

      if (nombre === paisSeleccionado) return 0.038;
      if (paisesTS[nombre]) return 0.028;

      return 0.006;
    })

    .polygonCapColor((feature) => {
      const nombre = getNombrePais(feature);

      if (nombre === paisSeleccionado) {
        return "rgba(216, 211, 0, 0.98)";
      }

      if (paisesTS[nombre]) {
        return "rgba(64, 89, 67, 0.96)";
      }

      return "rgba(255, 255, 255, 0.20)";
    })

    .polygonSideColor((feature) => {
      const nombre = getNombrePais(feature);

      if (paisesTS[nombre]) {
        return "rgba(64, 89, 67, 0.40)";
      }

      return "rgba(17, 17, 17, 0.12)";
    })

    .polygonStrokeColor((feature) => {
      const nombre = getNombrePais(feature);

      if (paisesTS[nombre]) {
        return "rgba(255, 255, 255, 0.92)";
      }

      return "rgba(255, 255, 255, 0.12)";
    })

    .polygonLabel((feature) => {
      const nombre = getNombrePais(feature);
      const info = paisesTS[nombre];

      if (!info) return "";

      return `
        <div style="
          padding: 8px 10px;
          border-radius: 10px;
          background: rgba(17, 17, 17, 0.88);
          color: #fff;
          font-family: system-ui, sans-serif;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 8px 24px rgba(0,0,0,0.35);
        ">
          ${info.nombre}
        </div>
      `;
    })

    .onPolygonHover((feature) => {
      const nombre = feature ? getNombrePais(feature) : null;
      globeElement.style.cursor = nombre && paisesTS[nombre] ? "pointer" : "grab";
    })

    .onPolygonClick((feature) => {
      const nombre = getNombrePais(feature);

      if (!paisesTS[nombre]) return;

      abrirPais(nombre);
    });

  configurarControles();

  window.addEventListener("resize", ajustarTamanoGlobo);
  ajustarTamanoGlobo();

  fetch("data/countries.geo.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se encontró data/countries.geo.json");
      }

      return response.json();
    })
    .then((geojson) => {
      datosGeojson = geojson.features || [];
      globe.polygonsData(datosGeojson);

      globe.pointOfView(
        {
          lat: 12,
          lng: -45,
          altitude: getAltitudInicial()
        },
        0
      );
    })
    .catch((error) => {
      console.error(error);
      mostrarError(
        "Revisa que exista el archivo data/countries.geo.json y que abras la web desde http://localhost:5510/globo/, no con doble clic."
      );
    });

  function configurarControles() {
    const controls = globe.controls();

    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    controls.enableZoom = true;
    controls.enablePan = false;
    controls.rotateSpeed = 0.55;
    controls.zoomSpeed = 0.7;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;

    controls.minDistance = 230;
    controls.maxDistance = 650;

    globeElement.addEventListener("pointerdown", () => {
      controls.autoRotate = false;
      ocultarHint();
    });

    globeElement.addEventListener(
      "wheel",
      () => {
        controls.autoRotate = false;
        ocultarHint();
      },
      { passive: true }
    );

    globeElement.addEventListener(
      "touchstart",
      () => {
        controls.autoRotate = false;
        ocultarHint();
      },
      { passive: true }
    );
  }

  function ajustarTamanoGlobo() {
    const width = globeElement.clientWidth;
    const height = globeElement.clientHeight;

    globe.width(width);
    globe.height(height);
  }

  function esMovil() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  function getAltitudInicial() {
    return esMovil() ? 2.7 : 2.2;
  }

  function getAltitudPais() {
    return esMovil() ? 2.35 : 1.55;
  }

  function getNombrePais(feature) {
    return feature?.properties?.name || "";
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

  function crearContenidoPanel(info) {
    return `
      <article class="ts-country-card">
        <span class="ts-country-eyebrow">Cooperación · ${info.subtitulo}</span>

        <h2>${info.nombre}</h2>

        <div class="ts-country-item">
          <strong>Enfoque territorial</strong>
          <span>${info.resumen}</span>
        </div>

        <div class="ts-country-item">
          <strong>Líneas de trabajo</strong>
          <span>${info.lineas}</span>
        </div>

        ${crearODSIconos(info.ods)}
      </article>
    `;
  }

  function abrirPanel(info) {
    if (!panel || !panelContent) return;

    panelContent.innerHTML = crearContenidoPanel(info);
    panel.hidden = false;
    panel.style.pointerEvents = "auto";

    ocultarHint();
  }

  function cerrarPanel() {
    if (!panel) return;

    panel.hidden = true;
    paisSeleccionado = null;

    refrescarPoligonos();

    globe.pointOfView(
      {
        lat: 12,
        lng: -45,
        altitude: getAltitudInicial()
      },
      900
    );
  }

  function abrirPais(nombreGeojson) {
    const info = paisesTS[nombreGeojson];

    if (!info) return;

    paisSeleccionado = nombreGeojson;
    refrescarPoligonos();

    const controls = globe.controls();
    controls.autoRotate = false;

    if (esMovil()) {
      globe.pointOfView(
        {
          lat: info.lat - 24,
          lng: info.lng,
          altitude: getAltitudPais()
        },
        1000
      );

      abrirPanel(info);
      return;
    }

    globe.pointOfView(
      {
        lat: info.lat,
        lng: info.lng + 32,
        altitude: getAltitudPais()
      },
      1000
    );

    abrirPanel(info);
  }

  function refrescarPoligonos() {
    if (!datosGeojson) return;

    globe.polygonsData([]);

    requestAnimationFrame(() => {
      globe.polygonsData(datosGeojson);
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
      cerrarPanel();
    }
  });
}
