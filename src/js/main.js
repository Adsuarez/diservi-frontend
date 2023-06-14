import {
  changeBackgroundImage,
  nextIndex,
  prevIndex,
  setImageIndex,
} from "./helpers.js";

import {
  nextSlideButtonPainting,
  paintingImages,
  paintingMaxIndex,
  prevSlideButtonPainting,
  servicesPaintingItem,
} from "./paintingValues.js";

import {
  nextSlideButtonSoldering,
  prevSlideButtonSoldering,
  servicesSolderingItem,
  solderingImages,
  solderingMaxIndex,
} from "./solderingValues.js";

import {
  nextSlideButtonWaterproofing,
  prevSlideButtonWaterproofing,
  servicesWaterproofingItem,
  waterproofingImages,
  waterproofingMaxIndex,
} from "./waterproofingValues.js";

import {
  nextSlideButtonCleaning,
  prevSlideButtonCleaning,
  servicesCleaningItem,
  cleaningImages,
  cleaningMaxIndex,
} from "./cleaningValues.js";

import {
  nextSlideButtonDesignA,
  prevSlideButtonDesignA,
  servicesDesignAItem,
  designAImages,
  designAMaxIndex,
} from "./design_aValues.js";

import {
  nextSlideButtonDesignB,
  prevSlideButtonDesignB,
  servicesDesignBItem,
  designBImages,
  designBMaxIndex,
} from "./design_bValues.js";

import {
  nextSlideButtonDesignC,
  prevSlideButtonDesignC,
  servicesDesignCItem,
  designCImages,
  designCMaxIndex,
} from "./design_cValues.js";

import {
  nextSlideButtonDesignD,
  prevSlideButtonDesignD,
  servicesDesignDItem,
  designDImages,
  designDMaxIndex,
} from "./design_dValues.js";

/*PAINTING SERVICE*/
let paintingIndex = 0;

prevSlideButtonPainting.addEventListener("click", () => {
  paintingIndex = prevIndex(paintingIndex);
  paintingIndex = setImageIndex(paintingIndex, paintingMaxIndex);
  changeBackgroundImage(paintingImages[paintingIndex], servicesPaintingItem);
});

nextSlideButtonPainting.addEventListener("click", () => {
  paintingIndex = nextIndex(paintingIndex);
  paintingIndex = setImageIndex(paintingIndex, paintingMaxIndex);
  changeBackgroundImage(paintingImages[paintingIndex], servicesPaintingItem);
});

/*SOLDERING SERVICE */
let solderingIndex = 0;

prevSlideButtonSoldering.addEventListener("click", () => {
  solderingIndex = prevIndex(solderingIndex);
  solderingIndex = setImageIndex(solderingIndex, solderingMaxIndex);
  changeBackgroundImage(solderingImages[solderingIndex], servicesSolderingItem);
});

nextSlideButtonSoldering.addEventListener("click", () => {
  solderingIndex = nextIndex(solderingIndex);
  solderingIndex = setImageIndex(solderingIndex, solderingMaxIndex);
  changeBackgroundImage(solderingImages[solderingIndex], servicesSolderingItem);
});

/*WATERPROOFING SERVICE */
let waterproofingIndex = 0;

prevSlideButtonWaterproofing.addEventListener("click", () => {
  waterproofingIndex = prevIndex(waterproofingIndex);
  waterproofingIndex = setImageIndex(waterproofingIndex, waterproofingMaxIndex);
  changeBackgroundImage(
    waterproofingImages[waterproofingIndex],
    servicesWaterproofingItem
  );
});

nextSlideButtonWaterproofing.addEventListener("click", () => {
  waterproofingIndex = nextIndex(waterproofingIndex);
  waterproofingIndex = setImageIndex(waterproofingIndex, waterproofingMaxIndex);
  changeBackgroundImage(
    waterproofingImages[waterproofingIndex],
    servicesWaterproofingItem
  );
});

/*CLEANING SERVICE */
let cleaningIndex = 0;

prevSlideButtonCleaning.addEventListener("click", () => {
  cleaningIndex = prevIndex(cleaningIndex);
  cleaningIndex = setImageIndex(cleaningIndex, cleaningMaxIndex);
  changeBackgroundImage(cleaningImages[cleaningIndex], servicesCleaningItem);
});

nextSlideButtonCleaning.addEventListener("click", () => {
  cleaningIndex = nextIndex(cleaningIndex);
  cleaningIndex = setImageIndex(cleaningIndex, cleaningMaxIndex);
  changeBackgroundImage(cleaningImages[cleaningIndex], servicesCleaningItem);
});

/*DESIGN A SERVICE */
let designAIndex = 0;

prevSlideButtonDesignA.addEventListener("click", () => {
  designAIndex = prevIndex(designAIndex);
  designAIndex = setImageIndex(designAIndex, designAMaxIndex);
  changeBackgroundImage(designAImages[designAIndex], servicesDesignAItem);
});

nextSlideButtonDesignA.addEventListener("click", () => {
  designAIndex = nextIndex(designAIndex);
  designAIndex = setImageIndex(designAIndex, designAMaxIndex);
  changeBackgroundImage(designAImages[designAIndex], servicesDesignAItem);
});

/*DESIGN B SERVICE */
let designBIndex = 0;

prevSlideButtonDesignB.addEventListener("click", () => {
  designBIndex = prevIndex(designBIndex);
  designBIndex = setImageIndex(designBIndex, designBMaxIndex);
  changeBackgroundImage(designBImages[designBIndex], servicesDesignBItem);
});

nextSlideButtonDesignB.addEventListener("click", () => {
  designBIndex = nextIndex(designBIndex);
  designBIndex = setImageIndex(designBIndex, designBMaxIndex);
  changeBackgroundImage(designBImages[designBIndex], servicesDesignBItem);
});

/*DESIGN C SERVICE */
let designCIndex = 0;

prevSlideButtonDesignC.addEventListener("click", () => {
  designCIndex = prevIndex(designCIndex);
  designCIndex = setImageIndex(designCIndex, designCMaxIndex);
  changeBackgroundImage(designCImages[designCIndex], servicesDesignCItem);
});

nextSlideButtonDesignC.addEventListener("click", () => {
  designCIndex = nextIndex(designCIndex);
  designCIndex = setImageIndex(designCIndex, designCMaxIndex);
  changeBackgroundImage(designCImages[designCIndex], servicesDesignCItem);
});

/*DESIGN C SERVICE */
let designDIndex = 0;

prevSlideButtonDesignD.addEventListener("click", () => {
  designDIndex = prevIndex(designDIndex);
  designDIndex = setImageIndex(designDIndex, designDMaxIndex);
  changeBackgroundImage(designDImages[designDIndex], servicesDesignDItem);
});

nextSlideButtonDesignD.addEventListener("click", () => {
  designDIndex = nextIndex(designDIndex);
  designDIndex = setImageIndex(designDIndex, designDMaxIndex);
  changeBackgroundImage(designDImages[designDIndex], servicesDesignDItem);
});
