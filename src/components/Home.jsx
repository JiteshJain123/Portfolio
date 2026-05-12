import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "AI App Builder",
  "Next.js Enthusiast",
  "Open Source Contributor",
];

const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 50, pause = 1500) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
};

const Home = () => {
  const typedRole = useTypewriter(roles);

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
                Intelligent
              </span>{" "}
              Interfaces
            </h1>

            <div className="flex items-center gap-2 text-xl font-medium text-cyan-400 h-8">
              <span>{typedRole}</span>
              <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse"></span>
            </div>

            <p className="text-xl text-gray-300 max-w-2xl">
              I'm a full-stack developer specializing in building AI-powered,
              scalable web applications. My expertise lies in Next.js and React,
              paired with modern backends like Convex and Prisma, and secure
              authentication using Clerk.
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
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex justify-center items-center">
          {/* Background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl pointer-events-none"></div>

          {/* Image with glowing border */}
          <div className="relative w-full max-w-xl lg:max-w-none mx-auto aspect-video overflow-hidden rounded-3xl border border-blue-500/25 shadow-2xl shadow-blue-500/15">
            <img
              src="/home-dev.png"
              alt="Developer working on laptop"
              className="w-full h-full object-cover object-center"
            />
            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </div>

          {/* Floating tech badges */}
          <div className="hidden sm:flex absolute top-4 -right-3 items-center gap-1.5 bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-400 shadow-lg shadow-blue-500/20 animate-bounce" style={{ animationDuration: "3s" }}>
            ⚡ Next.js
          </div>
          <div className="hidden sm:flex absolute bottom-8 -left-3 items-center gap-1.5 bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-400 shadow-lg shadow-purple-500/20 animate-bounce" style={{ animationDuration: "3.5s" }}>
            🚀 React
          </div>
          <div className="hidden sm:flex absolute top-1/2 -right-4 -translate-y-1/2 items-center gap-1.5 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-400 shadow-lg shadow-cyan-500/20 animate-bounce" style={{ animationDuration: "4s" }}>
            🔷 TypeScript
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
