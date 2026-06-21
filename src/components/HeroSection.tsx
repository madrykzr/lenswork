import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { BENTO_CHIPS } from '../data';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create parallax for the giant background wordmark
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#A9B4BC] text-[#0E0F0E] px-4 md:px-12 pt-28 pb-16 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background Giant Text - Parallax enabled */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.h1 
          style={{ y: textY }}
          className="text-[17vw] leading-none font-sans font-black tracking-tighter text-black/[0.07] uppercase text-center w-full select-none"
        >
          LENSWORK
        </motion.h1>
      </div>

      {/* Decorative Plus Markers */}
      <div className="absolute top-28 left-6 md:left-12 font-mono text-xs text-[#060706]/40 flex items-center space-x-2 pointer-events-none z-10">
        <span className="text-[#0E0F0E]">＋</span>
        <span>STAGE A // GROUNDING APERTURE</span>
      </div>
      <div className="absolute bottom-16 right-6 md:right-12 font-mono text-xs text-[#060706]/40 flex items-center space-x-2 pointer-events-none z-10">
        <span>EST. 2018</span>
        <span className="text-[#0E0F0E]">＋</span>
      </div>

      {/* Main Grid Content - Bento collage on top */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto w-full z-10 my-auto">
        
        {BENTO_CHIPS.map((chip, index) => {
          // If this is the dynamic stat booking card
          if (chip.isStatCard) {
            return (
              <motion.div
                key={chip.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
                className={`${chip.gridSpan} bg-[#0E0F0E] text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-white/5 shadow-2xl relative overflow-hidden group`}
              >
                {/* Visual Accent */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#C3F53C]/10 rounded-full blur-2xl group-hover:bg-[#C3F53C]/20 transition-all duration-500" />
                
                <div className="flex justify-between items-start">
                  <div className="bg-[#C3F53C] text-black w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold animate-pulse">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <motion.span 
                    whileHover={{ rotate: 45 }}
                    onClick={onContactClick}
                    className="text-[#C3F53C] hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.span>
                </div>

                <div className="mt-8">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C3F53C]"></span>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-gray-400">STATUS: OPEN</span>
                  </div>
                  <h3 className="font-sans font-black text-4xl mt-1 tracking-tight text-white group-hover:text-[#C3F53C] transition-colors duration-300">
                    {chip.statNumber}
                  </h3>
                  <p className="font-mono text-[10px] tracking-wide text-gray-300 uppercase leading-relaxed mt-3">
                    {chip.statLabel}
                  </p>
                </div>
              </motion.div>
            );
          }

          // Otherwise, normal Polaroid photo card
          return (
            <motion.div
              key={chip.id}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -3 : 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
              className={`${chip.gridSpan} ${chip.rotation} ${chip.offsetClass} bg-[#0E0F0E] p-4 rounded-2xl border border-white/5 shadow-2xl group cursor-pointer`}
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:h-64 rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src={chip.imageUrl}
                  onError={(e) => {
                    if (chip.fallbackUrl) {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = chip.fallbackUrl;
                    }
                  }}
                  alt={chip.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[9px] font-mono tracking-wider bg-white/20 px-2 py-0.5 rounded-full uppercase">
                      {chip.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Label mirroring film prints */}
              <div className="mt-3.5 flex justify-between items-center px-1">
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-white group-hover:text-[#C3F53C] transition-colors duration-300">
                    {chip.title}
                  </h4>
                  <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-0.5">
                    {chip.category}
                  </p>
                </div>
                <span className="text-gray-600 font-mono text-[10px]">
                  #0{index + 1}
                </span>
              </div>
            </motion.div>
          );
        })}

      </div>

      {/* Hero Footnote Block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end max-w-7xl mx-auto w-full z-10 pt-8 border-t border-black/10 mt-6">
        <div className="max-w-md">
          <p className="font-sans text-xs md:text-sm text-black/80 font-medium leading-relaxed uppercase">
            We operate at the convergence of raw brutalism and soft light, creating cinematic photographic architecture for brands, creators, and timeless humans.
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <div className="flex -space-x-2">
            <div className="w-5 h-5 rounded-full bg-black/80 flex items-center justify-center border border-[#A9B4BC]">
              <Sparkles className="w-2.5 h-2.5 text-[#C3F53C]" />
            </div>
          </div>
          <span className="font-mono text-[10px] text-black/60 uppercase tracking-wider">
            SCROLL TO CAPTURE MOMENTUM ↓
          </span>
        </div>
      </div>
    </section>
  );
}
