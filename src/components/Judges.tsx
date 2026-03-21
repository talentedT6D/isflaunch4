export default function Judges() {
  const src = "/jury/Group%2040%20(2).png";

  return (
    <section id="judges" className="py-16 md:py-20 px-6 md:px-[34px]">
      <div
        className="max-w-[1440px] mx-auto rounded-[28px] px-4 md:px-10 pt-6 md:pt-8 pb-5 md:pb-6"
        style={{ background: "#080808", border: "1.5px solid rgba(255,255,255,0.25)" }}
      >
        {/* Header */}
        <div className="flex items-center mb-5 md:mb-8">
          <p
            className="text-[14px] md:text-[18px] uppercase text-red glow-red leading-none whitespace-nowrap shrink-0 tracking-[0.18em]"
            style={{ fontFamily: "obviously-extended", fontWeight: 300 }}
          >
            JURY PANEL
          </p>
          <div className="mx-4 md:mx-6 flex-1 h-px" style={{ background: "#ff0000" }} />
        </div>

        {/* Mobile: 2-column grid — all 5 same size */}
        <div className="md:hidden grid grid-cols-2 gap-[6px]">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="relative rounded-[12px] overflow-hidden h-[180px]">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop: all 5 in one flex row — unchanged */}
        <div className="hidden md:flex gap-[6px]">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="relative flex-1 rounded-[16px] overflow-hidden" style={{ height: 340 }}>
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
