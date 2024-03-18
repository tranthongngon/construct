import React from "react";
import IngArrow from "../../assets/images/arrow.png";
import { styled } from "@mui/material";
type ButtonLinkProps = {
  text: string;
  func?: (event?: React.MouseEvent<HTMLButtonElement>, prams?: any) => void,
  class?: string;
};

export default function ButtonLoad(props: ButtonLinkProps) {
  const ButtonLoad = styled('button')(({ theme }) => ({
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    background: 'transparent',
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: 1,
    padding: "10px 25px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: 'none',
    width: 'fit-content',
    letterSpacing: '2px',
    img: {
      width: "15px",
      height: "10px",
      marginLeft: '5px',
      transform: 'rotate(-45deg)'
    },
  }));
  return (
    <ButtonLoad className={`${props.class} btn-link`}>
      {props.text}
      <img src={IngArrow} alt={props.text} />
    </ButtonLoad>
  );
}
