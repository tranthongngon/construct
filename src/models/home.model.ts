export interface ISlide {
  title: string;
  url: string;
  text: string;
}

export interface IOriented {
  title: string;
  excerpt: string;
  img: string;
}

export interface IFuture {
  number: string;
  title: string;
  img: string;
}

export interface IField {
  img: string;
  title: string;
}

export interface IProject {
  title: string;
  brief: string;
  img: string;
}

export interface IGallery {
  img: string,
  row?: number,
  col?: number,
}

export interface INew {
  img: string;
  title: string;
  date: string;
  id: number;
  brief: string;
}
