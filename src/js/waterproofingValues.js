import { $ } from "./constants.js";
import { getArrayByGroup } from "./helpers.js";

export const waterproofingImages = getArrayByGroup("waterproofing");
export const waterproofingMaxIndex = waterproofingImages.length;

export const servicesWaterproofingItem = $(".services-waterproofing__item");
export const prevSlideButtonWaterproofing = $("#prev-slide-waterproofing");
export const nextSlideButtonWaterproofing = $("#next-slide-waterproofing");
