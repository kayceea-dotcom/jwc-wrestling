export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-4">Get In Touch</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-12">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-black p-8 hive-pattern">
            <div className="font-display text-xs tracking-[0.3em] uppercase text-crimson mb-2">JWC Girls Club</div>
            <h2 className="font-display text-3xl font-bold uppercase text-white mb-6">Club Program</h2>
            <div className="space-y-4">
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-1">Contact</div>
                <div className="text-white font-medium">KayCee Anderson</div>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-1">Phone</div>
                <a href="tel:8017178660" className="text-white hover:text-gold transition-colors">801-717-8660</a>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-1">Email</div>
                <a href="mailto:kayceea@gmail.com" className="text-white hover:text-gold transition-colors">kayceea@gmail.com</a>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-1">Registration</div>
                <a href="https://www.shortstoppr.com/register/team/e336b6a6-0e50-47c0-a41d-97eadec68c15" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">Register at shortstoppr.com</a>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 hive-pattern">
            <div className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-2">Juab High School</div>
            <h2 className="font-display text-3xl font-bold uppercase text-white mb-6">Varsity Program</h2>
            <div className="space-y-4">
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-1">Contact</div>
                <div className="text-white font-medium">Billy Cox</div>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-1">Phone</div>
                <a href="tel:8017837978" className="text-white hover:text-gold transition-colors">801-783-7978</a>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-1">Email</div>
                <a href="mailto:12billycox@gmail.com" className="text-white hover:text-gold transition-colors">12billycox@gmail.com</a>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest uppercase text-gold/60 mb-1">Registration</div>
                <span className="text-white/50">Opens October 13</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
