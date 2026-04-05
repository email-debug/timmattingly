export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-16 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-4">Projects</p>
        <h1 className="text-5xl font-light text-stone-900 mb-4">What I've built</h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl">
          Two active projects that demonstrate how AI-native development works in practice —
          not as a concept, but as shipped, running software.
        </p>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-2 gap-px bg-stone-200">
        {/* STP */}
        <div className="bg-white p-10">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">Production SaaS</p>
          <h2 className="text-2xl font-light text-stone-900 mb-4">Smarter Travel Planner</h2>
          <p className="text-base text-stone-600 leading-relaxed mb-6">
            A full-featured trip planning application with AI concierge, interactive maps,
            itinerary management, and Stripe payments. Live at{' '}
            <a href="https://smartertravelplanner.com" className="text-stone-900 hover:underline">
              smartertravelplanner.com
            </a>.
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-xs font-medium text-stone-400 uppercase mb-2">The point</p>
              <p className="text-base text-stone-600 leading-relaxed">
                Built without writing a single line of code. Every component, every API integration,
                every deployment — produced and managed by AI agents under orchestration.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-stone-400 uppercase mb-2">Stack</p>
              <p className="text-base text-stone-500">
                React · TypeScript · Firebase · GCP Cloud Run · Stripe · Gemini AI
              </p>
            </div>
          </div>
          <div className="border-t border-stone-100 pt-6">
            <p className="text-sm text-stone-400 leading-relaxed">
              TypeScript strict mode · Automated test suite · CI/CD pipeline · Production infrastructure
            </p>
          </div>
        </div>

        {/* Orchestration Engine */}
        <div className="bg-white p-10">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">AI Infrastructure</p>
          <h2 className="text-2xl font-light text-stone-900 mb-4">AI Orchestration Engine</h2>
          <p className="text-base text-stone-600 leading-relaxed mb-6">
            A custom CI/CD state machine that turns AI coding agents into a reliable engineering team.
            This is the system that built Smarter Travel Planner.
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-xs font-medium text-stone-400 uppercase mb-2">How it works</p>
              <p className="text-base text-stone-600 leading-relaxed">
                Features are decomposed into atomic work units (beads). Each bead is claimed by an agent,
                built in an isolated environment, tested against quality gates, and merged automatically.
                Failed beads trigger automated fix cycles.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-stone-400 uppercase mb-2">Capabilities</p>
              <ul className="text-base text-stone-500 space-y-1">
                <li>Sprint planning and work decomposition</li>
                <li>Parallel agent execution with slot management</li>
                <li>Smoke gates and automated quality checks</li>
                <li>Failure detection, stall recovery, and auto-revert</li>
                <li>30+ custom skills for specialized tasks</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-100 pt-6">
            <p className="text-sm text-stone-400 leading-relaxed">
              Built on Claude Code · Firestore state machine · Cloud Functions · Docker-based isolation
            </p>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center">
        <p className="text-base text-stone-400">
          The gap between "AI can write code" and "AI can ship features reliably" is an engineering problem.
          These projects are my answer to it.
        </p>
      </div>
    </div>
  );
}
