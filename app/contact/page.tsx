export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-4">Get In Touch</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div>
            <p className="text-steel text-lg leading-relaxed mb-8">Questions about either program? Reach out and we will get back to you as soon as possible.</p>
            <div className="space-y-4">
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold mb-1">Email</div>
                <a href="mailto:info@juabgirlswrestling.com" className="text-black hover:text-gold transition-colors">info@juabgirlswrestling.com</a>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold mb-1">Registration</div>
                <a href="https://shortstoppr.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gold transition-colors">Register at shortstoppr.com</a>
              </div>
            </div>
          </div>
          <div className="bg-black p-8 hive-pattern">
            <h3 className="font-display text-2xl font-bold uppercase text-gold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {[
                { label: "High School Schedule", href: "/highschool/schedule" },
                { label: "Club Schedule", href: "/club/schedule" },
                { label: "High School Coaches", href: "/highschool/coaches" },
                { label: "Club Coaches", href: "/club/coaches" },
                { label: "Register on ShortStoppr", href: "https://shortstoppr.com" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="block font-display text-sm tracking-widest uppercase text-white/70 hover:text-gold transition-colors border-b border-white/10 pb-3">
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
