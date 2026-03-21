"use client";

import { useState } from "react";

export default function SizzleReel() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Ticker bar */}
        <div className="bg-foreground text-white px-6 py-3 mb-12 -mx-6 md:-mx-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono">
            ISF &middot; Edition 01 &middot; Submissions Open
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <span className="section-counter">02 / 08</span>
        </div>

        <p className="section-label mb-6">Sizzle Reel</p>

        <div className="relative aspect-video bg-card-bg rounded-lg overflow-hidden border border-border">
          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex flex-col items-center justify-center group cursor-pointer"
            >
              {/* Play icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted mb-4 group-hover:text-foreground transition-colors"
              >
                <polygon points="8,5 20,12 8,19" fill="currentColor" stroke="none" />
              </svg>
              <p className="text-xs text-muted tracking-[0.1em] uppercase">
                [ Embed YouTube / Vimeo — 16:9 ]
              </p>
              <p className="text-xs text-muted mt-1">
                Replace src with your video URL
              </p>
            </button>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="ISF 2026 Sizzle Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
