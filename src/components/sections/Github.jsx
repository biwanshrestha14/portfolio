import React from 'react';
import { ScrollReveal } from '../ui/FramerAnimations';
import SpotlightCard from '../ui/SpotlightCard';
import Magnetic from '../ui/Magnetic';
import { Github as GitIcon, Terminal } from 'lucide-react';

const Github = () => {
  // Generate a mock green grid representing contributions
  const generateGrid = () => {
    const grid = [];
    const colors = [
      'bg-orange-100 dark:bg-zinc-900', // Empty
      'bg-emerald-100 dark:bg-emerald-950', // Low
      'bg-emerald-300 dark:bg-emerald-800', // Medium-low
      'bg-emerald-500 dark:bg-emerald-600', // Medium
      'bg-emerald-600 dark:bg-emerald-400', // High
    ];
    
    // Create 7 rows x 24 columns for a neat mini grid
    for (let r = 0; r < 7; r++) {
      const row = [];
      for (let c = 0; c < 24; c++) {
        // Random bias toward empty or light greens
        const randIdx = Math.floor(Math.pow(Math.random(), 1.5) * colors.length);
        row.push(colors[randIdx]);
      }
      grid.push(row);
    }
    return grid;
  };

  const gridData = generateGrid();

  return (
    <section id="github" className="py-20 relative overflow-hidden bg-transparent">
      
      {/* Background neon orb */}
      <div className="absolute right-1/4 top-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          
          {/* Main Showcase Panel */}
          <SpotlightCard 
            spotlightColor="rgba(249, 115, 22, 0.08)" 
            className="border-orange-100 dark:border-emerald-500/10 bg-white/60 dark:bg-zinc-950/60 p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-orange-200 dark:border-emerald-500/15 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-orange-200 dark:border-emerald-500/15 rounded-bl-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
              
              {/* Left Column: Title & Sub */}
              <div className="text-center md:text-left space-y-4 max-w-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 dark:border-emerald-500/25 bg-orange-50/50 dark:bg-emerald-500/5 text-orange-700 dark:text-emerald-400 text-xs font-mono tracking-widest uppercase">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Open Source</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-orange-950 dark:text-white leading-tight">
                  Here's My GitHub Portfolio
                </h2>
                
                <p className="text-orange-800 dark:text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  I love to code &amp; create awesome artworks. I maintain neat, documented code repositories, showcasing solid architectural patterns and clean commits.
                </p>

                <div className="pt-4">
                  <Magnetic range={40}>
                    <button
                      onClick={() => window.open('https://github.com/biwanshrestha14', '_blank')}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-mono text-xs tracking-widest font-bold uppercase transition-all duration-300 bg-orange-600 dark:bg-emerald-500 text-white dark:text-zinc-950 hover:bg-orange-700 dark:hover:bg-emerald-400 shadow-[0_4px_20px_rgba(249,115,22,0.2)] dark:shadow-[0_4px_20px_rgba(16,185,129,0.25)] cursor-pointer"
                    >
                      <GitIcon className="w-4 h-4" />
                      View My GitHub
                    </button>
                  </Magnetic>
                </div>
              </div>

              {/* Right Column: Decorative Contribution Matrix */}
              <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center bg-orange-50/60 dark:bg-zinc-900/40 border border-orange-100 dark:border-white/[0.05] p-5 rounded-2xl backdrop-blur-md">
                <div className="text-[10px] font-mono text-orange-600 dark:text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span>github.com/biwanshrestha14</span>
                </div>
                
                {/* Contribution Blocks Grid */}
                <div className="grid gap-1">
                  {gridData.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-1">
                      {row.map((color, cIdx) => (
                        <div 
                          key={cIdx} 
                          className={`w-2.5 h-2.5 rounded-[1.5px] transition-colors duration-500 ${color} hover:bg-orange-400 dark:hover:bg-emerald-400`} 
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between w-full mt-4 text-[9px] font-mono text-orange-600 dark:text-zinc-500">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-[1.5px] bg-orange-100 dark:bg-zinc-900" />
                    <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-100 dark:bg-emerald-950" />
                    <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-300 dark:bg-emerald-800" />
                    <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-500 dark:bg-emerald-600" />
                    <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-600 dark:bg-emerald-400" />
                  </div>
                  <span>More</span>
                </div>
              </div>

            </div>

          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Github;