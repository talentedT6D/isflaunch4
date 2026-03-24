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

  // Mobile: separate active index — manual navigation only (no auto-rotation)
  const [mobileActive, setMobileActive] = useState(0);
  const [mobileDir, setMobileDir] = useState<"left" | "right">("left");
  const mobileCardRef = useRef<HTMLDivElement>(null);

  const mobileGoTo = useCallback((index: number, dir: "left" | "right" = "left") => {
    setMobileDir(dir);
    setMobileActive(index);
  }, []);

  const mobilePrev = useCallback(() => {
    mobileGoTo((mobileActive - 1 + cards.length) % cards.length, "right");
  }, [mobileActive, mobileGoTo]);

  const mobileNext = useCallback(() => {
    mobileGoTo((mobileActive + 1) % cards.length, "left");
  }, [mobileActive, mobileGoTo]);

  // Horizontal swipe support for mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const el = mobileCardRef.current;
    if (!el) return;

    function handleTouchStart(e: TouchEvent) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }

    function handleTouchEnd(e: TouchEvent) {
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const threshold = 40;

      if (Math.abs(deltaX) < threshold || Math.abs(deltaX) < Math.abs(deltaY)) return;

      if (deltaX > 0) {
        mobileGoTo((mobileActive + 1) % cards.length, "left");
      } else {
        mobileGoTo((mobileActive - 1 + cards.length) % cards.length, "right");
      }
    }

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [mobileActive, mobileGoTo]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-10 md:py-20 px-4 md:px-[34px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section label with decorative line */}
        <div className="flex items-center gap-4 mb-6">
          <p
            className="text-[14px] md:text-[20px] uppercase text-red glow-red leading-none whitespace-pre"
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
              className="text-[20px] sm:text-[28px] md:text-[48px] leading-none uppercase text-white glow-white mb-4 md:mb-8"
              style={{ fontFamily: "obviously-extended", fontWeight: 600 }}
            >
              HISTORY&apos;S MOST<br />
              WATCHED VIDEO<br />
              FORMAT -<br />
              NOW IN<br />
              THEATRES
            </h2>

            <p
              className="text-[17px] md:text-[24px] leading-[1.3] md:leading-[1.16] text-white max-w-[795px] mb-5 md:mb-10"
              style={{
                fontFamily: "obviously",
                fontWeight: 300,
                letterSpacing: "-0.5px",
              }}
            >
              <span style={{ fontFamily: "obviously", fontWeight: 700 }}>Indian Scroll Festival (ISF)</span> Is A First-Of-Its-Kind Vertical Film
              Festival Celebrating Short-Form Content By Giving It The Big
              Screen It Deserves. It&apos;s For Every Creator Chasing That One Reel
              That Blows Up, And For Every Scroller Who Believes Reels Are The
              New Cinema.
              <br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;The Final Shortlists Get Their Entries Screened At The
              Bangalore International Centre, Where Winners Are Decided By A
              Jury Panel Along With Live Audience Voting On The Day Of The
              Event.
            </p>

            <p
              className="text-[22px] sm:text-[32px] md:text-[50px] lg:text-[85px] leading-[0.79] uppercase text-white mb-2"
              style={{ fontFamily: "obviously-condensed", fontWeight: 100 }}
            >
              THE INTERNET&apos;S FAVOURITE JUDGES +
            </p>

            <p className="uppercase text-white leading-[0.79]">
              <span
                className="text-[40px] sm:text-[64px] md:text-[160px] lg:text-[274px]"
                style={{ fontFamily: "Roboto Condensed", fontWeight: 300 }}
              >
                &#8377;
              </span>
              <span
                className="text-[40px] sm:text-[64px] md:text-[160px] lg:text-[274px]"
                style={{ fontFamily: "obviously-compressed", fontWeight: 700 }}
              >
                X in prizes{" "}
              </span>
            </p>
          </div>

          {/* Right: Crossfade card carousel (desktop) */}
          <div
            ref={cardAreaRef}
            className="relative hidden lg:block"
            style={{ width: 431, height: 646 }}
          >
            {cards.map((src, i) => {
              const isCurrent = i === active;
              const isPrev = i === active - 1;
              return (
                <img
                  key={src}
                  src={src}
                  alt={`card ${i + 1}`}
                  className="absolute inset-0 rounded-[24px] object-cover will-change-[opacity,transform] cursor-pointer"
                  onClick={() => goTo(i)}
                  style={{
                    width: 431,
                    height: 646,
                    opacity: isCurrent ? 1 : isPrev ? 0.15 : 0,
                    transform: isCurrent
                      ? "scale(1) translateX(0)"
                      : isPrev
                        ? "scale(0.93) translateX(-30px)"
                        : "scale(0.93) translateX(30px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    zIndex: isCurrent ? 2 : isPrev ? 1 : 0,
                    pointerEvents: isCurrent || isPrev ? "auto" : "none",
                  }}
                />
              );
            })}
          </div>

          {/* Mobile: Auto-rotating fade carousel */}
          <div
            ref={mobileCardRef}
            className="lg:hidden relative w-full mx-auto"
            style={{ maxWidth: 220, aspectRatio: "2/3" }}
          >
            {cards.map((src, i) => {
              const isCurrent = mobileActive === i;
              const exitDir = mobileDir === "left" ? "-60px" : "60px";
              const enterDir = mobileDir === "left" ? "60px" : "-60px";
              return (
                <img
                  key={src}
                  src={src}
                  alt={`card ${i + 1}`}
                  className="absolute inset-0 rounded-[20px] object-cover w-full h-full"
                  style={{
                    opacity: isCurrent ? 1 : 0,
                    transform: isCurrent ? "translateX(0)" : `translateX(${exitDir})`,
                    transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                    zIndex: isCurrent ? 2 : 1,
                  }}
                />
              );
            })}

            {/* Left / Right arrows */}
            <button
              onClick={mobilePrev}
              className="absolute top-1/2 -left-8 -translate-y-1/2 z-10"
              aria-label="Previous card"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#faff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={mobileNext}
              className="absolute top-1/2 -right-8 -translate-y-1/2 z-10"
              aria-label="Next card"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#faff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => mobileGoTo(i, i > mobileActive ? "left" : "right")}
                  className="w-2 h-2 rounded-full transition-colors duration-300"
                  style={{ background: mobileActive === i ? "#faff00" : "rgba(250,255,0,0.3)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
