import { $ } from "./constants.js";
import { getArrayByGroup } from "./helpers.js";

export const paintingImages = getArrayByGroup("painting");
export const paintingMaxIndex = paintingImages.length;

export const servicesPaintingItem = $(".services-painting__item");
export const prevSlideButtonPainting = $("#prev-slide-painting");
export const nextSlideButtonPainting = $("#next-slide-painting");
