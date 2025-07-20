import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filters = ["All","Backend","React", "Animation", "Clone"];

  const projects = [
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
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
