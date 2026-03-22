"use client";

import { useEffect, useRef, useState } from "react";

const timelineItems = [
  { label: "AWARDS NIGHT",        date: "DD/MM", day: "DAY" },
  { label: "SUBMISSIONS OPEN",    date: "DD/MM", day: "DAY" },
  { label: "SUBMISSION DEADLINE", date: "DD/MM", day: "DAY" },
  { label: "SHORTLIST ANNOUNCED", date: "DD/MM", day: "DAY" },
  { label: "AWARDS NIGHT",        date: "DD/MM", day: "DAY" },
];

// Desktop sizes
const ROW_DESK  = 120;
const LABEL_DESK = [38, 34, 28, 22, 16];
const DATE_DESK  = [28, 24, 20, 17, 14];
const DAY_DESK   = [36, 30, 25, 20, 16];

// Mobile sizes — scaled down so multi-word labels fit the pill width
const ROW_MOB   = 80;
const LABEL_MOB = [22, 19, 16, 13, 10];
const DATE_MOB  = [16, 14, 12, 10,  8];
const DAY_MOB   = [20, 17, 14, 11,  9];

const BLUR_PX  = [ 0,  1,  3,  5,  8];
const OPACITY  = [1, 0.6, 0.35, 0.18, 0.08];

export default function EventDetails() {
  const [continuous, setContinuous] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const n = timelineItems.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const ROW     = isMobile ? ROW_MOB   : ROW_DESK;
  const LABEL_PX = isMobile ? LABEL_MOB : LABEL_DESK;
  const DATE_PX  = isMobile ? DATE_MOB  : DATE_DESK;
  const DAY_PX   = isMobile ? DAY_MOB   : DAY_DESK;

  // Auto-scroll — pauses on hover
  useEffect(() => {
    if (hovered) return;
    const STEP_DURATION = 5000; // ms per item
    const FPS = 60;
    const increment = 1 / (STEP_DURATION / (1000 / FPS));
    const id = setInterval(() => {
      setContinuous(prev => prev + increment);
    }, 1000 / FPS);
    return () => clearInterval(id);
  }, [hovered]);

  // Manual scroll on hover — wheel up/down moves through items
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    function handleWheel(e: WheelEvent) {
      if (!hovered) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.15 : -0.15;
      setContinuous(prev => prev + delta);
    }

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [hovered]);

  const phase = continuous % n;
  const activeIndex = Math.round(phase) % n;

  return (
    <section>
      <div className="relative h-screen overflow-hidden">

        {/* Red radial gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 55% 60%, #cc0000 0%, #7a0000 45%, #1a0000 75%, #000 100%)",
          }}
        />

        {/* Black notch bottom-left */}
        <div
          className="absolute bottom-0 left-0 bg-black"
          style={{ width: "36%", height: 72, borderTopRightRadius: 60 }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col px-8 md:px-12 pt-8 pb-4 max-w-[1440px] mx-auto w-full">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-2 shrink-0">
            <p
              className="text-[15px] uppercase text-yellow glow-yellow leading-none tracking-widest whitespace-nowrap"
              style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
            >
              EVENT DETAILS
            </p>
            <div className="h-px flex-1 max-w-[420px]" style={{ background: "rgba(250,255,0,0.5)" }} />
          </div>

          {/* Title */}
          <h2
            className="text-[26px] sm:text-[38px] md:text-[76px] leading-none uppercase text-white mb-4 shrink-0"
            style={{ fontFamily: "obviously-extended", fontWeight: 700 }}
          >
            DATE AND VENUE
          </h2>

          {/* Main two-column grid */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 flex-1 min-h-0">

            {/* ── LEFT: scroll-through timeline ── */}
            <div
              ref={timelineRef}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative overflow-hidden cursor-ns-resize"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              }}
            >
              {/* Yellow pill — fixed at vertical center */}
              <div
                className="absolute left-0 right-0 pointer-events-none z-10"
                style={{
                  top:          "50%",
                  transform:    "translateY(-50%)",
                  height:       ROW,
                  border:       "2px solid #faff00",
                  borderRadius: 9999,
                  boxShadow:    "0 0 28px rgba(250,255,0,0.22), inset 0 0 20px rgba(250,255,0,0.04)",
                }}
              />

              {/* Items — each positions itself circularly, no container reset */}
              {timelineItems.map((item, i) => {
                // circular slot: how far this item is from current phase
                let slot = ((i - phase) % n + n) % n;
                if (slot > n / 2) slot -= n; // range: -n/2 .. n/2

                const dist     = Math.abs(Math.round(slot));
                const isActive = Math.round(slot) === 0;
                const label = item.label.split(" ").join("\n");

                return (
                  <div
                    key={i}
                    className="absolute left-0 right-0 flex items-center justify-between px-4 md:px-7"
                    style={{
                      top:       "50%",
                      transform: `translateY(calc(-50% + ${slot * ROW}px))`,
                      height:    ROW,
                      filter:    `blur(${BLUR_PX[dist] ?? 10}px)`,
                      opacity:   OPACITY[dist] ?? 0,
                    }}
                  >
                    {/* Label */}
                    <p
                      style={{
                        fontFamily: "obviously-extended",
                        fontWeight: isActive ? 500 : 200,
                        fontSize:   LABEL_PX[dist] ?? 15,
                        lineHeight: 1.05,
                        color:      isActive ? "#faff00" : "#fff",
                        whiteSpace: "pre-line",
                        transition: "font-size 0.5s ease, color 0.5s ease",
                      }}
                    >
                      {label}
                    </p>

                    {/* Date */}
                    <div
                      className="shrink-0 text-right leading-none"
                      style={{
                        color:      isActive ? "#faff00" : "#fff",
                        transition: "color 0.5s ease",
                      }}
                    >
                      <p style={{ fontFamily: "obviously", fontWeight: 300, fontSize: DATE_PX[dist] ?? 9 }}>
                        {item.date}
                      </p>
                      <p style={{ fontFamily: "obviously-extended", fontWeight: 100, fontSize: DAY_PX[dist] ?? 10 }}>
                        {item.day}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── RIGHT: venue image — desktop only ── */}
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/events%20/event.png"
                alt="Venue"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Mobile venue image */}
          <div className="lg:hidden flex-1 min-h-0 mt-2">
            <img
              src="/events%20/event.png"
              alt="Venue"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
