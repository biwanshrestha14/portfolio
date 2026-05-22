import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorFollower = () => {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'project'
  const [projectText, setProjectText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Position of mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing ring
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 250, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 250, mass: 0.6 });

  useEffect(() => {
    // Show cursor on first movement
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Global event listeners to detect interactive hovers
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          // If it is a project card or project button, we can show specific text
          if (el.closest('#projects') && el.tagName === 'A') {
            setCursorType('project');
            setProjectText('GO');
          } else {
            setCursorType('hover');
          }
        });
        
        el.addEventListener('mouseleave', () => {
          setCursorType('default');
          setProjectText('');
        });
      });
    };

    // Listeners for dynamic elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      observer.disconnect();
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Trailing Halo */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'hover' ? 56 : cursorType === 'project' ? 70 : 20,
          height: cursorType === 'hover' ? 56 : cursorType === 'project' ? 70 : 20,
          backgroundColor:
            cursorType === 'hover'
              ? 'rgba(6, 182, 212, 0.08)' // Neon cyan transparent glow
              : cursorType === 'project'
              ? 'rgba(139, 92, 246, 0.9)' // Solid Electric Purple for projects
              : 'rgba(255, 255, 255, 0.0)', // Transparent default
          borderColor:
            cursorType === 'hover'
              ? 'rgba(6, 182, 212, 0.6)' // Neon cyan border on hover
              : cursorType === 'project'
              ? 'rgba(139, 92, 246, 1)'
              : 'rgba(255, 255, 255, 0.3)', // Soft white border default
          borderWidth: cursorType === 'project' ? 0 : 1.5,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
        className="fixed top-0 left-0 pointer-events-none rounded-full z-[9999] flex items-center justify-center overflow-hidden"
      >
        {cursorType === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] tracking-widest font-mono font-black text-black"
          >
            {projectText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Pinpoint Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'hover' ? 2.5 : cursorType === 'project' ? 0 : 1,
          backgroundColor:
            cursorType === 'hover'
              ? 'rgba(6, 182, 212, 1)' // Neon cyan
              : 'rgba(249, 115, 22, 1)', // Coral / salmon default
        }}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[10000]"
      />
    </>
  );
};

export default CursorFollower;