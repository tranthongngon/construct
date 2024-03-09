import React from "react";
import ImgAbout from "../../assets/images/banner-about.png";
import BgAbout from "../../assets/images/bg-about.png";
import "./style.scss";
import ButtonLink from "../ButtonLink";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import { styled } from "@mui/material";

export default function SectionAbout() {
  const SectionAbout = styled("section")(({ theme }) => ({
    p: {
      color: theme.palette.text.secondary
    }
  }));
  return (
    <SectionAbout className="banner__about section">
      <img src={BgAbout} alt="construct" className="banner__about-bg" />
      <div className="container">
        <div className="banner__about-content flex-box">
          <div className="banner__about-text">
            <SubTitle text="Welcom to construct"></SubTitle>
            <TitleSection text="About Us" color="#141414"></TitleSection>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              sit semper aenean vitae morbi fringilla posuere nibh malesuada.
              Tortor, tortor, hendrerit aliquam enim.
            </p>
            <ButtonLink to="/about" text="Explore"></ButtonLink>
          </div>
          <div className="banner__about-img">
            <img src={ImgAbout} alt="construct" />
          </div>
        </div>
      </div>
    </SectionAbout>
  );
}
