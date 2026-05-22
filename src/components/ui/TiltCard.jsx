import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  
  // Motion values for x/y mouse percentages
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt values
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 150 });

  // Shine position effects
  const shineX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const shineY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative cursor-pointer transition-shadow duration-300 ${className}`}
    >
      {/* 3D Content Container */}
      <div 
        style={{ transform: 'translateZ(20px)' }}
        className="h-full w-full rounded-2xl bg-[#fff8f2] dark:bg-zinc-950/60 border border-orange-100 dark:border-white/[0.08] backdrop-blur-md overflow-hidden"
      >
        {/* Shine effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            left: shineX,
            top: shineY,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 60%)',
          }}
        />
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
