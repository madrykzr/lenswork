import { motion } from 'motion/react';
import { useState } from 'react';
import { Copy, Check, Instagram, ArrowUpRight, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function ClosingSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section className="relative min-h-screen bg-[#0E0F0E] text-white pt-24 pb-0 px-6 md:px-12 flex flex-col justify-between overflow-hidden select-none">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />

      {/* SECTION 6 OVERSIZED CTA HEADER */}
      <div className="max-w-7xl mx-auto w-full z-10 text-left mb-12">
        <span className="font-mono text-[#C3F53C] text-[9px] tracking-widest block uppercase mb-3">
          ● SECTION 06 // TERMINATION COMMISSION GATEWAY
        </span>
        <h2 className="font-sans font-black text-[12vw] leading-none text-[#C3F53C] uppercase tracking-tighter w-full">
          -THE LIGHT.
        </h2>
      </div>

      {/* CENTERED CONTACT BLOCK / INTERACTIVE COPIERS */}
      <div className="max-w-4xl mx-auto w-full z-10 my-auto text-center grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-6">
        
        {/* Email Copy Card */}
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start text-left hover:border-[#C3F53C]/35 transition-colors duration-300 relative group">
          <div className="flex justify-between items-center w-full">
            <span className="bg-[#C3F53C] text-black w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <div className="font-mono text-[9px] tracking-widest text-gray-500">EMAIL LINK // DIRECT COMMISSIONS</div>
          </div>
          
          <div className="my-8">
            <h3 className="font-sans font-black text-2xl lg:text-3xl text-white group-hover:text-[#C3F53C] transition-colors duration-300">
              COMMISSIONS@LENSWORK.STUDIO
            </h3>
            <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mt-2">
              PORTRAIT / CAMPAIGN / INDUSTRIAL / GLOBAL DISPATCH
            </p>
          </div>

          <button
            onClick={() => handleCopy('commissions@lenswork.studio', 'email')}
            className="flex items-center space-x-2 bg-white/5 hover:bg-[#C3F53C] hover:text-[#0E0F0E] rounded-full px-4 py-2 font-mono text-[10px] uppercase font-bold transition-all duration-300 border border-white/10 group-hover:border-[#C3F53C]/30 cursor-pointer"
          >
            {copiedType === 'email' ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        {/* Phone Copy Card */}
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start text-left hover:border-[#C3F53C]/35 transition-colors duration-300 relative group">
          <div className="flex justify-between items-center w-full">
            <span className="bg-zinc-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <div className="font-mono text-[9px] tracking-widest text-gray-500">PHONE GRID // BERLIN BASE</div>
          </div>

          <div className="my-8">
            <h3 className="font-sans font-black text-2xl lg:text-3xl text-white group-hover:text-white/80 transition-colors duration-300">
              +49 (0) 30 1445 102
            </h3>
            <p className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mt-2">
              MONDAY TO THURSDAY FROM 10:00 AM TO 17:00 PM CET
            </p>
          </div>

          <button
            onClick={() => handleCopy('+49 30 1445 102', 'phone')}
            className="flex items-center space-x-2 bg-white/5 hover:bg-[#C3F53C] hover:text-[#0E0F0E] rounded-full px-4 py-2 font-mono text-[10px] uppercase font-bold transition-all duration-300 border border-white/10 group-hover:border-[#C3F53C]/30 cursor-pointer"
          >
            {copiedType === 'phone' ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Studio Line</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* STUDIO TAGLINE */}
      <div className="w-full z-10 text-center max-w-xl mx-auto py-8">
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
          PORTRAIT // EDITORIAL // FILM ARCHIVE
        </span>
      </div>

      {/* FOOTER ROW */}
      <div className="max-w-7xl mx-auto w-full z-10 pt-6 pb-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 items-end text-center md:text-left text-xs text-gray-450 uppercase font-mono">
        <div className="space-y-1">
          <p className="text-gray-400">© 2026 LENSWORK Studio. All Rights Reserved.</p>
          <a href="#" className="hover:text-[#C3F53C] transition-colors text-gray-500 text-[10px]">
            Privacy Policy & Imprint // Terms of Commission
          </a>
        </div>

        <div className="flex items-center justify-center space-x-1.5 text-gray-400">
          <MapPin className="w-3.5 h-3.5 text-[#C3F53C]" />
          <span>Möckernstraße 120, 10963 Berlin</span>
        </div>

        <div className="flex justify-center md:justify-end space-x-6">
          <a href="#" className="hover:text-[#C3F53C] transition-colors flex items-center space-x-1">
            <span>Instagram</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a href="#" className="hover:text-[#C3F53C] transition-colors flex items-center space-x-1 mr-2">
            <span>Behance</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a href="#" className="hover:text-[#C3F53C] transition-colors flex items-center space-x-1 mr-1">
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* MASSIVE CROPPED BOOKEND WORDMARK BLEEDING AT THE VERY FOOTER EDGE */}
      <div className="w-full relative h-28 md:h-36 pointer-events-none mt-8 z-0 overflow-hidden -mx-6 md:-mx-12 px-6 md:px-12">
        <h1 className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 text-center text-[18vw] leading-none font-sans font-black tracking-tighter text-white/[0.03] select-none uppercase w-full">
          LENSWORK
        </h1>
      </div>

    </section>
  );
}
