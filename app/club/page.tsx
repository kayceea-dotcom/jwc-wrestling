import Image from "next/image";
import Link from "next/link";

export default function ClubPage() {
  return (
    <>
      <section className="relative h-72 bg-black flex items-end overflow-hidden">
        <Image src="/club-team.jpg" alt="JWC Girls Wrestling Club" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 hive-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 pb-10 w-full pt-24">
          <span className="font-display text-xs tracking-[0.3em] uppercase text-crimson block mb-2">JWC Girls</span>
          <h1 className="font-display text-6xl font-bold uppercase text-white">Feeder Club</h1>
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-steel text-lg leading-relaxed max-w-2xl mb-8">
            JWC Girls is the youth wrestling club that feeds directly into the Juab High School program. We welcome girls of all ages and experience levels — from first-timers to seasoned competitors.
          </p>
          <div className="flex gap-4 flex-wrap mb-16">
            <Link href="/club/schedule" className="font-display font-bold tracking-widest uppercase text-sm bg-crimson text-white px-8 py-4 hover:bg-red-800 transition-colors">View Schedule</Link>
            <Link href="/club/coaches" className="font-display font-bold tracking-widest uppercase text-sm border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-gold transition-colors">Meet the Coaches</Link>
          </div>

          <div className="mb-16">
            <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-crimson block mb-4">Practice Schedule</span>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black p-6 hive-pattern border border-gold/30 text-center">
                <div className="font-display text-xs tracking-widest uppercase text-gold mb-2">PreK – 3rd Grade</div>
                <div className="text-white text-xl font-semibold mb-1">Mondays & Wednesdays</div>
                <div className="text-white/70 mb-1">6:30 – 7:30 PM</div>
                <div className="text-white/50 text-sm">Juab Jr. High School</div>
              </div>
              <div className="bg-black p-6 hive-pattern border border-crimson/40 text-center">
                <div className="font-display text-xs tracking-widest uppercase text-crimson mb-2">4th – 8th Grade</div>
                <div className="text-white text-xl font-semibold mb-1">Mondays, Tuesdays & Wednesdays</div>
                <div className="text-white/70 mb-1">4:00 – 6:00 PM</div>
                <div className="text-white/50 text-sm">Nebo Elementary</div>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 hive-pattern mb-16 border-l-4 border-gold">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-2">Required for All Club Athletes</div>
                <h2 className="font-display text-3xl font-bold uppercase text-white mb-3">USA Wrestling Membership</h2>
                <p className="text-white/70 leading-relaxed max-w-xl">
                  All JWC Girls club athletes must have an active USA Wrestling membership card before they can participate. When registering, make sure to select <span className="text-gold font-semibold">JWC Girls</span> as your club affiliate. Cards must be current — expired cards will not be accepted.
                </p>
                <p className="text-white/50 text-sm mt-3">
                  Note: High school athletes only need this membership if they plan to compete in the off-season with the club team.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href="https://www.usawmembership.com/login" target="_blank" rel="noopener noreferrer" className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-gold text-black px-8 py-4 hover:bg-yellow-400 transition-colors whitespace-nowrap">
                  Get USA Wrestling Card
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image src="/club-podium.jpg" alt="JWC Girls walking high school team to the podium at state" fill className="object-cover" />
            </div>
            <div>
              <span className="font-display text-xs tracking-[0.3em] uppercase text-crimson block mb-4">The Pipeline</span>
              <h2 className="font-display text-4xl font-bold uppercase text-black leading-tight mb-6">
                From the Club<br />to the Podium.
              </h2>
              <p className="text-steel text-lg leading-relaxed">
                This is what it is all about. JWC Girls club athletes walking the Juab High School girls to the podium at the state tournament. The club is not just a feeder program — it is where champions are made before they ever put on a high school singlet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-4">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {["club-action-1.jpg","club-action-2.jpg","club-action-3.jpg","club-action-4.jpg","club-action-5.jpg","club-team-2.jpg"].map((photo) => (
            <div key={photo} className="relative h-64 overflow-hidden">
              <Image src={`/${photo}`} alt="JWC Girls Wrestling" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-black mb-4">Contact the Club</h2>
          <p className="text-steel mb-2">KayCee Anderson</p>
          <p className="text-steel mb-2"><a href="tel:8017178660" className="hover:text-gold transition-colors">801-717-8660</a></p>
          <p className="text-steel mb-8"><a href="mailto:kayceea@gmail.com" className="hover:text-gold transition-colors">kayceea@gmail.com</a></p>
          <div className="inline-block font-display font-bold tracking-widest uppercase text-sm border-2 border-black/20 text-steel px-10 py-4">
            Registration Opens October 13
          </div>
        </div>
      </section>
    </>
  );
}
