import React, { useEffect, useRef } from 'react';

const InteractiveBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particles/Orbs definitions
    const orbs = [
      {
        x: width * 0.2,
        y: height * 0.3,
        radius: Math.min(width, height) * 0.25,
        color: theme === 'dark' ? 'rgba(139, 92, 246, 0.08)' : 'rgba(230, 126, 34, 0.04)', // electric purple vs warm salmon
        vx: 0.3,
        vy: 0.2,
      },
      {
        x: width * 0.8,
        y: height * 0.7,
        radius: Math.min(width, height) * 0.3,
        color: theme === 'dark' ? 'rgba(6, 182, 212, 0.08)' : 'rgba(249, 115, 22, 0.03)', // neon cyan vs orange
        vx: -0.2,
        vy: -0.3,
      },
    ];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Update sizes based on screen
      orbs[0].radius = Math.min(width, height) * 0.25;
      orbs[1].radius = Math.min(width, height) * 0.3;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initial mouse center
    mouseRef.current.x = mouseRef.current.targetX = width / 2;
    mouseRef.current.y = mouseRef.current.targetY = height / 2;

    // Subtle Light Rays configuration
    let angle = 0;

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = theme === 'dark' ? '#09090b' : '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse lerping
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw Light Rays
      ctx.save();
      ctx.translate(width / 2, -100);
      angle += 0.0005;
      ctx.rotate(angle);

      const numRays = 12;
      const rayMaxRadius = Math.max(width, height) * 1.5;
      
      for (let i = 0; i < numRays; i++) {
        const startAngle = (i * 2 * Math.PI) / numRays;
        const endAngle = startAngle + 0.15;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, rayMaxRadius, startAngle, endAngle);
        ctx.closePath();
        
        const gradient = ctx.createRadialGradient(0, 0, 50, 0, 0, rayMaxRadius);
        if (theme === 'dark') {
          gradient.addColorStop(0, 'rgba(6, 182, 212, 0.04)');
          gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.02)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          gradient.addColorStop(0, 'rgba(249, 115, 22, 0.02)');
          gradient.addColorStop(0.5, 'rgba(230, 126, 34, 0.01)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      ctx.restore();

      // Update and Draw Floating Orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off walls
        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        ctx.beginPath();
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Interactive Mouse Orb
      ctx.beginPath();
      const mouseRadius = Math.min(width, height) * 0.22;
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouseRadius);
      
      if (theme === 'dark') {
        mouseGrad.addColorStop(0, 'rgba(6, 182, 212, 0.1)'); // neon cyan
        mouseGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)'); // electric purple
        mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        mouseGrad.addColorStop(0, 'rgba(249, 115, 22, 0.06)'); // orange
        mouseGrad.addColorStop(0.5, 'rgba(230, 126, 34, 0.03)'); // salmon
        mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      ctx.fillStyle = mouseGrad;
      ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
      ctx.fill();

      // Add a subtle interactive grid mesh reacting to mouse
      const cols = 25;
      const rows = 25;
      const xSpacing = width / cols;
      const ySpacing = height / rows;

      ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)';
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const ptX = c * xSpacing;
          const ptY = r * ySpacing;
          
          // Distance to mouse
          const dx = mouse.x - ptX;
          const dy = mouse.y - ptY;
          const dist = Math.hypot(dx, dy);

          // Push points away slightly or highlight them
          if (dist < 180) {
            const pull = (180 - dist) / 180;
            const size = 1 + pull * 1.5;
            
            ctx.fillStyle = theme === 'dark' 
              ? `rgba(6, 182, 212, ${0.05 + pull * 0.15})`
              : `rgba(249, 115, 22, ${0.04 + pull * 0.1})`;
            
            ctx.beginPath();
            ctx.arc(ptX - dx * pull * 0.05, ptY - dy * pull * 0.05, size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Static dot
            ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';
            ctx.fillRect(ptX, ptY, 1, 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default InteractiveBackground;
