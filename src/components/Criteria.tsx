"use client";

import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";

const categories = ["Comedy", "AI", "Edits", "Emotional", "Food"];

const criteriaList = [
  "(1) Placeholder criteria line — e.g. video must be under 3 minutes in length.",
  "(2) Placeholder criteria line — e.g. originally created content only, no reposts.",
  "(3) Placeholder criteria line — e.g. must have been published/created in 2025–2026.",
  "(4) Placeholder criteria line — add more specific rules per category as needed.",
];

function useNoiseCanvas(width = 300, height = 300) {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    // #FF4400 = rgb(255, 68, 0) at 22% opacity
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random();
      data[i] = 255;       // R
      data[i + 1] = 68;    // G
      data[i + 2] = 0;     // B
      data[i + 3] = noise * 56; // 22% of 255 ≈ 56, modulated by noise
    }
    ctx.putImageData(imageData, 0, 0);
    setDataUrl(canvas.toDataURL());
  }, [width, height]);

  return dataUrl;
}

export default function Criteria() {
  const [activeCategory, setActiveCategory] = useState("Comedy");
  const noiseUrl = useNoiseCanvas();

  return (
    <section id="criteria" className="py-16 md:py-20 px-4 md:px-[73px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <p
            className="text-[15px] md:text-[21px] uppercase text-red glow-red leading-none whitespace-nowrap"
            style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
          >
            PICK YOUR sTYLE
          </p>
          <img
            src={assets.decorLines.line4}
            alt=""
            className="h-[12px] md:h-[16px] flex-1 object-contain object-left"
          />
        </div>

        <h2
          className="text-[24px] md:text-[47px] leading-none uppercase text-white glow-white mb-5 md:mb-10"
          style={{ fontFamily: "obviously-extended", fontWeight: 600 }}
        >
          CATEGORIES
        </h2>

        {/* Yellow card container */}
        <div
          className="relative w-full p-5 sm:p-8 md:p-12 overflow-hidden"
          style={{
            borderRadius: 35,
            backgroundColor: "#FAFF00",
          }}
        >
          {/* Noise overlay */}
          {noiseUrl && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: 35,
                backgroundImage: `url(${noiseUrl})`,
                backgroundRepeat: "repeat",
                mixBlendMode: "multiply",
              }}
            />
          )}
          {/* Category tabs — wrap on mobile so all 5 are visible */}
          <div className="relative z-10 flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-[13px] md:text-[24px] uppercase transition-all cursor-pointer leading-none ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-transparent text-black hover:bg-black/10"
                }`}
                style={{
                  fontFamily:
                    activeCategory === cat
                      ? "obviously-extended"
                      : "obviously-narrow",
                  fontWeight: activeCategory === cat ? 700 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Criteria rows */}
          <div className="relative z-10 space-y-2 md:space-y-3">
            {criteriaList.map((item, index) => (
              <div
                key={index}
                className="border border-black bg-transparent flex items-start w-full"
                style={{ borderRadius: 20, padding: "10px 14px" }}
              >
                <p
                  className="text-[13px] md:text-[20px] text-black leading-snug"
                  style={{ fontFamily: "obviously", fontWeight: 300 }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Submission deadline bar */}
        <div className="mt-4 md:mt-6 border border-white rounded-[28px] md:rounded-[33.5px] px-4 md:px-8 py-3 md:py-0 flex flex-row items-center justify-between md:h-[67px]">
          <span
            className="text-[13px] md:text-[24px] uppercase text-white leading-none"
            style={{ fontFamily: "obviously-narrow", fontWeight: 400 }}
          >
            Submission Deadline
          </span>
          <span
            className="text-[13px] md:text-[24px] uppercase text-white leading-none"
            style={{ fontFamily: "obviously-narrow", fontWeight: 400 }}
          >
            Date TBD · 11:59 PM IST
          </span>
        </div>
      </div>
    </section>
  );
}
