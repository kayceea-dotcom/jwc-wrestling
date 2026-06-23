import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-4">Join the Team</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-4">Register</h1>
        <p className="text-steel text-lg max-w-2xl mb-12">
          Registration for both programs opens this fall. Check back soon or contact us directly to get on the list early.
        </p>

        <div className="bg-black p-8 hive-pattern mb-12 border-l-4 border-gold">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-2">Important — Club Athletes</div>
              <h2 className="font-display text-2xl font-bold uppercase text-white mb-3">USA Wrestling Membership Required</h2>
              <p className="text-white/70 leading-relaxed max-w-xl">
                Before you can participate in the JWC Girls club, you must have an active USA Wrestling membership card. When signing up, select <span className="text-gold font-semibold">JWC Girls</span> as your club affiliate. High school athletes only need this if competing with the club in the off-season.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="https://www.usawmembership.com/login" target="_blank" rel="noopener noreferrer" className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-gold text-black px-8 py-4 hover:bg-yellow-400 transition-colors whitespace-nowrap">
                Get USA Wrestling Card
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black p-8 hive-pattern">
            <div className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-2">Juab High School</div>
            <h2 className="font-display text-3xl font-bold uppercase text-white mb-4">Varsity Program</h2>
            <p className="text-white/60 leading-relaxed mb-8">
              For high school athletes competing at the varsity level. Registration links will be available here this fall.
            </p>
            <div className="border border-gold/30 px-6 py-4 text-center">
              <span className="font-display text-sm font-bold tracking-widest uppercase text-gold">Registration Opens This Fall</span>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 space-y-1">
              <p className="text-white/50 text-sm">Questions? Contact Billy Cox</p>
              <a href="tel:8017837978" className="block text-white hover:text-gold transition-colors text-sm">801-783-7978</a>
              <a href="mailto:12billycox@gmail.com" className="block text-white hover:text-gold transition-colors text-sm">12billycox@gmail.com</a>
            </div>
          </div>

          <div className="bg-black p-8 hive-pattern">
            <div className="font-display text-xs tracking-[0.3em] uppercase text-crimson mb-2">JWC Girls Club</div>
            <h2 className="font-display text-3xl font-bold uppercase text-white mb-4">Club Program</h2>
            <p className="text-white/60 leading-relaxed mb-8">
              For youth athletes of all ages and experience levels. Registration links will be available here this fall.
            </p>
            <div className="border border-crimson/30 px-6 py-4 text-center">
              <span className="font-display text-sm font-bold tracking-widest uppercase text-crimson">Registration Opens This Fall</span>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 space-y-1">
              <p className="text-white/50 text-sm">Questions? Contact KayCee Anderson</p>
              <a href="tel:8017178660" className="block text-white hover:text-gold transition-colors text-sm">801-717-8660</a>
              <a href="mailto:kayceea@gmail.com" className="block text-white hover:text-gold transition-colors text-sm">kayceea@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
