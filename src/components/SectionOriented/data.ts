import { IOriented } from "../../models";
import { loadImage } from "../../utils";
export const data: IOriented[] = [
  {
    title: "construct",
    excerpt:
      "Curabitur ullamcorper ultricies, tellus rhoncus tempus eget condimentum, sem quam semper libero",
    img: loadImage("oriented_1.png"),
  },
  {
    title: "invest",
    excerpt:
      "Curabitur ullamcorper ultricies, tellus rhoncus tempus eget condimentum, sem quam semper libero",
    img: loadImage("oriented_2.png"),
  },
  {
    title: "economy",
    excerpt:
      "Curabitur ullamcorper ultricies, tellus rhoncus tempus eget condimentum, sem quam semper libero",
    img: loadImage("oriented_3.png"),
  },

  {
    title: "diversification",
    excerpt:
      "Curabitur ullamcorper ultricies, tellus rhoncus tempus eget condimentum, sem quam semper libero",
    img: loadImage("oriented_4.png"),
  },
];
