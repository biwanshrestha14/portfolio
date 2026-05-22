import React from 'react';
import { motion } from 'framer-motion';

// Animate text with a sliding, cascading split-letter/split-word effect
export const SplitText = ({ text, className = '', delay = 0, duration = 0.5 }) => {
  const words = text.split(' ');

  const containerVars = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const childVars = {
    hidden: { y: '120%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <motion.span
      variants={containerVars}
      initial="hidden"
      animate="visible"
      className={`inline-block overflow-hidden py-1 ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden">
          <motion.span variants={childVars} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// Animate text with a smooth blur and scale transition
export const BlurText = ({ text, className = '', delay = 0, duration = 0.8 }) => {
  const letters = Array.from(text);

  const containerVars = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const childVars = {
    hidden: { filter: 'blur(10px)', opacity: 0, scale: 0.8 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeOut',
        duration: duration,
      },
    },
  };

  return (
    <motion.span
      variants={containerVars}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={childVars}
          className="inline-block origin-center"
          style={{ display: char === ' ' ? 'inline-block' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Standard scroll-triggered wrapper
export const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up', distance = 30 }) => {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 80,
        delay: delay,
        duration: 0.7,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
