import Image from 'next/image';
import { assets } from '@/lib/assets';

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-16 pb-24">
      {/* Header */}
      <div className="grid grid-cols-3 gap-16 mb-16">
        <div className="col-span-2">
          <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Experience</p>
          <h1 className="text-5xl font-light text-stone-900 mb-4">30 years of building</h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed mb-6">
            From electrical engineer to Fortune 25 innovation leader to founder.
            Now available for full-time leadership, fractional CTO/CIO, and strategic advisory.
          </p>
          <a href={assets.doc('resume.pdf')} className="inline-flex items-center gap-2 text-base text-stone-500 hover:text-stone-900 transition-colors">
            Download resume (PDF) →
          </a>
        </div>

        {/* Credential strip */}
        <div className="border-l border-stone-200 pl-16 flex flex-col justify-center gap-8">
          <div>
            <p className="text-3xl font-light text-stone-900">Fortune 25</p>
            <p className="text-sm text-stone-400 mt-1">Centene Corporation — $144B revenue</p>
          </div>
          <div>
            <p className="text-3xl font-light text-stone-900">Fortune 500</p>
            <p className="text-sm text-stone-400 mt-1">Mastercard — VP Strategic Partnerships</p>
          </div>
          <div>
            <p className="text-3xl font-light text-stone-900">300 people</p>
            <p className="text-sm text-stone-400 mt-1">Founded & grew Equilliance, acquired 4 competitors</p>
          </div>
          <div>
            <p className="text-3xl font-light text-stone-900">3 patents</p>
            <p className="text-sm text-stone-400 mt-1">Blockchain identity, fraud prevention, payments</p>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="space-y-0 mb-20">

        {/* Current — STP / AI orchestration */}
        <div className="grid grid-cols-4 gap-8 py-10 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('STP Logo.png')} alt="Smarter Travel Planner" width={0} height={0} sizes="300px" style={{ height: '40px', width: 'auto' }} />
            </div>
            <p className="text-base text-stone-400">2024 – Present</p>
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
        <div className="grid grid-cols-4 gap-8 py-10 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('biostl.svg')} alt="BioSTL" width={100} height={48} className="h-10 w-auto" />
            </div>
            <p className="text-base text-stone-400">2024 – 2025</p>
            <p className="text-sm text-stone-400">Advisor, 2026 – Present</p>
          </div>
          <div className="col-span-3">
            <p className="text-lg font-medium text-stone-700 mb-3">Head of Innovation Advisory · Entrepreneur in Residence</p>
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
        <div className="grid grid-cols-4 gap-8 py-10 border-t border-stone-200">
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
        <div className="grid grid-cols-4 gap-8 py-10 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('mastercard.svg')} alt="Mastercard" width={180} height={48} className="h-10 w-auto" />
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
        <div className="grid grid-cols-4 gap-8 py-10 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center">
              <Image src={assets.logo('Equilliance-web.png')} alt="Equilliance Companies" width={180} height={93} className="h-10 w-auto" />
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
        <div className="grid grid-cols-4 gap-8 py-10 border-t border-stone-200">
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

        {/* Earlier Career */}
        <div className="grid grid-cols-4 gap-8 py-10 border-t border-stone-200">
          <div className="space-y-4">
            <div className="h-12 flex items-center gap-4 flex-wrap">
              <Image src={assets.logo('ey.svg')} alt="EY" width={70} height={48} className="h-9 w-auto" />
              <Image src={assets.logo('sypris.jpg')} alt="Sypris Electronics" width={140} height={48} className="h-8 w-auto" />
              <Image src={assets.logo('berg.jpg')} alt="Berg Electronics" width={100} height={48} className="h-8 w-auto" />
            </div>
            <p className="text-base text-stone-400">1994 – 1999</p>
          </div>
          <div className="col-span-3">
            <p className="text-base text-stone-600 leading-relaxed">
              IT leadership and engineering roles at EY, Sypris Electronics, and Berg Electronics.
              Started as an electrical engineer, moved quickly into technology management.
            </p>
          </div>
        </div>
      </div>

      {/* Advisory Clients */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <p className="text-sm font-medium text-stone-400 tracking-widest uppercase">Advisory Clients</p>
          <span className="text-sm text-stone-300">via</span>
          <Image src={assets.logo('biostl.svg')} alt="BioSTL" width={90} height={28} className="h-6 w-auto" />
        </div>
        <p className="text-base text-stone-500 mb-8 max-w-xl">
          Technology strategy and architecture guidance to healthcare startups at the pre-seed through Series A stage.
        </p>
        <div className="grid grid-cols-5 gap-4">
          <div className="border border-stone-200 p-6 flex items-center justify-center">
            <Image src={assets.logo('gt-diagnostics-icon.png')} alt="GT Diagnostics" width={48} height={48} className="h-10 w-auto" />
          </div>
          <div className="border border-stone-200 p-6 flex items-center justify-center">
            <Image src={assets.logo('pulsenmore.png')} alt="Pulsenmore" width={180} height={48} className="h-8 w-auto" />
          </div>
          <div className="border border-stone-900 bg-stone-900 p-6 flex items-center justify-center">
            <Image src={assets.logo('ayble-health.png')} alt="Ayble Health" width={180} height={80} className="h-10 w-auto" />
          </div>
          <div className="border border-stone-200 p-6 flex items-center justify-center">
            <Image src={assets.logo('manus-neuro.png')} alt="Manus Neuro" width={120} height={80} className="h-10 w-auto" />
          </div>
          <div className="border border-stone-200 p-6 flex items-center justify-center">
            <Image src={assets.logo('neuro360.png')} alt="Neuro360" width={100} height={40} className="h-10 w-auto" style={{ width: 'auto' }} />
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
