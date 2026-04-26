import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/lib/assets';

export default function RetirementProject() {
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
            <img src={assets.logo('srp-logo.png')} alt="Smart Retirement Planner" style={{ width: '220px', height: 'auto' }} />
          </div>
          <h1 className="text-4xl font-light text-stone-900 mb-4">Retirement Planning, Modeled Like a CFO</h1>
          <p className="text-lg text-stone-500 font-light leading-relaxed mb-6">
            A household-scale financial projection engine that handles the parts most calculators skip —
            taxes, RMDs, Social Security taxability, Monte Carlo risk, and life-stage healthcare costs —
            all in a single scenario you can edit and re-run in real time.
          </p>
          <a
            href="https://retire.springlakeservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm rounded hover:bg-stone-700 transition-colors"
          >
            Visit retire.springlakeservices.com ↗
          </a>
        </div>
        <div className="border border-stone-200 rounded-lg overflow-hidden bg-stone-50 aspect-[3/2] flex items-center justify-center">
          <Image
            src={assets.professional('srp-summary.png')}
            alt="Smart Retirement Planner summary view"
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
            Models a household&apos;s full retirement horizon year-by-year — income streams,
            savings vehicles, accounts, asset allocation, taxes, and expenses — then simulates
            thousands of alternative market paths to show the range of likely outcomes.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">Why it exists</p>
          <p className="text-base text-stone-600 leading-relaxed">
            Most online retirement calculators stop at &ldquo;can I afford it?&rdquo; They ignore taxes,
            withdrawal order, RMDs, healthcare phases, and return variance. This tool models all of it,
            so the answer reflects what actually happens in retirement — not a rounded average.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">How it was built</p>
          <p className="text-base text-stone-600 leading-relaxed">
            Built with AI agents in iterative passes — data model first, projection engine next, then tax,
            RMD, and Monte Carlo layers. Every edge case (job changes, gap coverage, home sales, survivor
            benefits, inherited IRAs) was added by describing the scenario and letting agents implement it.
          </p>
        </div>
      </div>

      {/* Engine capabilities */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">What the engine models</p>
        <div className="grid grid-cols-2 gap-8">
          {[
            { title: 'Full tax engine', desc: 'Federal + state income tax, FICA, LTCG, Social Security taxability thresholds, standard deduction with 65+ bonus, and NIIT — all recomputed every projection year.' },
            { title: 'RMDs & Inherited IRAs', desc: 'Uniform Lifetime and Single Life tables applied automatically, plus the 10-year rule for inherited IRAs, feeding correctly into ordinary-income tax.' },
            { title: 'Social Security', desc: 'Per-person start age, survivor benefit (max of own vs 50% of deceased spouse), and automatic inclusion in provisional income for SS taxability math.' },
            { title: 'Life stages', desc: 'Housing costs and a four-phase healthcare timeline per person (employer → pre-Medicare → Medicare → acute care) derived from income and life expectancy.' },
            { title: 'Withdrawal strategies', desc: 'Tax-smart or conventional ordering. Iterative solver handles the chicken-and-egg of withdrawals causing taxes causing more withdrawals.' },
            { title: 'Monte Carlo', desc: 'Stochastic returns drawn from each asset class&apos;s historical mean and standard deviation, rendered as percentile bands so you can see the range — not just the median.' },
            { title: 'Goal scorecard', desc: 'Pass/warn/fail readout for each household goal (travel budget, legacy target, vacation home, etc.) evaluated against the projection.' },
            { title: 'Home sales & §121', desc: 'Model a primary residence sale with the §121 exclusion applied correctly, and roll proceeds into the right account automatically.' },
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

      {/* Screenshots row */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">Inside the app</p>
        <div className="grid grid-cols-2 gap-6">
          <figure className="border border-stone-200 rounded-lg overflow-hidden">
            <Image
              src={assets.professional('srp-projection.png')}
              alt="Year-by-year projection chart"
              width={800}
              height={500}
              className="w-full h-auto"
            />
            <figcaption className="px-5 py-3 text-xs text-stone-500 border-t border-stone-100 bg-stone-50">
              Year-by-year projection — net worth, income, and expenses in one view.
            </figcaption>
          </figure>
          <figure className="border border-stone-200 rounded-lg overflow-hidden">
            <Image
              src={assets.professional('srp-montecarlo.png')}
              alt="Monte Carlo percentile bands"
              width={800}
              height={500}
              className="w-full h-auto"
            />
            <figcaption className="px-5 py-3 text-xs text-stone-500 border-t border-stone-100 bg-stone-50">
              Monte Carlo — percentile bands across thousands of simulated market paths.
            </figcaption>
          </figure>
          <figure className="border border-stone-200 rounded-lg overflow-hidden">
            <Image
              src={assets.professional('srp-accounts.png')}
              alt="Accounts and savings vehicles"
              width={800}
              height={500}
              className="w-full h-auto"
            />
            <figcaption className="px-5 py-3 text-xs text-stone-500 border-t border-stone-100 bg-stone-50">
              Accounts & savings — 401(k), Roth, HSA, brokerage, with employer matches and stock grants.
            </figcaption>
          </figure>
          <figure className="border border-stone-200 rounded-lg overflow-hidden">
            <Image
              src={assets.professional('srp-goals.png')}
              alt="Goal scorecard"
              width={800}
              height={500}
              className="w-full h-auto"
            />
            <figcaption className="px-5 py-3 text-xs text-stone-500 border-t border-stone-100 bg-stone-50">
              Goal scorecard — pass/warn/fail for each household financial goal.
            </figcaption>
          </figure>
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
              <li>Recharts visualizations</li>
              <li>Web Workers for Monte Carlo</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-700 mb-2">Engine</p>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>Pure-TS projection core</li>
              <li>Iterative tax solver</li>
              <li>IRS RMD tables built in</li>
              <li>Scenario JSON import/export</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-700 mb-2">Persistence</p>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>localStorage (default)</li>
              <li>Firebase (optional sync)</li>
              <li>JSON scenario files</li>
              <li>No server required</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-700 mb-2">Infrastructure</p>
            <ul className="text-sm text-stone-500 space-y-1">
              <li>GCP Cloud Run</li>
              <li>Cloud Build CI/CD</li>
              <li>Nginx static serving</li>
              <li>Firebase Hosting-ready</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-stone-200 pt-12 flex items-center justify-between">
        <Link href="/projects" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
          ← All projects
        </Link>
        <a
          href="https://retire.springlakeservices.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
        >
          retire.springlakeservices.com ↗
        </a>
      </div>
    </div>
  );
}
