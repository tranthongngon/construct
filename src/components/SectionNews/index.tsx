import React from "react";
import { styled } from "@mui/material";
import "./style.scss";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import { data } from "./data";
import New from "./New";

export default function SectionNews() {
  const SectionNews = styled("section")(({ theme }) => ({}));
  return (
    <SectionNews className="section__news section">
      <div className="container">
        <div className="section__news-head">
          <SubTitle text="News and blogs"></SubTitle>
          <TitleSection
            text="Read all our latest Articles"
            color="#141414"
          ></TitleSection>
        </div>
        <div className="section__news-content">
          <div className="section__news-list">
            {data.map((n, index) => (
              <New
                key={index}
                id={n.id}
                title={n.title}
                date={n.date}
                brief={n.brief}
                img={n.img}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionNews>
  );
}
