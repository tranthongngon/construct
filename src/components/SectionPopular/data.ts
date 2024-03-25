import { loadImage } from "../../utils";

export const data: { img: string; name: string; desc: string }[] = [
  {
    name: "Samsung Vietnam headquarters",
    img: loadImage("popular_1.jpeg"),
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "Global city residential complex",
    img: loadImage("popular_2.jpeg"),
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "Thu Duc Industrial Park",
    img: loadImage("popular_3.jpeg"),
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "Intel electronics factory",
    img: loadImage("popular_4.jpeg"),
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];
