import { $ } from "./constants.js";
import { getArrayByGroup } from "./helpers.js";

export const solderingImages = getArrayByGroup("soldering");
export const solderingMaxIndex = solderingImages.length;

export const servicesSolderingItem = $(".services-soldering__item");
export const prevSlideButtonSoldering = $("#prev-slide-soldering");
export const nextSlideButtonSoldering = $("#next-slide-soldering");
