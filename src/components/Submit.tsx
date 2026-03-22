"use client";

import { useEffect, useState } from "react";

function useNoiseDataUrl(width = 300, height = 300) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const c = document.createElement("canvas");
    c.width = width;
    c.height = height;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const img = ctx.createImageData(width, height);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const n = Math.random();
      d[i] = 255;     // R (#FF)
      d[i + 1] = 68;  // G (#44)
      d[i + 2] = 0;   // B (#00)
      d[i + 3] = n * 56; // ~22% max opacity
    }
    ctx.putImageData(img, 0, 0);
    setUrl(c.toDataURL());
  }, [width, height]);
  return url;
}

export default function Submit() {
  const noiseUrl = useNoiseDataUrl();
  return (
    <section
      id="submit"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #e8ff00 0%, #ff6a00 45%, #ff1a00 100%)",
        minHeight: 420,
      }}
    >
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-12 flex flex-col gap-6 items-center text-center">
        <div className="relative">
          <p
            className="uppercase leading-[0.88]"
            style={{
              fontFamily: "obviously-compressed",
              fontWeight: 300,
              fontSize: 80,
              color: "#ffffff",
              mixBlendMode: "overlay",
            }}
          >
            READY TO SUBMIT?
          </p>
          {/* Noise clipped to text */}
          {noiseUrl && (
            <p
              aria-hidden="true"
              className="absolute inset-0 uppercase leading-[0.88] pointer-events-none"
              style={{
                fontFamily: "obviously-compressed",
                fontWeight: 300,
                fontSize: 80,
                color: "transparent",
                backgroundImage: `url(${noiseUrl})`,
                backgroundRepeat: "repeat",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                mixBlendMode: "overlay",
              }}
            >
              READY TO SUBMIT?
            </p>
          )}
        </div>

        <div
          style={{ fontFamily: "obviously", fontWeight: 300, fontSize: 18, color: "#faff00", lineHeight: 1.4 }}
        >
          <p>Submit your film across Comedy, AI, Edits, Emotional, or Food. One submission per category allowed.</p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <a
            href="#"
            className="flex items-center justify-center uppercase w-full"
            style={{
              fontFamily: "obviously-narrow",
              fontWeight: 400,
              fontSize: 18,
              height: 50,
              borderRadius: 9999,
              color: "#ff0504",
              border: "1px solid #febc01",
              background: "#faff00",
            }}
          >
            SUBMIT YOUR FILM
          </a>
          <a
            href="#criteria"
            className="flex items-center justify-center uppercase w-full border"
            style={{
              fontFamily: "obviously-narrow",
              fontWeight: 400,
              fontSize: 18,
              height: 50,
              borderRadius: 9999,
              color: "#faff00",
              borderColor: "#faff00",
              background: "transparent",
            }}
          >
            VIEW CRITERIA
          </a>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex max-w-[1440px] mx-auto items-center" style={{ minHeight: 420 }}>

        {/* LEFT: Giant text — absolutely positioned per Figma x:14 */}
        <div className="flex-1 min-w-0 relative self-stretch">
          <p
            className="absolute uppercase whitespace-nowrap leading-[0.82]"
            style={{
              fontFamily: "obviously-compressed",
              fontWeight: 300,
              fontSize: 381,
              color: "#ffffff",
              mixBlendMode: "overlay",
              left: 14,
              top: 4,
            }}
          >
            READY TO SUBMIT?
          </p>
          {/* Noise clipped to text */}
          {noiseUrl && (
            <p
              aria-hidden="true"
              className="absolute uppercase whitespace-nowrap leading-[0.82] pointer-events-none"
              style={{
                fontFamily: "obviously-compressed",
                fontWeight: 300,
                fontSize: 381,
                color: "transparent",
                backgroundImage: `url(${noiseUrl})`,
                backgroundRepeat: "repeat",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                mixBlendMode: "overlay",
                left: 14,
                top: 4,
              }}
            >
              READY TO SUBMIT?
            </p>
          )}
        </div>

        {/* RIGHT: description + buttons */}
        <div
          className="shrink-0 flex flex-col gap-6 px-10"
          style={{ width: 420 }}
        >
          <div
            className="leading-snug"
            style={{ fontFamily: "obviously", fontWeight: 300, fontSize: 20, color: "#faff00" }}
          >
            <p>Submit your film across Comedy, AI, Edits, Emotional, or Food.</p>
            <br />
            <p>One submission per category allowed.</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center justify-center uppercase relative overflow-hidden"
              style={{
                fontFamily: "obviously-narrow",
                fontWeight: 400,
                fontSize: 20,
                width: 190,
                height: 45.18,
                borderRadius: 9999,
                color: "#ff0504",
                padding: 0,
                boxSizing: "border-box",
                border: "1px solid #febc01",
                background: "#faff00",
              }}
            >
              SUBMIT YOUR FILM
            </a>
            <a
              href="#criteria"
              className="inline-flex items-center justify-center uppercase whitespace-nowrap border transition-all"
              style={{
                fontFamily: "obviously-narrow",
                fontWeight: 400,
                fontSize: 20,
                width: 190,
                height: 45.18,
                borderRadius: 9999,
                color: "#faff00",
                borderColor: "#faff00",
                background: "transparent",
                padding: 0,
                boxSizing: "border-box",
              }}
            >
              VIEW CRITERIA
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
