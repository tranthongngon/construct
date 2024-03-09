import SubTitle from "../SubTitle";
import { data } from "./data";
import Oriented from "./Oriented";
import {styled} from '@mui/material';
import "./style.scss";
import TitleSection from "../TitleSection";


export default function SectionOriented() {
  const SectionOriented = styled('section')(({theme})=> ({
    textAlign: 'center',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  }))
  return (
    <SectionOriented className="banner__oriented section">
      <div className="container">
        <div className="banner__oriented-head">
          <SubTitle text="construct feauture"></SubTitle>
          <TitleSection text="oriented" color="#fff"></TitleSection>
        </div>
        <div className="banner__oriented-content">
          <div className="banner__oriented-list">
            {data.map((o, index) => (
              <Oriented
                title={o.title}
                excerpt={o.excerpt}
                img={o.img}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionOriented>
  );
}
