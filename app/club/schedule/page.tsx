export default function ClubSchedulePage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-crimson block mb-4">JWC Girls Club</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-4">Schedule</h1>
        <p className="text-steel text-lg max-w-2xl mb-10">
          The JWC Girls Club schedule is updated regularly. Check back for the latest practice times, tournaments, and events.
        </p>
        <div className="bg-black rounded-xl overflow-hidden">
          <iframe
            src="https://www.shortstoppr.com/public/schedule/e336b6a6-0e50-47c0-a41d-97eadec68c15?theme=dark"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
