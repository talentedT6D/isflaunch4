"use client";

export default function Hero() {
  return (
    <section className="relative md:h-screen md:min-h-[600px] md:max-h-[980px] overflow-hidden">
      {/* Image background */}
      <div className="relative md:absolute md:inset-0">
        <img
          src="/videos/Landing Page Video 3x.png"
          alt="Hero background"
          className="w-full h-auto md:h-full md:object-cover"
        />
      </div>

      {/* Hero content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pb-20 md:pb-24 text-center pointer-events-none">
        <h1
          className="uppercase text-[#faff00] leading-[0.85] tracking-tight text-[48px] sm:text-[80px] md:text-[140px] lg:text-[200px] xl:text-[252px]"
          style={{ fontFamily: "obviously-compressed", fontWeight: 400 }}
        >
          INDIA&apos;S{" "}
          <span style={{ fontFamily: "obviously-compressed", fontStyle: "italic", fontWeight: 700 }}>
            FIRST
          </span>{" "}
          EVER
        </h1>
        <h1
          className="uppercase text-[#faff00] leading-[0.85] tracking-tight text-[48px] sm:text-[80px] md:text-[140px] lg:text-[200px] xl:text-[252px] mt-2 md:mt-4"
          style={{ fontFamily: "obviously-compressed", fontWeight: 400 }}
        >
          <span style={{ fontFamily: "obviously-compressed", fontStyle: "italic", fontWeight: 700 }}>
            VERTICAL
          </span>{" "}
          FILM FESTIVAL
        </h1>

        <p
          className="uppercase text-[#faff00] mt-6 md:mt-10 text-[12px] sm:text-[16px] md:text-[22px] lg:text-[28px] tracking-wider"
          style={{ fontFamily: "obviously-wide", fontWeight: 400 }}
        >
          ENTRIES CLOSE 23RD APRIL
        </p>

        <a
          href="#submit"
          className="pointer-events-auto mt-4 md:mt-6 inline-flex items-center justify-center uppercase text-[#faff00] border border-[#faff00] rounded-full px-8 py-3 md:px-12 md:py-4 text-[18px] md:text-[28px] lg:text-[45px] tracking-wider transition-all duration-300 hover:bg-[rgba(250,255,0,0.1)]"
          style={{ fontFamily: "obviously-wide", fontWeight: 600 }}
        >
          SUBMIT NOW
        </a>
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
