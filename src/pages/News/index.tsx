import React from "react";
import SubTitle from "../../components/SubTitle";
import TitleSection from "../../components/TitleSection";
import { data } from "./data";
import New from "../../components/SectionNews/New";
import ButtonLoad from "../../components/ButtonLoad";
import "./style.scss";
import { styled } from "@mui/material";
import SectionGallery from "../../components/SectionGallery";
export default function News() {
  const NewsWrap = styled('div')(({theme}) => ({
    '.form-wrap' : {
      label: {
        color: theme.palette.common.black,
      },
      select: {
        color: theme.palette.common.black,
      }
    }
  }))
  return (
    <NewsWrap className="page__news">
      <div className="container">
        <div className="section__news section">
          <div className="section__news-head">
            <SubTitle text="News and blogs"></SubTitle>
            <TitleSection
              text="News of construct"
              color="#141414"
            ></TitleSection>
          </div>
          <div className="section__news-filter">
            <form className="section__news-form">
              <div className="form-wrap">
                <div className="form-control">
                  <label htmlFor="select-type">Choose type</label>
                  <select id="select-type" name="type" defaultValue="all">
                    <option value="all">All</option>
                    <option value="company">Company</option>
                    <option value="project">Project</option>
                    <option value="constrcut">Constrcut</option>
                  </select>
                </div>
              </div>
              <div className="form-wrap">
                <div className="form-control">
                  <label htmlFor="select-year">Choose year</label>
                  <select id="select-year" name="year" defaultValue="2024">
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
            </form>
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
            <div className="section__news-loadmore">
              <ButtonLoad text="Load more"></ButtonLoad>
            </div>
          </div>
        </div>
        <div className="section__news section">
          <div className="section__news-head">
            <SubTitle text="Our gallery"></SubTitle>
            <TitleSection
              text="Popular image"
              color="#141414"
            ></TitleSection>
          </div>
          <div className="section__news-gallery">
            <SectionGallery/>
          </div>
        </div>
      </div>
    </NewsWrap>
  );
}
