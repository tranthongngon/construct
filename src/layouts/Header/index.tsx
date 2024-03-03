import React from "react";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  const theme = useTheme();
  return (
    <header className="header">
      <div className="container">
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
          
        </div>
      </div>
    </header>
  );
}
