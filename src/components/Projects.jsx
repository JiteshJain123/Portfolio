import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Update the filters to include "Full-Stack"
  const filters = ["All", "Full-Stack", "Backend", "React", "Animation", "Clone"];

  const projects = [
    // New "Creatr" project added here
    {
      title: "Creatr – AI Content Platform",
      description:
        "An AI-powered platform built with Next.js, Convex, and Clerk. Features secure auth, post management, an analytics dashboard, and AI tools for content generation.",
      image:
        "https://media.istockphoto.com/id/2197955227/photo/humans-are-using-laptops-and-computers-to-interact-with-ai-helping-them-create-code-train-ai.jpg?s=612x612&w=0&k=20&c=LQF82XJxK0LeBcUUWD2SGOt_5r9PCo35Lx6wWtK8HnY=",
      technologies: ["Next.js", "Convex", "Clerk", "Tailwind CSS"],
      category: "Full-Stack",
      demoLink: "https://ai-creator-platform-topaz.vercel.app/",
      githubLink: "https://github.com/JiteshJain123/ai-creator-platform",
      featured: true,
    },
    {
      title: "FinSight – Personal Finance Tracker",
      description:
        "A full-stack financial tracker built with Next.js, Prisma, and PostgreSQL. It features robust budgeting, spending insights with real-time charts, and full transaction management.",
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
        "A backend-driven trending content API using Node.js, Express, EJS and MongoDB with real-time data scraping and RESTful endpoints.",
      image:
        "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "REST API"],
      category: "Backend",
      demoLink: "https://trendify-ujjw.onrender.com/",
      githubLink: "https://github.com/JiteshJain123/Trendify",
      featured: true,
    },
    {
      title: "ViewVault",
      description:
        "A category-based secure content manager built with React and Redux for organized digital asset management.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
      technologies: ["React", "Redux", "JavaScript", "CSS"],
      category: "React",
      demoLink: "https://view-vault-beige.vercel.app",
      githubLink: "https://github.com/JiteshJain123/ViewVault",
      featured: true,
    },
    {
      title: "Obys Agency Clone",
      description:
        "A creative, scroll-animated web clone using GSAP and Locomotive Scroll with smooth interactions.",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      category: "Animation",
      demoLink: "https://jiteshjain123.github.io/Obys-agency/",
      githubLink: "https://github.com/JiteshJain123/Obys-agency",
      featured: true,
    },
    {
      title: "Myntra Clone",
      description:
        "A pixel-perfect static replica of Myntra's homepage showcasing modern e‑commerce design patterns.",
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
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-4 bg-slate-900 text-white">
      <h2 data-reveal className="text-4xl font-bold text-center mb-10">Projects</h2>

      {/* Filter Buttons */}
      <div data-reveal className="flex flex-wrap justify-center gap-4 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedCategory(filter)}
            className={`px-4 py-2 rounded-full border transition duration-300 ${
              selectedCategory === filter
                ? "bg-white text-black"
                : "bg-transparent border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition duration-300">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-400"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;