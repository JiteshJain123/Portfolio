import React from 'react';
import { Briefcase, Users, Megaphone, CheckCircle2 } from 'lucide-react';

const internship = {
  title: "Full Stack Developer Intern",
  company: "Techronyx Solutions Pvt. Ltd.",
  location: "Pune, India",
  duration: "Aug 2025 – Nov 2025",
  color: "from-blue-500 to-cyan-500",
  details: [
    "Architected reusable, composable React.js component libraries enforcing atomic design principles and strict separation of presentation and logic layers.",
    "Applied memoization, code splitting, and lazy loading with dynamic imports to reduce bundle size and eliminate redundant re-render cycles.",
    "Built responsive, mobile-first layouts with Tailwind CSS and WCAG-aligned accessible components ensuring consistent UX across all screen sizes.",
    "Designed scalable RESTful API endpoints in Node.js / Express.js with middleware pipelines covering auth guards, input sanitization, and structured error handling.",
    "Managed client and server state with Redux Toolkit and React Query — implementing optimistic updates, cache invalidation, and background refetching.",
    "Diagnosed and resolved critical production defects by tracing full request-response lifecycles across frontend, middleware, and database layers.",
  ],
  tags: ["React.js", "Node.js", "Redux Toolkit", "Express.js", "Tailwind CSS", "REST API"],
};

const otherRoles = [
  {
    title: "Technical Head",
    company: "Rotaract Club",
    sub: "IIITM Gwalior",
    icon: <Users size={20} />,
    duration: "2023 – Present",
    badge: "Leadership",
    badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    color: "from-green-500 to-teal-500",
    dotColor: "bg-green-500",
    details: [
      "Led full-stack web development initiatives and delivered technical workshops on modern JavaScript frameworks.",
      "Built and managed event websites using React.js with performance optimization.",
      "Created interactive UI/UX experiences using GSAP and Locomotive Scroll.",
    ],
  },
  {
    title: "Media Cell Head",
    company: "EEE Department",
    sub: "IIITM Gwalior",
    icon: <Megaphone size={20} />,
    duration: "2023 – Present",
    badge: "Leadership",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    color: "from-amber-500 to-orange-500",
    dotColor: "bg-amber-500",
    details: [
      "Drove cross-platform digital content strategy and automated outreach workflows.",
      "Expanded the department's online presence and community engagement.",
    ],
  },
  {
    title: "Volunteer & Management",
    company: "Social Drives",
    sub: "Community Initiative",
    icon: <Users size={20} />,
    duration: "2022 – Present",
    badge: "Community",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    color: "from-purple-500 to-pink-500",
    dotColor: "bg-purple-500",
    details: [
      "Organized cloth donation drives and social initiatives with NGOs.",
      "Collaborated with student bodies to ensure smooth logistics and coordination.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div data-reveal className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Contributions
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A journey of learning, building, and giving back to the community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* ── Featured: Professional Internship ── */}
        <div data-reveal className="mb-8">
          <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-800/80 to-cyan-900/20 border border-blue-500/30 rounded-3xl p-8 overflow-hidden group hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            {/* Top shimmer */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="relative z-10">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold tracking-wide">
                        PROFESSIONAL
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white">{internship.title}</h3>
                    <p className="text-sm text-blue-300 font-semibold">
                      {internship.company} · {internship.location}
                    </p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-slate-700/70 border border-slate-600 text-gray-300 rounded-xl text-sm font-medium">
                  {internship.duration}
                </span>
              </div>

              {/* Bullet points */}
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                {internship.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                    <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {internship.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/25 text-blue-300 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider label */}
        <div data-reveal className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-slate-700" />
          <span className="text-xs text-gray-500 uppercase tracking-widest font-medium px-3">
            Leadership &amp; Community
          </span>
          <div className="flex-1 h-px bg-slate-700" />
        </div>

        {/* ── Other Roles: 3-col grid ── */}
        <div data-reveal className="grid md:grid-cols-3 gap-5">
          {otherRoles.map((role, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700 hover:border-slate-500 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 group"
            >
              {/* Icon + badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${role.color} text-white shadow-md`}>
                  {role.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${role.badgeColor}`}>
                  {role.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-0.5">{role.title}</h3>
              <p className={`text-xs font-semibold mb-0.5 text-transparent bg-clip-text bg-gradient-to-r ${role.color}`}>
                {role.company}
              </p>
              <p className="text-xs text-gray-500 mb-1">{role.sub}</p>
              <span className="inline-block text-xs text-gray-500 bg-slate-700/60 px-2.5 py-1 rounded-full mb-4">
                {role.duration}
              </span>

              {/* Bullets */}
              <ul className="space-y-2">
                {role.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${role.dotColor}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
