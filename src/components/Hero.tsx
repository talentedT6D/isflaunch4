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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pb-16 md:pb-20 text-center pointer-events-none">
        <h1
          className="uppercase text-[#faff00] leading-[0.88] text-[40px] sm:text-[64px] md:text-[92px] lg:text-[120px] xl:text-[150px]"
          style={{ fontFamily: "obviously-compressed", fontWeight: 400 }}
        >
          INDIA&apos;S{" "}
          <span style={{ fontStyle: "italic", fontWeight: 700 }}>FIRST</span>{" "}
          EVER
        </h1>
        <h1
          className="uppercase text-[#faff00] leading-[0.88] text-[40px] sm:text-[64px] md:text-[92px] lg:text-[120px] xl:text-[150px] mt-1 md:mt-2"
          style={{ fontFamily: "obviously-compressed", fontWeight: 400 }}
        >
          <span style={{ fontStyle: "italic", fontWeight: 700 }}>VERTICAL</span>{" "}
          FILM FESTIVAL
        </h1>

        <p
          className="uppercase text-[#faff00] mt-5 md:mt-8 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[0.15em]"
          style={{ fontFamily: "obviously-wide", fontWeight: 400 }}
        >
          ENTRIES CLOSE 23RD APRIL
        </p>

        <a
          href="#submit"
          className="pointer-events-auto mt-3 md:mt-4 inline-flex items-center justify-center uppercase text-[#faff00] border border-[#faff00] rounded-full px-7 py-2.5 md:px-10 md:py-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] tracking-[0.12em] transition-all duration-300 hover:bg-[rgba(250,255,0,0.1)]"
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
