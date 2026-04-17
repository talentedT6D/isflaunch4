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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
        <img
          src="/fs/First in our generation to play reels on a theatre screen..png"
          alt="First in our generation to play reels on a theatre screen."
          className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] h-auto"
        />

        <a
          href="https://payment.indianscrollfestival.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto mt-6 md:mt-10"
        >
          <img
            src="/fs/SUBMIT BUTTON 3.png"
            alt="Submit Now — Entries close 30th April"
            className="w-[200px] sm:w-[260px] md:w-[340px] lg:w-[420px] h-auto hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
          />
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
