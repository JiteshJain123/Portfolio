import React from 'react';
import { Briefcase, Mic, Users } from 'lucide-react';

const experiences = [
  {
    title: "Technical Handler - Rotaract Club [IIITM Gwalior]",
    icon: <Briefcase size={24} />,
    duration: "2023 - Present",
    details: [
      "Built and managed event websites using React.js.",
      "Handled deployment, debugging, and frontend performance.",
      "Created interactive UI/UX with GSAP and Locomotive Scroll."
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Volunteer & Management - Social Drives",
    icon: <Users size={24} />,
    duration: "2022 - Present",
    details: [
      "Organized and participated in cloth donation drives.",
      "Collaborated with student bodies to ensure smooth logistics.",
      "Coordinated with NGOs and spread awareness on campus."
    ],
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Anchor - Korero Event",
    icon: <Mic size={24} />,
    duration: "Tech Fest 2023",
    details: [
      "Hosted the event and engaged the audience throughout sessions.",
      "Collaborated with speakers and tech clubs for smooth flow.",
      "Helped manage schedules and transitions on stage."
    ],
    color: "from-purple-500 to-pink-500"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Contributions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of learning, building, and giving back to the community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl
                        transform transition-transform duration-500 hover:scale-110 hover:border-slate-600 
                        hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} w-fit text-white mb-4`}>
                {exp.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
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
