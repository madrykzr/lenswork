import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { SIGNATURE_IMAGE, HOTSPOTS } from '../data';
import { Info, Plus, Compass } from 'lucide-react';

export default function HeroDetailSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>('hotspot-1');
  const [isInView, setIsInView] = useState(false);

  // Monitor intersection to trigger staggered hotspot entries
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.25 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Oversized text scroll-based horizontal movement or offset
  const textX = useTransform(scrollYProgress, [0.1, 0.9], [150, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] bg-[#0E0F0E] text-white py-24 px-6 md:px-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Editorial section header */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-start z-10 mb-8 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#C3F53C] block uppercase mb-1">
            02 // MASTER IMAGE LAB
          </span>
          <h2 className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight">
            SIGNATURE COMPOSITION
          </h2>
        </div>
        <div className="flex items-center space-x-2 font-mono text-xs text-gray-400">
          <Compass className="w-4 h-4 text-[#C3F53C] animate-spin-slow" />
          <span>STAGE C // PINPOINT MAPPING</span>
        </div>
      </div>

      {/* Main Full-Bleed Interactive Frame */}
      <div className="max-w-7xl mx-auto w-full my-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Full-bleed Photo container with hotspots */}
        <div className="relative lg:col-span-8 aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-auto w-full group bg-zinc-950">
          <img
            src={SIGNATURE_IMAGE}
            alt="Signature Shoot"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out"
          />

          {/* Interactive Hotspots Overlay */}
          {HOTSPOTS.map((spot, index) => {
            const isSelected = activeHotspot === spot.id;
            return (
              <div
                key={spot.id}
                className="absolute"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              >
                {/* Pulsing Core Dot */}
                <button
                  onClick={() => setActiveHotspot(isSelected ? null : spot.id)}
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  className="relative flex items-center justify-center w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/btn"
                  title={spot.label}
                >
                  <span className={`absolute inset-0 rounded-full bg-[#C3F53C] opacity-40 animate-ping duration-1000 ${isSelected ? 'scale-150' : ''}`} />
                  <span className={`w-3.5 h-3.5 rounded-full border border-black shadow-md transition-colors duration-300 ${isSelected ? 'bg-[#C3F53C]' : 'bg-white group-hover/btn:bg-[#C3F53C]'}`} />
                </button>

                {/* Connection Line & Dark Glass Tag */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: spot.position === 'top' ? -20 : 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: spot.position === 'top' ? -15 : 15 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={`absolute z-30 w-64 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 shadow-2xl ${
                        spot.position === 'top' ? 'bottom-8 -translate-x-1/2' :
                        spot.position === 'bottom' ? 'top-8 -translate-x-1/2' :
                        spot.position === 'left' ? 'right-8 -translate-y-1/2' : 'left-8 -translate-y-1/2'
                      }`}
                    >
                      {/* Connection Hairline Arrow */}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[9px] tracking-widest text-[#C3F53C] uppercase">
                          STUDIO ANNOTATION // 0{index + 1}
                        </span>
                        <Info className="w-3 h-3 text-gray-400" />
                      </div>
                      <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-tight">
                        {spot.label}
                      </h4>
                      <p className="font-mono text-[10px] text-gray-300 mt-1 uppercase leading-normal">
                        {spot.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Side Panel: Interactive Guide info */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6 h-full px-4 text-left">
          <div className="bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-md">
            <span className="font-mono text-[#C3F53C] text-[10px] tracking-wider uppercase flex items-center space-x-1.5 mb-2">
              <Plus className="w-3.5 h-3.5 inline text-[#C3F53C]" />
              <span>INTERACTIVE VIEWER</span>
            </span>
            <p className="font-sans text-xs uppercase text-gray-300 leading-relaxed font-bold">
              Hover or tap on the pulsing coordinates over our signature model capture to reveal lighting setups, lenses configuration, and set designations.
            </p>
          </div>

          <div className="border-l-2 border-[#C3F53C] pl-4 space-y-2">
            <p className="font-mono text-[11px] text-gray-400 leading-relaxed uppercase">
              “Every coordinate tells the exact narrative of building shapes out of darkness. The geometry doesn't lie.”
            </p>
            <span className="font-sans text-xs font-black tracking-widest text-white uppercase">
              — LENSWORK LEAD DIRECTOR
            </span>
          </div>
        </div>
      </div>

      {/* Full layout detail meta rails */}
      <div className="max-w-7xl mx-auto w-full z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
        
        {/* Left Side Labels */}
        <div className="space-y-2">
          <div className="flex space-x-4 text-xs font-mono text-gray-400">
            <span className="text-[#C3F53C]">●</span>
            <span className="uppercase tracking-widest">Portrait // Editorial // Film Studio</span>
            <span className="text-gray-600">|</span>
            <span className="uppercase tracking-widest">© 2026 Edition</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {['WEDDINGS', 'PORTRAITS', 'COMMERCIAL', 'ABOUT STUDIO'].map((pill) => (
              <span 
                key={pill} 
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#C3F53C] hover:text-black hover:border-[#C3F53C] text-gray-300 font-mono text-[10px] uppercase tracking-wider border border-white/10 transition-colors duration-200 cursor-pointer"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side meta detail / Studio Address & Ticker */}
        <div className="flex flex-col md:items-end justify-between space-y-4 md:space-y-0 text-left md:text-right">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gray-400 space-y-0.5">
            <p>Möckernstraße 120, 10963 Berlin, DE</p>
            <p className="text-white hover:text-[#C3F53C] transition-colors cursor-pointer">
              INFO@LENSWORK.STUDIO // +49 (0) 30 1445 102
            </p>
          </div>
          
          <div className="flex items-center md:justify-end space-x-4 pt-1">
            <span className="font-mono text-xs text-[#C3F53C]">PAGE STATUS // 02</span>
            <div className="w-12 h-[1px] bg-white/20">
              <div className="w-[33%] h-full bg-[#C3F53C] animate-pulse" />
            </div>
          </div>
        </div>

      </div>

      {/* Overflow/Transition oversized scroll text block building word-by-word */}
      <div className="w-full z-10 mt-12 overflow-hidden py-4 bg-white/[0.02] border-y border-white/5 -mx-6 md:-mx-12 px-6 md:px-12">
        <motion.div 
          style={{ x: textX }}
          className="whitespace-nowrap flex items-center space-x-12 cursor-none select-none"
        >
          <span className="font-sans font-black text-[7vw] leading-none text-zinc-800 uppercase tracking-tight">
            ARE YOU LOOKING FOR—
          </span>
          <span className="text-[#C3F53C] font-sans font-black text-[7vw] leading-none uppercase tracking-tight">
            ★
          </span>
          <span className="font-sans font-black text-[7vw] leading-none text-white uppercase tracking-tight">
            A TIMELESS CAPTURE?
          </span>
          <span className="text-zinc-800 font-sans font-black text-[7vw] leading-none uppercase tracking-tight">
            •
          </span>
          <span className="font-sans font-black text-[7vw] leading-none text-zinc-800 uppercase tracking-tight">
            ARE YOU LOOKING FOR—
          </span>
        </motion.div>
      </div>
    </section>
  );
}
