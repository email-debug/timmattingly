'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { assets } from '@/lib/assets';

// Landscape images — light crop only (3:2 container), never portrait-crop
const images = [
  { src: assets.headshot('headshot-olympics.jpg'), alt: 'Tim at Milano Cortina 2026', position: '70% 25%' },
  { src: assets.headshot('headshot-alps.jpg'), alt: 'Tim in the Alps', position: '30% 25%' },
  { src: assets.headshot('headshot-lisbon.jpg'), alt: 'Tim in Lisbon', position: '55% 20%' },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(i => (i + 1) % images.length);
        setFading(false);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aspect-[3/2] relative overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover transition-opacity"
          style={{ transitionDuration: '600ms', opacity: i === current ? (fading ? 0 : 1) : 0, objectPosition: img.position }}
          priority={i === 0}
          sizes="(max-width: 1200px) 40vw, 480px"
        />
      ))}
    </div>
  );
}
