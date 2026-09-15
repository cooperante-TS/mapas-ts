(() => {
  const originalFetch = window.fetch.bind(window);
  const sources = new Map([
    ["data/countries.geo.json", "https://raw.githubusercontent.com/johan/world.geo.json/0cd701afcecfaeaf95113d742c7c8c09bd9556a4/countries.geo.json"],
    ["data/nicaragua-adm1.geojson", "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/NIC/ADM1/geoBoundaries-NIC-ADM1_simplified.geojson"],
    ["data/guatemala-adm1.geojson", "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/GTM/ADM1/geoBoundaries-GTM-ADM1_simplified.geojson"],
    ["data/burkina-faso-adm1.geojson", "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/BFA/ADM1/geoBoundaries-BFA-ADM1_simplified.geojson"],
    ["data/senegal-adm1.geojson", "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/SEN/ADM1/geoBoundaries-SEN-ADM1_simplified.geojson"],
    ["data/el-salvador-adm1.geojson", "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/SLV/ADM1/geoBoundaries-SLV-ADM1_simplified.geojson"]
  ]);
  window.fetch = async (input, init) => {
    const requested = typeof input === "string" ? input : input?.url || "";
    const entry = [...sources.entries()].find(([suffix]) => requested.endsWith(suffix));
    if (!entry) return originalFetch(input, init);
    try {
      const response = await originalFetch(entry[1], init);
      if (response.ok) return response;
    } catch (error) {
      console.warn("TS Mapas: no se pudo cargar la geometría canónica; se usa la copia local.", error);
    }
    return originalFetch(input, init);
  };
})();
