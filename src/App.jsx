import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Home from "./sections/home";
import Contact from "./sections/contact";
import Work from "./sections/work";

import "./styles/App.scss";
import { ThemeProvider } from "./theme";
import SkillSection from "./sections/skills";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div
      id="App"
      className="max-w-[1440px] mx-auto bg-slate-100 dark:bg-dark dark:text-teal-100"
    >
      <ThemeProvider>
        <Navbar />
        <Home />
        <SkillSection />
        <Work />
        <Contact />
      </ThemeProvider>
    </div>
  );
}
export default App;
