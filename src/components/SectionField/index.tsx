import React from "react";
import { styled } from "@mui/material";
import { data } from "./data";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import ImgField from "../../assets/images/field-img.png";
import "./style.scss";

export default function SectionField() {
  const SectionField = styled("section")(({ theme }) => ({
    ".field__right": {
      ".field__item": {
        "&-text": {
          h4: {
            color: theme.palette.text.primary,
          },
        },
      },
    },
  }));
  return (
    <SectionField className="section__field section">
      <div className="container">
        <div className="field__wrap">
          <div className="field__left">
            <img src={ImgField} alt="construct" />
          </div>
          <div className="field__right">
            <SubTitle text="What we offer"></SubTitle>
            <TitleSection text="building sector" color="#141414"></TitleSection>
            <div className="field__list flex-box">
              {data.map((f, index) => (
                <div className="field__item" key={index}>
                  <div className="field__item-img">
                    <img src={f.img} alt={f.title} />
                  </div>
                  <div className="field__item-text">
                    <h4>{f.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionField>
  );
}
