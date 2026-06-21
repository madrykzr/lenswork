import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import our sub-components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroDetailSection from './components/HeroDetailSection';
import ScatteredStackSection from './components/ScatteredStackSection';
import PortfolioGridSection from './components/PortfolioGridSection';
import ProjectListSection from './components/ProjectListSection';
import ClosingSection from './components/ClosingSection';
import ContactModal from './components/ContactModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // organic rapid ease-out
      touchMultiplier: 1.5,
      infinite: false,
    });

    // 2. Wire up Lenis Scroll to state tracking
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      
      // Compute which section is currently active based on viewport position
      const scrollPos = e.scroll || window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = scrollPos / (docHeight || 1);

      if (fraction < 0.15) {
        setActiveSection(1);
      } else if (fraction < 0.32) {
        setActiveSection(2);
      } else if (fraction < 0.55) {
        setActiveSection(3);
      } else if (fraction < 0.72) {
        setActiveSection(4);
      } else if (fraction < 0.88) {
        setActiveSection(5);
      } else {
        setActiveSection(6);
      }
    });

    // 3. Sync GSAP ticker with Lenis frames
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disables lag smoothing to avoid jumps during heavy scroll frames
    gsap.ticker.lagSmoothing(0);

    // Initial ScrollTrigger update on window mount
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
    };
  }, []);

  // Quick navigation scroll trigger using Lenis client-control
  const scrollToPercent = (percent: number) => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: docHeight * percent,
      behavior: 'smooth',
    });
  };

  const sectionsGuide = [
    { index: 1, label: '01 COLLAGE', scrollFrac: 0 },
    { index: 2, label: '02 ANNOTATIONS', scrollFrac: 0.22 },
    { index: 3, label: '03 DECONSTRUCT', scrollFrac: 0.42 },
    { index: 4, label: '04 SHOWCASE', scrollFrac: 0.62 },
    { index: 5, label: '05 RAW ARCHIVE', scrollFrac: 0.78 },
    { index: 6, label: '06 CONTACTGATE', scrollFrac: 0.98 },
  ];

  return (
    <div className="relative min-h-screen bg-[#0E0F0E] text-white selection:bg-[#C3F53C] selection:text-[#0E0F0E] antialiased">
      
      {/* Dynamic Slide In Navigation Sidebar Guide - Left Rail */}
      <div className="fixed left-6 bottom-1/2 translate-y-1/2 z-40 hidden lg:flex flex-col space-y-6 select-none mix-blend-difference pointer-events-auto">
        {sectionsGuide.map((section) => {
          const isActive = activeSection === section.index;
          return (
            <button
              key={section.index}
              onClick={() => scrollToPercent(section.scrollFrac)}
              className="group flex items-center space-x-3 text-left focus:outline-none cursor-pointer"
            >
              {/* Left active line indicator */}
              <div 
                className={`h-4 w-[2px] transition-all duration-300 ${
                  isActive ? 'bg-[#C3F53C] h-8 scale-x-150' : 'bg-gray-500 group-hover:bg-white'
                }`}
              />
              <div className="overflow-hidden flex flex-col justify-center">
                <span 
                  className={`font-mono text-[9px] tracking-widest block transition-all duration-300 ${
                    isActive ? 'text-[#C3F53C] translate-x-1 font-bold' : 'text-gray-500 group-hover:text-white'
                  }`}
                >
                  {section.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Primary Floating Interface Navbar */}
      <Navbar onContactClick={() => setContactOpen(true)} />

      {/* Main Single Page Scroll Stacked Layout */}
      <main className="w-full">
        {/* Section 1: Hero collage */}
        <HeroSection onContactClick={() => setContactOpen(true)} />

        {/* Section 2: Signature annotations hotspots */}
        <HeroDetailSection />

        {/* Section 3: Scattered stack reveal */}
        <ScatteredStackSection />

        {/* Section 4: Grid showcase list */}
        <PortfolioGridSection onContactClick={() => setContactOpen(true)} />

        {/* Section 5: Horizontal scrolling list */}
        <ProjectListSection />

        {/* Section 6: Closing Contact Module */}
        <ClosingSection />
      </main>

      {/* Active slide-in commission drawer */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

    </div>
  );
}
