"use client";

import { useEffect, useRef, useState } from "react";
import { assets } from "@/lib/assets";

const cards = [
  "/cards/card1.png",
  "/cards/card2.png",
  "/cards/card3.png",
  "/cards/card4.png",
];

export default function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [extraHeight, setExtraHeight] = useState(0);

  // Once the sticky content renders, measure it and set wrapper height
  useEffect(() => {
    function measure() {
      if (!stickyRef.current) return;
      // extra scroll = 150px per card transition (after the first)
      setExtraHeight((cards.length - 1) * 150);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!wrapperRef.current || !stickyRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const contentH = stickyRef.current.offsetHeight;
      const wrapperH = wrapperRef.current.offsetHeight;
      const travel = wrapperH - contentH;

      if (travel <= 0) {
        setActive(0);
        return;
      }

      // How far the sticky content has scrolled within the wrapper
      const scrolledPast = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolledPast / travel);
      const idx = Math.min(
        cards.length - 1,
        Math.floor(progress * cards.length)
      );
      setActive(idx);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [extraHeight]);

  return (
    <div
      ref={wrapperRef}
      id="about"
      style={{ paddingBottom: extraHeight }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 py-10 md:py-20 px-6 md:px-[34px] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Section label with decorative line */}
          <div className="flex items-center gap-4 mb-6">
            <p
              className="text-[20px] uppercase text-red glow-red leading-none whitespace-pre"
              style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
            >
              {`ABOUT THE  FESTIVAL`}
            </p>
            <img
              src={assets.decorLines.line1}
              alt=""
              className="h-[16px] w-[371px] object-contain hidden sm:block"
            />
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-6 lg:gap-16">
            {/* Left: Content */}
            <div>
              <h2
                className="text-[32px] md:text-[48px] leading-none uppercase text-white glow-white mb-4 md:mb-8"
                style={{ fontFamily: "obviously-extended", fontWeight: 600 }}
              >
                {`INDIA'S FIRST FESTIVAL BUILT FOR `}
                <span>THE SCROLL GENERATION</span>
              </h2>

              <p
                className="text-[17px] md:text-[24px] leading-[1.3] md:leading-[1.16] text-white max-w-[795px] mb-5 md:mb-10"
                style={{
                  fontFamily: "obviously",
                  fontWeight: 300,
                  letterSpacing: "-0.5px",
                }}
              >
                Short placeholder copy — 2–3 lines about what ISF is, who
                it&apos;s for, and why it matters. Describe the mission of
                celebrating India&apos;s most exciting short-form filmmakers across
                comedy, AI, edits, emotional storytelling, and food content.
              </p>

              <p
                className="text-[32px] md:text-[50px] lg:text-[85px] leading-[0.79] uppercase text-white mb-2"
                style={{ fontFamily: "obviously-condensed", fontWeight: 100 }}
              >
                500+ submissions &middot; 12 judges
              </p>

              <p className="uppercase text-white leading-[0.79]">
                <span
                  className="text-[64px] md:text-[160px] lg:text-[274px]"
                  style={{ fontFamily: "Roboto Condensed", fontWeight: 300 }}
                >
                  &#8377;
                </span>
                <span
                  className="text-[64px] md:text-[160px] lg:text-[274px]"
                  style={{ fontFamily: "obviously-compressed", fontWeight: 700 }}
                >
                  X in prizes{" "}
                </span>
              </p>
            </div>

            {/* Right: Scroll-driven stacking cards (desktop) */}
            <div className="relative hidden lg:block" style={{ width: 431, height: 646 }}>
              {cards.map((src, i) => {
                const isActive = i <= active;
                return (
                  <img
                    key={src}
                    src={src}
                    alt={`card ${i + 1}`}
                    className="absolute inset-0 rounded-[24px] object-cover will-change-transform"
                    style={{
                      width: 431,
                      height: 646,
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(60px)",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                      zIndex: i,
                    }}
                  />
                );
              })}
            </div>

            {/* Mobile: Scroll-driven stacking cards */}
            <div className="lg:hidden relative w-full mx-auto" style={{ aspectRatio: "2/3", maxWidth: 260 }}>
              {cards.map((src, i) => {
                const isActive = i <= active;
                return (
                  <img
                    key={src}
                    src={src}
                    alt={`card ${i + 1}`}
                    className="absolute inset-0 rounded-[20px] object-cover w-full h-full will-change-transform"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(40px)",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                      zIndex: i,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
