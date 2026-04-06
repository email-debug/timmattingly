'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { assets } from '@/lib/assets';

const images = [
  { src: assets.headshot('headshot-olympics.jpg'), alt: 'Tim at Milano Cortina 2026' },
  { src: assets.headshot('headshot-alps.jpg'), alt: 'Tim in the Alps' },
  { src: assets.headshot('headshot-lisbon.jpg'), alt: 'Tim in Lisbon' },
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
