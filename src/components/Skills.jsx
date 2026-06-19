import React from "react";
import { Code, Layers, Database, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="text-white" size={26} />,
    bg: "from-blue-500 to-cyan-500",
    pillStyle: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    skills: ["JavaScript (ES6+)", "TypeScript", "C++", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend & Frameworks",
    icon: <Layers className="text-white" size={26} />,
    bg: "from-pink-500 to-purple-500",
    pillStyle: "bg-pink-500/10 text-pink-300 border-pink-500/30",
    skills: [
      "Next.js",
      "React.js",
      "Redux Toolkit",
      "Prisma",
      "Convex",
      "Express.js",
      "Recharts",
      "shadcn/ui",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="text-white" size={26} />,
    bg: "from-green-500 to-emerald-500",
    pillStyle: "bg-green-500/10 text-green-300 border-green-500/30",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="text-white" size={26} />,
    bg: "from-orange-500 to-red-500",
    pillStyle: "bg-orange-500/10 text-orange-300 border-orange-500/30",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Clerk",
      "Render",
      "Neon",
      "Upstash",
      "VS Code",
      "CI/CD",
    ],
  },
  {
    title: "AI / GenAI",
    icon: <Sparkles className="text-white" size={26} />,
    bg: "from-violet-500 to-purple-600",
    pillStyle: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    skills: [
      "LangChain",
      "RAG Pipelines",
      "Prompt Engineering",
      "OpenAI API",
      "Gemini",
      "Embeddings",
      "Pinecone",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div data-reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            A comprehensive toolkit for creating modern, intelligent web experiences
          </p>
          <div className="w-28 h-1 mt-4 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
        </div>

        {/* Skill Cards */}
        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-700 bg-slate-800/60 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-slate-500 group"
            >
              <div className="flex flex-col items-center p-5 text-center">
                <div
                  className={`w-12 h-12 mb-3 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.bg} shadow-md group-hover:shadow-lg transition-shadow`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold mb-4 text-white tracking-wide uppercase">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${cat.pillStyle} transition-colors hover:brightness-125`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Tags */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-14">
          <div className="px-4 py-2 bg-yellow-400/10 border border-yellow-500 text-yellow-300 rounded-full text-sm">
            💡 Always Learning
          </div>
          <div className="px-4 py-2 bg-green-400/10 border border-green-500 text-green-300 rounded-full text-sm">
            💬 Open to Collaborate
          </div>
          <div className="px-4 py-2 bg-violet-400/10 border border-violet-500 text-violet-300 rounded-full text-sm">
            🤖 AI Enthusiast
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
