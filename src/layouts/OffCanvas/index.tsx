import React from "react";
import "./style.scss";
import { styled } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Back from "../../assets/images/back.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useSpring, animated } from "@react-spring/web";

type OffCanvasProps = {
    handleClick: (isOffCanvas: boolean) => void,
    isShow: boolean
}

export default function OffCanvas(props: OffCanvasProps) {
  const animationProps = useSpring({
    opacity: props.isShow ? 1 : 0,
    left: props.isShow ? '0px' : '-100%',
    config: { tension: 0, friction: 20 },
  });
  const OffCanvas = styled(animated.div)(({theme}) => ({
    background: theme.palette.text.disabled,
    color: theme.palette.common.white,
    '.offcanvas__wrap' : {
      background: theme.palette.primary.main,
    },
    '.offcanvas__logo' : {
      borderBottom: `0.5px solid ${theme.palette.secondary.main}`,
    },
    '.offcanvas__nav': {
      borderBottom: `0.5px solid ${theme.palette.secondary.main}`,
      '.offcanvas__nav-item': {
        a: {
          color: theme.palette.common.white,
          borderBottom: `1px solid ${theme.palette.primary.main}`,
          '&:hover' : {
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
          }
        }
      }
    },
    '.offcanvas__info-icon': {
      svg : {
        fill: theme.palette.secondary.main
      },
      '&:hover': {
        background: theme.palette.secondary.main,
        svg : {
          fill: theme.palette.common.white
        }
      }
    }
  }));
  const hideOffCanvas = () => {
    document.body.classList.remove('noScroll')
    props.handleClick(false);
  }
  return (
    <OffCanvas className={props.isShow ? 'site__offcanvas' : 'site__offcanvas'} style={animationProps}>
      <div className="offcanvas__wrap backInLeft">
        <div className="offcanvas__logo">
          <Link to="/">
            <img src={Logo} alt="construct" />
          </Link>
          <button type="button" onClick={hideOffCanvas}>
            <img src={Back} alt="construct" />
          </button>
        </div>
        <div className="offcanvas__nav">
          <ul className="offcanvas__nav-menu">
            <li className="offcanvas__nav-item">
              <Link onClick={hideOffCanvas} to="/about">About</Link>
            </li>
            <li className="offcanvas__nav-item">
              <Link onClick={hideOffCanvas} to="/contact">Contact</Link>
            </li>
            <li className="offcanvas__nav-item">
              <Link onClick={hideOffCanvas} to="/news">News</Link>
            </li>
            <li className="offcanvas__nav-item">
              <Link onClick={hideOffCanvas} to="/future">Future</Link>
            </li>
            <li className="offcanvas__nav-item">
              <Link onClick={hideOffCanvas} to="/project">Project</Link>
            </li>
            <li className="offcanvas__nav-item">
              <Link onClick={hideOffCanvas} to="/oriented">Oriented</Link>
            </li>
            <li className="offcanvas__nav-item">
                <Link onClick={hideOffCanvas} to="/partner ">Partner </Link>
              </li>
          </ul>
        </div>
        <div className="offcanvas__info">
            <h5>our information</h5>
            <div className="gmail">Gmail: contruct@gmail.com</div>
            <div className="offcanvas__info-icons">
                <button className="offcanvas__info-icon">
                    <FacebookIcon/>
                </button>
                <button className="offcanvas__info-icon">
                    <InstagramIcon/>
                </button>
                <button className="offcanvas__info-icon">
                    <XIcon/>
                </button>
                <button className="offcanvas__info-icon">
                    <PinterestIcon/>
                </button>
            </div>
        </div>
      </div>
    </OffCanvas>
  );
}
