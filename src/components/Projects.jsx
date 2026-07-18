import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { projects, projectFilters } from "../data/projects";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div data-reveal className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="animated-gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Production-grade applications spanning AI platforms, full-stack systems, and polished UIs
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Click any project for the full case study — architecture, the hardest bug, and what I'd change.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5 rounded-full bar-glow"></div>
        </div>

        {/* Filter Buttons */}
        <div data-reveal className="flex flex-wrap justify-center gap-3 mb-12">
          {projectFilters.map((filter) => (
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
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              style={{ animationDelay: `${index * 90}ms` }}
              className="card-enter text-left relative bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-2.5 py-0.5 rounded-full text-xs font-bold z-10 shadow-lg shadow-amber-500/30">
                  Featured
                </div>
              )}

              {/* Image + hover overlay */}
              <div className="relative overflow-hidden shine-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                {/* Hover overlay prompting the case study */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/25 backdrop-blur-sm rounded-lg text-white text-sm font-semibold">
                    View Case Study <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-700/80 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-gray-500 text-xs px-1.5 py-1">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Footer links — always visible; stopPropagation so they don't open the modal */}
                <div className="flex gap-4 pt-4 border-t border-slate-700/60">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    <FaGithub size={13} /> Source Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <FaExternalLinkAlt size={11} /> Live Demo
                  </a>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

export default Projects;
