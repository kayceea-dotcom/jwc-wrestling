import Link from "next/link";

const pillars = [
  {
    icon: "💪",
    title: "Strength",
    body: "Wrestlers develop real, functional strength through technique-driven training designed for all skill levels.",
  },
  {
    icon: "🧠",
    title: "Discipline",
    body: "The mat teaches focus, resilience, and accountability — skills that carry into school and life.",
  },
  {
    icon: "🤝",
    title: "Community",
    body: "A team that shows up for each other. Girls push each other to grow in a supportive, welcoming environment.",
  },
];

const stats = [
  { value: "50+", label: "Athletes" },
  { value: "6+", label: "Years Running" },
  { value: "All Ages", label: "Welcome" },
  { value: "Year-Round", label: "Training" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative bg-navy min-h-screen flex items-center overflow-hidden">
        {/* Diagonal background accent */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #F5B800 0, #F5B800 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-gold">
                Jurupa Wrestling Club
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-white mb-6 uppercase">
              She Was
              <br />
              <span className="text-gold">Born</span>
              <br />
              For This.
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              JWC Girls Wrestling is where determination meets coaching — a program built specifically for girls who want to compete, grow, and lead.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact#register"
                className="font-display font-bold tracking-widest uppercase text-sm bg-gold text-navy px-8 py-4 hover:bg-yellow-400 transition-colors duration-200"
              >
                Register Now
              </Link>
              <Link
                href="/schedule"
                className="font-display font-bold tracking-widest uppercase text-sm border border-white/30 text-white px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-200"
              >
                View Schedule
              </Link>
            </div>
          </div>

          {/* Right side — stat blocks */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border border-white/10 bg-white/5 p-6 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="font-display text-4xl font-bold text-gold mb-1">{s.value}</div>
                <div className="font-display text-xs tracking-widest uppercase text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom slash */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* ── ABOUT / PILLARS ─────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-xl mb-16">
            <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-crimson block mb-4">
              About the Club
            </span>
            <h2 className="font-display text-5xl font-bold uppercase text-navy leading-tight mb-6 slash-divider">
              More Than a Sport.
            </h2>
            <p className="text-steel text-lg leading-relaxed">
              JWC Girls Wrestling has been developing young female athletes into competitors and leaders for years. We offer structured training, real competition opportunities, and a team culture you won&apos;t find anywhere else.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white p-8 border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-display text-2xl font-bold uppercase text-navy mb-3">{p.title}</h3>
                <p className="text-steel leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WELCOME ──────────────────────────────────── */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, #F5B800 0, #F5B800 1px, transparent 0, transparent 40px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-gold block mb-4">
            All Skill Levels
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase text-white leading-tight mb-6">
            Never Wrestled?<br />
            <span className="text-gold">Perfect.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            We welcome girls of all ages and experience levels — from absolute beginners to seasoned competitors. Our coaches meet you where you are and take you further than you thought possible.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Ages 6–8", "Ages 9–12", "Middle School", "High School"].map((age) => (
              <div key={age} className="bg-white/5 border border-white/10 py-5 px-4">
                <span className="font-display text-lg font-semibold text-white">{age}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact#register"
            className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-gold text-navy px-10 py-4 hover:bg-yellow-400 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* ── QUICK SCHEDULE PREVIEW ──────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-crimson block mb-4">
                Upcoming Events
              </span>
              <h2 className="font-display text-5xl font-bold uppercase text-navy slash-divider">
                What&apos;s Next
              </h2>
            </div>
            <Link
              href="/schedule"
              className="font-display text-sm font-bold tracking-widest uppercase text-gold border-b-2 border-gold pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors self-start md:self-auto"
            >
              Full Schedule →
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { date: "JUN 21", day: "Saturday", title: "Open Practice — Beginners Welcome", location: "JWC Main Gym" },
              { date: "JUN 28", day: "Saturday", title: "Summer Scrimmage", location: "JWC Main Gym" },
              { date: "JUL 12", day: "Saturday", title: "Summer Tournament — All Ages", location: "TBD" },
            ].map((event) => (
              <div
                key={event.date}
                className="flex items-center gap-6 bg-white p-5 border border-navy/10 hover:border-gold transition-colors group"
              >
                <div className="text-center min-w-[52px]">
                  <div className="font-display text-xs font-bold tracking-widest text-gold">{event.date}</div>
                  <div className="font-display text-xs text-steel/60">{event.day}</div>
                </div>
                <div className="w-0.5 h-10 bg-navy/10 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-display text-lg font-semibold text-navy uppercase group-hover:text-gold transition-colors">
                    {event.title}
                  </div>
                  <div className="text-sm text-steel/70">{event.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="bg-gold py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase text-navy mb-6">
            Ready to Start?
          </h2>
          <p className="text-navy/70 text-lg mb-10 max-w-xl mx-auto">
            Registration is open. Spots are limited. Come to an open practice and see if JWC Girls Wrestling is the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-navy text-white px-10 py-4 hover:bg-navy/80 transition-colors"
          >
            Contact Us & Register
          </Link>
        </div>
      </section>
    </>
  );
}
