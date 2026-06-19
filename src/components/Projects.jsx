import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filters = ["All", "Full-Stack", "Backend", "React", "Animation", "Clone"];

  const projects = [
    {
      title: "Creatr – AI Content Platform",
      description:
        "Full-stack Generative AI platform on Next.js App Router integrating LLM APIs for AI-driven content generation with streaming responses (SSE), prompt templating, and event-driven analytics via Convex.",
      image:
        "https://media.istockphoto.com/id/2197955227/photo/humans-are-using-laptops-and-computers-to-interact-with-ai-helping-them-create-code-train-ai.jpg?s=612x612&w=0&k=20&c=LQF82XJxK0LeBcUUWD2SGOt_5r9PCo35Lx6wWtK8HnY=",
      technologies: ["Next.js", "Convex", "Clerk", "LLM APIs", "Tailwind CSS"],
      category: "Full-Stack",
      demoLink: "https://ai-creator-platform-suu7.vercel.app/",
      githubLink: "https://github.com/JiteshJain123/ai-creator-platform",
      featured: true,
    },
    {
      title: "FinSight – Finance Tracker",
      description:
        "Full-stack personal finance system with CRUD operations, budget enforcement logic, normalized PostgreSQL schemas with Prisma ORM, and real-time analytics charts.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Docker", "Redis", "Recharts", "shadcn/ui"],
      category: "Full-Stack",
      demoLink: "https://finance-tracker-wpg1.vercel.app/",
      githubLink: "https://github.com/JiteshJain123/finance-tracker",
      featured: true,
    },
    {
      title: "Trendify",
      description:
        "Backend-driven trending content API using Node.js, Express, and MongoDB with real-time data scraping and RESTful endpoints served via an EJS-rendered frontend.",
      image:
        "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "REST API"],
      category: "Backend",
      demoLink: "https://trendify-ujjw.onrender.com/",
      githubLink: "https://github.com/JiteshJain123/Trendify",
      featured: true,
    },
    {
      title: "ViewVault – Entertainment Dashboard",
      description:
        "High-performance movie discovery platform with infinite scroll pagination, multi-parameter advanced filters, and real-time TMDB REST API integration. Achieved 40% faster UI rendering via memoized Redux Toolkit state slices.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
      technologies: ["React.js", "Redux Toolkit", "TMDB API", "JavaScript (ES6+)"],
      category: "React",
      demoLink: "https://view-vault-beige.vercel.app",
      githubLink: "https://github.com/JiteshJain123/ViewVault",
      featured: true,
    },
    {
      title: "Obys Agency Clone",
      description:
        "A creative, scroll-animated web clone using GSAP and Locomotive Scroll with smooth interactions and premium visual effects.",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Locomotive Scroll"],
      category: "Animation",
      demoLink: "https://jiteshjain123.github.io/Obys-agency/",
      githubLink: "https://github.com/JiteshJain123/Obys-agency",
      featured: true,
    },
    {
      title: "Myntra Clone",
      description:
        "A pixel-perfect static replica of Myntra's homepage showcasing modern e-commerce design patterns and responsive layout.",
      image:
        "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["HTML5", "CSS3"],
      category: "Clone",
      demoLink: "https://jiteshjain123.github.io/Myntra_Clone/",
      githubLink: "https://github.com/JiteshJain123/Myntra_Clone",
      featured: false,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div data-reveal className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Production-grade applications spanning AI platforms, full-stack systems, and polished UIs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div data-reveal className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedCategory(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                selectedCategory === filter
                  ? "bg-white text-slate-900 border-white shadow-md"
                  : "bg-transparent border-slate-600 text-gray-300 hover:border-white hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 bg-yellow-500 text-slate-900 px-2.5 py-0.5 rounded-full text-xs font-bold z-10">
                  Featured
                </div>
              )}

              {/* Image + hover overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-5 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 border border-slate-500 rounded-lg text-white text-sm font-medium hover:bg-slate-600 transition-colors"
                  >
                    <FaGithub size={15} /> Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white text-sm font-medium hover:bg-blue-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={13} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-700/80 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer links — always visible */}
                <div className="flex gap-4 pt-4 border-t border-slate-700/60">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    <FaGithub size={13} /> Source Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <FaExternalLinkAlt size={11} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
