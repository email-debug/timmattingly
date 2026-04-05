'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Photo {
  src: string;
  label: string;
}

interface ScrollGalleryProps {
  photos: Photo[];
  height?: number;
  speed?: number; // px per frame at 60fps
}

export default function ScrollGallery({ photos, height = 280, speed = 0.4 }: ScrollGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const pos = useRef(0);
  const rafRef = useRef<number>(undefined);

  // Duplicate photos for seamless infinite loop
  const looped = [...photos, ...photos];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function step() {
      if (!paused.current && el) {
        pos.current += speed;
        // Reset to 0 when we've scrolled through the first copy
        if (pos.current >= el.scrollWidth / 2) {
          pos.current = 0;
        }
        el.scrollLeft = pos.current;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    const onEnter = () => { paused.current = true; };
    const onLeave = () => { paused.current = false; };
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="flex flex-nowrap gap-4 overflow-x-hidden"
      style={{ scrollBehavior: 'auto', height }}
    >
      {looped.map((photo, i) => (
        <div
          key={`${photo.src}-${i}`}
          className="relative shrink-0"
          style={{ height }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.label}
            style={{ height, width: 'auto', display: 'block' }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
            <p className="text-sm text-white font-medium">{photo.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
