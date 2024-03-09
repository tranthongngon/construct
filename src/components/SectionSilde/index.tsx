import { staticData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ISlide } from "../../models";
import "./style.scss";
import { styled } from "@mui/material";

export default function SectionSilde() {
  const Content = styled("div")(({ theme }) => ({
    background: theme.palette.primary.light,
    ".slide__title": {
      color: theme.palette.common.white,
    },
    ".slide__text": {
      color: theme.palette.grey["300"],
    },
  }));
  const SectionSilde = styled("section")(({ theme }) => ({
    ".swiper-button-prev": {
      width: "45px",
      height: "45px",
      background: theme.palette.common.white,
      borderRadius: "50%",
      cursor: "pointer",
      "&::after": {
        fontSize: "20px",
        color: theme.palette.primary.main
      },
    },
    ".swiper-button-next": {
      width: "45px",
      height: "45px",
      background: theme.palette.common.white,
      borderRadius: "50%",
      cursor: "pointer",
      "&::after": {
        fontSize: "20px",
        color: theme.palette.primary.main
      },
    },
  }));
  return (
    <SectionSilde className="banner__silde">
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {staticData.map((data: ISlide, index: number) => (
          <SwiperSlide key={index}>
            <div className="slide__wrap">
              <div className="container">
                <div className="slide__item">
                  <img src={data.url} alt={data.title} />
                  <Content className="slide__content">
                    <h4 className="slide__title"> {data.title} </h4>
                    <p className="slide__text"> {data.text} </p>
                  </Content>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionSilde>
  );
}
