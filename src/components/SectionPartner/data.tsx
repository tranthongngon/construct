import { IGallery } from "../../models";
import { loadImage } from "../../utils";
export const data: IGallery[] = [
  {
    img: loadImage("part_1.png"),
    row: 2,
    col: 2,
  },
  {
    img: loadImage("part_5.png"),
    row: 1,
    col: 2,
  },

  {
    img: loadImage("part_6.png"),
    row: 1,
    col: 2,
  },
  {
    img: loadImage("part_3.png"),
    row: 1,
    col: 2,
  },
  {
    img: loadImage("part_4.png"),
    row: 1,
    col: 1,
  },
  {
    img: loadImage("part_2.png"),
    row: 1,
    col: 1,
  },
];
