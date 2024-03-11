import { IProject } from "../../models";
import { loadImage } from "../../utils";
export const data: IProject[] = [
  {
    title: "Project Global City",
    brief:
      "Curabitur ullamcorper ultricies, tellus rhoncus tempus eget condimentum, sem quam semper libero",
    img: loadImage("project_1.png"),
  },
  {
    title: "Project Home Park",
    brief:
      "Curabitur ullamcorper ultricies, tellus rhoncus tempus eget condimentum, sem quam semper libero",
    img: loadImage("project_3.png"),
  },
  {
    title: "Project House Neo",
    brief:
      "Curabitur ullamcorper ultricies, tellus rhoncus tempus eget condimentum, sem quam semper libero",
    img: loadImage("project_2.png"),
  },
  {
    title: "Project Life View",
    brief:
      "Curabitur ullamcorper ultricies, tellus rhoncus tempus eget condimentum, sem quam semper libero",
    img: loadImage("project_4.png"),
  },
];
