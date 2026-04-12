"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/videos/23rd.png",
  "/videos/slide-2.png",
  "/videos/slide-3.png",
  "/videos/slide-4.png",
  "/videos/slide-5.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            key={src}
            src={src}
            alt={`Hero slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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
