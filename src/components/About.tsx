"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { assets } from "@/lib/assets";

const cards = [
  "/cards/card1.png",
  "/cards/card2.png",
  "/cards/card3.png",
  "/cards/card4.png",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardAreaRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const scrollingRef = useRef(false);

  const goTo = useCallback((index: number) => {
    setActive(Math.max(0, Math.min(cards.length - 1, index)));
  }, []);

  // Check if the card area is centered/visible in viewport
  function isCardAreaLocked() {
    if (!cardAreaRef.current) return false;
    const rect = cardAreaRef.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    return rect.top <= windowH * 0.5 && rect.bottom >= windowH * 0.5;
  }

  // Scroll (wheel) driven card advance on desktop
  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      if (!isCardAreaLocked()) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (scrollingDown && active < cards.length - 1) {
        e.preventDefault();
        if (scrollingRef.current) return;
        scrollingRef.current = true;
        setActive((prev) => Math.min(cards.length - 1, prev + 1));
        setTimeout(() => { scrollingRef.current = false; }, 300);
        return;
      }

      if (scrollingUp && active > 0) {
        e.preventDefault();
        if (scrollingRef.current) return;
        scrollingRef.current = true;
        setActive((prev) => Math.max(0, prev - 1));
        setTimeout(() => { scrollingRef.current = false; }, 300);
        return;
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [active]);

  // Horizontal swipe support for mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const el = cardAreaRef.current;
    if (!el) return;

    function handleTouchStart(e: TouchEvent) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }

    function handleTouchEnd(e: TouchEvent) {
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const threshold = 40;

      // Only trigger if horizontal swipe is dominant
      if (Math.abs(deltaX) < threshold || Math.abs(deltaX) < Math.abs(deltaY)) return;

      if (deltaX > 0 && active < cards.length - 1) {
        // Swipe left → next
        setActive((prev) => prev + 1);
      } else if (deltaX < 0 && active > 0) {
        // Swipe right → prev
        setActive((prev) => prev - 1);
      }
    }

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [active]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-10 md:py-20 px-6 md:px-[34px] overflow-hidden"
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

          {/* Right: Horizontal swipe carousel (desktop) */}
          <div
            ref={cardAreaRef}
            className="relative hidden lg:block overflow-hidden"
            style={{ width: 431, height: 646 }}
          >
            <div
              className="flex will-change-transform"
              style={{
                transition: "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
                transform: `translateX(${-active * 431 + 30}px)`,
                gap: 16,
              }}
            >
              {cards.map((src, i) => {
                const isCurrent = i === active;
                return (
                  <img
                    key={src}
                    src={src}
                    alt={`card ${i + 1}`}
                    className="rounded-[24px] object-cover flex-shrink-0 cursor-pointer"
                    onClick={() => goTo(i)}
                    style={{
                      width: 385,
                      height: 646,
                      opacity: isCurrent ? 1 : 0.35,
                      transform: isCurrent ? "scale(1)" : "scale(0.92)",
                      transition:
                        "opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Mobile: Horizontal swipe carousel */}
          <div
            className="lg:hidden relative w-full overflow-hidden mx-auto"
            style={{ maxWidth: 320, aspectRatio: "2/3" }}
          >
            <div
              className="flex will-change-transform"
              style={{
                transition: "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
                transform: `translateX(calc(${-active * 240}px + 24px))`,
                gap: 12,
              }}
            >
              {cards.map((src, i) => {
                const isCurrent = i === active;
                return (
                  <img
                    key={src}
                    src={src}
                    alt={`card ${i + 1}`}
                    className="rounded-[20px] object-cover flex-shrink-0"
                    onClick={() => goTo(i)}
                    style={{
                      width: 228,
                      height: "100%",
                      aspectRatio: "2/3",
                      opacity: isCurrent ? 1 : 0.35,
                      transform: isCurrent ? "scale(1)" : "scale(0.92)",
                      transition:
                        "opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
