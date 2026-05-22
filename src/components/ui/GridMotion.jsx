import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GridMotion = ({ items = [] }) => {
  const containerRef = useRef(null);
  
  // Mouse coordinates mapped between -0.5 and 0.5 relative to viewport
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Soft spring values for natural lag/inertial trailing
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Map spring coordinate to translations for various columns (different factors = parallax)
  const transCol0Y = useTransform(springY, [0, 1], [-80, 80]); // Shifts up/down
  const transCol1Y = useTransform(springY, [0, 1], [80, -80]); // Moves in opposite direction!
  const transCol2Y = useTransform(springY, [0, 1], [-140, 140]); // High magnitude parallax
  const transCol3Y = useTransform(springY, [0, 1], [140, -140]); // High magnitude opposite
  const transCol4Y = useTransform(springY, [0, 1], [-50, 50]); // Slower drift

  const transAllX = useTransform(springX, [0, 1], [-60, 60]); // Global horizontal drift

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      // Get cursor position percentage (0 to 1)
      const x = e.clientX / innerWidth;
      const y = e.clientY / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Premium editorial portfolio photographs
  const defaultImages = [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop", // Tech Professional
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", // Macbook Coding
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", // Cyber Tech
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop", // Code editor
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop", // Minimal desk
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", // Matrix code
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop", // Python / JS screen
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", // Abstract cyber mesh
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop", // Colorful script code
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop", // Retro Cyberpunk Gaming
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=600&auto=format&fit=crop", // Hacker setup
    "https://images.unsplash.com/photo-1534972195531-d756b9bda9f2?q=80&w=600&auto=format&fit=crop", // Code screen neon
    "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=600&auto=format&fit=crop", // Synthwave sunset vibe
    "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop", // Neon artwork
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=600&auto=format&fit=crop", // AI Core
  ];

  const galleryImages = items.length > 0 ? items : defaultImages;

  // Split images into 5 columns
  const cols = [
    galleryImages.slice(0, 3),
    galleryImages.slice(3, 6),
    galleryImages.slice(6, 9),
    galleryImages.slice(9, 12),
    galleryImages.slice(12, 15),
  ];

  const colTransforms = [transCol0Y, transCol1Y, transCol2Y, transCol3Y, transCol4Y];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] bg-zinc-950 overflow-hidden border border-white/[0.04] rounded-3xl"
    >
      {/* Decorative ambient background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Parallax Moving Grid */}
      <motion.div 
        style={{ x: transAllX }}
        className="absolute inset-0 flex justify-center items-center gap-6 w-[120%] h-[120%] -left-[10%] -top-[10%] pointer-events-none"
      >
        {cols.map((colImages, colIdx) => (
          <motion.div
            key={colIdx}
            style={{ y: colTransforms[colIdx] }}
            className="flex flex-col gap-6 w-full max-w-[200px]"
          >
            {colImages.map((imgUrl, imgIdx) => (
              <div
                key={imgIdx}
                className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.08] shadow-2xl hover:border-cyan-500/30 transition-colors pointer-events-auto cursor-pointer group"
              >
                <img
                  src={imgUrl}
                  alt={`Gallery Photo ${colIdx}-${imgIdx}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Tech scan lines glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase">SCAN_SEC_{colIdx}{imgIdx}</span>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Cinematic vignette / dark overlays to fade out the borders */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#09090b_90%)]" />
      
      {/* Editorial text header inside the grid */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none select-none z-10">
        <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase bg-zinc-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/[0.08]">
          Grid Motion Portal
        </span>
        <h3 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tighter drop-shadow-lg">
          CREATIVE PLAYGROUND
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm font-mono mt-2 max-w-sm drop-shadow-md">
          Interact by moving your cursor to skew the perspective.
        </p>
      </div>
    </div>
  );
};

export default GridMotion;
