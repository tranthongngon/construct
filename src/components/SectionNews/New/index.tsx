import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import ImgRedmore from "../../../assets/images/arrow-hori.png";

type NewProps = {
  id: number;
  img: string;
  title: string;
  date: string;
  brief: string;
};

export default function New(props: NewProps) {
  const New = styled(Link)(({ theme }) => ({
    '.new__item-text' : {
      '&-title': {
        color: theme.palette.text.primary
      },
      '&-brief' : {
        color: theme.palette.text.secondary
      },
      '&-date': {
        color: theme.palette.text.secondary
      },
      '&-btn': {
        color: theme.palette.text.primary
      }
    }
  }));
  return (
    <New to="/news" className="new__item">
      <div className="new__item-wrap">
        <div className="new__item-img">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="new__item-text">
          <h4 className="new__item-text-title">{props.title}</h4>
          <p className="new__item-text-brief">{props.brief}</p>
          <div className="new__item-text-bottom">
            <span className="new__item-text-date">{props.date}</span>
            <div className="new__item-text-btn">
              Read more
              <img src={ImgRedmore} alt={props.title} />
            </div>
          </div>
        </div>
      </div>
    </New>
  );
}
