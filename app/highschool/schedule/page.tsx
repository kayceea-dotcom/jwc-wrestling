type Event = {
  date: string;
  event: string;
  type?: string;
  location: string;
  time: string;
  note?: string;
};

const events: Event[] = [
  { date: "Sat, Nov 21", event: "HOF Banquet", location: "The Hive · Home", time: "5:00 PM" },
  { date: "Fri/Sat, Dec 4–5", event: "Panguitch Invitational", type: "Tournament", location: "Panguitch · Away", time: "11am" },
  { date: "Tue, Dec 8", event: "All-Stars", type: "Invite Only", location: "Orem · Away", time: "5:45pm" },
  { date: "Wed, Dec 9", event: "Union", type: "Dual", location: "The Hive · Home", time: "6pm" },
  { date: "Fri, Dec 11", event: "Paul Williamson", type: "Tournament", location: "Parowan · Away", time: "3pm" },
  { date: "Sat, Dec 12", event: "Lady Wolf", type: "Tournament", location: "Enterprise · Away", time: "10am" },
  { date: "Tue, Dec 15", event: "Millard", type: "Dual", location: "Fillmore · Away", time: "TBA" },
  { date: "Fri/Sat, Dec 18–19", event: "The Clash", type: "Tournament", location: "Farmington · Away", time: "Fri: 8am JV, 12:30pm Varsity · Sat: 8:30am JV & Varsity" },
  { date: "Fri, Jan 8", event: "Bruin Invite", type: "Tournament", location: "Orem · Away", time: "11:30am" },
  { date: "Wed, Jan 13", event: "Wasatch", type: "Dual", location: "Heber · Away", time: "TBA", note: "Kids Night" },
  { date: "Fri/Sat, Jan 15–16", event: "Brighton Invitational", type: "Tournament", location: "Brighton HS · Away", time: "Fri: 2pm · Sat: 10:30am" },
  { date: "Wed, Jan 20", event: "Richfield", type: "Dual", location: "The Hive · Home", time: "6pm", note: "Senior Night" },
  { date: "Fri/Sat, Jan 22–23", event: "Rumble", type: "Tournament", location: "Farmington · Away", time: "Fri: 5pm · Sat: TBA" },
  { date: "Wed, Jan 27", event: "Carbon", type: "Dual", location: "Price · Away", time: "TBA" },
  { date: "Fri/Sat, Feb 5–6", event: "Divisionals", type: "Tournament", location: "TBA", time: "TBA" },
  { date: "Fri/Sat, Feb 19–20", event: "State", type: "Tournament", location: "SVC, Richfield", time: "TBA" },
];

function NoteBadge({ note }: { note?: string }) {
  if (!note) return null;
  return (
    <span className="ml-2 inline-block align-middle font-display text-[10px] font-bold tracking-widest uppercase bg-gold text-black px-2 py-0.5">
      {note}
    </span>
  );
}

export default function HSSchedulePage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-4">Juab High School</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-4">Schedule</h1>
        <p className="text-steel text-lg max-w-2xl mb-10">
          The Juab High School Girls Wrestling schedule is updated regularly. Check back for the latest events, duals, and tournaments.
        </p>

        <h2 className="font-display text-2xl font-bold uppercase text-black mb-6">2026 – 2027 Season Schedule</h2>

        <div className="md:hidden space-y-3 mb-6">
          {events.map((e, i) => (
            <div key={i} className="bg-black rounded-xl p-4">
              <div className="text-gold text-xs font-display tracking-widest uppercase mb-1">{e.date}</div>
              <div className="text-white font-semibold mb-1">
                {e.event}
                <NoteBadge note={e.note} />
              </div>
              <div className="text-white/60 text-sm">{[e.type, e.location].filter(Boolean).join(" · ")}</div>
              <div className="text-white/60 text-sm">{e.time}</div>
            </div>
          ))}
        </div>

        <div className="hidden md:block bg-black rounded-xl overflow-hidden mb-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="font-display text-xs tracking-widest uppercase text-gold px-6 py-4">Date</th>
                <th className="font-display text-xs tracking-widest uppercase text-gold px-6 py-4">Event</th>
                <th className="font-display text-xs tracking-widest uppercase text-gold px-6 py-4">Type</th>
                <th className="font-display text-xs tracking-widest uppercase text-gold px-6 py-4">Location</th>
                <th className="font-display text-xs tracking-widest uppercase text-gold px-6 py-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/5" : ""}>
                  <td className="text-white/80 text-sm px-6 py-3 whitespace-nowrap">{e.date}</td>
                  <td className="text-white font-medium text-sm px-6 py-3">
                    {e.event}
                    <NoteBadge note={e.note} />
                  </td>
                  <td className="text-white/60 text-sm px-6 py-3">{e.type}</td>
                  <td className="text-white/60 text-sm px-6 py-3">{e.location}</td>
                  <td className="text-white/60 text-sm px-6 py-3">{e.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-steel text-sm mb-12">Schedule subject to change.</p>
      </div>
    </div>
  );
}
