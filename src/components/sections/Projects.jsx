import React from 'react';
import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from '../ui/FramerAnimations';
import TiltCard from '../ui/TiltCard';
import Magnetic from '../ui/Magnetic';

// Import project images
import bookstoreImage from "../../assets/images/bookstore.png";
import todoImage from "../../assets/images/todo.png";
import passfortImage from "../../assets/images/passfort.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bookstore (Ebon Stacks)",
      description:
        "A full-stack literary hub with intuitive search and elegant design, enabling seamless book collection management through a polished, responsive interface.",
      image: bookstoreImage,
      githubUrl: "https://github.com/biwanshrestha14/Ebon-Stacks",
      liveUrl: "https://github.com/biwanshrestha14/Ebon-Stacks",
      technologies: ["React", "Node.js", "MongoDB"],
      spotlight: "rgba(6, 182, 212, 0.15)", // Cyan
      badge: "Full Stack"
    },
    {
      id: 2,
      title: "PassFort Manager",
      description:
        "A sleek password manager with secure storage and intuitive design. Built with React, it features elegant gradients and a user-friendly interface for effortless credential management.",
      image: passfortImage,
      githubUrl: "https://github.com/biwanshrestha14/PassFort-Manager",
      liveUrl: "https://github.com/biwanshrestha14/PassFort-Manager",
      technologies: ["React", "Web Crypto API", "LocalStorage"],
      spotlight: "rgba(139, 92, 246, 0.15)", // Purple
      badge: "Security"
    },
    {
      id: 3,
      title: "TO-DO List App",
      description:
        "A clean, intuitive task management application built with React that helps users organize their daily responsibilities with modern design patterns.",
      image: todoImage,
      githubUrl: "https://github.com/biwanshrestha14/TO-DO-list-app",
      liveUrl: "https://github.com/biwanshrestha14/TO-DO-list-app",
      technologies: ["React", "CSS3", "JavaScript"],
      spotlight: "rgba(249, 115, 22, 0.15)", // Salmon
      badge: "Front End"
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950/40">
      
      {/* Background orbs */}
      <div className="absolute left-1/3 top-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-1/3 bottom-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">Featured Projects</h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-mono">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              direction="up" 
              delay={index * 0.15}
              className="flex"
            >
              <TiltCard className="group flex flex-col justify-between h-full w-full">
                
                {/* Image Container with organic zoom and tilt reveals */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-zinc-900 border-b border-white/[0.05]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase bg-zinc-950/80 backdrop-blur-md text-white rounded border border-white/[0.08]">
                    {project.badge}
                  </span>
                </div>

                {/* Project details card content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                      {project.title}
                    </h3>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 text-[10px] font-mono bg-white/[0.03] text-zinc-400 rounded border border-white/[0.05]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed text-pretty">
                      {project.description}
                    </p>
                  </div>

                  {/* Call To Actions */}
                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/[0.05]">
                    <Magnetic range={30}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-white transition-colors uppercase tracking-widest"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Magnetic>

                    <Magnetic range={30}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 hover:text-white transition-colors uppercase tracking-widest"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    </Magnetic>
                  </div>
                </div>

              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
