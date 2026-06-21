import { Search, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center mix-blend-difference pointer-events-auto">
      {/* Brand logo in tracking-widest */}
      <a href="#" className="flex flex-col hover:opacity-80 transition-opacity">
        <span className="font-sans font-black text-2xl uppercase tracking-tighter text-white">LENSWORK</span>
        <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#C3F53C] mt-0.5">Studio © 2026</span>
      </a>

      <div className="hidden md:flex items-center space-x-8 text-xs font-mono text-gray-300">
        <span className="hover:text-white transition-colors cursor-pointer">PORTRAIT</span>
        <span className="text-gray-600">//</span>
        <span className="hover:text-white transition-colors cursor-pointer">EDITORIAL</span>
        <span className="text-gray-600">//</span>
        <span className="hover:text-white transition-colors cursor-pointer">FILM CATALOG</span>
      </div>

      {/* Right control search/contact field */}
      <div className="flex items-center space-x-4">
        <div 
          className={`flex items-center space-x-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10 transition-all duration-300 ${
            searchFocused ? 'w-48 border-[#C3F53C]/50' : 'w-32'
          }`}
        >
          <Search className="w-3.5 h-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="SEARCH SITE..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="bg-transparent border-none outline-none text-[10px] uppercase font-mono text-white placeholder-gray-500 w-full tracking-wider"
          />
        </div>

        <button 
          onClick={onContactClick}
          className="bg-[#C3F53C] hover:bg-white text-black p-2 rounded-full transition-colors duration-300 flex items-center justify-center cursor-pointer"
          title="Contact Studio"
        >
          <Mail className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}
