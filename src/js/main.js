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

let paintingIndex = 0;
let solderingIndex = 0;

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
