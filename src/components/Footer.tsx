export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      {/* Mobile layout */}
      <div className="md:hidden px-6 py-8 flex flex-col items-center gap-6 text-center">
        {/* Partner logos */}
        <div className="flex items-center gap-4">
          <img src="/logo/t6.png" alt="T6D" className="h-[48px] w-auto rounded-[12px]" />
          <img src="/logo/mk.png" alt="MK" className="h-[38px] w-auto" />
        </div>

        {/* Copyright */}
        <p
          className="text-[12px] uppercase text-white/50 tracking-[0.12em]"
          style={{ fontFamily: "obviously-narrow", fontWeight: 400 }}
        >
          ISF 2026 &bull; Indian Scroll Festival &bull; All Rights Reserved
        </p>

        {/* Links */}
        <div className="flex gap-6">
          {["Terms & Conditions", "Privacy Policy", "Contact"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-[12px] uppercase text-white/70 hover:text-white transition-colors"
              style={{ fontFamily: "obviously-narrow", fontWeight: 400 }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex max-w-[1440px] mx-auto px-[32px] py-6 items-center justify-between gap-6">
        <p
          className="text-[18px] text-white capitalize whitespace-pre-wrap"
          style={{ fontFamily: "obviously-narrow", fontWeight: 400 }}
        >
          {`iSF 2026      INDIAN SCROLL FESTIVAL   All rights Reserved`}
        </p>

        <div className="flex items-center gap-4">
          <img src="/logo/t6.png" alt="T6D" className="h-[68px] w-auto rounded-[14px]" />
          <img src="/logo/mk.png" alt="MK" className="h-[56px] w-auto" />
        </div>

        <p
          className="text-[18px] text-white capitalize whitespace-pre-wrap"
          style={{ fontFamily: "obviously-narrow", fontWeight: 400 }}
        >
          {`Terms & Conditions      privacy Policy    Contact`}
        </p>
      </div>

    </footer>
  );
}
