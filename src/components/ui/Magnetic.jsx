import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Magnetic = ({ children, range = 60, actionScale = 1.05 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Middle points of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from mouse to center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      // Calculate pull factor (stronger in center, weaker at boundary)
      const factor = (range - distance) / range;
      setPosition({ 
        x: distanceX * factor * 0.45, 
        y: distanceY * factor * 0.45 
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: actionScale }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.8 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
