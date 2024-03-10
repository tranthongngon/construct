import { styled } from "@mui/material";
type FutureProps = {
  title: string;
  number: string;
  img: string;
};
import { Link } from "react-router-dom";

export default function Future(props: FutureProps) {
  const Future = styled(Link)(({ theme }) => ({
    "@media (min-width:992px)": {
      "&:hover": {
        ".future__item-img": {
          boxShadow: `5px 5px 4px ${theme.palette.primary.main}`,
        },
      },
    },
    "@media (max-width:991px)": {
      ".future__item-img": {
        boxShadow: `5px 5px 4px ${theme.palette.primary.main}`,
      },
    },
    ".future__item-img": {
      transition: "all 0.3s",
    },
    ".future__item-text": {
      "&-number": {
        color: theme.palette.secondary.contrastText,
        fontStyle: "italic",
        fontSize: "16px",
      },
      "&-title": {
        color: theme.palette.text.primary,
        fontSize: "20px",
        fontWeight: 400,
        textTransform: "capitalize",
      },
    },
  }));
  return (
    <Future className="future__item" to="/future">
      <div className="future__item-img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="future__item-text">
        <span className="future__item-text-number">{props.number}</span>
        <h4 className="future__item-text-title">{props.title}</h4>
      </div>
    </Future>
  );
}
