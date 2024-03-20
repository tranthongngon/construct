import React from "react";
import { styled } from "@mui/material";
type TeamProps = {
  img: string;
  name: string;
  title: string;
};
export default function Team(props: TeamProps) {
  const Team = styled("div")(({ theme }) => ({
    '.team__text-name': {
        color: theme.palette.text.primary,
    },
    '.team__text-title': {
        color: theme.palette.secondary.main,
    }
  }));
  return (
    <Team className="team__item">
      <div className="team__wrap">
        <div className="team__img">
          <img src={props.img} alt="construct" />
        </div>
        <div className="team__text">
          <h4 className="team__text-name">{props.name}</h4>
          <p className="team__text-title">{props.title}</p>
        </div>
      </div>
    </Team>
  );
}
