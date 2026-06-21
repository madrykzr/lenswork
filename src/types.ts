export interface PhotographySample {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  fallbackUrl?: string;
  gridSpan?: string; // Tailwind grid span classes
  rotation?: string; // Rotation class (e.g. rotate-3)
  offsetClass?: string; // Offset class (e.g. -translate-y-4)
  isStatCard?: boolean;
  statNumber?: string;
  statLabel?: string;
}

export interface Hotspot {
  id: string;
  x: number; // Percent relative to image width (0-100)
  y: number; // Percent relative to image height (0-100)
  label: string;
  detail: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

export interface ScatteredPhoto {
  id: string;
  title: string;
  imageUrl: string;
  fallbackUrl?: string;
  caption: string;
  rotateDeg: number;
  translateX: number;
  translateY: number;
}

export interface PortfolioGridItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  fallbackUrl?: string;
  spec: string; // e.g. "45 min / Studio"
  location: string;
  year: string;
  sessionLength: string;
  totalPhotos: string;
  packageCode: string;
}

export interface PastProject {
  id: string;
  clientName: string;
  shootTitle: string;
  location: string;
  imagesDelivered: number;
  imageUrl: string;
  fallbackUrl?: string;
  year: string;
}
