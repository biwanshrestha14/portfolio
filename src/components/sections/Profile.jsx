import React from 'react';
import SpotlightCard from '../ui/SpotlightCard';
import { ScrollReveal } from '../ui/FramerAnimations';
import Magnetic from '../ui/Magnetic';

// Import tech stack images
import cssImage from "../../assets/images/css.png";
import djangoImage from "../../assets/images/django.png";
import dockerImage from "../../assets/images/docker.png";
import gitImage from "../../assets/images/git.png";
import htmlImage from "../../assets/images/html.png";
import jsImage from "../../assets/images/js.png";
import jwtImage from "../../assets/images/jwt.png";
import matplotlibImage from "../../assets/images/matplotlib.png";
import mongodbImage from "../../assets/images/mongodb.png";
import nodeImage from "../../assets/images/node.png";
import pandasImage from "../../assets/images/pandas.png";
import mysqlImage from "../../assets/images/pngwing.com (1).png";
import postmanImage from "../../assets/images/postman.png";
import profileImage from "../../assets/images/profile-pic (2).png";
import pythonImage from "../../assets/images/python.png";
import reactImage from "../../assets/images/react.png";
import tailwindImage from "../../assets/images/tailwind.png";
import typescriptImage from "../../assets/images/typescript.png";

// Import CV asset
import CV from '../../assets/docs/BiwanCV.pdf';

const Profile = () => {
  const proficientSkills = [
    { img: htmlImage, name: "HTML", color: "rgba(249, 115, 22, 0.15)" },
    { img: cssImage, name: "CSS", color: "rgba(59, 130, 246, 0.15)" },
    { img: jsImage, name: "JavaScript", color: "rgba(234, 179, 8, 0.15)" },
    { img: tailwindImage, name: "Tailwind", color: "rgba(6, 182, 212, 0.15)" },
    { img: gitImage, name: "Git", color: "rgba(239, 68, 68, 0.15)" },
    { img: reactImage, name: "React", color: "rgba(6, 182, 212, 0.15)" },
    { img: mysqlImage, name: "MySQL", color: "rgba(29, 78, 216, 0.15)" },
    { img: mongodbImage, name: "MongoDB", color: "rgba(34, 197, 94, 0.15)" },
  ];

  const intermediateSkills = [
    { img: nodeImage, name: "Node.js", color: "rgba(34, 197, 94, 0.12)" },
    { img: postmanImage, name: "Postman", color: "rgba(249, 115, 22, 0.12)" },
    { img: jwtImage, name: "JWT", color: "rgba(168, 85, 247, 0.12)" },
    { img: dockerImage, name: "Docker", color: "rgba(59, 130, 246, 0.12)" },
    { img: typescriptImage, name: "TypeScript", color: "rgba(29, 78, 216, 0.12)" },
    { img: djangoImage, name: "Django", color: "rgba(21, 128, 61, 0.12)" },
  ];

  const beginnerSkills = [
    { img: pythonImage, name: "Python ML/AI", color: "rgba(34, 197, 94, 0.1)" },
    { img: pandasImage, name: "Pandas", color: "rgba(30, 41, 59, 0.1)" },
    { img: matplotlibImage, name: "Matplotlib", color: "rgba(239, 68, 68, 0.1)" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Background radial effects */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase">Profile &amp; Skills</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">About &amp; Tech Stack</h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-mono">
            A cohesive bento layout showcasing my engineering expertise, academic profile, and core stack.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Bento Card 1: Main About Me & Demographics (Spans 2 columns) */}
          <ScrollReveal direction="right" className="lg:col-span-2 flex">
            <SpotlightCard spotlightColor="rgba(6, 182, 212, 0.08)" className="w-full flex flex-col justify-between border-cyan-500/10 h-full">
              <div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  {/* Hexagonal/Sleek styled profile pic */}
                  <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-60" />
                    <img 
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl bg-zinc-900 border border-white/10 z-10" 
                      src={profileImage} 
                      alt="Biwan Shrestha" 
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Introduction</span>
                    <h3 className="text-2xl font-black text-white mt-1">Biwan Shrestha</h3>
                    <h4 className="text-sm font-mono text-zinc-400">Software Developer / Backend Engineer</h4>
                    
                    <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-mono text-zinc-500">
                      <span>📍 Hattiban, Lalitpur</span>
                      <span>•</span>
                      <span>🎓 Tribhuvan University</span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light mb-8">
                  Hi, I am Biwan, a final year CSIT student at Tribhuvan University with a strong interest in web development and backend engineering. I work with modern front-end tools such as HTML, CSS, JavaScript, and React to build responsive, user-focused interfaces, alongside Node.js and Django for constructing secure, scalable server-side systems.
                  I enjoy solving problems, writing clean code, and turning ideas into working products. I stay consistent with learning new technologies, improving development practices, and building real projects.
                </p>
              </div>

              {/* Core demographics info cards at bottom */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.05]">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Education</div>
                  <div className="text-xs font-bold text-white mt-1">B.Sc. CSIT (4th Year)</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Focus Area</div>
                  <div className="text-xs font-bold text-white mt-1">Backend &amp; Scale</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Languages</div>
                  <div className="text-xs font-bold text-white mt-1">English, Nepali, Hindi</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Interests</div>
                  <div className="text-xs font-bold text-white mt-1">Travel, Music, Anime</div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Bento Card 2: Interactive Stats & CV Download (Spans 1 column) */}
          <ScrollReveal direction="left" className="flex">
            <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.08)" className="w-full flex flex-col justify-between border-purple-500/10 h-full">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Capabilities</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-4">Core Strengths</h3>
                
                <ul className="space-y-4">
                  {[
                    { title: "Scalable Backends", desc: "Constructing robust microservices with Node/Express & Django." },
                    { title: "Responsive UIs", desc: "Crafting modular, fluid interfaces with React and Tailwind CSS." },
                    { title: "Structured DBs", desc: "Optimizing relational (MySQL) and flexible (MongoDB) databases." },
                    { title: "Team Collaboration", desc: "Agile workflows, Git control, and strong communication." }
                  ].map((strength, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white">{strength.title}</h4>
                        <p className="text-[11px] text-zinc-400 leading-normal">{strength.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CV Action */}
              <div className="pt-6 mt-6 border-t border-white/[0.05]">
                <Magnetic range={40} className="w-full">
                  <a
                    href={CV}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-500/10 hover:bg-purple-500 text-purple-300 hover:text-white border border-purple-500/25 transition-all text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download CV / Resume
                  </a>
                </Magnetic>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Bento Card 3: Proficient Stack (Spans full width or 2 columns) */}
          <ScrollReveal direction="right" className="lg:col-span-2 flex">
            <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.08)" className="w-full border-green-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">Proficient Technologies</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {proficientSkills.map((tech, idx) => (
                  <div key={idx} className="group relative">
                    <div 
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)' }}
                      className="relative overflow-hidden rounded-xl border border-white/[0.05] hover:border-green-500/30 p-4 h-24 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/5 group"
                    >
                      {/* Subtly colored backdrop shine */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
                      />
                      <img
                        className="w-8 h-8 object-contain mb-2 transition-transform duration-300 group-hover:scale-110 z-10"
                        src={tech.img}
                        alt={tech.name}
                      />
                      <h4 className="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors text-center font-bold z-10">
                        {tech.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Bento Card 4 & 5 Combined: Intermediate & Beginner Stacks (Spans 1 column) */}
          <ScrollReveal direction="left" className="flex flex-col gap-6">
            
            {/* Intermediate Card */}
            <SpotlightCard spotlightColor="rgba(234, 179, 8, 0.08)" className="w-full flex-1 border-yellow-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Intermediate</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {intermediateSkills.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center justify-center p-2 rounded-lg border border-white/[0.03] bg-zinc-950/20 hover:border-yellow-500/20 transition-all group"
                  >
                    <img className="w-6 h-6 object-contain mb-1 transition-transform group-hover:scale-105" src={tech.img} alt={tech.name} />
                    <span className="text-[8px] font-mono text-zinc-500 group-hover:text-zinc-300 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            {/* Beginner Card */}
            <SpotlightCard spotlightColor="rgba(239, 68, 68, 0.08)" className="w-full border-red-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Developing</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {beginnerSkills.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center justify-center p-2 rounded-lg border border-white/[0.03] bg-zinc-950/20 hover:border-red-500/20 transition-all group"
                  >
                    <img className="w-6 h-6 object-contain mb-1 transition-transform group-hover:scale-105" src={tech.img} alt={tech.name} />
                    <span className="text-[8px] font-mono text-zinc-500 group-hover:text-zinc-300 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default Profile;
