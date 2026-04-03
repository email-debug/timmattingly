'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  { src: '/images/headshot-olympics.jpg', alt: 'Tim at Milano Cortina 2026' },
  { src: '/images/headshot-alps.jpg', alt: 'Tim in the Alps' },
  { src: '/images/headshot-lisbon.jpg', alt: 'Tim in Lisbon' },
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aspect-[3/4] relative overflow-hidden bg-stone-100">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover object-top transition-opacity"
          style={{ transitionDuration: '600ms', opacity: i === current ? (fading ? 0 : 1) : 0 }}
          priority={i === 0}
          sizes="(max-width: 1200px) 40vw, 480px"
        />
      ))}
    </div>
  );
}
