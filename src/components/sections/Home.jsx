import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/profile1.jpg';
import { SplitText, BlurText } from '../ui/FramerAnimations';
import Magnetic from '../ui/Magnetic';
import TiltCard from '../ui/TiltCard';

const Home = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer.",
        "MERN & Django Expert.",
        "Backend Architecture Enthusiast.",
        "Constant Learner."
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      cursorChar: '█',
    });
    
    return () => {
      typed.destroy();
    };
  }, []);
  
  const openInstagram = () => {
    window.open("https://www.instagram.com/beewan_derer/", "_blank");
  };
  
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/biwan-shrestha-0571142a1/", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Cinematic Glowing Orb Ornaments */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Editorial Typography & Brand Introduction */}
        <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          
          {/* Subtle Cyberpunk Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Available for Hire</span>
          </motion.div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter">
            <SplitText text="BIWAN SHRESTHA" duration={0.8} />
          </h1>
          
          {/* Subheading */}
          <div className="mt-4 text-lg md:text-xl font-mono text-zinc-300 flex items-center gap-2 justify-center lg:justify-start min-h-[40px]">
            <span className="text-purple-400">&gt;_</span>
            <span ref={typedRef}></span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-zinc-400 text-sm md:text-base max-w-xl mt-6 leading-relaxed font-light"
          >
            I engineer modern, fast full-stack applications with beautiful visual design and robust server architectures. Currently pursuing BSCSIT, specializing in Node.js, React, and Django backend logic.
          </motion.p>
          
          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <Magnetic range={50}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-mono text-xs tracking-widest font-bold uppercase transition-all duration-300 bg-white text-zinc-950 hover:bg-cyan-400 hover:text-zinc-950 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.4)]"
              >
                Selected Work
              </a>
            </Magnetic>
            
            <Magnetic range={50}>
              <a
                href="#contactme"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-mono text-xs tracking-widest font-bold uppercase transition-all duration-300 border border-white/10 hover:border-white/30 bg-zinc-950/40 text-white hover:bg-zinc-900"
              >
                Get In Touch
              </a>
            </Magnetic>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/[0.05] w-full justify-center lg:justify-start">
            <Magnetic range={30}>
              <button 
                onClick={openLinkedIn}
                className="text-xs font-mono tracking-widest text-zinc-500 hover:text-white uppercase transition-colors"
              >
                LinkedIn
              </button>
            </Magnetic>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <Magnetic range={30}>
              <button 
                onClick={openInstagram}
                className="text-xs font-mono tracking-widest text-zinc-500 hover:text-white uppercase transition-colors"
              >
                Instagram
              </button>
            </Magnetic>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <Magnetic range={30}>
              <a 
                href="https://github.com/biwanshrestha14" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-mono tracking-widest text-zinc-500 hover:text-white uppercase transition-colors"
              >
                GitHub
              </a>
            </Magnetic>
          </div>
        </div>
        
        {/* Right Side: Immersive 3D Tilt Frame Profile Image */}
        <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.4 }}
            className="w-full max-w-[340px]"
          >
            <TiltCard className="group relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              {/* Outer Cyberpunk Frame lines */}
              <div className="absolute inset-2 border border-cyan-500/20 rounded-xl pointer-events-none z-10 transition-colors group-hover:border-cyan-400/40" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 pointer-events-none z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500 pointer-events-none z-10" />
              
              {/* Neon overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-30 group-hover:opacity-50 transition-opacity z-10 pointer-events-none" />
              
              <img 
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                src={profileImage} 
                alt="Biwan Shrestha Profile" 
              />
            </TiltCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Home;