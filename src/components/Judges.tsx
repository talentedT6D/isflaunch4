export default function Judges() {
  const images = [
    "/jury/Asset%201%404x-8.png",
    "/jury/Asset%202%404x-8.png",
    "/jury/Asset%203%404x-8.png",
    "/jury/Asset%204%404x-8.png",
    "/jury/Asset%205%404x-8.png",
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
              JURY PANEL
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

        {/* Mobile: 2-column grid that fits the screen */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {images.map((src, i) => (
            <div key={i} className="relative rounded-[12px] overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop: all 5 in one flex row */}
        <div className="hidden md:flex justify-between">
          {images.map((src, i) => (
            <div key={i} className="relative rounded-[16px] overflow-hidden" style={{ width: 237, height: 340 }}>
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-4 text-[12px] md:text-[13px] leading-snug"
          style={{ fontFamily: "obviously", fontWeight: 300, color: "rgba(255,255,255,0.4)" }}
        >
          *more judges to be announced &bull; replace placeholders with actual names and headshots
        </p>
      </div>
    </section>
  );
}
