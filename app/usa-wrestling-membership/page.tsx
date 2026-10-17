const USAW_URL = "https://www.usawmembership.com/login";
const CLUB_REGISTER_URL = "https://shortstoppr.com/register?org=0137b1a5-a589-4201-8fa1-53944a7193d7";

const steps = [
  {
    title: "Create a free USA Wrestling account",
    body: "Go to the USA Wrestling membership site and create a free account, or log in if you already have one.",
  },
  {
    title: "Claim or create your athlete's profile",
    body: "Inside your account, claim your athlete's existing profile or create a new one, then choose to join USA Wrestling as an Athlete.",
  },
  {
    title: "Choose the Limited Folkstyle membership",
    body: "For the winter season, you only need the Limited Folkstyle Athlete membership ($20). You do not need the Full Athlete membership.",
  },
  {
    title: "Select JWC Girls as your club affiliate",
    body: "When signing up, make sure you select JWC Girls as your club affiliate.",
  },
  {
    title: "Register for the club",
    body: "Once you have your card, register your athlete for the JWC Girls Club on ShortStoppr.",
  },
];

export default function UsaWrestlingMembershipPage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-4">Required for Club Athletes</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-black mb-6">USA Wrestling Membership</h1>
        <p className="text-steel text-lg leading-relaxed mb-3">
          All JWC Girls club athletes must have an active USA Wrestling membership card before they can participate. Cards must be current — expired cards will not be accepted.
        </p>
        <p className="text-steel leading-relaxed mb-12">
          High school athletes only need this membership if they plan to compete in the off-season with the club team.
        </p>

        <h2 className="font-display text-3xl font-bold uppercase text-black mb-6">How to Get Your Card</h2>
        <ol className="space-y-4 mb-14">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 bg-black p-5 hive-pattern">
              <div className="flex-shrink-0 w-10 h-10 bg-gold text-black font-display text-xl font-bold flex items-center justify-center">{i + 1}</div>
              <div>
                <div className="font-display text-xl font-bold uppercase text-white mb-1">{s.title}</div>
                <p className="text-white/70 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-display text-3xl font-bold uppercase text-black mb-2">Folkstyle vs. Full Athlete</h2>
        <p className="text-steel mb-6">Only the folkstyle membership is needed for the winter season.</p>
        <div className="grid md:grid-cols-2 gap-6 mb-3">
          <div className="bg-black p-6 border-2 border-gold">
            <span className="inline-block font-display text-[10px] font-bold tracking-widest uppercase bg-gold text-black px-2 py-0.5 mb-3">Needed for winter</span>
            <div className="font-display text-xs tracking-widest uppercase text-gold mb-2">Limited Folkstyle Athlete</div>
            <div className="font-display text-5xl font-bold text-white mb-3">$20</div>
            <p className="text-white/70 leading-relaxed">Covers folkstyle wrestling only.</p>
          </div>
          <div className="bg-black/90 p-6 border border-white/10">
            <span className="inline-block font-display text-[10px] font-bold tracking-widest uppercase border border-white/30 text-white/60 px-2 py-0.5 mb-3">Not needed for winter</span>
            <div className="font-display text-xs tracking-widest uppercase text-white/50 mb-2">Full Athlete</div>
            <div className="font-display text-5xl font-bold text-white/60 mb-3">$65</div>
            <p className="text-white/50 leading-relaxed">Covers all styles, including freestyle and Greco-Roman.</p>
          </div>
        </div>
        <p className="text-steel text-sm mb-14">Prices are set by USA Wrestling and may change.</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={USAW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center font-display font-bold tracking-widest uppercase text-sm bg-gold text-black px-10 py-4 hover:bg-yellow-400 transition-colors"
          >
            Get USA Wrestling Card
          </a>
          <a
            href={CLUB_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center font-display font-bold tracking-widest uppercase text-sm bg-crimson text-white px-10 py-4 hover:bg-red-800 transition-colors"
          >
            Register for the Club
          </a>
        </div>
      </div>
    </div>
  );
}
