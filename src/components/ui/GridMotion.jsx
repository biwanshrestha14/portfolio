import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const GridMotion = ({ items = [], theme = 'dark' }) => {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [joke, setJoke] = useState(null);
  const isDark = theme === 'dark';

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 55, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 22 });

  const transCol0Y = useTransform(springY, [0, 1], [-90, 90]);
  const transCol1Y = useTransform(springY, [0, 1], [90, -90]);
  const transCol2Y = useTransform(springY, [0, 1], [-160, 160]);
  const transCol3Y = useTransform(springY, [0, 1], [160, -160]);
  const transCol4Y = useTransform(springY, [0, 1], [-60, 60]);
  const transAllX = useTransform(springX, [0, 1], [-70, 70]);
  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);

  const jokes = [
    "my laptop fan sounds like it's about to apply for pilot's license",
    "404: developer's social life not found",
    "it's not a bug, it's an undocumented dance move",
    "git blame: everyone except me, obviously",
    "npm install happiness... 847 vulnerabilities found",
    "undefined is not a function (my personality)",
    "console.log('why is this not working') × 47",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Curated aesthetic images: nature, neon, dreamy architecture, surrealism
  const defaultImages = [
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop",
      caption: "where wifi is nonexistent & peace is unlimited"
    },
    {
      url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=600&auto=format&fit=crop",
      caption: "my productivity when it's raining outside"
    },
    {
      url: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?q=80&w=600&auto=format&fit=crop",
      caption: "loading... loading... still loading"
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      caption: "me pretending I have my life together"
    },
    {
      url: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?q=80&w=600&auto=format&fit=crop",
      caption: "the forest promised free wifi. it lied."
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop",
      caption: "altitude: above my to-do list"
    },
    {
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop",
      caption: "aurora borealis? in this economy?"
    },
    {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600&auto=format&fit=crop",
      caption: "when the vibe is immaculate but the deadline is tomorrow"
    },
    {
      url: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=600&auto=format&fit=crop",
      caption: "stardust behavior"
    },
    {
      url: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=600&auto=format&fit=crop",
      caption: "the dream: waking up looking like this"
    },
    {
      url: "https://images.unsplash.com/photo-1475688621402-4257c812d6db?q=80&w=600&auto=format&fit=crop",
      caption: "sun and 0 responsibilities"
    },
    {
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop",
      caption: "a mood. a whole entire mood."
    },
    {
      url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=600&auto=format&fit=crop",
      caption: "when you fix one bug and 3 more appear 🐛"
    },
    {
      url: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=600&auto=format&fit=crop",
      caption: "colors have never done anything wrong"
    },
    {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=600&auto=format&fit=crop",
      caption: "out of office. permanently."
    },
  ];

  const galleryItems = items.length > 0 ? items : defaultImages;

  const cols = [
    galleryItems.slice(0, 3),
    galleryItems.slice(3, 6),
    galleryItems.slice(6, 9),
    galleryItems.slice(9, 12),
    galleryItems.slice(12, 15),
  ];

  const colTransforms = [transCol0Y, transCol1Y, transCol2Y, transCol3Y, transCol4Y];

  const handleCardClick = (idx) => {
    setJoke(jokes[idx % jokes.length]);
    setTimeout(() => setJoke(null), 3500);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-3xl"
      style={{
        height: '640px',
        background: isDark
          ? 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 50%, #0a0f0d 100%)'
          : 'linear-gradient(135deg, #fff7ed 0%, #fff1e6 55%, #fffbf5 100%)',
        border: isDark
          ? '1px solid rgba(255,255,255,0.05)'
          : '1px solid rgba(15,23,42,0.08)',
        fontFamily: "'DM Mono', 'Fira Mono', monospace",
      }}
    >
      {/* Grain texture overlay */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="overlay" result="blend" />
          <feComposite in="blend" in2="SourceGraphic" operator="in" />
        </filter>
      </svg>
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px', opacity: 0.6, mixBlendMode: 'overlay', pointerEvents: 'none',
        }}
      />

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: isDark
          ? 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)'
          : 'radial-gradient(circle, rgba(15,23,42,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Color blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '20%', width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', zIndex: 1, pointerEvents: 'none', animation: 'drift1 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '15%', width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)',
        filter: 'blur(50px)', zIndex: 1, pointerEvents: 'none', animation: 'drift2 15s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '30%', width: 200, height: 200, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)', zIndex: 1, pointerEvents: 'none', animation: 'drift3 18s ease-in-out infinite',
      }} />

      <style>{`
        @keyframes drift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-30px)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,25px)} }
        @keyframes drift3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(15px,-20px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>

      {/* Parallax grid */}
      <motion.div
        style={{ x: transAllX, rotateX, rotateY, perspective: 1200 }}
        className="absolute flex justify-center items-center gap-5"
        sx={{ transformStyle: 'preserve-3d' }}
        css={{
          inset: 0, width: '125%', height: '125%',
          left: '-12.5%', top: '-12.5%', pointerEvents: 'none',
          zIndex: 2, display: 'flex',
        }}
        style={{
          x: transAllX,
          position: 'absolute',
          inset: 0,
          width: '125%',
          height: '125%',
          left: '-12.5%',
          top: '-12.5%',
          pointerEvents: 'none',
          zIndex: 2,
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {cols.map((colImages, colIdx) => (
          <motion.div
            key={colIdx}
            style={{ y: colTransforms[colIdx], display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '195px' }}
          >
            {colImages.map((item, imgIdx) => {
              const cardId = `${colIdx}-${imgIdx}`;
              const imgUrl = typeof item === 'string' ? item : item.url;
              const caption = typeof item === 'string' ? null : item.caption;

              return (
                <div
                  key={imgIdx}
                  onClick={() => handleCardClick(colIdx * 3 + imgIdx)}
                  onMouseEnter={() => setHoveredCard(cardId)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    position: 'relative',
                    aspectRatio: '3/4',
                    width: '100%',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: isDark ? '#1a1a2e' : '#fffaf5',
                    border: hoveredCard === cardId
                      ? (isDark
                        ? '1px solid rgba(99,102,241,0.5)'
                        : '1px solid rgba(249,115,22,0.45)')
                      : (isDark
                        ? '1px solid rgba(255,255,255,0.06)'
                        : '1px solid rgba(15,23,42,0.08)'),
                    boxShadow: hoveredCard === cardId
                      ? (isDark
                        ? '0 0 24px rgba(99,102,241,0.2), 0 20px 60px rgba(0,0,0,0.6)'
                        : '0 0 20px rgba(249,115,22,0.15), 0 18px 40px rgba(15,23,42,0.12)')
                      : (isDark
                        ? '0 8px 32px rgba(0,0,0,0.4)'
                        : '0 10px 24px rgba(15,23,42,0.12)'),
                    pointerEvents: 'all',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    transform: hoveredCard === cardId ? 'scale(1.03)' : 'scale(1)',
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={caption || `Photo ${colIdx}-${imgIdx}`}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
                      transform: hoveredCard === cardId ? 'scale(1.1)' : 'scale(1)',
                    }}
                    loading="lazy"
                  />

                  {/* Hover caption */}
                  {caption && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: isDark
                        ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                        : 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                      opacity: hoveredCard === cardId ? 1 : 0,
                      transition: 'opacity 0.35s ease',
                      display: 'flex', alignItems: 'flex-end', padding: '14px',
                    }}>
                      <p style={{
                        color: isDark ? '#e2e8f0' : '#7c2d12',
                        fontSize: '10px',
                        lineHeight: 1.5,
                        fontFamily: "'DM Mono', monospace",
                        letterSpacing: '0.02em',
                        margin: 0,
                        opacity: hoveredCard === cardId ? 1 : 0,
                        transform: hoveredCard === cardId ? 'translateY(0)' : 'translateY(8px)',
                        transition: 'opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s',
                      }}>
                        {caption}
                      </p>
                    </div>
                  )}

                  {/* Corner tag */}
                  <div style={{
                    position: 'absolute', top: 10, right: 10,
                    background: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '6px',
                    padding: '3px 7px',
                    fontSize: '8px',
                    fontFamily: 'monospace',
                    color: isDark ? 'rgba(99,102,241,0.9)' : 'rgba(234,88,12,0.9)',
                    letterSpacing: '0.1em',
                    opacity: hoveredCard === cardId ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}>
                    click me
                  </div>
                </div>
              );
            })}
          </motion.div>
        ))}
      </motion.div>

      {/* Vignette overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
        background: isDark
          ? 'radial-gradient(ellipse at center, transparent 25%, rgba(10,10,15,0.7) 70%, rgba(10,10,15,0.95) 100%)'
          : 'radial-gradient(ellipse at center, transparent 25%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.95) 100%)',
      }} />

      {/* Top edge fade */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '120px', zIndex: 4, pointerEvents: 'none',
        background: isDark
          ? 'linear-gradient(to bottom, rgba(10,10,15,0.9) 0%, transparent 100%)'
          : 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', zIndex: 4, pointerEvents: 'none',
        background: isDark
          ? 'linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 100%)'
          : 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)',
      }} />

      {/* Joke popup */}
      <AnimatePresence>
        {joke && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            style={{
              position: 'absolute', right: 24, bottom: 56, zIndex: 10,
              pointerEvents: 'none',
              background: isDark ? 'rgba(10,10,20,0.92)' : 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(16px)',
              border: isDark
                ? '1px solid rgba(99,102,241,0.3)'
                : '1px solid rgba(234,88,12,0.25)',
              borderRadius: '12px', padding: '12px 18px',
              maxWidth: '360px',
              boxShadow: isDark
                ? '0 0 30px rgba(99,102,241,0.15)'
                : '0 12px 30px rgba(15,23,42,0.12)',
            }}
          >
            <p style={{
              margin: 0,
              color: isDark ? '#c7d2fe' : '#7c2d12',
              fontSize: '12px', fontFamily: 'monospace',
              lineHeight: 1.6, letterSpacing: '0.02em',
            }}>
              💡 <em>{joke}</em>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom ticker */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 12,
        height: '36px', overflow: 'hidden',
        background: isDark ? 'rgba(10,10,20,0.9)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        borderTop: isDark
          ? '1px solid rgba(255,255,255,0.05)'
          : '1px solid rgba(15,23,42,0.08)',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{
          display: 'flex', gap: '60px', whiteSpace: 'nowrap',
          animation: 'ticker 30s linear infinite',
          color: isDark ? 'rgba(148,163,184,0.5)' : 'rgba(124,45,18,0.55)',
          fontSize: '10px',
          fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          {[
            '✦ move mouse for parallax vibes',
            '✦ hover cards to reveal captions',
            '✦ click cards for dev wisdom',
            '✦ undefined is a lifestyle choice',
            '✦ git commit -m "it works now"',
            '✦ debugging: staring contest edition',
            '✦ it works on my machine',
            '✦ snack-powered engineering',
            // duplicate for seamless loop
            '✦ move mouse for parallax vibes',
            '✦ hover cards to reveal captions',
            '✦ click cards for dev wisdom',
            '✦ undefined is a lifestyle choice',
            '✦ git commit -m "it works now"',
            '✦ debugging: staring contest edition',
            '✦ it works on my machine',
            '✦ snack-powered engineering',
          ].join('          ')}
        </div>
      </div>
    </div>
  );
};

export default GridMotion;