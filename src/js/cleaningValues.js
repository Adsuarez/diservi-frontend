import { $ } from "./constants.js";
import { getArrayByGroup } from "./helpers.js";

export const cleaningImages = getArrayByGroup("cleaning");
export const cleaningMaxIndex = cleaningImages.length;

export const servicesCleaningItem = $(".services-cleaning__item");
export const prevSlideButtonCleaning = $("#prev-slide-cleaning");
export const nextSlideButtonCleaning = $("#next-slide-cleaning");
