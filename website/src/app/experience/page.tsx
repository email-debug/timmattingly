import Image from 'next/image';
import { assets } from '@/lib/assets';

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-16 pb-24">
      {/* Header */}
      <div className="grid grid-cols-2 gap-16 mb-16 items-center">
        <div>
          <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Experience</p>
          <h1 className="text-5xl font-light text-stone-900 mb-5">30 years of building</h1>
          <p className="text-lg text-stone-600 font-light mb-1">From Startups to Fortune 25</p>
          <p className="text-lg text-stone-600 font-light mb-1">Experienced Leader, MBA, Electrical Engineer</p>
          <p className="text-lg text-stone-500 font-light mb-8">Available for full-time leadership, fractional executive and strategic advisory.</p>
          <a href={assets.doc('resume.pdf')} className="inline-flex items-center gap-2 text-base text-stone-500 hover:text-stone-900 transition-colors">
            Download resume (PDF) →
          </a>
        </div>

        {/* Credential strip */}
        <div className="border-l border-stone-200 pl-12 flex flex-col gap-5">
          <div className="flex items-baseline gap-4">
            <p className="text-2xl font-light text-stone-900 whitespace-nowrap w-36 shrink-0">Fortune 25</p>
            <p className="text-sm text-stone-400 leading-snug">Centene Corporation — $144B revenue</p>
          </div>
          <div className="flex items-baseline gap-4">
            <p className="text-2xl font-light text-stone-900 whitespace-nowrap w-36 shrink-0">Fortune 500</p>
            <p className="text-sm text-stone-400 leading-snug">Mastercard — VP Strategic Partnerships</p>
          </div>
          <div className="flex items-baseline gap-4">
            <p className="text-2xl font-light text-stone-900 whitespace-nowrap w-36 shrink-0">300 people</p>
            <p className="text-sm text-stone-400 leading-snug">Founded & grew Equilliance, acquired 4 competitors</p>
          </div>
          <div className="flex items-baseline gap-4">
            <p className="text-2xl font-light text-stone-900 whitespace-nowrap w-36 shrink-0">3 patents</p>
            <p className="text-sm text-stone-400 leading-snug">Blockchain identity, fraud prevention, payments</p>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="space-y-0 mb-20">

        {/* Current — STP / AI orchestration */}
        <div className="grid grid-cols-4 gap-8 py-7 border-t border-stone-200">
          <div className="space-y-4">
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.logo('STP Logo.png')} alt="Smarter Travel Planner" style={{ width: '200px', height: 'auto' }} />
            </div>
            <p className="text-base text-stone-400">2026 – Present</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-medium text-stone-700 mb-3">Founder — AI-Orchestrated SaaS</p>
            <ul className="space-y-2 text-base text-stone-600 leading-relaxed">
              <li>Designed and built a custom AI agent orchestration engine — epic planning, bead decomposition, parallel agents, smoke gates, failure recovery — all automated</li>
              <li>Shipped a full production SaaS (React, TypeScript, Firebase, GCP Cloud Run, Stripe, Gemini AI) without writing a line of code</li>
              <li>Demonstrates what the next generation of technical leadership looks like: architect, orchestrate, ship — at the speed of AI</li>
            </ul>
          </div>
        </div>

        {/* BioSTL */}
        <div className="grid grid-cols-4 gap-8 py-7 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('biostl.svg')} alt="BioSTL" width={100} height={48} className="h-10 w-auto" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-stone-500">Head of Innovation Advisory</p>
              <p className="text-sm text-stone-400">2024 – 2025</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-stone-500">Executive Advisor</p>
              <p className="text-sm text-stone-400">2023 – Present</p>
            </div>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-medium text-stone-700 mb-3">Head of Innovation Advisory · Executive Advisor · Entrepreneur in Residence</p>
            <p className="text-sm text-stone-400 mb-4 italic">BioSTL / Biogenerator — St. Louis's leading life sciences and digital health accelerator</p>
            <ul className="space-y-2 text-base text-stone-600 leading-relaxed">
              <li>Took over a dormant advisory practice — 25 named advisors, 10 active, near-zero clients — and rebuilt it from the ground up</li>
              <li>Grew to 100+ advisors (50+ active), ~15 active retainer clients at any given time, with a full pipeline of healthcare startups</li>
              <li>Built operational processes from scratch; designed and implemented a custom CRM and practice management system in AirTable</li>
              <li>Coached the practice's junior associate through multiple promotions to Director-level; he now independently manages and closes new clients</li>
              <li>Negotiated and structured a joint venture between BioSTL/Biogenerator and Redesign Health to launch the St. Louis Digital Health Venture Studio</li>
              <li>Served as Entrepreneur in Residence for Neuro360</li>
              <li>Produced two BioSTL Health Innovation Summits — the largest in the organization's history; added a new startup track in 2025 with 40 companies from 10 countries and 350 attendees</li>
            </ul>
          </div>
        </div>

        {/* Centene */}
        <div className="grid grid-cols-4 gap-8 py-7 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('centene.svg')} alt="Centene Corporation" width={180} height={48} className="h-10 w-auto" />
            </div>
            <p className="text-base text-stone-400">2018 – 2023</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-medium text-stone-700 mb-3">Senior Director, Enterprise Innovation</p>
            <ul className="space-y-2 text-base text-stone-600 leading-relaxed">
              <li>Led enterprise innovation strategy programs across a Fortune 25 managed care organization ($144B revenue)</li>
              <li>Built and managed cross-functional teams driving AI/ML, blockchain, and automation initiatives</li>
            </ul>
          </div>
        </div>

        {/* Mastercard */}
        <div className="grid grid-cols-4 gap-8 py-7 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('mastercard.svg')} alt="Mastercard" width={240} height={60} className="h-14 w-auto" />
            </div>
            <p className="text-base text-stone-400">2011 – 2018</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-medium text-stone-700 mb-3">VP Strategic Partnerships</p>
            <ul className="space-y-2 text-base text-stone-600 leading-relaxed">
              <li>Managed strategic technology partnerships and product integrations across the payments ecosystem</li>
              <li>Led geolocation-based fraud prevention initiatives — two patents filed (US20170004486A1, US20170270493A1)</li>
              <li>Drove partner integration strategy for new payment products and platforms</li>
              <li>Built relationships across financial institutions, fintechs, and technology providers</li>
            </ul>
          </div>
        </div>

        {/* Equilliance */}
        <div className="grid grid-cols-4 gap-8 py-7 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('Equilliance.png')} alt="Equilliance Companies" width={180} height={93} className="h-10 w-auto" />
            </div>
            <p className="text-base text-stone-400">2003 – 2011</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-medium text-stone-700 mb-3">President & Founder</p>
            <ul className="space-y-2 text-base text-stone-600 leading-relaxed mb-5">
              <li>Founded and grew a technology services company to 300+ employees across 5 subsidiaries</li>
              <li>Acquired and integrated 4 competitors, expanding service capabilities and geographic reach</li>
              <li>Full P&L responsibility — built the business from zero to a sustainable multi-subsidiary operation</li>
              <li>Led all aspects: strategy, sales, operations, hiring, client relationships, M&A</li>
            </ul>
            <p className="text-sm text-stone-400 italic">Orlando Business Journal — Entrepreneur of the Month & 40 Under 40</p>
          </div>
        </div>

        {/* United Mortgage Partners */}
        <div className="grid grid-cols-4 gap-8 py-7 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('ump.png')} alt="United Mortgage Partners" width={220} height={48} className="h-8 w-auto" />
            </div>
            <p className="text-base text-stone-400">2009 – 2011</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-medium text-stone-700 mb-3">CTO & Co-Founder</p>
            <ul className="space-y-2 text-base text-stone-600 leading-relaxed">
              <li>Originated the idea for a new business model concept to support changing regulatory landscape</li>
              <li>Led the merger of 6 competing firms to create a new platform mortgage lending operation</li>
            </ul>
          </div>
        </div>

        {/* Early career — Sypris, EY, Berg */}
        <div className="border-t border-stone-200 pt-5 pb-2 space-y-4">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <Image src={assets.logo('sypris.jpg')} alt="Sypris Electronics" width={130} height={40} className="h-8 w-auto shrink-0" />
              <p className="text-sm text-stone-400 whitespace-nowrap">1999 – 2003</p>
            </div>
            <div className="col-span-3 flex items-center">
              <p className="text-base text-stone-600 leading-relaxed">Led the consolidation of IT services across 6 subsidiaries. Managed nationwide IT staff of 60.</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <Image src={assets.logo('ey.svg')} alt="EY" width={70} height={40} className="h-9 w-auto shrink-0" />
              <p className="text-sm text-stone-400 whitespace-nowrap">1998 – 1999</p>
            </div>
            <div className="col-span-3 flex items-center">
              <p className="text-base text-stone-600 leading-relaxed">Mid market IT strategy consulting. Offered jobs by 3 clients.</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <Image src={assets.logo('berg.jpg')} alt="Berg Electronics" width={160} height={48} className="h-10 w-auto shrink-0" />
              <p className="text-sm text-stone-400 whitespace-nowrap">1994 – 1998</p>
            </div>
            <div className="col-span-3 flex items-center">
              <p className="text-base text-stone-600 leading-relaxed">Progressed from entry level to global technology leadership in 4 years.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advisory Clients */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <p className="text-sm font-medium text-stone-400 tracking-widest uppercase">Advisory Clients</p>
          <span className="text-sm text-stone-300">via</span>
          <Image src={assets.logo('biostl.svg')} alt="BioSTL" width={90} height={28} className="h-6 w-auto" />
        </div>
        <div className="overflow-hidden border-t border-b border-stone-100 py-6">
          <div className="flex gap-12 animate-scroll" style={{ width: 'max-content' }}>
            {/* First pass */}
            <div className="flex items-center h-14 px-4"><Image src={assets.client('gt-diagnostics.png')} alt="GT Diagnostics" width={240} height={56} className="h-12 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('pulsenmore.png')} alt="Pulsenmore" width={180} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('ayble-health.png')} alt="Ayble Health" width={160} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('manus-neuro.jpg')} alt="Manus Neuro" width={180} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('cergenx.png')} alt="CergenX" width={200} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('incision.png')} alt="Incision" width={200} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('pragmaclin.png')} alt="PragmaClin" width={200} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('sayvant.jpg')} alt="Sayvant" width={180} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('sober-sidekick.jpg')} alt="Sober Sidekick" width={200} height={56} className="h-10 w-auto" /></div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center h-14 px-4"><Image src={assets.client('gt-diagnostics.png')} alt="GT Diagnostics" width={240} height={56} className="h-12 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('pulsenmore.png')} alt="Pulsenmore" width={180} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('ayble-health.png')} alt="Ayble Health" width={160} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('manus-neuro.jpg')} alt="Manus Neuro" width={180} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('cergenx.png')} alt="CergenX" width={200} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('incision.png')} alt="Incision" width={200} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('pragmaclin.png')} alt="PragmaClin" width={200} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('sayvant.jpg')} alt="Sayvant" width={180} height={56} className="h-10 w-auto" /></div>
            <div className="flex items-center h-14 px-4"><Image src={assets.client('sober-sidekick.jpg')} alt="Sober Sidekick" width={200} height={56} className="h-10 w-auto" /></div>
          </div>
        </div>
      </div>

      {/* Education + Patents side by side */}
      <div className="grid grid-cols-2 gap-16 border-t border-stone-200 pt-16">
        {/* Education */}
        <div>
          <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-8">Education</p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Image src={assets.logo('rollins.svg')} alt="Rollins College" width={130} height={36} className="h-8 w-auto mt-0.5 shrink-0" />
              <div>
                <p className="text-lg font-medium text-stone-700">Executive MBA — 4.0 GPA</p>
                <p className="text-base text-stone-500">Crummer Graduate School of Business</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image src={assets.logo('mizzou.svg')} alt="University of Missouri" width={44} height={44} className="h-10 w-auto mt-0.5 shrink-0" />
              <div>
                <p className="text-lg font-medium text-stone-700">BS Electrical Engineering</p>
                <p className="text-base text-stone-500">University of Missouri</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patents */}
        <div>
          <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-8">Patents</p>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-stone-400 mb-1">US11062038B2 · 2021</p>
              <p className="text-base text-stone-700 leading-snug">Identity & Credential Protection via Blockchain</p>
            </div>
            <div>
              <p className="text-sm text-stone-400 mb-1">US20170004486A1</p>
              <p className="text-base text-stone-700 leading-snug">Fraud Control Based on Geolocation</p>
            </div>
            <div>
              <p className="text-sm text-stone-400 mb-1">US20170270493A1</p>
              <p className="text-base text-stone-700 leading-snug">Point-to-Point Transaction Processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
