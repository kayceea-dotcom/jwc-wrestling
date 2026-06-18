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
          <div className="flex gap-4 flex-wrap">
            <Link href="/club/schedule" className="font-display font-bold tracking-widest uppercase text-sm bg-crimson text-white px-8 py-4 hover:bg-red-800 transition-colors">View Schedule</Link>
            <Link href="/club/coaches" className="font-display font-bold tracking-widest uppercase text-sm border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-gold transition-colors">Meet the Coaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
