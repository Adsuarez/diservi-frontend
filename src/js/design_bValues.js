import { $ } from "./constants.js";
import { getArrayByGroup } from "./helpers.js";

export const designBImages = getArrayByGroup("design-b");
export const designBMaxIndex = designBImages.length;

export const servicesDesignBItem = $(".services-design-b__item");
export const prevSlideButtonDesignB = $("#prev-slide-design-b");
export const nextSlideButtonDesignB = $("#next-slide-design-b");
