import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,102,241,0.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-12">

        {/* ── LEFT — text ── */}
        <div className="space-y-7 order-2 lg:order-1">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">Available for Opportunities</span>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <p className="text-gray-400 text-lg tracking-wide">Hi, I'm</p>
            <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
              <span className="text-white">Jitesh</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                Jain
              </span>
            </h1>
          </div>

          {/* Typewriter role */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex-shrink-0" />
            <div className="text-xl font-semibold text-cyan-400 flex items-center gap-2 min-h-[2rem]">
              <span>{typedRole}</span>
              <span className="inline-block w-0.5 h-5 bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
            Building{" "}
            <span className="text-white font-semibold">AI-powered, scalable web applications</span>{" "}
            with Next.js, React, and modern backends like Convex and Prisma.
            Semi-Finalist at{" "}
            <span className="text-amber-400 font-semibold">Smart India Hackathon 2025</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group border border-slate-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
              <Mail size={18} />
            </button>
          </div>

          {/* Social + quick stats */}
          <div className="flex items-center justify-between pt-5 border-t border-slate-700/60">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/JiteshJain123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800 border border-slate-700 rounded-lg hover:border-slate-500 hover:bg-slate-700 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/jitesh-jain22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-500/60 hover:bg-slate-700 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-300" />
              </a>
            </div>

            {/* Inline stats */}
            <div className="flex items-center gap-5">
              {[
                { val: "5+", label: "Projects", color: "text-blue-400" },
                { val: "1", label: "Internship", color: "text-purple-400" },
                { val: "2", label: "Awards", color: "text-amber-400" },
              ].map((s, i, arr) => (
                <React.Fragment key={i}>
                  <div className="text-center">
                    <div className={`text-xl font-bold ${s.color}`}>{s.val}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-8 bg-slate-700" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — Profile card ── */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Card glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl scale-90 pointer-events-none" />

          {/* Card */}
          <div className="relative w-full max-w-sm">
            <div className="relative bg-slate-800/70 backdrop-blur-2xl border border-slate-700/80 rounded-3xl p-8 shadow-2xl shadow-black/40">
              {/* Top shimmer line */}
              <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

              {/* Profile image */}
              <div className="relative mx-auto w-36 h-36 mb-6">
                {/* Spinning gradient ring */}
                <div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-spin opacity-80"
                  style={{ animationDuration: "6s" }}
                />
                <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden">
                  <img
                    src="https://i.postimg.cc/SNHX90Fb/profile.jpg"
                    alt="Jitesh Jain"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online dot */}
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-400 border-2 border-slate-800 rounded-full shadow-md shadow-emerald-500/50" />
              </div>

              {/* Name & title */}
              <div className="text-center mb-5">
                <h2 className="text-2xl font-bold text-white">Jitesh Jain</h2>
                <p className="text-sm text-gray-400 mt-1">Full-Stack Developer · AI Builder</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                  <MapPin size={11} /> ABV-IIITM Gwalior, India
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-700/60 mb-5" />

              {/* Tech stack chips */}
              <div className="mb-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AI / LLM"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-700/80 border border-slate-600 text-gray-300 text-xs rounded-full hover:border-blue-500/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume download */}
              <a
                href="/Jitesh_Jain_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                <Download size={15} />
                Download Resume
              </a>

              {/* Bottom shimmer line */}
              <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
            </div>

            {/* Floating badge — achievement */}
            <div className="absolute -top-5 -right-4 flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 backdrop-blur-sm px-3 py-2 rounded-xl text-xs font-semibold text-amber-300 shadow-lg shadow-amber-500/10 animate-bounce" style={{ animationDuration: "3s" }}>
              🏆 SIH 2025 Semi-Finalist
            </div>

            {/* Floating badge — internship */}
            <div className="absolute -bottom-5 -left-4 flex items-center gap-1.5 bg-blue-500/15 border border-blue-500/40 backdrop-blur-sm px-3 py-2 rounded-xl text-xs font-semibold text-blue-300 shadow-lg shadow-blue-500/10 animate-bounce" style={{ animationDuration: "4s" }}>
              💼 Intern @ Techronyx
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Home;
