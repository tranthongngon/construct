import { Link } from "react-router-dom";
import IngArrow from "../../assets/images/arrow.png";
import { styled } from "@mui/material";
type ButtonLinkProps = {
  to: string;
  text: string;
  class?: string;
};

export default function ButtonLink(props: ButtonLinkProps) {
  const ButtonLink = styled(Link)(({ theme }) => ({
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
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
    <ButtonLink to={props.to} className={`${props.class} btn-link`}>
      {props.text}
      <img src={IngArrow} alt={props.text} />
    </ButtonLink>
  );
}
