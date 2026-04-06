'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { assets } from '@/lib/assets';

const images = [
  { src: assets.headshot('hs-olympics.jpg'), alt: 'Tim at Milano Cortina 2026' },
  { src: assets.headshot('hs-dolomites.jpg'), alt: 'Tim in the Dolomites, Italy' },
  { src: assets.headshot('hs-iceland.jpg'), alt: 'Tim at Jokulsarlon Glacier Lagoon, Iceland' },
  { src: assets.headshot('hs-bear.jpg'), alt: 'Tim with a bear behind him, Alaska' },
  { src: assets.headshot('hs-skiing.jpg'), alt: 'Tim skiing' },
  { src: assets.headshot('hs-hlth.jpg'), alt: 'Tim at HLTH Conference' },
  { src: assets.headshot('hs-alps.jpg'), alt: 'Tim in the Alps' },
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
    <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity"
          style={{ transitionDuration: '600ms', opacity: i === current ? (fading ? 0 : 1) : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            priority={i === 0}
            sizes="(max-width: 1200px) 40vw, 480px"
          />
        </div>
      ))}
    </div>
  );
}
