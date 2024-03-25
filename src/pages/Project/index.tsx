import React from "react";
import { styled } from "@mui/material";
import SectionPopular from "../../components/SectionPopular";

export default function Project() {
  const Project = styled("div")(({ theme }) => ({}));
  return (
    <Project className="site__project">
      <SectionPopular />
    </Project>
  );
}
