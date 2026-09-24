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
          <div className="flex gap-4 flex-wrap mb-16">
            <Link href="/highschool/schedule" className="font-display font-bold tracking-widest uppercase text-sm bg-black text-gold px-8 py-4 hover:bg-steel transition-colors">View Schedule</Link>
            <Link href="/highschool/coaches" className="font-display font-bold tracking-widest uppercase text-sm border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-gold transition-colors">Meet the Coaches</Link>
          </div>
        </div>
      </section>

      <section className="bg-black py-4">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {["hs-action-1.jpg","hs-action-2.jpg","hs-action-3.jpg","hs-action-4.jpg","hs-action-5.jpg","hs-team-2.jpeg"].map((photo) => (
            <div key={photo} className="relative h-64 overflow-hidden">
              <Image src={`/${photo}`} alt="Juab High School Wrestling" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-black mb-4">Contact the Program</h2>
          <p className="text-steel mb-2">Billy Cox</p>
          <p className="text-steel mb-2"><a href="tel:8017837978" className="hover:text-gold transition-colors">801-783-7978</a></p>
          <p className="text-steel mb-8"><a href="mailto:12billycox@gmail.com" className="hover:text-gold transition-colors">12billycox@gmail.com</a></p>
          <div className="inline-block font-display font-bold tracking-widest uppercase text-sm border-2 border-black/20 text-steel px-10 py-4">
            Registration Opens October 13
          </div>
        </div>
      </section>
    </>
  );
}
