import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="bg-slate-900 text-white scroll-smooth overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contacts />
    </div>
  );
}

export default App;
