import React from "react";
import "./style.scss";
import { styled } from "@mui/material";
import ButtonLoad from "../ButtonLoad";
import { data } from "./data";

export default function SectionListProject() {
  const SectionListProject = styled("section")(({ theme }) => ({
    ".section__list-wrap": {
      border: `1px solid ${theme.palette.secondary.main}`,
      '.section__list-item-text' : {
        h4 : {
            color: theme.palette.text.primary
        },
        p: {
            color: theme.palette.text.secondary
        }
      }
    },
  }));
  return (
    <SectionListProject className="section__list section">
      <div className="container">
        <div className="section__list-items">
          {data.map((item, index) => (
            <div className="section__list-item">
              <div className="section__list-wrap" key={index}>
                <div className="section__list-item-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="section__list-item-text">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ButtonLoad text="Load More" />
      </div>
    </SectionListProject>
  );
}
