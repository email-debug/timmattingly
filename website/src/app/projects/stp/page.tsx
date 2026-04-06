import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/lib/assets';

export default function STPProject() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-16 pb-24">
      {/* Breadcrumb */}
      <Link href="/projects" className="text-sm text-stone-400 hover:text-stone-600 transition-colors mb-8 inline-block">
        ← Projects
      </Link>

      {/* Header */}
      <div className="grid grid-cols-2 gap-16 mb-16 items-center">
        <div>
          <div className="flex items-center mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.logo('STP Logo.png')} alt="Smarter Travel Planner" style={{ width: '240px', height: 'auto' }} />
          </div>
          <h1 className="text-4xl font-light text-stone-900 mb-4">AI-Built Travel Planning SaaS</h1>
          <p className="text-lg text-stone-500 font-light leading-relaxed mb-6">
            A full production web application — built, tested, and deployed entirely by AI agents
            without a single line of hand-written code.
          </p>
          <a
            href="https://smartertravelplanner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm rounded hover:bg-stone-700 transition-colors"
          >
            Visit smartertravelplanner.com ↗
          </a>
        </div>
        <div className="border border-stone-200 rounded-lg overflow-hidden">
          <Image
            src={assets.professional('stp-screenshot.png')}
            alt="Smarter Travel Planner application"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* What it is */}
      <div className="grid grid-cols-3 gap-12 mb-16">
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">What it does</p>
          <p className="text-base text-stone-600 leading-relaxed">
            Smarter Travel Planner helps travelers plan trips with an AI concierge that understands
            context, preferences, and logistics. It combines conversational AI with interactive maps,
            structured itinerary management, and real-time place data.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">How it was built</p>
          <p className="text-base text-stone-600 leading-relaxed">
            Every feature was decomposed into atomic work units, assigned to AI coding agents,
            built in isolated Docker environments, verified through automated smoke tests,
            and merged through a CI/CD pipeline. Tim designed the architecture and orchestrated
            the agents — but never wrote code.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">Why it matters</p>
          <p className="text-base text-stone-600 leading-relaxed">
            This isn&apos;t a prototype or a demo. It&apos;s a production application with real users,
            real payments, and real infrastructure. It proves that AI-native development
            can produce software indistinguishable from hand-coded applications.
          </p>
        </div>
      </div>

      {/* Tech stack */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">Technology Stack</p>
        <div className="grid grid-cols-4 gap-8">
          <div>
            <p className="text-sm font-medium text-stone-700 mb-2">Frontend</p>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>React 19 + TypeScript</li>
              <li>Vite build system</li>
              <li>Tailwind CSS</li>
              <li>Google Maps SDK</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-700 mb-2">Backend</p>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>Express.js on Cloud Run</li>
              <li>Cloud Functions (API proxies)</li>
              <li>Firestore database</li>
              <li>Firebase Auth</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-700 mb-2">AI</p>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>Gemini (primary AI)</li>
              <li>Claude (concierge proxy)</li>
              <li>Context-aware conversations</li>
              <li>Place-aware recommendations</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-700 mb-2">Infrastructure</p>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>GCP Cloud Run</li>
              <li>Cloud Build CI/CD</li>
              <li>Stripe payments</li>
              <li>Multi-environment deploys</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key features */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">Key Features</p>
        <div className="grid grid-cols-2 gap-8">
          {[
            { title: 'AI Concierge', desc: 'Conversational travel assistant that understands your trip context, preferences, and constraints. Every response includes clickable options for easy exploration.' },
            { title: 'Interactive Maps', desc: 'Google Maps integration with real-time place data, custom markers, and visual trip planning directly on the map.' },
            { title: 'Itinerary Management', desc: 'Structured day-by-day planning with drag-and-drop reordering, time estimates, and logistics coordination.' },
            { title: 'Stripe Payments', desc: 'Full subscription management with free trials, plan upgrades, and secure payment processing.' },
            { title: 'Multi-Trip Dashboard', desc: 'Manage multiple trips with at-a-glance status, upcoming activities, and quick access to trip details.' },
            { title: 'Collaborative Planning', desc: 'Share trips with travel companions, coordinate activities, and maintain shared itineraries.' },
          ].map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="w-1 bg-stone-200 shrink-0 rounded" />
              <div>
                <p className="text-sm font-medium text-stone-700 mb-1">{f.title}</p>
                <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-stone-200 pt-12 flex items-center justify-between">
        <Link href="/projects/build-engine" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
          See how it was built — the AI Orchestration Engine →
        </Link>
        <a
          href="https://smartertravelplanner.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
        >
          smartertravelplanner.com ↗
        </a>
      </div>
    </div>
  );
}
