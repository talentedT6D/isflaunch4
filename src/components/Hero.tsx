"use client";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] md:max-h-[980px] overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0">
        <img
          src="/videos/Group 50.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Scrolling ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden py-3 bg-black">
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
