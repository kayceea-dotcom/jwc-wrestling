import Image from "next/image";

const coaches = [
  {
    name: "Billy Cox",
    role: "Head Coach",
    photo: "/coach-billy-cox.webp",
    bio: [] as string[],
  },
  {
    name: "Raygen Newton",
    role: "Assistant Coach",
    photo: "/coach-raygen-newton.webp",
    bio: [] as string[],
  },
  {
    name: "Troy Pay",
    role: "Assistant Coach",
    photo: "/coach-troy-pay.webp",
    bio: [] as string[],
  },
  {
    name: "Kazeray Pay",
    role: "Assistant Coach",
    photo: "/coach-kazeray-pay.webp",
    bio: [] as string[],
  },
];

export default function HSCoachesPage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-4">Juab High School</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-12">Coaches</h1>

        <div className="space-y-12">
          {coaches.map((c) => (
            <div key={c.name} className="grid md:grid-cols-[320px_1fr] gap-8 items-start">
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <Image src={c.photo} alt={c.name} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold uppercase text-black mb-1">{c.name}</h2>
                <div className="font-display text-xs tracking-[0.3em] uppercase text-crimson mb-6">{c.role}</div>
                <div className="space-y-4">
                  {c.bio.map((p, i) => (
                    <p key={i} className="text-steel leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
