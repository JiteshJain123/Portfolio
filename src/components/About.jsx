import React from "react";
import { GraduationCap, MapPin, Calendar, Zap, Target, BookOpen, Globe } from "lucide-react";

const stats = [
  { val: "3+", label: "Years of Learning", color: "text-blue-400", glow: "hover:border-blue-500/50 hover:shadow-blue-500/10" },
  { val: "5+", label: "Projects Built", color: "text-purple-400", glow: "hover:border-purple-500/50 hover:shadow-purple-500/10" },
  { val: "2",  label: "National Awards", color: "text-amber-400", glow: "hover:border-amber-500/50 hover:shadow-amber-500/10" },
  { val: "1",  label: "Internship", color: "text-cyan-400", glow: "hover:border-cyan-500/50 hover:shadow-cyan-500/10" },
];

const highlights = [
  { icon: <Zap size={16} />, label: "AI-Powered Apps", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/25" },
  { icon: <Target size={16} />, label: "Production-Grade Code", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/25" },
  { icon: <BookOpen size={16} />, label: "DSA & System Design", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/25" },
  { icon: <Globe size={16} />, label: "Open to Global Roles", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/25" },
];

const currentFocus = [
  "Building production-grade full-stack applications with AI integration",
  "Integrating Generative AI (LLMs, RAG) into real-world products",
  "System Design & scalable backend architecture",
  "Contributing to open-source projects",
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/40">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div data-reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A driven developer who loves shipping intelligent, real-world products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-5 rounded-full" />
        </div>

        <div data-reveal className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT — Bio + Stats + Highlights ── */}
          <div className="space-y-7">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white leading-snug">
                Full-Stack Developer &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Creative Thinker
                </span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                I'm a passionate Full-Stack Developer specializing in building scalable web
                applications with a focus on AI-powered features. Currently pursuing my B.Tech
                at IIIT Gwalior, I leverage modern technologies like Next.js, Convex, and
                Prisma to build sleek frontends and robust, performant backends.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                My goal is to blend design and logic to create intelligent, user-centric
                digital experiences that not only look great but also solve complex,
                real-world problems.
              </p>
            </div>

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`bg-slate-800/60 border border-slate-700 ${s.glow} rounded-2xl p-5 transition-all duration-300 hover:shadow-lg group`}
                >
                  <div className={`text-4xl font-black ${s.color} mb-1 group-hover:scale-110 transition-transform duration-300 origin-left`}>
                    {s.val}
                  </div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Highlight chips */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div key={i} className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${h.bg}`}>
                  <span className={h.color}>{h.icon}</span>
                  <span className={`text-sm font-medium ${h.color}`}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Education + Current Focus ── */}
          <div className="space-y-5">

            {/* Education card */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-700/50 border-b border-slate-600">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <GraduationCap className="text-blue-400" size={20} />
                </div>
                <h4 className="text-lg font-bold text-white">Education</h4>
              </div>

              {/* B.Tech */}
              <div className="px-6 py-5 border-b border-slate-700/60">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="text-sm font-bold text-blue-400 leading-snug">
                    B.Tech — Electrical and Electronics Engineering
                  </h5>
                  <span className="flex-shrink-0 px-2.5 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold">
                    7.54 CGPA
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><MapPin size={11} /> ABV-IIITM Gwalior</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> 2023 – 2027</span>
                </div>
              </div>

              {/* Class XII */}
              <div className="px-6 py-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="text-sm font-bold text-gray-300 leading-snug">
                    Class XII — PCM
                  </h5>
                  <span className="flex-shrink-0 px-2.5 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-full text-xs font-bold">
                    90%
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><MapPin size={11} /> MSS Public School, Gwalior</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> 2021 – 2022</span>
                </div>
              </div>
            </div>

            {/* Current Focus card */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/20 rounded-2xl p-6">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Currently Focused On
              </h4>
              <ul className="space-y-2.5">
                {currentFocus.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
