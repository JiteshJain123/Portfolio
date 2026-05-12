import React from 'react';
import { Briefcase, Users } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Techronyx Solutions Pvt. Ltd., Pune",
    icon: <Briefcase size={20} />,
    duration: "Aug 2025 – Nov 2025",
    details: [
      "Developed and optimized production-grade front-end modules using modern web technologies.",
      "Built reusable, responsive UI components with strong focus on performance and clean UI/UX.",
      "Integrated frontend with backend REST APIs, implementing validation, error handling, and debugging improvements."
    ],
    color: "from-blue-500 to-cyan-500",
    dotColor: "bg-blue-500",
    shadowColor: "shadow-blue-500/30",
  },
  {
    title: "Technical Handler",
    company: "Rotaract Club — IIITM Gwalior",
    icon: <Users size={20} />,
    duration: "2023 – Present",
    details: [
      "Built and managed event websites using React.js.",
      "Handled deployment, debugging, and frontend performance optimization.",
      "Created interactive UI/UX experiences using GSAP and Locomotive Scroll."
    ],
    color: "from-green-500 to-teal-500",
    dotColor: "bg-green-500",
    shadowColor: "shadow-green-500/30",
  },
  {
    title: "Volunteer & Management",
    company: "Social Drives",
    icon: <Users size={20} />,
    duration: "2022 – Present",
    details: [
      "Organized and participated in cloth donation drives and social initiatives.",
      "Collaborated with student bodies to ensure smooth logistics and coordination.",
      "Worked with NGOs to spread awareness and increase campus participation."
    ],
    color: "from-purple-500 to-pink-500",
    dotColor: "bg-purple-500",
    shadowColor: "shadow-purple-500/30",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div data-reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Contributions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of learning, building, and giving back to the community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div data-reveal className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 mt-6 z-10">
                    <div className={`w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-slate-900 shadow-lg ${exp.shadowColor}`}></div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div
                      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6
                        hover:border-slate-500 hover:shadow-lg ${exp.shadowColor}
                        transition-all duration-300 hover:-translate-y-1`}
                    >
                      {/* Icon + Duration row */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} text-white w-fit`}>
                          {exp.icon}
                        </div>
                        <span className="text-xs font-medium text-gray-400 bg-slate-700/60 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                      <p className={`text-sm font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>
                        {exp.company}
                      </p>

                      <ul className="space-y-2">
                        {exp.details.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.dotColor}`}></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
