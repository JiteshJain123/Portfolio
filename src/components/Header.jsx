import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-1">
            <span className="text-blue-400">Jitesh</span>
            <span className="text-white">Jain</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Resume button — desktop only */}
          <a
            href="/Jitesh_Jain_Resume.pdf"
            download
            className="hidden md:flex items-center gap-2 border border-blue-500 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 group"
          >
            <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-slate-800 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start space-y-4 py-4 px-4 bg-slate-900/95 rounded-xl shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left text-gray-300 hover:text-blue-400 text-lg font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Jitesh_Jain_Resume.pdf"
              download
              className="flex items-center gap-2 border border-blue-500 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
