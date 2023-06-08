const URLS_MULTIMEDIA = {
  painting: "../../multimedia/painting/",
};
const multimedia = [
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
];

const getArrayByGroup = (groupName) => {
  const [groupObject] = multimedia.filter((item) => item.group === groupName);
  return groupObject.images;
};

let index = 0;
const paintingImages = getArrayByGroup("painting");
const paintingMaxIndex = paintingImages.length;

const servicesPaintingItem = document.querySelector(".services-painting__item");
const prevSlideButton = document.querySelector(".prevSlide");
const nextSlideButton = document.querySelector(".nextSlide");

prevSlideButton.addEventListener("click", () => {
  index--;
  manageImages();
});

nextSlideButton.addEventListener("click", () => {
  index++;
  manageImages();
});

const setImageIndex = () => {
  if (index < 0) index = paintingMaxIndex - 1;
  if (index === paintingMaxIndex) index = 0;
};

const changeBackgroundImage = (backgroundImage, element) => {
  element.style.backgroundImage = `url(${backgroundImage})`;
};

const manageImages = () => {
  setImageIndex();
  changeBackgroundImage(paintingImages[index], servicesPaintingItem);
};
