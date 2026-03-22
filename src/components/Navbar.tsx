"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "ABOUT",        href: "#about" },
  { label: "HOW IT WORKS", href: "#process" },
  { label: "JUDGES",       href: "#judges" },
  { label: "CRITERIA",     href: "#criteria" },
  { label: "SUBMIT FILM",  href: "#submit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.4;
      let current = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1));
        if (el && el.getBoundingClientRect().top <= trigger) {
          current = link.href;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">

      {/* Black header shape — inlined SVG — desktop only */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none hidden md:block" style={{ height: 310 }}>
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 1440 309.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <path
            d="M0 0H1440V138H720H286C241.817 138 206 173.817 206 218V229.5C206 273.683 170.183 309.5 126 309.5H0L0 0Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Logo — desktop only */}
      <a
        href="#"
        className="absolute hidden md:block"
        style={{
          left: 38,
          top: 50,
          width: 115,
          height: 209,
        }}
      >
        <img
          src="/assets/logo.png"
          alt="ISF 2026"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </a>

      {/* Desktop nav links — right side of the top 138px black strip */}
      <div
        className="hidden md:flex items-center gap-[14px]"
        style={{
          position: "absolute",
          top: 48,
          right: 40,
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link uppercase leading-none whitespace-nowrap${activeSection === link.href ? " active" : ""}${link.label === "SUBMIT FILM" ? " nav-link-submit" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile header bar */}
      <div className="md:hidden flex items-center justify-between bg-black px-5 border-b border-white/10" style={{ height: 68 }}>
        <a href="#" className="flex items-center" style={{ height: 58 }}>
          <img
            src="/assets/logo.png"
            alt="ISF 2026"
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
          />
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-white p-2 -mr-1"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden relative z-10 bg-black backdrop-blur-sm border-b border-white/10 px-5 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center py-4 text-[22px] uppercase text-white border-b border-white/8 last:border-0"
              style={{ fontFamily: "obviously-narrow", fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
