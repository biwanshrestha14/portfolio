import { ScrollReveal } from '../ui/FramerAnimations';
import GridMotion from '../ui/GridMotion';

const Gallery = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="gallery"
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-zinc-950/20' : 'bg-orange-50/80'
        }`}
    >

      {/* Background glowing gradients */}
      <div className="absolute left-1/4 top-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className={`text-xs font-mono tracking-[0.25em] uppercase ${isDark ? 'text-cyan-400' : 'text-orange-600'
            }`}>Gallery</span>
          <h2 className={`text-4xl md:text-5xl font-black mt-3 tracking-tight ${isDark ? 'text-white' : 'text-orange-950'
            }`}>
            Pixels With Personality
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-mono ${isDark ? 'text-zinc-400' : 'text-orange-800/80'
            }`}>
            Click a tile for a tiny joke. Warranty void if you laugh.
          </p>
        </ScrollReveal>

        {/* Ported Grid Motion Component */}
        <ScrollReveal direction="up" delay={0.15}>
          <GridMotion theme={theme} />
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Gallery;
