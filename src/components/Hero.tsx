"use client";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[980px] overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0">
        <img
          src="/videos/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrolling ticker at bottom */}
      <div className="relative md:absolute md:bottom-0 left-0 right-0 z-10 overflow-hidden py-3 bg-black">
        <div className="ticker-animate whitespace-nowrap flex">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[20px] text-white capitalize tracking-normal mx-0"
              style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
            >
              ISF &bull; EDITION 01 &bull; SUBMISSIONS OPEN &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
