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
              Open to full-time leadership, fractional CTO/CIO, and strategic advisory roles.
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

      {/* Career highlights */}
      <section className="max-w-6xl mx-auto px-8 py-12 border-t border-stone-100">
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col items-center gap-2">
            <Image src={assets.logo('centene.svg')} alt="Centene" width={140} height={36} className="h-8 w-auto opacity-70" />
            <p className="text-sm text-stone-400">Sr. Director, Innovation</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={assets.logo('mastercard.svg')} alt="Mastercard" width={140} height={36} className="h-8 w-auto opacity-70" />
            <p className="text-sm text-stone-400">VP Strategic Partnerships</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={assets.logo('EquillianceLogo-2412x1337.jpg')} alt="Equilliance" width={140} height={36} className="h-8 w-auto opacity-70" />
            <p className="text-sm text-stone-400">President & Founder</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={assets.logo('biostl.svg')} alt="BioSTL" width={80} height={36} className="h-8 w-auto opacity-70" />
            <p className="text-sm text-stone-400">Strategic Advisor</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-medium text-stone-500">STP</p>
            <p className="text-sm text-stone-400">Founder & Builder</p>
          </div>
        </div>
      </section>

      {/* What I bring */}
      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-stone-100">
        <div className="grid grid-cols-3 gap-px bg-stone-200">
          <div className="bg-white p-10">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Enterprise Leadership</p>
            <p className="text-base text-stone-600 leading-relaxed">
              Built and led technology organizations at Centene and Mastercard. Three patents.
              Enterprise innovation at scale — compliance, security, stakeholder management.
            </p>
          </div>
          <div className="bg-white p-10">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Builder</p>
            <p className="text-base text-stone-600 leading-relaxed">
              Grew Equilliance from startup to 300 people across 5 subsidiaries. Acquired 4 competitors.
              Recently shipped a production SaaS from scratch.
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
