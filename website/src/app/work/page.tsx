export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-16 pb-24">
      <div className="mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Work</p>
        <h1 className="text-4xl font-light text-stone-900 mb-4">Not one thing.</h1>
        <p className="text-lg text-stone-500 font-light max-w-2xl leading-relaxed">
          EE undergrad. 4.0 MBA. Founder twice. VP at Mastercard. Senior Director at a $120B company.
          Three patents. Currently building AI-native software. The through-line is systems thinking —
          the domains just kept changing.
        </p>
      </div>

      {/* Founder */}
      <div id="founder" className="grid grid-cols-3 gap-16 py-16 border-t border-stone-100">
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">Founder</p>
          <h2 className="text-2xl font-light text-stone-900">Built companies</h2>
        </div>
        <div className="col-span-2 space-y-10">
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-medium text-stone-900">Smarter Travel Planner</h3>
              <span className="text-sm text-stone-400">2024 – Present</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mb-3">
              A production SaaS for AI-assisted trip planning — built without writing a single line of code.
              The product is live. The more interesting thing might be the orchestration system that built it:
              bead-based work decomposition, automated smoke testing, parallel AI agents, failure recovery.
            </p>
            <a href="https://smartertravelplanner.com" className="text-sm text-stone-400 hover:text-stone-700 transition-colors">
              smartertravelplanner.com →
            </a>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-medium text-stone-900">Equilliance Companies</h3>
              <span className="text-sm text-stone-400">2003 – 2010</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Founded a platform of mortgage lending and real estate companies. Grew to 300+ employees.
              Acquired 4 competing firms. Launched 5 subsidiary companies. New product line grew to
              50% of company revenue within 6 months of launch.
              Named Entrepreneur of the Month and Top 40 Under 40 by the Orlando Business Journal.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-medium text-stone-900">United Mortgage Partners</h3>
              <span className="text-sm text-stone-400">2010 – 2011</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Led the merger and integration of 6 mortgage companies into a new lending business
              built for a rapidly changing regulatory environment.
            </p>
          </div>
        </div>
      </div>

      {/* Engineer */}
      <div id="engineer" className="grid grid-cols-3 gap-16 py-16 border-t border-stone-100">
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">Engineer</p>
          <h2 className="text-2xl font-light text-stone-900">Built the system</h2>
        </div>
        <div className="col-span-2 space-y-8">
          <p className="text-base text-stone-600 leading-relaxed">
            BS in Electrical Engineering. Never stopped thinking like one. When I built Smarter Travel Planner,
            the hard part wasn't the product — it was making AI agents reliable enough to build it.
            Writing code and shipping software are completely different problems.
          </p>
          <div className="bg-stone-50 p-6 space-y-4">
            <p className="text-sm font-medium text-stone-700">The orchestration layer:</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-stone-500">
              <div className="flex items-start gap-2"><span className="text-stone-300 mt-0.5">—</span>Epic planning + bead-based work decomposition</div>
              <div className="flex items-start gap-2"><span className="text-stone-300 mt-0.5">—</span>Automated smoke testing between every task</div>
              <div className="flex items-start gap-2"><span className="text-stone-300 mt-0.5">—</span>Parallel agent orchestration (10 concurrent slots)</div>
              <div className="flex items-start gap-2"><span className="text-stone-300 mt-0.5">—</span>Failure detection + automatic recovery</div>
              <div className="flex items-start gap-2"><span className="text-stone-300 mt-0.5">—</span>TypeScript strict mode, 80%+ test coverage</div>
              <div className="flex items-start gap-2"><span className="text-stone-300 mt-0.5">—</span>Automated deployment to Google Cloud Run</div>
            </div>
          </div>
          <div className="border-t border-stone-100 pt-6">
            <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Patents</p>
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-stone-400 font-mono w-32 shrink-0">US11062038B2</span>
                <span className="text-sm text-stone-600">Identity & Credential Protection via Blockchain · 2021</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-stone-400 font-mono w-32 shrink-0">US20170004486A1</span>
                <span className="text-sm text-stone-600">Fraud Control Based on Geolocation</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-stone-400 font-mono w-32 shrink-0">US20170270493A1</span>
                <span className="text-sm text-stone-600">Point-to-Point Transaction Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisor */}
      <div id="advisor" className="grid grid-cols-3 gap-16 py-16 border-t border-stone-100">
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">Advisor</p>
          <h2 className="text-2xl font-light text-stone-900">Built at scale</h2>
        </div>
        <div className="col-span-2 space-y-10">
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-medium text-stone-900">Head of Global Innovation Advisory · BioSTL</h3>
              <span className="text-sm text-stone-400">2023 – Present</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Building and scaling high-growth health technology companies. Managing 75+ executive-level advisors.
              Grew client engagements 75% in the first 180 days.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-medium text-stone-900">Senior Director, Product Innovation & Commercialization · Centene</h3>
              <span className="text-sm text-stone-400">2018 – 2023</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Product strategy lead for a $20B line of business at a $120B health insurer.
              Roadmap alignment, technology investment prioritization, and digital product portfolio for 20M members.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-medium text-stone-900">VP Product Development, Enterprise Partnerships · Mastercard</h3>
              <span className="text-sm text-stone-400">2011 – 2018</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Global product management for a $10B wholesale travel payments program.
              New product innovation across urban transit, smart cities, global travel, and packaged goods.
              Led invention of multiple issued patents.
            </p>
          </div>
        </div>
      </div>

      {/* Community */}
      <div id="community" className="grid grid-cols-3 gap-16 py-16 border-t border-stone-100">
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">Community</p>
          <h2 className="text-2xl font-light text-stone-900">HOA President</h2>
        </div>
        <div className="col-span-2">
          <p className="text-base text-stone-600 leading-relaxed">
            Yes, also that. The job is mostly stakeholder management, budget governance, and getting
            people with competing priorities to agree on something. Turns out those skills travel well.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="grid grid-cols-3 gap-16 py-16 border-t border-stone-100">
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">Education</p>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-stone-900 mb-1">MBA · 4.0 GPA</h3>
            <p className="text-sm text-stone-500">Rollins College, Crummer Graduate School of Business</p>
            <p className="text-xs text-stone-400 mt-1">Finance & International Business</p>
          </div>
          <div>
            <h3 className="font-medium text-stone-900 mb-1">BS, Electrical Engineering</h3>
            <p className="text-sm text-stone-500">University of Missouri</p>
          </div>
        </div>
      </div>
    </div>
  );
}
