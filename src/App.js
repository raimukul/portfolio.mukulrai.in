import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Index";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Navigation/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MouseParticles from "react-mouse-particles";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <MouseParticles
          g={1}
          color="random"
          cull="MuiSvgIcon-root,MuiButton-root"
          level={6}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
