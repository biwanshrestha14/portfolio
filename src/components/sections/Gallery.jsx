import React from 'react';
import { ScrollReveal } from '../ui/FramerAnimations';
import GridMotion from '../ui/GridMotion';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-zinc-950/20">
      
      {/* Background glowing gradients */}
      <div className="absolute left-1/4 top-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">Creative Grid Motion</h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-mono">
            A dynamic, interactive showcase mapping photography dimensions onto fluid parallax coordinates.
          </p>
        </ScrollReveal>

        {/* Ported Grid Motion Component */}
        <ScrollReveal direction="up" delay={0.15}>
          <GridMotion />
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Gallery;
