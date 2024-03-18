import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { data } from "./data";
import { useMediaQuery, useTheme } from "@mui/material";

export default function SectionGallery() {
  const theme = useTheme();
  const matchesXS = useMediaQuery('(max-width:767px)');
  
  return (
    <ImageList
      variant="masonry"
      sx={{ width: "100%", height: "auto" }}
      cols={matchesXS ? 2 : 3}
      gap={8}
    >
      {data.map((item, index) => (
        <ImageListItem key={index}>
          <img src={item.img} alt="construct" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
