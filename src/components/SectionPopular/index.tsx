import React from "react";
import "./style.scss";
import { colors, styled } from "@mui/material";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";

export default function SectionPopular() {
  const SectionPopular = styled("section")(({ theme }) => ({
    ".section__popular-text": {
      backgroundColor: theme.palette.secondary.main,
      h4: {
        color: theme.palette.common.white,
      },
      p: {
        color: theme.palette.grey[200],
      },
    },
  }));
  return (
    <SectionPopular className="section__popular">
      <div className="section__popular-content">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
          className="section__popular-swiper"
        >
          {data.map((p, index) => (
            <SwiperSlide key={index}>
              <div
                className="section__popular-slide"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <div className="container">
                  <div className="section__popular-content">
                    <div className="section__popular-text">
                      <h4>{p.name}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionPopular>
  );
}
