import Link from 'next/link';
import Image from 'next/image';
import HeroSlideshow from '@/components/HeroSlideshow';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-20 pb-16">
        <div className="grid grid-cols-5 gap-16 items-start">
          <div className="col-span-3">
            <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-6">Ballwin, Missouri</p>
            <h1 className="text-5xl font-light text-stone-900 leading-tight mb-6">Tim Mattingly</h1>
            <p className="text-xl text-stone-500 font-light leading-relaxed mb-8">
              I learn things. Then I build things with what I learned.
            </p>
            <p className="text-base text-stone-600 leading-relaxed max-w-xl">
              Thirty years of building companies, leading technology teams, and figuring out what comes next.
              EE undergrad. 4.0 MBA. Three patents. Currently shipping software without writing code —
              and teaching AI agents to do it reliably.
            </p>
            <div className="flex items-center gap-4 mt-10">
              <Link href="/work" className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 text-sm font-medium hover:bg-stone-700 transition-colors">
                See the work
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 px-6 py-3 text-sm font-medium hover:border-stone-900 transition-colors">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <HeroSlideshow />
          </div>
        </div>
      </section>

      {/* Facet grid */}
      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-stone-100">
        <div className="grid grid-cols-4 gap-px bg-stone-200">
          <Link href="/work#founder" className="bg-white p-8 hover:bg-stone-50 transition-colors group">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Founder</p>
            <h2 className="text-lg font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">Built companies</h2>
            <p className="text-sm text-stone-500 leading-relaxed">
              Equilliance to 300 people. 5 subsidiaries. Acquired 4 competitors.
              Then, 25 years later, built a production SaaS — without writing a line of code.
            </p>
          </Link>
          <Link href="/work#engineer" className="bg-white p-8 hover:bg-stone-50 transition-colors group">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Engineer</p>
            <h2 className="text-lg font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">Built the system</h2>
            <p className="text-sm text-stone-500 leading-relaxed">
              Smarter Travel Planner is live. So is the AI orchestration layer that built it —
              sprint planning, quality gates, automated deployment, failure recovery.
            </p>
          </Link>
          <Link href="/work#advisor" className="bg-white p-8 hover:bg-stone-50 transition-colors group">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Advisor</p>
            <h2 className="text-lg font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">Built at scale</h2>
            <p className="text-sm text-stone-500 leading-relaxed">
              Mastercard VP. Centene Senior Director. Now advising health tech startups at BioSTL
              with 75+ executive-level advisors.
            </p>
          </Link>
          <Link href="/work#community" className="bg-white p-8 hover:bg-stone-50 transition-colors group">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Community</p>
            <h2 className="text-lg font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">HOA President</h2>
            <p className="text-sm text-stone-500 leading-relaxed">
              Yes, also that. Turns out the skills transfer:
              stakeholders are stakeholders, budgets are budgets.
            </p>
          </Link>
        </div>
      </section>

      {/* Patents + Travel row */}
      <section className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="border border-stone-200 p-8">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">Patents</p>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-stone-400 mb-1">US11062038B2 · 2021</p>
                <p className="text-sm text-stone-700 leading-snug">Identity & Credential Protection via Blockchain</p>
              </div>
              <div>
                <p className="text-xs text-stone-400 mb-1">US20170004486A1</p>
                <p className="text-sm text-stone-700 leading-snug">Fraud Control Based on Geolocation</p>
              </div>
              <div>
                <p className="text-xs text-stone-400 mb-1">US20170270493A1</p>
                <p className="text-sm text-stone-700 leading-snug">Point-to-Point Transaction Processing</p>
              </div>
            </div>
          </div>
          <Link href="/travel" className="col-span-2 border border-stone-200 p-8 hover:bg-stone-50 transition-colors group">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">Our Travels — Tim & Jill</p>
            <div className="grid grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-stone-600 transition-colors">
                  Ljubljana, Slovenia
                </h3>
                <p className="text-xs text-stone-400 mb-3">May 31 – June 10, 2025</p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  "The Ljubljanica River was the first thing that stopped me in my tracks —
                  that impossible emerald green, like someone had dissolved a gemstone into the water."
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/images/travel-adriatic-sunset.jpg"
                  alt="Tim and Jill at sunset on the Adriatic"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>
            <p className="text-sm text-stone-400 mt-6 group-hover:text-stone-600 transition-colors">More journals →</p>
          </Link>
        </div>
      </section>

      {/* Now strip */}
      <section className="max-w-6xl mx-auto px-8 py-8">
        <div className="border border-stone-200 p-8">
          <div className="grid grid-cols-4 gap-8 items-start">
            <div>
              <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">Now</p>
              <p className="text-sm text-stone-500">April 2026</p>
            </div>
            <div className="col-span-3">
              <p className="text-base text-stone-600 leading-relaxed">
                Shipping the last features on Smarter Travel Planner before demo season.
                Advising health tech startups through BioSTL. Planning the next trip.
                Building toward a life that works from a café in Porto as easily as it does from Ballwin.
              </p>
              <Link href="/now" className="text-sm text-stone-400 hover:text-stone-700 transition-colors mt-3 inline-block">
                Full update →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
