import React from "react";
import { styled } from "@mui/material";
import SectionGallery from "../../components/SectionGallery";
import TitleSection from "../../components/TitleSection";
import SubTitle from "../../components/SubTitle";
import SectionForm from "../../components/SectionForm";
import SectionBanner from "../../components/SectionBanner";
import BgContact from "../../assets/images/bg-contact.jpeg";
import Section from "../Future/Section";

export default function Contact() {
  const Contact = styled("div")(({ theme }) => ({}));
  return (
    <Contact className="site__contact">
      <SectionBanner
        img={BgContact}
        title1="Contact Us"
        title2="Build your beautiful house"
        align="center"
        just="center"
        class=""
      />
      <SectionForm />
      <section className="section">
        <div className="container">
          <div className="section__news-head">
            <SubTitle text="Our gallery" />
            <TitleSection text="Popular image" color="#141414" />
          </div>
          <SectionGallery />
        </div>
      </section>
    </Contact>
  );
}
