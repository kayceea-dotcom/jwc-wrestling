export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-crimson block mb-4">Get In Touch</span>
        <h1 className="font-display text-6xl font-bold uppercase text-navy mb-6">Contact &amp; Register</h1>
        <p className="text-steel text-lg max-w-2xl mb-8">Ready to get started? Reach out to learn more about registration and upcoming open practices.</p>
        <a
          href="mailto:info@jwcgirlswrestling.com"
          className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-gold text-navy px-8 py-4 hover:bg-yellow-400 transition-colors"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}
