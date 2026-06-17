"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/coaches", label: "Coaches" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold text-gold tracking-wider">JWC</span>
          <span className="font-display text-sm font-medium text-white/80 leading-tight hidden sm:block">
            GIRLS<br />WRESTLING
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-display text-sm font-medium tracking-widest text-white/70 uppercase hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact#register"
              className="font-display text-sm font-bold tracking-widest uppercase bg-gold text-navy px-5 py-2 hover:bg-yellow-400 transition-colors duration-200"
            >
              Register
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-display text-lg font-medium tracking-widest text-white/80 uppercase hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact#register"
                className="inline-block font-display text-sm font-bold tracking-widest uppercase bg-gold text-navy px-6 py-3 hover:bg-yellow-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
