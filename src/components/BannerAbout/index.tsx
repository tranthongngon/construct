import React from "react";
import ImgAbout from "../../assets/images/banner-about.png";
import BgAbout from "../../assets/images/bg-about.png";
import "./style.scss";
import ButtonLink from "../ButtonLink";
import SubTitle from "../SubTitle";

export default function BannerAbout() {
  return (
    <section className="banner__about section">
      <img src={BgAbout} alt="construct" className="banner__about-bg"/>
      <div className="container">
        <div className="banner__about-content flex-box">
          <div className="banner__about-text">
            <SubTitle text="Welcom to construct"></SubTitle>
            <h3>About Us</h3>
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
    </section>
  );
}
