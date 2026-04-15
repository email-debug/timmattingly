import HeroSlideshow from '@/components/HeroSlideshow';
import ScrollGallery from '@/components/ScrollGallery';
import { assets } from '@/lib/assets';

// Travel gallery — countries included in labels
const travelPhotos = [
  { src: assets.travel('travel-adriatic-sunset.jpg'), label: 'Adriatic Coast, Croatia' },
  { src: assets.travel('travel-cortina-group.jpg'), label: 'Cortina d\'Ampezzo, Italy' },
  { src: assets.travel('travel-venice.jpg'), label: 'Venice, Italy' },
  { src: assets.travel('travel-dolomites-seceda.jpg'), label: 'Dolomites, Italy' },
  { src: assets.travel('travel-lisbon-sunset.jpg'), label: 'Lisbon, Portugal' },
  { src: assets.travel('travel-moselle.jpg'), label: 'Moselle Valley, Germany' },
  { src: assets.travel('travel-slovenia-waterfall.jpg'), label: 'Slovenia' },
  { src: assets.hobby('hobby-truffles.jpg'), label: 'Truffle Hunting, Italy' },
];

// Interest photos
const interestPhotos = [
  { src: assets.hobby('hobby-paragliding.jpg'), label: 'Paragliding, Switzerland' },
  { src: assets.hobby('hobby-scuba.jpg'), label: 'Scuba Diving, Caribbean' },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-16 md:pb-24">
      {/* Header + Slideshow */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 mb-12 md:mb-20">
        <div className="md:col-span-3">
          <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">About</p>
          <h1 className="text-3xl md:text-5xl font-light text-stone-900 mb-6">Solving problems, building things</h1>
          <div className="space-y-5 text-base md:text-lg text-stone-600 leading-relaxed">
            <p>
              The throughline across 30 years is simple: find a hard problem, build something to solve it, learn everything along the way. That pattern has taken me from electrical engineering to founding a 300-person company, from Fortune 25 innovation labs to shipping AI-built software.
            </p>
            <p>
              I started as an EE, moved into IT leadership at EY and defense electronics, then co-founded a mortgage technology company. At 30 I started Equilliance — grew it from nothing to 300 employees and 5 subsidiaries, acquired 4 competitors, and ran the whole thing for 8 years.
            </p>
            <p>
              Mastercard recruited me to lead strategic partnerships across the payments ecosystem. That led to Centene, where I ran enterprise innovation for a $144B Fortune 25 healthcare company — AI, blockchain, automation, three patents.
            </p>
            <p>
              Two and a half years ago I left corporate. Not retirement — a reset. I took over a dormant advisory practice at BioSTL and rebuilt it from 10 active advisors to 100+. I built a production SaaS application and the AI orchestration engine that made it possible — without writing code.
            </p>
            <p className="text-stone-900 font-medium">
              Now I'm looking for the next hard problem. Full-time leadership, fractional CTO, strategic advisory — I'm most useful where technology strategy meets execution.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 md:pt-12">
          <HeroSlideshow />
        </div>
      </div>

      {/* What drives me — three pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 mb-12 md:mb-20">
        <div className="bg-white p-6 md:p-10">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Building</p>
          <p className="text-base text-stone-600 leading-relaxed">
            Companies, teams, products, systems. I've built from zero to 300 people and from blank repo to production SaaS. The scale changes; the instinct doesn't.
          </p>
        </div>
        <div className="bg-white p-6 md:p-10">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Problem Solving</p>
          <p className="text-base text-stone-600 leading-relaxed">
            Three patents. Enterprise innovation at Fortune 25 scale. M&A integration. Practice turnarounds. I gravitate toward problems other people avoid.
          </p>
        </div>
        <div className="bg-white p-6 md:p-10">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Learning</p>
          <p className="text-base text-stone-600 leading-relaxed">
            EE to MBA. Mortgage tech to payments to healthcare. AI orchestration at 53. Every chapter required learning a new domain from scratch — and that's the part I like most.
          </p>
        </div>
        <div className="bg-white p-6 md:p-10">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Exploring</p>
          <p className="text-base text-stone-600 leading-relaxed">
            20+ countries with my wife Jill. Paragliding in the Alps, scuba in the Caribbean, truffle hunting in Tuscany. Curiosity doesn't stop at the office door.
          </p>
        </div>
      </div>

      {/* Travel Gallery */}
      <div className="border-t border-stone-200 pt-12 md:pt-16 mb-12 md:mb-20">
        <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-8">Our Travels — Tim & Jill</p>
        <p className="text-base text-stone-500 mb-10 max-w-xl">
          We travel as much as we can. Europe mostly, but anywhere with good food,
          interesting history, and walkable streets.
        </p>
        <ScrollGallery photos={travelPhotos} height={280} speed={0.4} />
      </div>

      {/* Interests */}
      <div className="border-t border-stone-200 pt-12 md:pt-16 mb-12 md:mb-20">
        <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Beyond Work</p>
        <p className="text-base text-stone-500 mb-8 max-w-xl">
          Scuba, snow skiing, paragliding, wine, gardening, and travel — usually all in the same trip.
        </p>
        <ScrollGallery photos={interestPhotos} height={280} speed={0.4} />
      </div>

      {/* Community + Location */}
      <div className="border-t border-stone-200 pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Community</p>
            <p className="text-lg font-medium text-stone-700 mb-2">HOA President</p>
            <p className="text-base text-stone-500 leading-relaxed">
              Leading new indentures and capital projects for the neighborhood.
              Stakeholders are stakeholders, budgets are budgets — the skills transfer.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Based in</p>
            <p className="text-lg font-medium text-stone-700 mb-2">Ballwin, Missouri</p>
            <p className="text-base text-stone-500 leading-relaxed">
              Home base. But building toward a life that works from a café in Porto
              as easily as it does from here.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">What's Next</p>
            <p className="text-base text-stone-500 leading-relaxed">
              Looking for the next hard problem to solve. Full-time, fractional, or advisory —
              wherever technology leadership meets real execution challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
