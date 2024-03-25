import {useState} from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./themes/index.js";
import Header from "./layouts/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Future from "./pages/Future";
import Partner from "./pages/Partner";
import Project from "./pages/Project";
import Oriented from "./pages/Oriented";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import Footer from "./layouts/Footer";
import OffCanvas from "./layouts/OffCanvas";

export default function App() {
  const [isOffCanvas, setIsOffCanvas] = useState<boolean>(false);
  return (
    <ThemeProvider theme={themes}>
      <div className="site__app">
        <HashRouter>
          <Header handleClick={setIsOffCanvas}/>
          <OffCanvas handleClick={setIsOffCanvas} isShow={isOffCanvas}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/future" element={<Future />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/project" element={<Project />} />
            <Route path="/oriented" element={<Oriented />} />
          </Routes>
          <Footer/>
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}
