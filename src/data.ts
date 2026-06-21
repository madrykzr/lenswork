import { PhotographySample, Hotspot, ScatteredPhoto, PortfolioGridItem, PastProject } from './types';

// SECTION 1: Bento Collage sample shots
export const BENTO_CHIPS: PhotographySample[] = [
  {
    id: 'bento-1',
    title: 'Ethereal Shadows',
    category: 'Fashion Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    gridSpan: 'md:col-span-1 md:row-span-2',
    rotation: '-rotate-2',
    offsetClass: 'hover:-translate-y-2 transition-transform duration-300',
  },
  {
    id: 'bento-2',
    title: 'Brutalist Synthesis',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    gridSpan: 'md:col-span-2 md:row-span-1',
    rotation: 'rotate-1',
    offsetClass: 'hover:scale-[1.02] transition-transform duration-300',
  },
  {
    id: 'bento-3',
    title: 'Dynamic Booking Info',
    category: 'Studio Status',
    imageUrl: '',
    gridSpan: 'md:col-span-1 md:row-span-1',
    isStatCard: true,
    statNumber: '2026',
    statLabel: 'Now Booking Autumn/Winter Sessions // Limited Slates',
  },
  {
    id: 'bento-4',
    title: 'Objects in Light',
    category: 'Still Life Product',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    gridSpan: 'md:col-span-1 md:row-span-1',
    rotation: 'rotate-3',
    offsetClass: 'hover:rotate-0 transition-transform duration-300',
  },
  {
    id: 'bento-5',
    title: 'Sculpted Silhouette',
    category: 'Portrait Study',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    gridSpan: 'md:col-span-1 md:row-span-1',
    rotation: '-rotate-1',
    offsetClass: 'hover:-translate-y-1 transition-transform duration-300',
  },
];

// SECTION 2: Signature Hero wide image & annotation hotspots
export const SIGNATURE_IMAGE = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1500&auto=format&fit=crop';

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot-1',
    x: 48, // Centered near the subject's posture/neckline
    y: 35,
    label: 'NATURAL LIGHT STUDY',
    detail: 'Diffused sun through north-facing skylight, bounce board accent, 85mm f/1.4 lens.',
    position: 'right',
  },
  {
    id: 'hotspot-2',
    x: 25, // Upper-left architectural column
    y: 18,
    label: 'BRUTALIST FRAMING',
    detail: 'Raw plaster textures and cold shadow play. Pinned at our signature Warehouse Stage B.',
    position: 'bottom',
  },
  {
    id: 'hotspot-3',
    x: 75, // Lower-right light falloff
    y: 72,
    label: 'CHRONICLING THE DUST',
    detail: 'Film grain simulator with hazy light leaks, cinematic color grading, warm shadow bias.',
    position: 'top',
  },
];

// SECTION 3: Scattered stacks
export const SCATTERED_PHOTOS: ScatteredPhoto[] = [
  {
    id: 'stack-1',
    title: 'VAGABOND AT TWILIGHT',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop',
    caption: '1776 (From 16:20 to 18:50 Even) — Golden Hour Session',
    rotateDeg: -8,
    translateX: -120,
    translateY: -30,
  },
  {
    id: 'stack-2',
    title: 'KINETIC SILENCE',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
    caption: 'Interference pattern, cast by raw industrial scaffolding. Shot at 11:45 AM.',
    rotateDeg: 4,
    translateX: 80,
    translateY: -90,
  },
  {
    id: 'stack-3',
    title: 'ORGANIC MOVEMENT',
    imageUrl: 'https://images.unsplash.com/photo-1500627869374-13cd993b1115?q=80&w=600&auto=format&fit=crop',
    caption: 'Shifting fields, long exposure wind sweep. Soft focal blur, 35mm grain.',
    rotateDeg: -3,
    translateX: -40,
    translateY: 80,
  },
  {
    id: 'stack-4',
    title: 'ANALOG IMPRINT',
    imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop',
    caption: 'Today, a few seconds ago — Candid hand-stabilized snapshot on 120 format medium.',
    rotateDeg: 12,
    translateX: 140,
    translateY: 50,
  },
];

// SECTION 4: Portfolio showcase 
export const PORTFOLIO_SHOWCASE: PortfolioGridItem[] = [
  {
    id: 'port-1',
    title: 'RESONANCE',
    category: 'Monochromatic Light Study',
    imageUrl: 'https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?q=80&w=600&auto=format&fit=crop',
    spec: '45 min / Studio',
    location: 'Warehouse B',
    year: '2026',
    sessionLength: '45 Min',
    totalPhotos: '60 Finished Files',
    packageCode: 'RES-STB',
  },
  {
    id: 'port-2',
    title: 'GEOMETRIC ESCAPE',
    category: 'Architectural Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=600&auto=format&fit=crop',
    spec: 'Full Day / On-Location',
    location: 'Concrete Pavilion',
    year: '2025',
    sessionLength: '8 Hours',
    totalPhotos: '120 Rendered Frames',
    packageCode: 'ARC-PVL',
  },
  {
    id: 'port-3',
    title: 'THE DRAPING IN FLUIDITY',
    category: 'High Fashion Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop',
    spec: '2 Hours / Location + Set',
    location: 'Coastal Dunes',
    year: '2026',
    sessionLength: '120 Min',
    totalPhotos: '45 Curated Plates',
    packageCode: 'FSH-COA',
  },
  {
    id: 'port-4',
    title: 'TACTILE OBJECTIVE',
    category: 'Still Life Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop',
    spec: 'Half Day / Studio',
    location: 'Aperture Lab A',
    year: '2026',
    sessionLength: '4 Hours',
    totalPhotos: '35 Master Deliverables',
    packageCode: 'STL-LAB',
  },
  {
    id: 'port-5',
    title: 'SHADOW DIALOGUES',
    category: 'Experimental Silhouette',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    spec: '2 Hours / Experimental Set',
    location: 'Sunset Loft',
    year: '2025',
    sessionLength: '120 Min',
    totalPhotos: '50 High-Contrast Negatives',
    packageCode: 'EXP-SUN',
  },
  {
    id: 'port-6',
    title: 'RIM LIGHT ESSENCE',
    category: 'Cinematic Studio Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=600&auto=format&fit=crop',
    spec: '75 min / Studio',
    location: 'Darkroom No. 3',
    year: '2026',
    sessionLength: '75 Min',
    totalPhotos: '80 Exposed Frames',
    packageCode: 'PT-DRK',
  },
];

// SECTION 5: Horizontal list of past shoots
export const PAST_PROJECTS: PastProject[] = [
  {
    id: 'past-1',
    clientName: 'SANS-ART BOOK',
    shootTitle: 'Muted Concrete Volumes',
    location: 'Copenhagen, DK',
    imagesDelivered: 42,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop',
    year: '2025',
  },
  {
    id: 'past-2',
    clientName: 'SOLO COFFEEMAKER',
    shootTitle: 'Shadow Play Still-Life',
    location: 'London, UK',
    imagesDelivered: 18,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop',
    year: '2026',
  },
  {
    id: 'past-3',
    clientName: 'HELENA ROCHAS',
    shootTitle: 'Pleats in High Wind',
    location: 'Oia, GR',
    imagesDelivered: 55,
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500&auto=format&fit=crop',
    year: '2026',
  },
  {
    id: 'past-4',
    clientName: 'NORD ARCHITECTS',
    shootTitle: 'Nordic Light Absorption',
    location: 'Oslo, NO',
    imagesDelivered: 64,
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500&auto=format&fit=crop',
    year: '2025',
  },
];
