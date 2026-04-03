"use client";

import { useEffect, useState, useRef } from "react";

const DURATION = 7000; // 7 seconds

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const [percent, setPercent] = useState(0);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      setPercent(Math.floor(progress * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setExiting(true);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const timer = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 800);
    return () => clearTimeout(timer);
  }, [exiting, onComplete]);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
      style={{
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/Loading screen 02 (without text).mp4" type="video/mp4" />
      </video>

      {/* Scrolling percentage text */}
      <div
        className="absolute bottom-[18%] left-1/2 -translate-x-1/2 flex items-center gap-3"
        style={{
          fontFamily: "obviously-extended",
          fontWeight: 300,
          fontSize: 18,
          color: "#ffffff",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        <span>SCROLLING</span>
        <span style={{ fontVariantNumeric: "tabular-nums", minWidth: "3.5ch", textAlign: "right" }}>
          {percent}%
        </span>
      </div>
    </div>
  );
}
