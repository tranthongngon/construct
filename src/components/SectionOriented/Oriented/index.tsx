import { Link } from "react-router-dom";
import { styled } from "@mui/material";
type OrientedProps = {
  title: string;
  excerpt: string;
  img: string;
  index: number;
};

export default function Oriented(props: OrientedProps) {
  const Oriented = styled(Link)(({ theme }) => ({
    span: {
      color: theme.palette.grey.A700,
    },
    p: {
      color: theme.palette.grey.A700,
      fontSize: "12px",
      letterSpacing: "2px",
      paddingBottom: "20px",
      borderBottom: `1px solid ${theme.palette.secondary.contrastText}`,
    },
    h4: {
      textTransform: 'capitalize',
      marginBottom: "10px",
      fontSize: '30px',
      fontWeight: 400,
      color: theme.palette.common.white,
    },
  }));
  return (
    <Oriented className="oriented__item" to="/oriented">
      <div className="oriented__item-content">
        <img src={props.img} alt={props.title} />
        <div className="oriented__item-text">
          <span className="oriented__item-index">0{props.index + 1}</span>
          <div className="oriented__item-wrap">
            <h4>{props.title}</h4>
            <p>{props.excerpt}</p>
          </div>
        </div>
      </div>
    </Oriented>
  );
}
