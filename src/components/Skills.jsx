import React from 'react';
import { Code, Palette, Settings, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-white" size={28} />,
      bg: 'from-blue-500 to-cyan-500',
      bullet: 'bg-cyan-400',
      skills: ['Node.js','Express.js','MongoDB','EJS','React.js', 'Redux', 'JavaScript', 'HTML5', 'CSS3','C++','C','Tailwind CSS'],
    },
    {
      title: 'Animation',
      icon: <Palette className="text-white" size={28} />,
      bg: 'from-pink-500 to-purple-500',
      bullet: 'bg-pink-400',
      skills: ['GSAP', 'ScrollTrigger', 'Locomotive Scroll', 'Framer Motion'],
    },
    {
      title: 'Tools',
      icon: <Settings className="text-white" size={28} />,
      bg: 'from-green-500 to-emerald-500',
      bullet: 'bg-green-400',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel','Render'],
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-white" size={28} />,
      bg: 'from-orange-500 to-red-500',
      bullet: 'bg-orange-400',
      skills: ['Communication', 'Teamwork', 'Creativity', 'Writing'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Expertise</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            A comprehensive toolkit for creating modern, interactive web experiences
          </p>
          <div className="w-28 h-1 mt-4 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className={`rounded-xl border border-slate-700 bg-slate-800/60 backdrop-blur-md transition-transform duration-500 hover:scale-110 hover:shadow-[0_0_30px] group hover:border-slate-500`}
            >
              <div className="flex flex-col items-center p-6 text-center">
                <div
                  className={`w-14 h-14 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.bg} group-hover:shadow-lg transition-shadow`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className={`w-2.5 h-2.5 rounded-full ${cat.bullet}`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Tags */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16">
          <div className="px-4 py-2 bg-yellow-400/10 border border-yellow-500 text-yellow-300 rounded-full text-sm">
            💡 Always Learning
          </div>
          <div className="px-4 py-2 bg-green-400/10 border border-green-500 text-green-300 rounded-full text-sm">
            💬 Open to Collaborate
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
