import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 py-12 hive-pattern">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="mb-3">
              <span className="font-display text-3xl font-bold text-gold">JUAB</span>
              <span className="font-display text-sm font-medium text-white/40 ml-2">GIRLS WRESTLING</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed">Home of the Wasps. Building champions through the high school program and JWC Girls club.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-semibold tracking-widest uppercase text-gold/50 mb-1">High School</span>
            <Link href="/highschool" className="text-sm hover:text-gold transition-colors">About</Link>
            <Link href="/highschool/schedule" className="text-sm hover:text-gold transition-colors">Schedule</Link>
            <Link href="/highschool/coaches" className="text-sm hover:text-gold transition-colors">Coaches</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-semibold tracking-widest uppercase text-gold/50 mb-1">JWC Club</span>
            <Link href="/club" className="text-sm hover:text-gold transition-colors">About</Link>
            <Link href="/club/schedule" className="text-sm hover:text-gold transition-colors">Schedule</Link>
            <Link href="/club/coaches" className="text-sm hover:text-gold transition-colors">Coaches</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-semibold tracking-widest uppercase text-gold/50 mb-1">Connect</span>
            <Link href="/contact" className="text-sm hover:text-gold transition-colors">Contact Us</Link>
            <a href="/register" className="text-sm hover:text-gold transition-colors">Register on ShortStoppr</a>
            <a href="mailto:info@juabgirlswrestling.com" className="text-sm hover:text-gold transition-colors">info@juabgirlswrestling.com</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-center text-white/30">
          2025 Juab Girls Wrestling. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
