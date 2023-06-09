export const $ = (element) => document.querySelector(element);

export const URLS_MULTIMEDIA = {
  painting: "../../multimedia/painting/",
  soldering: "../../multimedia/soldering/",
};

export const multimedia = [
  {
    group: "painting",
    images: [
      `${URLS_MULTIMEDIA.painting}montacargas-despues-01.jpg`,
      `${URLS_MULTIMEDIA.painting}montacargas-antes-01.jpg`,
      `${URLS_MULTIMEDIA.painting}pexels-kaboompics-com-6119.jpg`,
      `${URLS_MULTIMEDIA.painting}pintura-y-demarcacion-de-parqueaderos-y-bodegas-bogota_2c64860fda_3.jpg`,
      `${URLS_MULTIMEDIA.painting}pintura-y-demarcacion-de-parqueaderos-y-bodegas-bogota_39c54b257_3.jpg`,
    ],
  },
  {
    group: "soldering",
    images: [
      `${URLS_MULTIMEDIA.soldering}pexels-pixabay-73833.jpg`,
      `${URLS_MULTIMEDIA.soldering}cual-es-la-lamina-mas-barata-para-techar.jpg`,
    ],
  },
];
