import React from "react";
import { styled } from "@mui/material";
import SectionPopular from "../../components/SectionPopular";
import SectionField from "../../components/SectionField";
import SectionListProject from "../../components/SectionListProject";

export default function Project() {
  const Project = styled("div")(({ theme }) => ({}));
  return (
    <Project className="site__project">
      <SectionPopular />
      <SectionField/>
      <SectionListProject/>
    </Project>
  );
}
