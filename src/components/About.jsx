import React from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-slate-700 rounded-full p-2 border-4 border-slate-600">
                <img
                  src="https://i.postimg.cc/SNHX90Fb/profile.jpg"
                  alt="Jitesh Jain"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating Emojis */}
            <div className="absolute top-8 right-8 bg-blue-500 p-3 rounded-xl animate-bounce delay-300">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute bottom-8 left-8 bg-purple-500 p-3 rounded-xl animate-bounce delay-700">
              <span className="text-2xl">🚀</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Frontend Developer & Creative Thinker
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a frontend developer passionate about building seamless and
                beautiful user experiences. Currently pursuing my B.Tech in EEE
                at IIIT Gwalior, I blend my love for design, logic, and
                storytelling to create meaningful digital products.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a
                passion for creating interactive web experiences that not only
                look great but also solve real problems.
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>

              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-blue-400">
                  B.Tech in Electrical and Electronics Engineering
                </h5>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>ABV-IIITM Gwalior</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>2023–2027 </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-400">Years Learning</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
