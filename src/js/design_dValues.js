import { $ } from "./constants.js";
import { getArrayByGroup } from "./helpers.js";

export const designDImages = getArrayByGroup("design-d");
export const designDMaxIndex = designDImages.length;

export const servicesDesignDItem = $(".services-design-d__item");
export const prevSlideButtonDesignD = $("#prev-slide-design-d");
export const nextSlideButtonDesignD = $("#next-slide-design-d");
