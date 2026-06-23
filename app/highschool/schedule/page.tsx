export default function HSSchedulePage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-4">Juab High School</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-4">Schedule</h1>
        <p className="text-steel text-lg max-w-2xl mb-10">
          The Juab High School Girls Wrestling schedule is updated regularly. Check back for the latest events, duals, and tournaments.
        </p>
        <div className="bg-black rounded-xl overflow-hidden">
          <iframe
            src="https://www.shortstoppr.com/public/schedule/365a9fbf-2251-4857-9c67-4255f040e944?theme=dark"
            width="100%"
            height="800"
            frameBorder="0"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
