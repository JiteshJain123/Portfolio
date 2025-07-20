import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              <span className="text-blue-400 text-sm font-medium">
                👋 Hello, I'm Jitesh
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Turning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Ideas
              </span>{" "}
              Into
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Interactive
              </span>{" "}
              Interfaces
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl">
              Hi, I'm Jitesh Jain — a full-stack developer who builds dynamic,
              responsive, and seamless web applications using React, Node.js,
              and MongoDB. I combine clean frontend design with robust backend
              logic to deliver smooth, scalable digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
              <Mail size={20} />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/JiteshJain123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={24} />
            </a>

            <a
              href="https://linkedin.com/in/jitesh-jain22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="/Jitesh_Jain_Resume.pdf"
              download
              className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors hover:scale-110 transform duration-200"
              title="Download Resume"
            >
              <i className="ri-upload-2-line text-xl text-white"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Image or GIF */}
        <div className="relative">
          <div className="relative w-80 h-80 mx-auto overflow-hidden rounded-3xl bg-slate-800 p-6 border border-slate-700 shadow-md">
            <img
              src="/home-dev.png" // Place the image in public folder or adjust if using from assets
              alt="Developer working on laptop"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
