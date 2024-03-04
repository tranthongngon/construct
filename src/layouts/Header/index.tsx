import React from "react";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { styled } from "@mui/material/styles";
import "./style.scss";

export default function Header() {
  const theme = useTheme();
  const Header = styled("header")(({ theme }) => ({
    background: theme.palette.primary.dark,
    padding: "10px 0",
    color: theme.palette.common.white,
    ".header__wrap": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
      ".header__logo": {
        width: "100px",
      },
      ".header__left": {
        '&-left': {
          background: 'transparent',
          width: '30px',
          height: '30px',
          border: 'none',
          outline: 'none'
        }
      }
    },
  }));
  return (
    <Header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__left">
            <button className="header__left-btn">
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
