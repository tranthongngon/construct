import React from "react";
import "./style.scss";
import { styled } from "@mui/material";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { data } from "./data";

export default function SectionSafe() {
  const SectionSafe = styled("section")(({ theme }) => ({
    p: {
        color: theme.palette.text.secondary
      }
  }));
  return (
    <SectionSafe className="section__safe section">
      <div className="container">
        <div className="section__safe-content">
          <div className="section__safe-text">
            <div className="section__safe-head">
              <SubTitle text="Safe and equipment" />
              <TitleSection
                text="Worker safety is a priority"
                color="#141414"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                sit semper aenean vitae morbi fringilla posuere nibh malesuada.
                Tortor, tortor, hendrerit aliquam enim.
              </p>
            </div>
          </div>
          <div className="section__safe-slide">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="section__safe-swiper"
            >
              {data.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="wrap-img">
                    <img src={img} alt="construct" loading="lazy"/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </SectionSafe>
  );
}
