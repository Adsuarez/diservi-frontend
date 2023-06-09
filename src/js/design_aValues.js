import { $ } from "./constants.js";
import { getArrayByGroup } from "./helpers.js";

export const designAImages = getArrayByGroup("design-a");
export const designAMaxIndex = designAImages.length;

export const servicesDesignAItem = $(".services-design-a__item");
export const prevSlideButtonDesignA = $("#prev-slide-design-a");
export const nextSlideButtonDesignA = $("#next-slide-design-a");
