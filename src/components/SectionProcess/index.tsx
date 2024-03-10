import React from "react";
import { styled } from "@mui/material";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import ImgVision from "../../assets/images/bg-vision.png";
import "./style.scss";

export default function SectionProcess() {
  const SectionProcess = styled("section")(({ theme }) => ({
    background: theme.palette.primary.main,
    ".section__process-text": {
      p: {
        fontSize: "16px",
        fontWeight: 400,
        color: theme.palette.grey[500],
      },
    },
  }));
  return (
    <SectionProcess className="section__process section">
      <div className="container">
        <div className="section__process-content">
          <div className="section__process-text">
            <SubTitle text="The process"></SubTitle>
            <TitleSection
              text="We Build With Mind, Vision, Faith And Intelligence."
              color="#fff"
            ></TitleSection>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="section__process-img">
            <img src={ImgVision} alt="construct" />
          </div>
        </div>
      </div>
    </SectionProcess>
  );
}
