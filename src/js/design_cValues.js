import { $ } from "./constants.js";
import { getArrayByGroup } from "./helpers.js";

export const designCImages = getArrayByGroup("design-c");
export const designCMaxIndex = designCImages.length;

export const servicesDesignCItem = $(".services-design-c__item");
export const prevSlideButtonDesignC = $("#prev-slide-design-c");
export const nextSlideButtonDesignC = $("#next-slide-design-c");
