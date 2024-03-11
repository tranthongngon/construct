import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import { rgba } from "../../../themes/functions";
import ArrowWhite from "../../../assets/images/arrow-white.png";
type ProjectProps = {
  title: string;
  brief: string;
  img: string;
};

export default function Project(props: ProjectProps) {
  const Project = styled(Link)(({ theme }) => ({
    ".project__item-text": {
      background: rgba(theme.palette.text.primary, 0.8),
      h4: {
        color: theme.palette.common.white,
      },
      p: {
        color: rgba(theme.palette.common.white, 0.8),
      },
      "&-bottom": {
        borderTop: `1px solid ${theme.palette.secondary.main}`,
      },
    },
  }));
  return (
    <Project to="/project" className="project__item">
      <div className="project__item-wrap">
        <div className="project__item-img">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="project__item-text">
          <h4>{props.title}</h4>
          <p>{props.brief}</p>
          <div className="project__item-text-bottom">
            <img src={ArrowWhite} alt={props.title} />
          </div>
        </div>
      </div>
    </Project>
  );
}
