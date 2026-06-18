import Image from "next/image";
import Link from "next/link";

export default function HighSchoolPage() {
  return (
    <>
      <section className="relative h-72 bg-black flex items-end overflow-hidden">
        <Image src="/hs-team.jpg" alt="Juab High School Wrestling" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 hive-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 pb-10 w-full pt-24">
          <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-2">Juab High School</span>
          <h1 className="font-display text-6xl font-bold uppercase text-white">Varsity Program</h1>
        </div>
      </section>
      <section className="bg-offwhite py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-steel text-lg leading-relaxed max-w-2xl mb-8">
            The Juab High School Girls Wrestling program competes at the varsity level in the state of Utah. Our athletes train year-round with a focus on technique, strength, and competitive excellence.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/highschool/schedule" className="font-display font-bold tracking-widest uppercase text-sm bg-black text-gold px-8 py-4 hover:bg-steel transition-colors">View Schedule</Link>
            <Link href="/highschool/coaches" className="font-display font-bold tracking-widest uppercase text-sm border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-gold transition-colors">Meet the Coaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
