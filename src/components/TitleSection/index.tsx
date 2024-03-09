import React from "react";
import { styled } from "@mui/material";
type TitleSectionProps = {
  text: string;
  color: "#fff" | "#141414";
};

export default function TitleSection(props: TitleSectionProps) {
  const TitleSection = styled("h3")(({ theme }) => ({
    color: props.color,
    letterSpacing: "1px",
    marginTop: "5px",
    position: "relative",
    paddingBottom: "5px",
    fontWeight: 400,
    lineHeight: 1.2,
    width: "fit-content",
    textTransform: "capitalize",
    "&::before": {
      position: "absolute",
      width: "150px",
      height: "2px",
      left: '50%',
      transform: 'translateX(-50%)',
      background: theme.palette.secondary.contrastText,
      bottom: 0,
    },
  }));
  return <TitleSection className="f-title">{props.text}</TitleSection>;
}
