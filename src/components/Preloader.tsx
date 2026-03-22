"use client";

import { useEffect, useState, useRef } from "react";

const DURATION = 10000; // 10 seconds

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const startTime = useRef(0);
  const rafRef = useRef<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Wait for video to start playing before beginning the progress bar
  useEffect(() => {
    if (!videoReady) return;

    startTime.current = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime.current;
      const pct = Math.min(elapsed / DURATION, 1);
      // Ease-out cubic for smooth feel
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(eased * 100);

      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Bar complete — start exit transition
        setExiting(true);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [videoReady]);

  // After exit animation finishes, remove preloader
  useEffect(() => {
    if (!exiting) return;
    const timer = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 1200); // matches CSS exit transition duration
    return () => clearTimeout(timer);
  }, [exiting, onComplete]);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col justify-end"
      style={{
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.05)" : "scale(1)",
        transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onPlaying={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/landing-page.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

      {/* Bottom content */}
      <div className="relative z-10 px-6 pb-10 md:px-12 md:pb-14">
        {/* Loading text */}
        <p
          className="text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-white/60 mb-3"
          style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
        >
          Loading experience
        </p>

        {/* Progress bar track */}
        <div className="w-full h-[2px] md:h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #faff00, #ffffff)",
              transition: "width 0.05s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
