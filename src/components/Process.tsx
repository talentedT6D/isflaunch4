"use client";

import { useState } from "react";
import { assets } from "@/lib/assets";

const cards = [
  { num: "01.", lines: ["SUBMIT", "YOUR REEL"],     img: assets.process.card1, desc: "Upload your short-form video via the submission form. Pick your category, and fill in your details." },
  { num: "03.", lines: ["SHORTLIST", "ANNOUNCED"],  img: assets.process.card3, desc: "Top finalists are announced publicly and invited to attend the gala screening night." },
  { num: "02.", lines: ["JURY REVIEW"],             img: assets.process.card2, desc: "A jury of creators and creatives will shortlist top entries for the stage round." },
  { num: "04.", lines: ["STAGE", "SCROLL"],          img: assets.process.card4, desc: "Finalists will have their reels scrolled in a 9:16 format theatre that would make Nolan quake." },
];

// Mobile order: 01, 02, 03, 04 (sequential by number)
const mobileOrder = [0, 2, 1, 3];
const NORMAL_H   = 219;
const EXPANDED_H = 300;
const SHRUNK_H   = 124;   // 219*2 - 300 = 138, but user specified 124 — gap covers delta
const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";
const DURATION = "0.4s";

export default function Process() {
  const [hovered, setHovered] = useState<number | null>(null);

  function col(i: number) { return i <= 1 ? 0 : 1; }

  function getHeight(i: number): number {
    if (hovered === null) return NORMAL_H;
    if (col(i) !== col(hovered)) return NORMAL_H;
    return i === hovered ? EXPANDED_H : SHRUNK_H;
  }

  function getFontSize(i: number): number {
    if (hovered === null || col(i) !== col(hovered) || i === hovered) return 43;
    return 23; // shrunk partner
  }

  const transition = `height ${DURATION} ${EASE}, font-size ${DURATION} ${EASE}`;

  return (
    <section id="process" className="py-16 md:py-20 px-6 md:px-[34px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <p
            className="text-[21px] uppercase text-red glow-red leading-none whitespace-nowrap"
            style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
          >
            PROCESS
          </p>
          <img src={assets.decorLines.line3} alt="" className="h-[16px] w-[476px] object-contain hidden sm:block" />
        </div>

        <h2
          className="text-[24px] sm:text-[32px] md:text-[48px] leading-none uppercase text-white glow-white mb-6 md:mb-12"
          style={{ fontFamily: "obviously-extended", fontWeight: 600 }}
        >
          HOW IT WORKS
        </h2>

        {/* Mobile: single column stack — smaller font to prevent overflow */}
        <div className="flex flex-col gap-[6px] md:hidden">
          {mobileOrder.map((idx) => { const card = cards[idx]; return (
            <div
              key={idx}
              className="relative w-full rounded-[12px] overflow-hidden"
              style={{ height: card.desc ? 220 : 190 }}
            >
              <img src={card.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              {/* Dark gradient so text is always legible */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
              <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                <div
                  className="leading-none text-white glow-white uppercase mix-blend-screen"
                  style={{ fontFamily: "obviously-extended", fontWeight: 600, fontSize: 24 }}
                >
                  <p>{card.num}</p>
                  {card.lines.map((line, j) => <p key={j}>{line}</p>)}
                </div>
                {card.desc && (
                  <p
                    className="text-[13px] text-white/80 leading-snug"
                    style={{ fontFamily: "obviously", fontWeight: 300 }}
                  >
                    {card.desc}
                  </p>
                )}
              </div>
            </div>
          ); })}
        </div>

        {/* Desktop: 2-column grid — cards expand/shrink vertically only */}
        <div className="hidden md:grid grid-cols-2 gap-[6px]">

          {/* Left column: cards 0 and 1 */}
          <div className="flex flex-col gap-[6px]">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="relative w-full rounded-lg overflow-hidden cursor-pointer"
                style={{
                  height: getHeight(i),
                  transition,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={cards[i].img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div
                    className="leading-none text-white glow-white uppercase mix-blend-screen"
                    style={{
                      fontFamily: "obviously-extended",
                      fontWeight: 600,
                      fontSize: getFontSize(i),
                      transition,
                    }}
                  >
                    <p>{cards[i].num}</p>
                    {cards[i].lines.map((line, j) => <p key={j}>{line}</p>)}
                  </div>
                  {cards[i].desc && hovered === i && (
                    <p
                      className="text-[16px] text-black leading-snug max-w-[617px]"
                      style={{ fontFamily: "obviously", fontWeight: 300 }}
                    >
                      {cards[i].desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right column: cards 2 and 3 */}
          <div className="flex flex-col gap-[6px]">
            {[2, 3].map((i) => (
              <div
                key={i}
                className="relative w-full rounded-lg overflow-hidden cursor-pointer"
                style={{
                  height: getHeight(i),
                  transition,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={cards[i].img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div
                    className="leading-none text-white glow-white uppercase mix-blend-screen"
                    style={{
                      fontFamily: "obviously-extended",
                      fontWeight: 600,
                      fontSize: getFontSize(i),
                      transition,
                    }}
                  >
                    <p>{cards[i].num}</p>
                    {cards[i].lines.map((line, j) => <p key={j}>{line}</p>)}
                  </div>
                  {cards[i].desc && hovered === i && (
                    <p
                      className="text-[16px] text-black leading-snug max-w-[617px]"
                      style={{ fontFamily: "obviously", fontWeight: 300 }}
                    >
                      {cards[i].desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
