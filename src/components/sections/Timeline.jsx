import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/FramerAnimations';
import SpotlightCard from '../ui/SpotlightCard';

const Timeline = () => {
  const timelineData = [
    {
      year: "2022 - Present",
      title: "B.Sc. Computer Science & IT",
      institution: "Tribhuvan University (Hattiban, Lalitpur)",
      description: "Final year CSIT student. Deep dive into algorithms, system architecture, database design, and software engineering principles. Consistent excellence in technical problem-solving.",
      tags: ["CSIT", "Algorithms", "System Architecture", "DBMS"],
      type: "education"
    },
    {
      year: "2023 - 2024",
      title: "Backend Engineering Focus",
      institution: "Self-Guided & Academics",
      description: "Architected secure APIs and solid backend microservices. Standardized token-based authentication (JWT), relational and non-relational database modeling (MySQL/MongoDB), and server containerization using Docker.",
      tags: ["Node.js", "Django", "Docker", "JWT", "REST APIs"],
      type: "skill"
    },
    {
      year: "2024 - 2025",
      title: "Full-Stack Development & Projects",
      institution: "Creative Lab & Independent",
      description: "Engineered scalable React front-ends integrated with Node/Django backends. Created high-performing projects like Ebon-Stacks Bookstore (React, Node, MongoDB) and PassFort Manager (React, LocalStorage, Encryption).",
      tags: ["React", "Tailwind CSS", "MERN Stack", "Git"],
      type: "experience"
    },
    {
      year: "Present",
      title: "Aspiring Software Engineer",
      institution: "Open for Opportunities",
      description: "Honing full-stack capabilities, modern web concepts, and software testing. Actively building robust products, learning advanced technologies, and seeking a professional software developer role to solve real-world problems.",
      tags: ["Full Stack", "Problem Solving", "Collaboration", "Clean Code"],
      type: "goal"
    }
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Academic &amp; Tech Timeline
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-mono">
            A linear progression of my academic qualifications and development milestones.
          </p>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 opacity-30 hidden md:block" />
          
          <div className="space-y-12 md:space-y-20">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col md:flex-row items-stretch">
                  
                  {/* Left Column (Content or Spacer) */}
                  <div className={`w-full md:w-1/2 pr-0 md:pr-12 flex justify-end order-2 ${isEven ? 'md:order-1' : 'md:order-3 md:invisible h-0 md:h-auto'}`}>
                    {isEven && (
                      <ScrollReveal direction="right" className="w-full">
                        <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.15)" className="h-full border-purple-500/10">
                          <div className="flex justify-between items-start gap-4 mb-3">
                            <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                              {item.year}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
                          <h4 className="text-xs font-mono text-zinc-400 mb-4">{item.institution}</h4>
                          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-6 font-light">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10px] font-mono bg-zinc-900 text-purple-300 px-2 py-0.5 rounded border border-white/[0.05]">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </SpotlightCard>
                      </ScrollReveal>
                    )}
                  </div>

                  {/* Center Node (Glow Indicator) */}
                  <div className="relative w-8 flex justify-center order-1 md:order-2 z-10 mb-4 md:mb-0">
                    <div className="w-4 h-4 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] md:mt-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    </div>
                  </div>

                  {/* Right Column (Content or Spacer) */}
                  <div className={`w-full md:w-1/2 pl-0 md:pl-12 flex justify-start order-3 ${!isEven ? 'md:order-3' : 'md:order-1 md:invisible h-0 md:h-auto'}`}>
                    {!isEven && (
                      <ScrollReveal direction="left" className="w-full">
                        <SpotlightCard spotlightColor="rgba(6, 182, 212, 0.15)" className="h-full border-cyan-500/10">
                          <div className="flex justify-between items-start gap-4 mb-3">
                            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                              {item.year}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
                          <h4 className="text-xs font-mono text-zinc-400 mb-4">{item.institution}</h4>
                          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-6 font-light">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10px] font-mono bg-zinc-900 text-cyan-300 px-2 py-0.5 rounded border border-white/[0.05]">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </SpotlightCard>
                      </ScrollReveal>
                    )}
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

export default Timeline;
