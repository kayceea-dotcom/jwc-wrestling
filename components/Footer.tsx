import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-display text-3xl font-bold text-gold">JWC</span>
              <span className="font-display text-sm font-medium text-white/50">GIRLS WRESTLING</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed">
              Building champions on and off the mat. Empowering girls through the discipline and strength of wrestling.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-semibold tracking-widest uppercase text-white/30 mb-1">Quick Links</span>
            {[
              { href: "/", label: "Home" },
              { href: "/schedule", label: "Schedule" },
              { href: "/coaches", label: "Coaches" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-semibold tracking-widest uppercase text-white/30 mb-1">Connect</span>
            <a href="mailto:info@jwcgirlswrestling.com" className="text-sm hover:text-gold transition-colors">
              info@jwcgirlswrestling.com
            </a>
            <a href="tel:+19095550000" className="text-sm hover:text-gold transition-colors">
              (909) 555-0000
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-center text-white/30">
          © {new Date().getFullYear()} JWC Girls Wrestling. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
