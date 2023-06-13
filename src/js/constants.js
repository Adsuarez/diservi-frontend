export const $ = (element) => document.querySelector(element);

export const URLS_MULTIMEDIA = {
  painting: "../../multimedia/painting/",
  soldering: "../../multimedia/soldering/",
  design_a: "../../multimedia/design/a/",
  design_b: "../../multimedia/design/b/",
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
  {
    group: "design-a",
    images: [
      `${URLS_MULTIMEDIA.design_a}1.png`,
      `${URLS_MULTIMEDIA.design_a}2.png`,
      `${URLS_MULTIMEDIA.design_a}3.png`,
      `${URLS_MULTIMEDIA.design_a}4.png`,
      `${URLS_MULTIMEDIA.design_a}5.png`,
      `${URLS_MULTIMEDIA.design_a}6.png`,
      `${URLS_MULTIMEDIA.design_a}7.png`,
      `${URLS_MULTIMEDIA.design_a}8.png`,
    ],
  },
  {
    group: "design-b",
    images: [
      `${URLS_MULTIMEDIA.design_b}1.png`,
      `${URLS_MULTIMEDIA.design_b}2.jpg`,
      `${URLS_MULTIMEDIA.design_b}3.jpg`,
      `${URLS_MULTIMEDIA.design_b}4.jpg`,
      `${URLS_MULTIMEDIA.design_b}5.png`,
      `${URLS_MULTIMEDIA.design_b}6.jpg`,
      `${URLS_MULTIMEDIA.design_b}7.jpg`,
      `${URLS_MULTIMEDIA.design_b}8.jpg`,
      `${URLS_MULTIMEDIA.design_b}9.jpg`,
    ],
  },
];
