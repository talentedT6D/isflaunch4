"use client";

import { useEffect, useState, useRef } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setExiting(true);
    }, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
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
      className="fixed inset-0 z-[9999] bg-black"
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
        className="w-full h-full object-cover"
      >
        <source src="/videos/preloader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
