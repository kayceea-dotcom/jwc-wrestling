import Image from "next/image";

const coaches = [
  {
    name: "KayCee Anderson",
    role: "Club Coach",
    photo: "/coach-kaycee-anderson.webp",
    bio: [
      "Coach KayCee Anderson brings 17 years of coaching experience and a lifelong background in wrestling to JWC Girls Wrestling. As a high school wrestler, he was a member of two state championship teams and finished as an individual state finalist his senior year.",
      "His coaching career includes seven years as a high school head coach, leading both boys and girls programs. During his time coaching girls wrestling, his teams captured two region championships.",
      "Today, Coach Anderson continues to grow girls wrestling by helping athletes of all ages develop strong fundamentals, confidence, discipline, and a love for the sport.",
    ],
  },
  {
    name: "Tanner Cowan",
    role: "Club Coach",
    photo: "/coach-tanner-cowan.webp",
    bio: [
      "Coach Tanner Cowan brings an accomplished wrestling background and years of coaching experience to JWC Girls Wrestling. A Juab High School graduate, Tanner was a three-time state champion before continuing his wrestling career at Utah Valley University.",
      "Tanner began his coaching career at North Sanpete High School, where he coached for five years. He later founded Cowan Wrestling Academy and spent five years coaching and developing wrestlers through his own program. Tanner eventually returned home to Juab, where he continues to share his experience and knowledge with the next generation of wrestlers.",
    ],
  },
  {
    name: "Garrett Cannon",
    role: "Club Coach",
    photo: "/coach-garrett-cannon.webp",
    bio: [
      "Coach Garrett Cannon brings more than 14 years of wrestling experience and 16 years of coaching experience to JWC Girls Wrestling. A Payson High School wrestler, Garrett competed in all three styles of wrestling and was a region champion and multiple-time high school state placer.",
      "Over the past 16 years, Garrett has coached wrestling, football, baseball, and softball. His coaching philosophy centers on teaching young athletes strong fundamentals while helping them build confidence, discipline, and a solid foundation for long-term success in sports.",
    ],
  },
];

export default function ClubCoachesPage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-crimson block mb-4">JWC Girls Club</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-12">Coaches</h1>

        <div className="space-y-12">
          {coaches.map((c) => (
            <div key={c.name} className="grid md:grid-cols-[320px_1fr] gap-8 items-start">
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <Image src={c.photo} alt={c.name} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover object-[50%_35%] scale-[1.15] origin-top" />
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
