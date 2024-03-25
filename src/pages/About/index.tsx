import React from "react";
import SectionBanner from "../../components/SectionBanner";
import Banner from "../../assets/images/banner_1.jpeg";
import Banner2 from "../../assets/images/banner_2.jpeg";
import SectionTeam from "../../components/SectionTeam";
import SectionOriented from "../../components/SectionOriented";
import SectionSafe from "../../components/SectionSafe";

export default function About() {
  return (
    <div className="site__about">
      <SectionBanner
        img={Banner}
        title1="we are construct"
        title2="we are one team"
        class=""
        just="flex-start"
        align="center"
      />
      <SectionTeam />
      <SectionOriented />
      <SectionBanner
        img={Banner2}
        title1="We start new journeys."
        title2="provide beautiful homes"
        class="section"
        just="center"
        align="center"
      />
      <SectionSafe/>
    </div>
  );
}
