import { motion } from 'motion/react';
import { useState } from 'react';
import { PORTFOLIO_SHOWCASE } from '../data';
import { Shield, Sparkles, Send, Check } from 'lucide-react';

interface PortfolioGridSectionProps {
  onContactClick: () => void;
}

export default function PortfolioGridSection({ onContactClick }: PortfolioGridSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  const activeSpec = PORTFOLIO_SHOWCASE[hoveredIdx] || PORTFOLIO_SHOWCASE[0];

  return (
    <section className="relative min-h-screen bg-[#EBEEF0] text-[#0E0F0E] py-24 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5" />
      
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div className="max-w-xl">
          <span className="font-mono text-[9px] tracking-widest text-[#0E0F0E]/60 uppercase block mb-2">
            ● SECTION 04 // INDEXED WORK SHOWCASE
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none">
            SELECTED RECORDINGS
          </h2>
        </div>
        <p className="font-mono text-xs text-[#0E0F0E]/70 uppercase max-w-xs mt-4 md:mt-0 leading-relaxed font-semibold">
          A rigid look at frames captured upon organic matter. Finished digital negatives & silver gelatin plates.
        </p>
      </div>

      {/* Grid of 6 Portrait Thumbnails */}
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-auto">
        {PORTFOLIO_SHOWCASE.map((item, index) => {
          const isHovered = hoveredIdx === index;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIdx(index)}
              className="bg-white rounded-2xl p-4 border border-black/5 shadow-md flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >
              {/* Asset Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0E0F0E]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                
                {/* Embedded Spec Chip */}
                <div className="absolute top-3 left-3 flex items-center bg-[#0E0F0E] text-[#C3F53C] rounded-full px-2.5 py-1 select-none border border-white/5 shadow-lg">
                  <span className="font-mono text-[8.5px] uppercase tracking-wider font-extrabold">
                    {item.spec}
                  </span>
                </div>
              </div>

              {/* Title & Stats block */}
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-sans font-black text-sm uppercase tracking-tight text-[#0E0F0E] group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">
                    {item.category}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-gray-400">INDEX // 0{index + 1}</span>
                  <div className={`w-2 h-2 rounded-full ml-auto mt-1 transition-all duration-300 ${isHovered ? 'bg-[#C3F53C]' : 'bg-transparent'}`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Spec Meta Row (Mirrors Package details based on user hover state!) */}
      <div className="max-w-7xl mx-auto w-full z-10 my-10 bg-white/80 border border-black/5 rounded-2xl p-5 md:p-6 shadow-sm backdrop-blur-md">
        <div className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-3 flex items-center justify-between">
          <span>ACTIVE INDEX SPECIFICATION BAR</span>
          <span className="text-[#0E0F0E] font-bold">PACKAGE SLATE REFERENCE: {activeSpec.packageCode}</span>
        </div>
        
        {/* Divided Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 divider-y md:divider-y-0 text-left uppercase">
          
          <div className="border-r border-black/10 pr-2">
            <span className="font-mono text-[9px] text-gray-400 block mb-1">SAMPLE PACKAGE</span>
            <span className="font-sans font-black text-xs text-[#0E0F0E] truncate block">
              {activeSpec.title} // SHOT LIST
            </span>
          </div>

          <div className="border-r border-black/10 px-0 md:px-4">
            <span className="font-mono text-[9px] text-gray-400 block mb-1">LOCATION STAGE</span>
            <span className="font-sans font-black text-xs text-[#0E0F0E] truncate block">
              {activeSpec.location}
            </span>
          </div>

          <div className="border-r border-black/10 px-0 md:px-4">
            <span className="font-mono text-[9px] text-gray-400 block mb-1">TEMPORAL SCALE</span>
            <span className="font-sans font-black text-xs text-[#0E0F0E] truncate block">
              {activeSpec.sessionLength} SETS
            </span>
          </div>

          <div className="border-r border-black/10 px-0 md:px-4">
            <span className="font-mono text-[9px] text-gray-400 block mb-1">IMAGE QUANTITY</span>
            <span className="font-sans font-black text-xs text-[#0E0F0E] truncate block">
              {activeSpec.totalPhotos}
            </span>
          </div>

          <div className="px-0 md:px-4 text-right md:text-left">
            <span className="font-mono text-[9px] text-gray-400 block mb-1">ACCREDITED YEAR</span>
            <span className="font-sans font-black text-xs text-[#0E0F0E] truncate block">
              RELEASE // {activeSpec.year}
            </span>
          </div>

        </div>
      </div>

      {/* Philosophy Block & Stacked oversized headlines */}
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-black/10 items-end">
        
        {/* Large Stacked Column Headings with lines */}
        <div className="lg:col-span-7 space-y-0 font-sans font-black tracking-tighter uppercase leading-none text-left">
          <h3 className="text-4xl md:text-6xl text-gray-400">QUALITY—</h3>
          <h3 className="text-4xl md:text-6xl text-[#0E0F0E] pl-6 md:pl-16">— ARTISTRY</h3>
          <h3 className="text-4xl md:text-6xl text-zinc-950 pl-12 md:pl-32">
            — <span className="text-[#C3F53C] bg-black px-4 rounded-xl inline-block mt-2">STORYTELLING</span>
          </h3>
        </div>

        {/* Short philosophy paragraph & Discover CTA pill */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-5 text-left">
          <p className="font-sans text-xs md:text-sm text-[#0E0F0E]/80 leading-relaxed font-medium uppercase">
            We reject standard, fast-fashion capture streams. For every portfolio package we outline deep narrative boards, precise light direction, and fine contrast processing. Quality isn't a post-production filter, it's a rigorous studio state of mind.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full pt-1">
            <button
              onClick={onContactClick}
              className="flex items-center space-x-2 bg-[#0E0F0E] hover:bg-black text-white rounded-full px-5 py-2.5 font-mono text-xs font-bold transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span>INQUIRE COMMISSION</span>
              <Send className="w-3.5 h-3.5 text-[#C3F53C] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Availability status indicator */}
            <div className="flex items-center space-x-2.5 bg-white border border-black/10 rounded-full px-4 py-2.5 shadow-sm text-left">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[9px] text-gray-600 font-bold uppercase tracking-widest">
                AVAILABLE FOR BOOKING // FALL 2026
              </span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
