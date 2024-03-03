import React from "react";
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

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <div>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/future" element={<Future />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/project" element={<Project />} />
            <Route path="/Oriented" element={<Oriented />} />
          </Routes>
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}
