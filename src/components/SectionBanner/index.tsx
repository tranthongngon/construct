import React from "react";
import "./style.scss";
import { styled } from "@mui/material";
type SectionBannerProps = {
  align: "flex-start" | "flex-end" | "center";
  just: "flex-start" | "flex-end" | "center";
  class: string;
  img: string;
  title1: string;
  title2: string;
};

export default function SectionBanner(props: SectionBannerProps) {
  const SectionBanner = styled("section")(({ theme }) => ({
    backgroundImage: `url(${props.img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    '.section__banner-content': {
      justifyContent: props.just,
      alignItems: props.align,
    },
    '.section__banner-text': {
      background: theme.palette.primary.main
    },
    '.section__banner-title': {
      color: theme.palette.common.white
    }
  }));
  return (
    <SectionBanner className={`section__banner ${props.class}`}>
      <div className="container">
        <div className="section__banner-content">
          <div className="section__banner-text">
            <h4 className="section__banner-title">{props.title1}</h4>
            <h4 className="section__banner-title">{props.title2}</h4>
          </div>
        </div>
      </div>
    </SectionBanner>
  );
}
