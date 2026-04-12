"use client";

import { useState } from "react";

const heroImages = [
  "/videos/23rd.png",
  "/videos/23rd.png",
  "/videos/23rd.png",
  "/videos/23rd.png",
  "/videos/23rd.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative md:h-screen md:min-h-[600px] md:max-h-[980px] overflow-hidden">
      {/* Slideshow background */}
      <div className="relative md:absolute md:inset-0">
        {/* Invisible sizer to maintain natural image height on mobile */}
        <img
          src={heroImages[0]}
          alt=""
          aria-hidden="true"
          className="w-full h-auto md:h-full md:object-cover invisible"
        />
        {heroImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Hero slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Navigation dots */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-3 h-3 md:w-4 md:h-4 bg-white"
                  : "w-3 h-3 md:w-4 md:h-4 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scrolling ticker at bottom */}
      <div className="relative md:absolute md:bottom-0 left-0 right-0 z-10 overflow-hidden py-3 bg-black">
        <div className="ticker-animate whitespace-nowrap flex">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[20px] text-white capitalize tracking-normal mx-0"
              style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
            >
              ISF &bull; EDITION 01 &bull; SUBMISSIONS OPEN &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
