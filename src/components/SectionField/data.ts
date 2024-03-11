import { IField } from "../../models";
import { loadImage } from "../../utils";
export const data: IField[] = [
  { img: loadImage("field_1.png"), title: "Trade in Services" },
  { img: loadImage("field_2.png"), title: "school and hospital" },
  { img: loadImage("field_3.png"), title: "industrial area" },
  { img: loadImage("field_4.png"), title: "residential area" },
];
