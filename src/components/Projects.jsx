import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "ViewVault",
      description: "A category-based secure content manager built with React and Redux for organized digital asset management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      technologies: ["React", "Redux", "JavaScript", "CSS"],
      category: "React",
      demoLink: "https://view-vault-beige.vercel.app/",
      githubLink: "https://github.com/JiteshJain123/ViewVault",
      featured: true
    },
    {
      title: "Obys Agency Clone",
      description: "A creative, scroll-animated web clone using GSAP and Locomotive Scroll with smooth interactions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500",
      technologies: ["HTML5", "CSS3","JavaScript", "GSAP", "Locomotive"],
      category: "Animation",
      demoLink: "https://jiteshjain123.github.io/Obys-agency/",
      githubLink: "https://github.com/JiteshJain123/Obys-agency",
      featured: true
    },
    {
      title: "Myntra Clone",
      description: "A pixel-perfect static replica of Myntra's homepage showcasing modern e-commerce design patterns.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500",
      technologies: ["HTML5", "CSS3"],
      category: "Clone",
      demoLink: "https://jiteshjain123.github.io/Myntra_Clone/",
      githubLink: "https://github.com/JiteshJain123/Myntra_Clone",
      featured: false
    }
  ];

  const filters = ['All', 'React', 'Animation', 'Clone'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Check out my latest technical works</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mt-4 mx-auto rounded-full" />
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                  : "text-gray-300 border-gray-600 hover:bg-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="relative group bg-slate-800/40 rounded-2xl border border-slate-700 overflow-hidden hover:scale-[1.03] transition-all duration-500 shadow-lg"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-orange-500 text-black text-xs font-semibold rounded-full">
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-all"
                  >
                    <i className="ri-external-link-line text-xl"></i>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-gray-800 text-white flex items-center justify-center transition-all"
                  >
                    <i className="ri-github-fill text-xl"></i>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
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
