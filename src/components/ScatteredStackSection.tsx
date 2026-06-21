import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SCATTERED_PHOTOS } from '../data';
import { Search, SlidersHorizontal, ArrowDownCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ScatteredStackSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const trigger = triggerRef.current;
    const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);

    if (!trigger || cards.length === 0) return;

    // We timeline card animations over scroll.
    // Cards start overlapping at the center (rotation: 0, scale: 0.95, offset: 0)
    // and fan out as the section scrolls.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // smooth scroll scrub link
        invalidateOnRefresh: true,
      }
    });

    // Animate each card to its final designated offset from data.ts
    cards.forEach((card, index) => {
      const photoData = SCATTERED_PHOTOS[index];
      if (!photoData) return;

      // Compute responsive offsets
      const screenMultiplier = window.innerWidth < 768 ? 0.4 : 1.0;
      const xOffset = photoData.translateX * screenMultiplier;
      const yOffset = photoData.translateY * screenMultiplier;

      tl.fromTo(
        card,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 0.95,
          z: 0,
        },
        {
          x: xOffset,
          y: yOffset,
          rotation: photoData.rotateDeg,
          scale: 1,
          ease: 'power1.out',
        },
        0 // All start at same time on timeline for a unified burst
      );
    });

    return () => {
      // Cleanup scrollTriggers
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === trigger) st.kill();
      });
    };
  }, []);

  return (
    <div 
      ref={triggerRef} 
      className="relative min-h-[180vh] bg-[#121413] text-gray-200"
    >
      {/* Sticky Scroll container */}
      <div 
        ref={stickyRef} 
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 py-20"
      >
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center text-center">
          <span className="font-mono text-[9px] tracking-widest text-[#C3F53C] uppercase mb-2">
            ★ SECTION 03 // POLAROID STACK DECONSTRUCTION
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none max-w-3xl">
            ...A TIMELESS <span className="text-[#C3F53C]">SHOT—</span>
          </h2>
          <p className="font-mono text-xs text-gray-400 uppercase tracking-wider mt-4">
            SCROLL SLOWLY TO BURST THE REVEAL // HEIRLOOM NEGATIVES
          </p>
        </div>

        {/* Scattered Cards Canvas (Middle) */}
        <div className="relative w-full flex-grow flex items-center justify-center z-10">
          <div className="relative w-72 h-96 md:w-80 md:h-[420px] flex items-center justify-center">
            
            {SCATTERED_PHOTOS.map((photo, index) => (
              <div
                key={photo.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="absolute w-full h-full bg-[#181a19] p-4 pb-12 rounded-xl border border-white/10 shadow-2xl flex flex-col justify-between select-none cursor-grab active:cursor-grabbing hover:border-[#C3F53C]/40 transition-colors duration-300 transform-gpu"
                style={{
                  // Stack order: top visible first
                  zIndex: SCATTERED_PHOTOS.length - index,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                }}
              >
                {/* Photo frame */}
                <div className="relative w-full flex-grow overflow-hidden rounded-lg bg-zinc-900 aspect-[3/4]">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95"
                  />
                  {/* Subtle Grain overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />
                </div>

                {/* Film-captions styled in custom marker/cursive mono type */}
                <div className="mt-3 text-left">
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider">
                    CAPTURED SLATE // {photo.id.toUpperCase()}
                  </span>
                  <h3 className="font-sans font-black text-sm tracking-tight text-white mt-1 uppercase">
                    {photo.title}
                  </h3>
                  <p className="font-mono text-[10px] text-[#C3F53C] leading-normal uppercase mt-1 tracking-tight">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Controls and scroll action label below */}
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-t border-white/15 pt-6 text-center md:text-left">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <ArrowDownCircle className="w-5 h-5 text-[#C3F53C] animate-bounce" />
            <span className="text-gray-400 uppercase">
              Keep scrolling to separate individual exposures
            </span>
          </div>

          {/* Search/Filter Pill Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-[#C3F53C]/50 transition-colors duration-300">
              <Search className="w-3.5 h-3.5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="PRORETA / MOOD / YEAR"
                className="bg-transparent border-none outline-none font-mono text-[10px] uppercase text-white placeholder-gray-500 w-32 tracking-wider"
              />
            </div>
            <button className="bg-white/10 hover:bg-[#C3F53C] hover:text-black p-2 rounded-full border border-white/10 transition-colors duration-300 cursor-pointer">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
