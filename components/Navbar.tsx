"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "High School",
    children: [
      { href: "/highschool", label: "About" },
      { href: "/highschool/schedule", label: "Schedule" },
      { href: "/highschool/coaches", label: "Coaches" },
    ],
  },
  {
    label: "JWC Girls Club",
    children: [
      { href: "/club", label: "About" },
      { href: "/club/schedule", label: "Schedule" },
      { href: "/club/coaches", label: "Coaches" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold text-gold tracking-wider">JUAB</span>
            <span className="font-display text-xs font-medium text-white/60 tracking-widest">GIRLS WRESTLING</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) =>
            l.children ? (
              <li key={l.label} className="relative" onMouseEnter={() => setDropdown(l.label)} onMouseLeave={() => setDropdown(null)}>
                <button className="font-display text-sm font-medium tracking-widest text-white/70 uppercase hover:text-gold transition-colors flex items-center gap-1">
                  {l.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdown === l.label && (
                  <div className="absolute top-full left-0 bg-black border border-gold/20 min-w-[160px] py-2 mt-1">
                    {l.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block px-4 py-2 font-display text-xs tracking-widest uppercase text-white/70 hover:text-gold hover:bg-white/5 transition-colors" onClick={() => setDropdown(null)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={l.href}>
                <Link href={l.href!} className="font-display text-sm font-medium tracking-widest text-white/70 uppercase hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            )
          )}
          <li>
            <a href="https://shortstoppr.com" target="_blank" rel="noopener noreferrer" className="font-display text-sm font-bold tracking-widest uppercase bg-gold text-black px-5 py-2 hover:bg-yellow-400 transition-colors">
              Register
            </a>
          </li>
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black border-t border-gold/20 px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="block font-display text-lg uppercase text-white/80 hover:text-gold py-1" onClick={() => setOpen(false)}>Home</Link></li>
            <li className="pt-2">
              <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-2">High School</div>
              <div className="flex flex-col gap-1 pl-3">
                {[{ href: "/highschool", label: "About" }, { href: "/highschool/schedule", label: "Schedule" }, { href: "/highschool/coaches", label: "Coaches" }].map(c => (
                  <Link key={c.href} href={c.href} className="font-display text-base uppercase text-white/70 hover:text-gold" onClick={() => setOpen(false)}>{c.label}</Link>
                ))}
              </div>
            </li>
            <li className="pt-2">
              <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-2">JWC Girls Club</div>
              <div className="flex flex-col gap-1 pl-3">
                {[{ href: "/club", label: "About" }, { href: "/club/schedule", label: "Schedule" }, { href: "/club/coaches", label: "Coaches" }].map(c => (
                  <Link key={c.href} href={c.href} className="font-display text-base uppercase text-white/70 hover:text-gold" onClick={() => setOpen(false)}>{c.label}</Link>
                ))}
              </div>
            </li>
            <li className="pt-2"><Link href="/contact" className="block font-display text-lg uppercase text-white/80 hover:text-gold py-1" onClick={() => setOpen(false)}>Contact</Link></li>
            <li className="pt-3">
              <a href="https://shortstoppr.com" target="_blank" rel="noopener noreferrer" className="inline-block font-display text-sm font-bold tracking-widest uppercase bg-gold text-black px-6 py-3">Register Now</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
