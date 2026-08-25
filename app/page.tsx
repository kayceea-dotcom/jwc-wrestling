import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
        <Image src="/hero-banner.jpg" alt="Juab Girls Wrestling Team" fill className="object-cover object-top opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 hive-pattern opacity-40" />
        <div className="relative max-w-6xl mx-auto px-4 pb-20 pt-32 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gold" />
            <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-gold">Juab County, Utah</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold uppercase text-white leading-none mb-4">
            Fear The<br /><span className="text-gold">Ponytail.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-10">
            Juab Girls Wrestling — home of the Wasps. Two programs, one community, zero excuses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/highschool" className="font-display font-bold tracking-widest uppercase text-sm bg-gold text-black px-8 py-4 hover:bg-yellow-400 transition-colors">High School Program</Link>
            <Link href="/club" className="font-display font-bold tracking-widest uppercase text-sm border border-gold/50 text-gold px-8 py-4 hover:border-gold hover:bg-gold/10 transition-colors">JWC Girls Club</Link>
          </div>
        </div>
      </section>

      <section className="bg-black py-4">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
          <div className="relative h-80 overflow-hidden group">
            <Image src="/hs-team.jpg" alt="Juab High School Wrestling" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-colors" />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-2">Juab High School</div>
              <h2 className="font-display text-3xl font-bold uppercase text-white mb-3">Varsity Program</h2>
              <Link href="/highschool" className="inline-block font-display text-xs font-bold tracking-widest uppercase bg-gold text-black px-5 py-2 hover:bg-yellow-400 transition-colors">Learn More</Link>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden group">
            <Image src="/club-team.jpg" alt="JWC Girls Wrestling Club" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-crimson/60 transition-colors" />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="font-display text-xs tracking-[0.3em] uppercase text-crimson mb-2">JWC Girls</div>
              <h2 className="font-display text-3xl font-bold uppercase text-white mb-3">JWC Girls Club</h2>
              <Link href="/club" className="inline-block font-display text-xs font-bold tracking-widest uppercase bg-crimson text-white px-5 py-2 hover:bg-red-800 transition-colors">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 hive-pattern border-y-4 border-gold">
        <div className="max-w-6xl mx-auto px-4">
          <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-gold block mb-4 text-center">Open Mats</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white text-center mb-10">Come Wrestle With Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-gold/30 p-6 text-center">
              <div className="font-display text-xs tracking-widest uppercase text-gold mb-2">5th Grade – High School</div>
              <div className="text-white text-xl font-semibold mb-1">Mondays & Thursdays</div>
              <div className="text-white/70">5:00 – 6:30 PM</div>
            </div>
            <div className="bg-white/5 border border-crimson/40 p-6 text-center">
              <div className="font-display text-xs tracking-widest uppercase text-crimson mb-2">4th Grade & Under</div>
              <div className="text-white text-xl font-semibold mb-1">Wednesdays</div>
              <div className="text-white/70">5:00 – 6:00 PM</div>
            </div>
          </div>
          <p className="text-white/60 text-center mt-8">Held at Juab Jr. High School</p>
        </div>
      </section>

      <section className="bg-offwhite py-24 hive-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-crimson block mb-4">Who We Are</span>
              <h2 className="font-display text-5xl font-bold uppercase text-black leading-tight mb-6">
                One Community.<br /><span className="text-gold gold-underline">Two Programs.</span>
              </h2>
              <p className="text-steel text-lg leading-relaxed mb-6">
                Juab Girls Wrestling is built on a simple idea — give every girl in our community the chance to compete. The JWC Girls club develops young athletes from the ground up, feeding directly into the Juab High School varsity program.
              </p>
              <p className="text-steel leading-relaxed mb-8">
                Whether your daughter is stepping on the mat for the first time or competing for a state title, there is a place for her here.
              </p>
              <a href="/register" className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-black text-gold px-8 py-4 hover:bg-steel transition-colors">
                Register on ShortStoppr
              </a>
            </div>
            <div className="relative h-96">
              <Image src="/hs-action-2.jpg" alt="Juab Girls Wrestling action" fill className="object-cover" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-crimson" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-4">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative h-64 overflow-hidden">
            <Image src="/club-action-1.jpg" alt="Club action" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative h-64 overflow-hidden">
            <Image src="/club-action-2.jpg" alt="Club action" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative h-64 overflow-hidden col-span-2 md:col-span-1">
            <Image src="/hs-team-2.jpeg" alt="HS team" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      <section className="bg-gold py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase text-black mb-4">Ready to Wrestle?</h2>
          <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
            Registration for both programs is handled through ShortStoppr. Sign up today and join the Wasp family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="tel:8017837978" className="font-display font-bold tracking-widest uppercase text-sm bg-black text-gold px-8 py-4 hover:bg-steel transition-colors">
              Call Billy Cox — 801-783-7978
            </a>
            <a href="mailto:12billycox@gmail.com" className="font-display font-bold tracking-widest uppercase text-sm border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-gold transition-colors">
              12billycox@gmail.com
            </a>
          </div>
          <a href="/register" className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-black text-gold px-10 py-4 hover:bg-steel transition-colors">
            Register Now on ShortStoppr
          </a>
        </div>
      </section>
    </>
  );
}
