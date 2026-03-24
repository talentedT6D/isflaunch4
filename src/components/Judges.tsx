export default function Judges() {
  const judges = [
    { src: "/jury/Asset%201%404x-8.png", title: "LMAO-ING SOON", category: "Comedy" },
    { src: "/jury/Asset%202%404x-8.png", title: "TOUCHING KIDNEYS SOON", category: "Emotional" },
    { src: "/jury/Asset%203%404x-8.png", title: "COOKING SOON", category: "Food" },
    { src: "/jury/Asset%204%404x-8.png", title: "GENERATING", category: "AI" },
    { src: "/jury/Asset%205%404x-8.png", title: "EXPORTING SOON", category: "Edits" },
  ];

  return (
    <section id="judges" className="py-16 md:py-20 px-6 md:px-[34px]">
      <div
        className="max-w-[1440px] mx-auto rounded-[28px] px-4 md:px-10 pt-6 md:pt-8 pb-5 md:pb-6"
        style={{ background: "#080808", border: "1.5px solid rgba(255,255,255,0.25)" }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center mb-5 md:mb-8 gap-2 md:gap-0">
          <div className="flex items-center">
            <p
              className="text-[14px] md:text-[18px] uppercase text-red glow-red leading-none whitespace-nowrap shrink-0 tracking-[0.18em]"
              style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
            >
              DOOMSCROLL WITH
            </p>
            <div className="mx-4 md:mx-6 flex-1 h-px md:w-auto" style={{ background: "#ff0000" }} />
          </div>
          <h2
            className="text-white text-[22px] sm:text-[28px] md:text-[64px] uppercase leading-none whitespace-nowrap shrink-0"
            style={{ fontFamily: "obviously-extended", fontWeight: 700 }}
          >
            THE JUDGES
          </h2>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {judges.map(({ src, title, category }, i) => (
            <div key={i} className="relative rounded-[12px] overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p
                  className="text-white text-[12px] uppercase leading-tight font-bold"
                  style={{ fontFamily: "obviously-compressed", fontWeight: 700 }}
                >
                  {title}
                </p>
                <p
                  className="text-white text-[11px] italic"
                  style={{ fontFamily: "obviously", fontWeight: 300 }}
                >
                  {category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: all 5 in one flex row */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {judges.map(({ src, title, category }, i) => (
            <div key={i} className="relative rounded-[16px] overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="text-white text-[18px] lg:text-[22px] uppercase leading-tight"
                  style={{ fontFamily: "obviously-compressed", fontWeight: 700 }}
                >
                  {title}
                </p>
                <p
                  className="text-white text-[14px] lg:text-[16px] italic"
                  style={{ fontFamily: "obviously", fontWeight: 300 }}
                >
                  {category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-4 md:mt-6 text-center text-[12px] md:text-[14px] leading-snug"
          style={{ fontFamily: "obviously", fontWeight: 300, color: "rgba(255,255,255,0.4)" }}
        >
          More judges coming soon &bull; Have a suggestion?{" "}
          <span className="underline text-white" style={{ fontWeight: 400 }}>
            Tag us on stories
          </span>
        </p>
      </div>
    </section>
  );
}
