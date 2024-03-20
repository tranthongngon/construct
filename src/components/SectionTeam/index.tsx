import React from "react";
import { styled } from "@mui/material";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import { data } from "./data";
import Team from "./Team";
import './style.scss';

export default function SectionTeam() {
  const SectionTeam = styled("section")(({ theme }) => ({
  }));
  return (
    <SectionTeam className="section__team section">
      <div className="container">
        <div className="section__news-head">
          <SubTitle text="Experts" />
          <TitleSection text="Our Brilliant Team" color="#141414" />
        </div>
        <div className="section__team-content">
          <div className="section__team-list">
            {data.map((d) => (
              <Team img={d.img} title={d.title} name={d.name} />
            ))}
          </div>
        </div>
      </div>
    </SectionTeam>
  );
}
