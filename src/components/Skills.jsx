import React from "react";
import { Code, Layers, Server, Database, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="text-white" size={26} />,
    bg: "from-blue-500 to-cyan-500",
    pillStyle: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: <Layers className="text-white" size={26} />,
    bg: "from-pink-500 to-purple-500",
    pillStyle: "bg-pink-500/10 text-pink-300 border-pink-500/30",
    skills: [
      "React.js",
      "Next.js (App Router / SSR / SSG)",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="text-white" size={26} />,
    bg: "from-indigo-500 to-blue-500",
    pillStyle: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST API Design",
      "Celery",
      "Prisma ORM",
      "SQLAlchemy",
      "JWT",
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
      "OpenAI / Gemini / Claude",
      "Embeddings",
      "Pinecone",
      "SSE",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="text-white" size={26} />,
    bg: "from-green-500 to-emerald-500",
    pillStyle: "bg-green-500/10 text-green-300 border-green-500/30",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Wrench className="text-white" size={26} />,
    bg: "from-orange-500 to-red-500",
    pillStyle: "bg-orange-500/10 text-orange-300 border-orange-500/30",
    skills: [
      "Docker",
      "GitHub Actions (CI/CD)",
      "Terraform",
      "AWS (ECS Fargate, ECR, RDS, ALB)",
      "GCP Cloud Run",
      "Vercel",
      "Render",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div data-reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="agt agt-purple">Expertise</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            A comprehensive toolkit for creating modern, intelligent web experiences
          </p>
          <div className="w-28 h-1 mt-4 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full bar-glow"></div>
        </div>

        {/* Skill Cards */}
        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-700/80 bg-slate-800/50 backdrop-blur-md p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-500 hover:shadow-2xl hover:shadow-black/30"
            >
              {/* Gradient top accent line */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${cat.bg} opacity-60 group-hover:opacity-100 transition-opacity`} />
              {/* Corner glow blob */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${cat.bg} opacity-[0.07] blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Header: icon + title + count */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.bg} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {cat.skills.length} skills
                    </span>
                  </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border ${cat.pillStyle} transition-all hover:brightness-125 hover:-translate-y-0.5`}
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
