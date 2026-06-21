import { motion } from 'motion/react';
import { useState } from 'react';
import { PAST_PROJECTS } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectListSection() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-[#0E0F0E] text-white py-24 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0E0F0E]" />
      
      {/* Section Headings */}
      <div className="max-w-7xl mx-auto w-full z-10 text-left border-b border-white/10 pb-12 mb-16">
        <span className="font-mono text-[#C3F53C] text-[9px] tracking-widest block uppercase mb-3">
          ● SECTION 05 // HISTORICAL LIST ARCHIVES
        </span>
        
        {/* Divided oversized editorial headline */}
        <h2 className="font-sans font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-4">
          LIFE ALONG—
        </h2>
        {/* Giant word styled in oversized display type */}
        <h2 className="font-sans font-black text-7xl md:text-[10vw] text-[#C3F53C] uppercase tracking-tighter leading-none">
          THE LIGHT.
        </h2>
      </div>

      {/* Stacked Row List container */}
      <div className="max-w-7xl mx-auto w-full z-10 flex-grow flex flex-col justify-center">
        
        <div className="flex justify-between items-center font-mono text-[9px] tracking-widest text-gray-500 uppercase pb-3 border-b border-white/10 px-4">
          <span>CLIENT WORKLIST</span>
          <span className="hidden md:inline">SHOOT SUBSTANCE</span>
          <span>LOCATION & SCOPE</span>
        </div>

        <div className="divide-y divide-white/10">
          {PAST_PROJECTS.map((project, idx) => {
            const isHovered = hoveredRow === project.id;
            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredRow(project.id)}
                onMouseLeave={() => setHoveredRow(null)}
                className="relative py-8 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center px-4 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer group"
              >
                {/* Visual crop-reveal crop expand container */}
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 w-full md:w-auto relative z-10">
                  <span className="font-mono text-gray-500 text-xs mr-6 mt-1 md:mt-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-sans font-black text-xl md:text-3xl uppercase tracking-tight text-white group-hover:text-[#C3F53C] transition-colors duration-300">
                      {project.clientName}
                    </h3>
                    <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                      {project.shootTitle}
                    </p>
                  </div>
                </div>

                {/* Animated Floating Crop Reveal on Hover! */}
                {/* This mimics premium luxury real-estate portfolios with interactive crop-zoom blocks */}
                <div className="my-4 md:my-0 flex items-center md:absolute md:left-1/3 md:-translate-y-1/2 md:top-1/2 z-20">
                  <motion.div
                    initial={{ width: 0, opacity: 0, scale: 0.8 }}
                    animate={{ 
                      width: isHovered ? 160 : 0, 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.82
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-20 md:h-24 overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-zinc-950 pointer-events-none hidden md:block"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.clientName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 brightness-90 grayscale"
                    />
                  </motion.div>
                </div>

                {/* Location and Total Images Specs */}
                <div className="flex justify-between items-center w-full md:w-auto space-x-12 relative z-10 pt-4 md:pt-0">
                  <div className="hidden md:block text-left">
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">SUBSTANCE</span>
                    <p className="text-sm font-sans font-extrabold text-white uppercase mt-0.5">
                      PHOTOGRAPHY ARCHIVE
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="font-mono text-[10px] text-gray-400 block uppercase tracking-widest">
                      {project.location}
                    </span>
                    <span className="font-mono text-[9px] text-[#C3F53C] uppercase tracking-widest mt-1 block">
                      {project.imagesDelivered} FILES DELIVERED
                    </span>
                  </div>

                  <div className="bg-white/5 group-hover:bg-[#C3F53C] group-hover:text-black p-2 rounded-full transition-all duration-300 border border-white/10 group-hover:border-[#C3F53C]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Horizontal bottom row of metadata stats */}
      <div className="max-w-7xl mx-auto w-full z-10 mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div>
          <span className="font-mono text-[9px] text-gray-500 block uppercase tracking-widest mb-1">RECORDING RATIO</span>
          <p className="font-sans text-xs uppercase text-gray-300 font-bold">
            9:16 AND 4:3 FORMATS STABILIZED WITH SONY ALPHA AND HASSELBLAD MEDIUM FORMAT.
          </p>
        </div>
        <div>
          <span className="font-mono text-[9px] text-gray-500 block uppercase tracking-widest mb-1">ARCHIVAL LOCATION</span>
          <p className="font-sans text-xs uppercase text-gray-300 font-bold">
            DIGITAL CLOUD BACKUP GUARANTEED FOR 25 YEARS SPECIFIED UNDER PARAGRAPH F14.
          </p>
        </div>
        <div>
          <span className="font-mono text-[9px] text-gray-500 block uppercase tracking-widest mb-1">PRODUCTION SPEED</span>
          <p className="font-sans text-xs uppercase text-gray-300 font-bold">
            FINISHED MASTER FILES TRANSMITTED WITHIN 14 BUSINESS DAYS DIRECTLY ON SECURE SERVER.
          </p>
        </div>
      </div>

    </section>
  );
}
