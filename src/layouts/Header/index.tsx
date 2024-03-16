import React from "react";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { styled } from "@mui/material/styles";
type HeaderProps = {
  handleClick: (isOffCanvas: boolean) => void
}

export default function Header(props: HeaderProps) {
  const Header = styled("header")(({ theme }) => ({
    background: theme.palette.primary.dark,
    padding: "10px 0",
    color: theme.palette.common.white,
    ".header__wrap": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ".header__logo": {
        width: "200px",
        a: {
          width: "100%",
          display: "block",
          img: {
            width: "100%",
            height: "40px",
            objectFit: "contain",
          },
        },
      },
      ".header__left": {
        "&-btn": {
          background: "transparent",
          width: "30px",
          height: "30px",
          border: "none",
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          svg: {
            fill: theme.palette.common.white,
          },
        },
      },
      ".header__languages": {
        display: "flex",
        alignItems: "center",
        button: {
          background: theme.palette.common.white,
          border: "none",
          padding: "2px 4px",
          borderRadius: "3px",
          lineHeight: 1,
          cursor: "pointer",
          margin: "5px",
        },
      },
      "@media (max-width:575px)": {
        ".header__logo": {
          width: "150px",
        },
      },
    },
  }));
  const showOffCanvas = () => {
    document.body.classList.add('noScroll');
    props.handleClick(true);
    
  }
  return (
    <Header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__left">
            <button className="header__left-btn" onClick={showOffCanvas}>
              <MenuIcon color="primary" />
            </button>
          </div>
          <div className="header__logo">
            <Link to="/">
              <img src={Logo} alt="construct" />
            </Link>
          </div>
          <div className="header__languages">
            <button>VN</button>|<button>EN</button>
          </div>
        </div>
      </div>
    </Header>
  );
}
