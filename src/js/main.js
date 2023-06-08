const URL_MULTIMEDIA = "multimedia/";

const multimedia = [
  {
    group: "painting",
    images: [
      `${URL_MULTIMEDIA}montacargas-antes-01.jpg`,
      `${URL_MULTIMEDIA}montacargas-despues-01.jpg`,
    ],
  },
];

const getMaxIndex = (groupName) => {
  const [groupObject] = multimedia.filter((item) => item.group === groupName);
  return groupObject.images;
};

let index = 0;
const paintingMaxIndex = getMaxIndex("painting").length;
