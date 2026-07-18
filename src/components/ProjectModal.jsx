import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Target, Workflow, Sparkles, Bug, Lightbulb, ChevronRight } from "lucide-react";
import Modal from "./Modal";

const SectionTitle = ({ icon, children, accent }) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className={`p-1.5 rounded-lg bg-gradient-to-br ${accent} text-white shadow-md`}>
        <Icon size={15} />
      </span>
      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200">{children}</h4>
    </div>
  );
};

// Architecture flow: labelled nodes connected by arrows.
// Vertical on mobile, horizontal on wider screens.
const ArchDiagram = ({ nodes }) => (
  <div className="flex flex-col md:flex-row md:flex-wrap md:items-stretch gap-2.5">
    {nodes.map((n, i) => (
      <React.Fragment key={n.label}>
        <div className="relative flex-1 min-w-[140px] rounded-xl border border-slate-700/80 bg-slate-800/60 p-3.5 overflow-hidden group/node hover:border-slate-500 transition-colors">
          <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${n.color}`} />
          <div className="pl-1.5">
            <div className="text-sm font-bold text-white leading-tight">{n.label}</div>
            <div className="text-[11px] text-gray-400 mt-1 leading-snug">{n.sub}</div>
          </div>
        </div>
        {i < nodes.length - 1 && (
          <div className="flex items-center justify-center text-slate-600 md:rotate-0 rotate-90 self-center">
            <ChevronRight size={18} />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  const open = Boolean(project);
  const cs = project?.caseStudy;

  return (
    <Modal open={open} onClose={onClose} labelledBy="project-modal-title" maxWidth="max-w-4xl">
      {project && (
        <div>
          {/* ── Hero banner ── */}
          <div className="relative h-40 sm:h-52 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />
            <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${project.accent}`} />
            <div className="absolute bottom-0 left-0 p-5 sm:p-7">
              <span className={`inline-block mb-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${project.accent} shadow`}>
                {project.category}
              </span>
              <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">{project.tagline}</p>
            </div>
          </div>

          <div className="p-5 sm:p-7 space-y-8">
            {/* ── Metrics + links ── */}
            <div className="flex flex-wrap items-center gap-3">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex-1 min-w-[100px] rounded-xl border border-slate-700/70 bg-slate-800/50 px-4 py-3 text-center"
                >
                  <div className={`text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${project.accent}`}>
                    {m.value}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${project.accent} hover:opacity-90 hover:scale-[1.02] transition-all`}
              >
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-slate-800 border border-slate-600 hover:border-slate-400 transition-colors"
              >
                <FaGithub size={14} /> Source Code
              </a>
            </div>

            {/* ── The Problem ── */}
            <section>
              <SectionTitle icon={Target} accent={project.accent}>The Problem</SectionTitle>
              <p className="text-sm text-gray-300 leading-relaxed">{cs.problem}</p>
            </section>

            {/* ── Architecture ── */}
            <section>
              <SectionTitle icon={Workflow} accent={project.accent}>Architecture</SectionTitle>
              <ArchDiagram nodes={cs.architecture} />
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-800/80 border border-slate-700 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {/* ── Key Features ── */}
            <section>
              <SectionTitle icon={Sparkles} accent={project.accent}>What It Does</SectionTitle>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {cs.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${project.accent}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Hardest Bug ── */}
            <section>
              <SectionTitle icon={Bug} accent={project.accent}>The Hardest Bug</SectionTitle>
              <div className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-4">
                <div className="text-sm font-bold text-white mb-1.5">{cs.hardestBug.title}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{cs.hardestBug.body}</p>
              </div>
            </section>

            {/* ── What I'd Do Differently ── */}
            <section>
              <SectionTitle icon={Lightbulb} accent={project.accent}>What I'd Do Differently</SectionTitle>
              <ul className="space-y-2.5">
                {cs.learnings.map((l, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-slate-800 border border-slate-600 text-[11px] font-bold text-gray-400 flex items-center justify-center">
                      {i + 1}
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
