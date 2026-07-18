import React, { useState, useEffect } from "react";
import { Menu, X, Download, FileText, Search, Command } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useUI } from "../context/UIContext";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Writing", id: "writing" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(navItems.map((n) => n.id));
  const { openPalette, openResume } = useUI();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold flex items-center gap-1"
          >
            <span className="text-blue-400">Jitesh</span>
            <span className="text-white">Jain</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 justify-center gap-1">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    active ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-lg bg-slate-800/70 border border-slate-700/60" />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  {active && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions — desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={openPalette}
              aria-label="Open command palette"
              className="flex items-center gap-2 pl-2.5 pr-2 py-2 rounded-lg text-sm text-gray-400 bg-slate-800/70 border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              <Search size={14} />
              <span className="text-xs">Search</span>
              <kbd className="flex items-center gap-0.5 text-[10px] font-semibold text-gray-500 border border-slate-600 rounded px-1 py-0.5">
                <Command size={9} />K
              </kbd>
            </button>
            <button
              onClick={openResume}
              className="flex items-center gap-1.5 text-gray-300 px-3 py-2 rounded-lg text-sm font-semibold border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              <FileText size={15} /> Résumé
            </button>
            <a
              href="/Jitesh_Jain_Resume.pdf"
              download
              className="flex items-center gap-1.5 border border-blue-500 text-blue-400 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 group"
            >
              <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
              Download
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openPalette}
              aria-label="Open command palette"
              className="text-gray-300 p-2 rounded-md hover:bg-slate-800 transition"
            >
              <Search size={20} />
            </button>
            <button
              className="text-white p-2 rounded-md hover:bg-slate-800 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-stretch space-y-1 py-4 px-2 bg-slate-900/95 rounded-xl shadow-lg mb-2">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors duration-200 ${
                    active ? "text-white bg-slate-800/70" : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 border border-slate-600 text-gray-200 px-4 py-2.5 rounded-lg text-sm font-semibold"
              >
                <FileText size={15} /> View
              </button>
              <a
                href="/Jitesh_Jain_Resume.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 border border-blue-500 text-blue-400 px-4 py-2.5 rounded-lg text-sm font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download size={15} /> Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
