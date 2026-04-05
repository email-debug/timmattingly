import Image from 'next/image';
import { assets } from '@/lib/assets';
import ScrollGallery from '@/components/ScrollGallery';

// Travel gallery — add new images here as they're uploaded to GCS
const travelPhotos = [
  { src: assets.travel('travel-adriatic-sunset.jpg'), label: 'Adriatic Coast' },
  { src: assets.travel('travel-cortina-group.jpg'), label: 'Cortina d\'Ampezzo' },
  { src: assets.travel('travel-venice.jpg'), label: 'Venice' },
  { src: assets.travel('travel-dolomites-seceda.jpg'), label: 'Dolomites' },
  { src: assets.travel('travel-lisbon-sunset.jpg'), label: 'Lisbon' },
  { src: assets.travel('travel-moselle.jpg'), label: 'Moselle Valley' },
  { src: assets.travel('travel-slovenia-waterfall.jpg'), label: 'Slovenia' },
  { src: assets.hobby('hobby-truffles.jpg'), label: 'Truffle Hunting, Italy' },
];

// Interest photos — add new images here as they're uploaded to GCS (hobbies/ folder)
const interestPhotos = [
  { src: assets.hobby('hobby-paragliding.jpg'), label: 'Paragliding' },
  { src: assets.hobby('hobby-scuba.jpg'), label: 'Scuba' },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-16 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">About</p>
        <h1 className="text-5xl font-light text-stone-900 mb-4">The short version</h1>
      </div>

      {/* Story */}
      <div className="grid grid-cols-3 gap-16 mb-20">
        <div className="col-span-2 space-y-6 text-lg text-stone-600 leading-relaxed">
          <p>
            I spent 30 years building companies and leading technology teams — from startups I founded
            to Fortune 25 enterprises. Electrical engineer by training, MBA by choice, builder by nature.
          </p>
          <p>
            Two and a half years ago I left corporate. Not because the work wasn't interesting, but because
            I wanted to build things on my own terms. The result so far: a production SaaS application
            and the AI orchestration system that made it possible — both built without writing a line of code.
          </p>
          <p>
            I'm not a developer. I'm a technical leader who figured out how to make AI agents
            ship reliable software. That turns out to be a useful skill.
          </p>
          <p>
            Now I split my time between advising healthcare startups, building software,
            and figuring out what comes next. Preferably from a café somewhere interesting.
          </p>
        </div>
        <div className="space-y-4">
          <div className="aspect-[3/2] relative overflow-hidden">
            <Image
              src={assets.headshot('headshot-olympics.jpg')}
              alt="Tim at Milano Cortina 2026"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
          <p className="text-sm text-stone-400">Milano Cortina 2026</p>
        </div>
      </div>

      {/* Travel Gallery */}
      <div className="border-t border-stone-200 pt-16 mb-20">
        <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-8">Our Travels — Tim & Jill</p>
        <p className="text-base text-stone-500 mb-10 max-w-xl">
          We travel as much as we can. Europe mostly, but anywhere with good food,
          interesting history, and walkable streets.
        </p>
        <ScrollGallery photos={travelPhotos} height={280} speed={0.4} />
      </div>

      {/* Interests */}
      <div className="border-t border-stone-200 pt-16 mb-20">
        <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Interests</p>
        <p className="text-base text-stone-500 mb-8 max-w-xl">
          Scuba, snow skiing, wine, gardening, and travel — usually all in the same trip.
        </p>
        <ScrollGallery photos={interestPhotos} height={280} speed={0.4} />
      </div>

      {/* Community */}
      <div className="border-t border-stone-200 pt-16">
        <div className="grid grid-cols-3 gap-16">
          <div>
            <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Community</p>
            <p className="text-lg font-medium text-stone-700 mb-2">HOA President</p>
            <p className="text-base text-stone-500 leading-relaxed">
              Yes, also that. Leading new indentures and capital projects for the neighborhood.
              Turns out the skills transfer — stakeholders are stakeholders, budgets are budgets.
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
            <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Making Things</p>
            <p className="text-base text-stone-500 leading-relaxed">
              Building things that work. Making complex problems simple.
              Always planning the next trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
