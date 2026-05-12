import React, { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
    <div className="bg-slate-900 text-white scroll-smooth overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
