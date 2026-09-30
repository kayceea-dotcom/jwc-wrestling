const meets = [
  { date: "Oct 23, 2026", event: "Westlake Dual", location: "Westlake" },
  { date: "Oct 31, 2026", event: "Nightmare on the Mat", location: "Golden Spike Arena" },
  { date: "Nov 7, 2026", event: "Rabbit Rumble", location: "Delta High School" },
  { date: "Nov 13, 2026", event: "North Sevier Jr", location: "N. Sevier Middle School" },
  { date: "Nov 14, 2026", event: "Caleb Williams", location: "Telos U" },
  { date: "Nov 21, 2026", event: "Millard Jr Ironman", location: "Millard High School" },
  { date: "Nov 28, 2026", event: "Turkey Tussle", location: "Real Salt Lake Academy" },
  { date: "Dec 5, 2026", event: "Wildcat Winter Tournament", location: "Sevier Valley Center" },
  { date: "Dec 11, 2026", event: "Legacy Youth Duals", location: "Western Sports Park" },
  { date: "Dec 12, 2026", event: "Battle Royal", location: "Western Sports Park" },
  { date: "Dec 19, 2026", event: "Juab Winter Classic", location: "The Hive" },
  { date: "Dec 28, 2026", event: "Coleman & Trevon Memorial", location: "Wasatch High School" },
  { date: "Dec 31, 2026", event: "Salt Lake Slam", location: "Western Sports Park" },
  { date: "Jan 2, 2027", event: "Lakeridge Bruin Brawl", location: "Lakeridge Jr High School" },
  { date: "Jan 9, 2027", event: "Winter War Zone", location: "TBD" },
  { date: "Jan 14, 2027", event: "Southern Region", location: "Sevier Valley Center" },
  { date: "Jan 16, 2027", event: "Beehive Brawl", location: "Sevier Valley Center" },
  { date: "Jan 23, 2027", event: "Sentential Classic", location: "Mountain View High School" },
  { date: "Jan 29, 2027", event: "Jr High State", location: "Sevier Valley Center" },
  { date: "Jan 30, 2027", event: "Jr High State", location: "Sevier Valley Center" },
  { date: "Feb 5, 2027", event: "Utah Club Duals", location: "Western Sports Park" },
  { date: "Feb 6, 2027", event: "Rec League State", location: "Western Sports Park" },
  { date: "Feb 12, 2027", event: "Super State", location: "Western Sports Park" },
  { date: "Feb 13, 2027", event: "Super State", location: "Western Sports Park" },
  { date: "Feb 19, 2027", event: "High School State", location: "SVC" },
  { date: "Feb 20, 2027", event: "High School State", location: "SVC" },
  { date: "Apr 2, 2027", event: "Little League State", location: "SVC" },
];

export default function ClubSchedulePage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-crimson block mb-4">JWC Girls Club</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-4">Schedule</h1>
        <p className="text-steel text-lg max-w-2xl mb-10">
          The JWC Girls Club schedule is updated regularly. Check back for the latest practice times, tournaments, and events.
        </p>

        <h2 className="font-display text-2xl font-bold uppercase text-black mb-6">2026 – 2027 Meet Schedule</h2>
        <div className="bg-black rounded-xl overflow-hidden mb-12">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="font-display text-xs tracking-widest uppercase text-crimson px-6 py-4">Date</th>
                <th className="font-display text-xs tracking-widest uppercase text-crimson px-6 py-4">Event</th>
                <th className="font-display text-xs tracking-widest uppercase text-crimson px-6 py-4">Location</th>
              </tr>
            </thead>
            <tbody>
              {meets.map((m, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white/5" : ""}>
                  <td className="text-white/80 text-sm px-6 py-3 whitespace-nowrap">{m.date}</td>
                  <td className="text-white font-medium text-sm px-6 py-3">{m.event}</td>
                  <td className="text-white/60 text-sm px-6 py-3">{m.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-black rounded-xl overflow-hidden">
          <iframe
            src="https://www.shortstoppr.com/public/schedule/e336b6a6-0e50-47c0-a41d-97eadec68c15?theme=dark"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: "none", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}
