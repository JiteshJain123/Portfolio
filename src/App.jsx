import React, { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import CommandPalette from "./components/CommandPalette";
import ResumeViewer from "./components/ResumeViewer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollProgress from "./components/ScrollProgress";
import { UIProvider } from "./context/UIContext";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <UIProvider>
      <AnimatedBackground />
      <ScrollProgress />
      <div className="relative text-white scroll-smooth overflow-x-hidden">
        <Header />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Contacts />

        {/* Global overlays */}
        <CommandPalette />
        <ResumeViewer />
      </div>
    </UIProvider>
  );
}

export default App;
