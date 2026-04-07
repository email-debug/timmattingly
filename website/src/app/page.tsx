import Link from 'next/link';
import Image from 'next/image';
import HeroSlideshow from '@/components/HeroSlideshow';
import { assets } from '@/lib/assets';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-20 pb-16">
        <div className="grid grid-cols-5 gap-16 items-start">
          <div className="col-span-3">
            <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-6">Ballwin, Missouri</p>
            <h1 className="text-6xl font-light text-stone-900 leading-tight mb-6">Tim Mattingly</h1>
            <p className="text-2xl text-stone-600 font-light leading-relaxed mb-4">
              Technology executive. 30 years building companies, leading teams, and shipping products.
            </p>
            <p className="text-lg text-stone-500 leading-relaxed max-w-xl mb-10">
              Open to full-time leadership, fractional executive, and strategic advisory roles.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/experience" className="inline-flex items-center gap-2 bg-stone-900 text-white px-7 py-3.5 text-base font-medium hover:bg-stone-700 transition-colors">
                View experience
              </Link>
              <a href="https://calendly.com/timmattingly" className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 px-7 py-3.5 text-base font-medium hover:border-stone-900 transition-colors">
                Schedule a call
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <HeroSlideshow />
          </div>
        </div>
      </section>

      {/* Career highlights — scrolling logo strip */}
      <section className="border-t border-stone-100 py-12 overflow-hidden">
        <div className="flex animate-scroll gap-16 w-max">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex gap-16 shrink-0">
              <div className="flex flex-col items-center gap-2 shrink-0 w-56">
                <div className="h-10 flex items-center">
                  <Image src={assets.logo('centene.svg')} alt="Centene" width={160} height={40} style={{ height: '36px', width: 'auto' }} />
                </div>
                <p className="text-sm font-bold text-stone-700 text-center">Enterprise Innovation</p>
                <p className="text-sm font-bold text-stone-700 text-center">& Digital Strategy</p>
                <p className="text-xs text-stone-400 text-center">$160B Fortune 25 Healthcare Company</p>
              </div>
              <div className="flex flex-col items-center gap-2 shrink-0 w-56">
                <div className="h-10 flex items-center">
                  <Image src={assets.logo('mastercard.svg')} alt="Mastercard" width={200} height={40} style={{ height: '40px', width: 'auto' }} />
                </div>
                <p className="text-sm font-medium text-stone-600 text-center">VP of Enterprise Partnerships</p>
                <p className="text-xs text-stone-400 text-center">Conceived &amp; built foundations of 5 product lines · 3 patents</p>
              </div>
              <div className="flex flex-col items-center gap-2 shrink-0 w-56">
                <div className="h-10 flex items-center">
                  <Image src={assets.logo('Equilliance-web.png')} alt="Equilliance" width={180} height={93} style={{ height: '40px', width: 'auto' }} />
                </div>
                <p className="text-sm font-medium text-stone-600 text-center">Founder & President</p>
                <p className="text-xs text-stone-400 text-center">300 Employee Real Estate Services Family of Companies</p>
              </div>
              <div className="flex flex-col items-center gap-2 shrink-0 w-56">
                <div className="h-10 flex items-center">
                  <Image src={assets.logo('biostl.svg')} alt="BioSTL" width={120} height={40} style={{ height: '36px', width: 'auto' }} />
                </div>
                <p className="text-sm font-medium text-stone-600 text-center">Head of Innovation Advisory</p>
                <p className="text-xs text-stone-400 text-center">Executive Services for Global Healthcare Startups</p>
              </div>
              <div className="flex flex-col items-center gap-2 shrink-0 w-64">
                <div className="h-10 flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.logo('STP Logo.png')} alt="Smarter Travel Planner" style={{ width: '220px', height: 'auto' }} />
                </div>
                <p className="text-sm font-medium text-stone-600 text-center">Founder & Builder</p>
                <p className="text-xs text-stone-400 text-center">AI Concierge Travel Planning System — Nearing Launch</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I bring */}
      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-stone-100">
        <div className="grid grid-cols-3 gap-px bg-stone-200">
          <div className="bg-white p-10">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Enterprise Leadership</p>
            <p className="text-base text-stone-600 leading-relaxed">
              Conceived and built the foundations of 5 new product lines at Mastercard. Three patented inventions.
              Led COVID outreach to 25M members at Centene. Enterprise innovation at scale.
            </p>
          </div>
          <div className="bg-white p-10">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Builder</p>
            <p className="text-base text-stone-600 leading-relaxed mb-3">
              Grew Equilliance from startup to 300 people. Acquired 9 competitors and started 6 companies.
            </p>
            <p className="text-base text-stone-600 leading-relaxed">
              Now building an AI Concierge Travel Planning system.{' '}
              <a href="https://smartertravelplanner.com" target="_blank" rel="noopener noreferrer" className="text-stone-900 hover:underline">smartertravelplanner.com</a>
            </p>
          </div>
          <div className="bg-white p-10">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">AI-Native</p>
            <p className="text-base text-stone-600 leading-relaxed">
              Built a custom AI orchestration engine that ships production software autonomously.
              Sprint planning, quality gates, parallel agents, failure recovery — all automated.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
