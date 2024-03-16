import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/logo.png";
import { styled } from "@mui/material";
import './style.scss';

export default function Footer() {
  const Footer = styled("footer")(({ theme }) => ({
    background: theme.palette.primary.dark,
    color: theme.palette.common.white,
    ".section__footer-nav": {
      a: {
        color: theme.palette.common.white,
      },
    },
    ".section__footer-copy": {
      background: theme.palette.secondary.dark,
    },
  }));
  return (
    <Footer className="section__footer">
      <div className="container">
        <div className="section__footer-wrap">
          <div className="section__footer-logo">
            <Link to="/">
              <img src={FooterLogo} alt="construct" />
            </Link>
          </div>
          <div className="section__footer-nav">
            <ul className="section__footer-nav-menu">
              <li className="section__footer-nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="section__footer-nav-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="section__footer-nav-item">
                <Link to="/news">News</Link>
              </li>
              <li className="section__footer-nav-item">
                <Link to="/future">Future</Link>
              </li>
              <li className="section__footer-nav-item">
                <Link to="/project">Project</Link>
              </li>
              <li className="section__footer-nav-item">
                <Link to="/oriented">Oriented</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section__footer-copy">
        Construct {new Date().getFullYear()}. All rights Reserved.
      </div>
    </Footer>
  );
}
