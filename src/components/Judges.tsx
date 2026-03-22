export default function Judges() {
  const judges = [
    { src: "/jury/Asset%201%404x-8.png", title: "LOADING\nVIRALITY", category: "Comedy" },
    { src: "/jury/Asset%202%404x-8.png", title: "LOADING\nSTORYTELLER", category: "Emotional" },
    { src: "/jury/Asset%203%404x-8.png", title: "LOADING\nFOODIE", category: "Food" },
    { src: "/jury/Asset%204%404x-8.png", title: "GENERATING", category: "AI" },
    { src: "/jury/Asset%205%404x-8.png", title: "LOADING\nANIMATION", category: "Edits" },
  ];

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
          <h2
            className="text-white text-[32px] md:text-[64px] uppercase leading-none whitespace-nowrap shrink-0"
            style={{ fontFamily: "obviously-extended", fontWeight: 700 }}
          >
            THE JUDGES
          </h2>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="md:hidden grid grid-cols-2 gap-[6px]">
          {judges.map((judge, i) => (
            <div key={i} className="relative rounded-[12px] overflow-hidden h-[220px]">
              <img src={judge.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p
                  className="text-white text-[14px] uppercase leading-tight font-bold whitespace-pre-line"
                  style={{ fontFamily: "obviously-extended" }}
                >
                  {judge.title}
                </p>
                <p
                  className="text-[12px] mt-0.5"
                  style={{ fontFamily: "obviously", fontWeight: 300, color: "rgba(255,255,255,0.7)" }}
                >
                  {judge.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: all 5 in one flex row */}
        <div className="hidden md:flex gap-[6px]">
          {judges.map((judge, i) => (
            <div key={i} className="relative flex-1 rounded-[16px] overflow-hidden" style={{ height: 380 }}>
              <img src={judge.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="text-white text-[18px] uppercase leading-tight font-bold whitespace-pre-line"
                  style={{ fontFamily: "obviously-extended" }}
                >
                  {judge.title}
                </p>
                <p
                  className="text-[14px] mt-1"
                  style={{ fontFamily: "obviously", fontWeight: 300, color: "rgba(255,255,255,0.7)" }}
                >
                  {judge.category}
                </p>
              </div>
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
