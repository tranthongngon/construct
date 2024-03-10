import React from "react";
import { styled } from "@mui/material";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import { data } from "./data";
import "./style.scss";
import Future from "./Future";

export default function SectionFuture() {
  const SectionFuture = styled("section")(({ theme }) => ({
    ".section__future-head-right": {
      p: {
        color: theme.palette.text.secondary,
      },
    },
  }));
  return (
    <SectionFuture className="section__future section">
      <div className="container">
        <div className="section__future-head flex-box">
          <div className="section__future-head-left">
            <SubTitle text="architecture firm"></SubTitle>
            <TitleSection
              text="building futures"
              color="#141414"
            ></TitleSection>
          </div>
          <div className="section__future-head-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              sit semper aenean vitae morbi fringilla posuere nibh malesuada.
            </p>
          </div>
        </div>
        <div className="section__future-list">
          {data.map((f, index) => (
            <Future title={f.title} img={f.img} number={f.number} key={index} />
          ))}
        </div>
      </div>
    </SectionFuture>
  );
}
