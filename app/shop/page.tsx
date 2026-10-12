import Image from "next/image";

const TEAM_GEAR_URL = "https://stores.inksoft.com/jwc_girls/shop/home";
const FAN_GEAR_URL = "https://tellitwithatee.com/juab_wrestling/shop/home";

const teamGear = [
  { name: "Warm-Up Set", photo: "/shop-warmup-set.webp" },
  { name: "Singlet", photo: "/shop-singlet.webp" },
  { name: "Backpack", photo: "/shop-backpack.webp" },
];

export default function ShopPage() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-gold block mb-4">Gear</span>
        <h1 className="font-display text-6xl font-bold uppercase text-black mb-12">Shop</h1>

        <h2 className="font-display text-3xl font-bold uppercase text-black mb-2">Team Gear</h2>
        <p className="text-steel text-lg max-w-2xl mb-8">Official JWC Girls gear for our athletes.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {teamGear.map((item) => (
            <div key={item.name} className="bg-black overflow-hidden">
              <div className="relative aspect-[8/7]">
                <Image
                  src={item.photo}
                  alt={`JWC Girls ${item.name}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="font-display text-xl font-bold uppercase text-white">{item.name}</div>
              </div>
            </div>
          ))}
        </div>

        <a
          href={TEAM_GEAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-gold text-black px-10 py-4 hover:bg-yellow-400 transition-colors mb-16"
        >
          Shop Team Gear
        </a>

        <div className="bg-black p-8 hive-pattern border-l-4 border-gold flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="font-display text-xs tracking-[0.3em] uppercase text-gold mb-2">For the Fans</div>
            <h2 className="font-display text-3xl font-bold uppercase text-white mb-3">Fan Gear</h2>
            <p className="text-white/70 leading-relaxed max-w-xl mb-6">
              Rep the Wasps. Browse Juab Wrestling fan gear for the whole family.
            </p>
            <a
              href={FAN_GEAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display font-bold tracking-widest uppercase text-sm bg-gold text-black px-10 py-4 hover:bg-yellow-400 transition-colors"
            >
              Shop Fan Gear
            </a>
          </div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 bg-white border border-gold/30">
            <Image src="/shop-fan-gear.webp" alt="Juab Wrestling crewneck sweatshirt" fill sizes="224px" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
