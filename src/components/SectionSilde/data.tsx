import { ISlide } from "../../models";
import { loadImage } from "../../utils";

export const staticData: ISlide[] = [
  {
    title: "There are many variations of passages of Lorem Ipsum.",
    url: loadImage("slide_1.jpeg"),
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "There are many variations of passages of Lorem Ipsum.",
    url: loadImage("slide_2.png"),
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "There are many variations of passages of Lorem Ipsum.",
    url: loadImage("slide_3.png"),
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];
