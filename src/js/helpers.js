import { multimedia } from "./constants.js";

export const getArrayByGroup = (groupName) => {
  const [groupObject] = multimedia.filter((item) => item.group === groupName);
  return groupObject.images;
};

export const setImageIndex = (index, maxIndex) => {
  if (index < 0) index = maxIndex - 1;
  if (index === maxIndex) index = 0;
  return index;
};

export const changeBackgroundImage = (backgroundImage, element) => {
  element.style.backgroundImage = `url(${backgroundImage})`;
};

export const prevIndex = (index) => {
  index--;
  return index;
};

export const nextIndex = (index) => {
  index++;
  return index;
};
