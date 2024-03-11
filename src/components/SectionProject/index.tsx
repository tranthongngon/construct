import React from "react";
import { styled } from "@mui/material";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import ButtonLink from "../ButtonLink";
import { data } from "./data";
import Project from "./Project";
import "./style.scss";

export default function SectionProject() {
  const SectionProject = styled("section")(({ theme }) => ({
    background: theme.palette.grey[50],
    ".section__project-head-right": {
      p: {
        color: theme.palette.text.secondary,
      },
    },
  }));
  return (
    <SectionProject className="section__project section">
      <div className="container">
        <div className="section__project-head">
          <div className="section__project-head-left">
            <SubTitle text="How We Work?" />
            <TitleSection
              text="Outstanding project"
              color="#141414"
            ></TitleSection>
          </div>
          <div className="section__project-head-right">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <ButtonLink text="View More" to="/project"></ButtonLink>
          </div>
        </div>
        <div className="section__project-content">
          <div className="section__project-list">
            {data.map((p, index) => (
              <Project
                title={p.title}
                brief={p.brief}
                img={p.img}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionProject>
  );
}
