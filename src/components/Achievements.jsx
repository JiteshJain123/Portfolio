import React from 'react';
import { Trophy, Award, Zap, Users } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy size={36} />,
    iconBg: "from-yellow-500 to-amber-500",
    glow: "shadow-yellow-500/20",
    border: "border-yellow-500/25 hover:border-yellow-500/50",
    tag: "Smart India Hackathon 2025",
    tagColor: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    result: "Semi-Finalist",
    resultColor: "from-yellow-400 to-amber-400",
    description:
      "Delivered a production-ready full-stack web solution for a real-world government problem statement — advancing among top national teams out of thousands of participants across India.",
    stats: [
      { icon: <Users size={14} />, label: "National Competition" },
      { icon: <Zap size={14} />, label: "Full-Stack Solution" },
    ],
    accentLine: "from-yellow-500 to-amber-500",
  },
  {
    icon: <Award size={36} />,
    iconBg: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/25 hover:border-orange-500/50",
    tag: "Amazon ML Challenge 2025",
    tagColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    result: "Quarter-Finalist",
    resultColor: "from-orange-400 to-red-400",
    description:
      "Advanced through competitive elimination rounds applying data-driven problem-solving and ML techniques under strict time constraints — ranked among top teams nationally.",
    stats: [
      { icon: <Users size={14} />, label: "Amazon Organised" },
      { icon: <Zap size={14} />, label: "ML / Data Science" },
    ],
    accentLine: "from-orange-500 to-red-500",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-slate-800/40">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div data-reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-5">
            <Trophy size={15} className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">National Level Recognition</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Achievements &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Awards
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Competitive milestones earned through building and problem-solving at a national scale
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* Cards */}
        <div data-reveal className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`relative bg-slate-800/70 border ${a.border} rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${a.glow} group overflow-hidden`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${a.accentLine} opacity-50 group-hover:opacity-90 transition-opacity`} />

              {/* Background glow blob */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${a.iconBg} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                {/* Icon + tag */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${a.iconBg} text-white shadow-xl ${a.glow} group-hover:scale-110 transition-transform duration-300`}>
                    {a.icon}
                  </div>
                  <span className={`px-3 py-1.5 rounded-xl border text-xs font-semibold ${a.tagColor}`}>
                    {a.tag}
                  </span>
                </div>

                {/* Result title */}
                <h3 className={`text-3xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r ${a.resultColor}`}>
                  {a.result}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-5">{a.description}</p>

                {/* Stats row */}
                <div className="flex items-center gap-4">
                  {a.stats.map((s, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className="text-gray-500">{s.icon}</span>
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${a.accentLine} opacity-30 group-hover:opacity-60 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
