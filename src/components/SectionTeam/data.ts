import { ITeam } from "../../models";
import { loadImage } from "../../utils";

export const data: ITeam[] = [
  { img: loadImage("team_1.png"), name: "Evelyn Rose", title: "CEO" },
  { img: loadImage("team_2.png"), name: "John Landon", title: "Design" },
  { img: loadImage("team_3.png"), name: "Paul Gray", title: "Architect" },
  { img: loadImage("team_4.png"), name: "Monica Smith", title: "Design" },
];
