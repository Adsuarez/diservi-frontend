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

export let paintinIndex = 0;

prevSlideButtonPainting.addEventListener("click", () => {
  paintinIndex = prevIndex(paintinIndex);
  paintinIndex = setImageIndex(paintinIndex, paintingMaxIndex);
  changeBackgroundImage(paintingImages[paintinIndex], servicesPaintingItem);
});

nextSlideButtonPainting.addEventListener("click", () => {
  paintinIndex = nextIndex(paintinIndex);
  paintinIndex = setImageIndex(paintinIndex, paintingMaxIndex);
  changeBackgroundImage(paintingImages[paintinIndex], servicesPaintingItem);
});
