import React from "react";
import { styled } from "@mui/material";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import ButtonLink from "../ButtonLink";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { data } from "./data";
import './style.scss';

export default function SectionPartner() {
  const SectionPartner = styled("section")(({ theme }) => ({
    background: theme.palette.primary.main,
    '.section__partner-head': {
        p: {
            color: theme.palette.grey[500],
            maxWidth: '600px',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '16px'
        }
    }
  }));
  return (
    <SectionPartner className="section__partner section">
      <div className="container">
        <div className="section__partner-wrap">
          <div className="section__partner-head">
            <SubTitle text="our partner"></SubTitle>
            <TitleSection
              text="shareholder relations"
              color="#fff"
            ></TitleSection>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
            <ButtonLink to="/partner" text="view more"></ButtonLink>
          </div>
          <div className="section__partner-content">
            <ImageList
              variant="quilted"
              sx={{ width: "100%", height: "auto" }}
              cols={4}
              rowHeight={180}
              gap={0}
            >
              {data.map((item, index) => (
                <ImageListItem key={index} cols={item.col} rows={item.row}>
                  <img src={item.img} alt="construct" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </SectionPartner>
  );
}
