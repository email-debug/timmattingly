import Link from 'next/link';

export default function BuildEngineProject() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-16 pb-24">
      {/* Breadcrumb */}
      <Link href="/projects" className="text-sm text-stone-400 hover:text-stone-600 transition-colors mb-8 inline-block">
        ← Projects
      </Link>

      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">AI Infrastructure</p>
        <h1 className="text-4xl font-light text-stone-900 mb-4">AI Vibe Coding CI/CD Engine</h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-3xl">
          A fully autonomous CI/CD orchestration system that manages AI coding agents building
          production software. It coordinates multiple agents working in parallel — handling
          work decomposition, isolation, monitoring, failure recovery, and deployment.
        </p>
      </div>

      {/* The Problem */}
      <div className="grid grid-cols-2 gap-16 mb-16">
        <div>
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-2xl font-light text-stone-900 mb-4">AI agents are powerful but unreliable</h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Anyone who has used an LLM coding agent for more than a trivial task knows the failure modes.
            Building production software with AI requires solving all of these simultaneously.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Context drift', desc: 'As the context window fills, agents lose track of instructions given earlier. Rules stated clearly in the system prompt get deprioritized as the conversation grows.' },
            { label: 'Spinning', desc: 'When an approach fails, agents try the same approach again — or oscillate between two failing approaches — consuming their entire context window.' },
            { label: 'Coordination failure', desc: 'Two agents editing the same file, starting servers on the same port, running tests that interfere with each other. Without isolation, parallelism is impossible.' },
            { label: 'Silent failures', desc: 'Code that passes TypeScript and unit tests can still produce a blank page. Agents can\'t see the app they\'re building.' },
            { label: 'Abandoned state', desc: 'When agents crash, they leave behind running containers, orphaned worktrees, and half-finished code that blocks future work.' },
          ].map((item) => (
            <div key={item.label} className="flex gap-3">
              <div className="w-1 bg-stone-300 shrink-0 rounded" />
              <div>
                <p className="text-sm font-medium text-stone-700">{item.label}</p>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Insight */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">The Insight</p>
          <p className="text-xl text-stone-700 font-light leading-relaxed mb-4">
            Treat AI agents like unreliable distributed workers in a fault-tolerant system — the same
            way you&apos;d design for unreliable network nodes or crash-prone processes.
          </p>
          <p className="text-base text-stone-500 leading-relaxed">
            Give them atomic units of work small enough to complete within their reliable context window.
            Monitor them with heartbeat checks. When they fail, clean up and retry with a fresh agent.
            Never let two agents edit the same file. Gate every phase with runtime verification.
            The build engine is, in essence, an operating system for AI workers.
          </p>
        </div>
      </div>

      {/* How It Works — 4 pillars */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-8">How It Works</p>
        <div className="grid grid-cols-2 gap-12">

          {/* Bead Abstraction */}
          <div>
            <h3 className="text-lg font-medium text-stone-900 mb-3">The Bead Abstraction</h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              The atomic unit of work is a <strong>bead</strong> — typically 15-30 minutes of coding work.
              Each bead specifies exactly which files to touch, what acceptance criteria to meet,
              and what other beads must complete first. Beads are grouped into epics and organized
              with dependency chains.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">
              An agent&apos;s reliability degrades as context fills. Small beads keep agents in their
              most reliable window. If one fails, the cost is minimal — stall it, clean up, let a fresh
              agent retry. Fresh context is cheaper than spinning.
            </p>
            <div className="bg-stone-50 rounded p-4 text-xs font-mono text-stone-600 space-y-0.5">
              <p>PSO-01: Add packing list data model &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┐</p>
              <p>PSO-02: Build packing list UI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┤ Phase 1</p>
              <p>PSO-03: Add shopping integration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┤ (parallel)</p>
              <p>PSO-04: Wire up Firestore persistence &nbsp;&nbsp;&nbsp;&nbsp;┘</p>
              <p className="text-stone-400">PSO-GT: Smoke gate — runtime verification</p>
              <p>PSO-05: Add sharing between travelers &nbsp;&nbsp;&nbsp;&nbsp;┐</p>
              <p>PSO-06: Build suggestions engine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┤ Phase 2</p>
              <p>PSO-07: Weather-based recommendations &nbsp;&nbsp;&nbsp;&nbsp;┘</p>
              <p className="text-stone-400">PSO-GT2: Smoke gate — verify Phase 2</p>
              <p className="text-stone-400">PSO-PUSH: Deploy to dev</p>
            </div>
          </div>

          {/* Transactional State */}
          <div>
            <h3 className="text-lg font-medium text-stone-900 mb-3">Transactional State Management</h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              All state lives in Firestore, accessed exclusively through a REST API. No agent ever
              writes to Firestore directly. This is the most important architectural decision in the system.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">
              Early iterations let agents access state directly. They corrupted it. They skipped steps.
              One agent decided incrementing the attempt counter was unnecessary. Another marked its own
              bead complete without running tests.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">
              The API boundary creates a hard wall. It validates every state transition, enforces invariants,
              detects races, and logs every action. The critical <strong>acquire</strong> operation runs as a
              Firestore transaction that atomically checks engine status, validates dependencies, detects
              file conflicts, and claims both bead and slot — or rolls back everything.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed">
              A <strong>tripwire circuit breaker</strong> monitors for excessive claim races.
              Three races in 60 seconds auto-pauses the engine — a signal that too many agents
              are competing for too few beads.
            </p>
          </div>

          {/* Heartbeat Control Loop */}
          <div>
            <h3 className="text-lg font-medium text-stone-900 mb-3">The Heartbeat Control Loop</h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Every 4 minutes and 45 seconds, each agent sends a health report and receives
              instructions back. This bidirectional communication keeps agents on track as context drifts.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-stone-700 mb-1">Agent → Engine (uplink)</p>
                <p className="text-sm text-stone-500">Context window remaining, files changed, TypeScript status, commit count, current stage.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700 mb-1">Engine → Agent (downlink)</p>
                <p className="text-sm text-stone-500">
                  <strong>Warnings</strong> — informational. <strong>Injected rules</strong> — behavioral
                  commands the agent must obey. <strong>Standing reminders</strong> — critical rules
                  repeated on every heartbeat because agents forget.
                </p>
              </div>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mt-3">
              Nine health checks run each cycle: context exhaustion, scope drift, uncommitted work,
              spinning detection, file churn, TypeScript regression, stagnation, and build duration limits.
            </p>
          </div>

          {/* Self-Healing Loops */}
          <div>
            <h3 className="text-lg font-medium text-stone-900 mb-3">Self-Healing Loops</h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Four interlocking feedback loops handle failures automatically:
            </p>
            <div className="space-y-3">
              {[
                { name: 'Bead Retry', desc: 'Failed bead → stall → re-enters queue → fresh agent retries. Most failures are context-related — a different agent with clean context often succeeds.' },
                { name: 'Smoke → Hotfix → Re-Smoke', desc: 'Runtime verification fails → hotfix beads auto-created at highest priority → smoke gate re-runs. Catches blank pages, broken routes, invisible elements.' },
                { name: 'P0 Defect Gate', desc: 'Critical defect logged → all feature work halted → only hotfixes proceed → defect resolved → work resumes. A global circuit breaker.' },
                { name: 'Stall Detection', desc: 'No heartbeat for 30 minutes → monitor stalls bead → slot released → worktree cleaned → bead re-enters queue.' },
              ].map((loop) => (
                <div key={loop.name} className="flex gap-3">
                  <div className="w-1 bg-stone-300 shrink-0 rounded" />
                  <div>
                    <p className="text-sm font-medium text-stone-700">{loop.name}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{loop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Workspace Isolation */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Workspace Isolation</p>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="text-base text-stone-600 leading-relaxed mb-4">
              Each agent gets an isolated git worktree with its own Docker container running
              Vite (frontend) and Express (backend) on unique port pairs. The slot pool has 10 positions,
              each with full process isolation — true parallelism without interference.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed">
              Worktrees isolate the filesystem but not processes. Docker gives each slot its own process
              namespace and network. Each agent can run dev servers, execute tests, and run browser
              automation in complete isolation.
            </p>
          </div>
          <div className="bg-stone-50 rounded p-4">
            <p className="text-xs font-medium text-stone-400 uppercase mb-3">Slot Pool</p>
            <div className="text-xs font-mono text-stone-600 space-y-1">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="flex justify-between">
                  <span>Slot {i}</span>
                  <span className="text-stone-400">:{5100 + i} / :{3100 + i}</span>
                </div>
              ))}
              <div className="text-stone-300">· · ·</div>
              <div className="flex justify-between border-t border-stone-200 pt-1 mt-1">
                <span className="text-stone-400">Tim</span>
                <span className="text-stone-400">:5173 / :3173</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Ship Layer */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-6">Deployment Pipeline</p>
        <div className="flex items-center justify-between max-w-3xl">
          {[
            { env: 'main', desc: 'Working branch. Bead merges accumulate here.' },
            { env: 'dev', desc: 'First deployed environment. Cloud Build triggered.' },
            { env: 'stage', desc: 'Pre-production. Tim reviews the full experience.' },
            { env: 'prod', desc: 'Live. Requires Tim\'s explicit approval.' },
          ].map((e, i) => (
            <div key={e.env} className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-sm font-medium text-stone-700">{e.env}</p>
                <p className="text-xs text-stone-400 max-w-28">{e.desc}</p>
              </div>
              {i < 3 && <span className="text-stone-300 text-lg">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Learnings */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">What I Learned</p>
        <h2 className="text-2xl font-light text-stone-900 mb-8">After 40+ epics, several patterns emerged</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { title: 'Fresh context solves most failures', body: 'When an agent fails, the instinct is to debug. The better strategy is to stall and let a fresh agent try. Agent failures are rarely deterministic. The retry loop has a remarkably high success rate on second attempts.' },
            { title: 'Rules must be repeated, not just stated', body: 'An instruction in the system prompt works for the first 10 minutes. By minute 30, it\'s been deprioritized. The heartbeat reminder system exists because "tell them once" doesn\'t work.' },
            { title: 'Runtime verification catches what tests miss', body: 'TypeScript and unit tests catch about 70% of issues. The remaining 30% — blank pages, broken routing, invisible elements — only appear when you run the app. Smoke gates are not optional.' },
            { title: 'The API boundary is load-bearing', body: 'Letting agents access state directly failed repeatedly. They find shortcuts, skip validations, and "improve" processes. The HTTP API is the only thing preventing agents from helpfully destroying the system.' },
            { title: 'Atomic work units are the foundation', body: 'Every feature — parallelism, fault tolerance, retry logic — depends on work being small and well-scoped. Bad decomposition cascades into every downstream problem.' },
            { title: 'The system needs to watch itself', body: 'AI agents don\'t know when they\'re stuck. External observation combined with forced behavioral change is essential. The agent doesn\'t decide to stop — the engine tells it to.' },
          ].map((l) => (
            <div key={l.title} className="border-l-2 border-stone-200 pl-4">
              <p className="text-sm font-medium text-stone-700 mb-2">{l.title}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Human Role */}
      <div className="border-t border-stone-200 pt-12 mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">The Human Role</p>
        <div className="grid grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-base text-stone-600 leading-relaxed mb-4">
              Tim is not a programmer. He&apos;s a technical leader who orchestrates AI agents.
              The system is designed so that a non-programmer with strong product sense can direct
              AI agents to build production software.
            </p>
            <p className="text-base text-stone-500 leading-relaxed">
              Every operational task — from running tests to deploying to production — is handled
              by the agents and the engine. Tim never runs terminal commands, modifies code, commits, or deploys.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { role: 'Decision maker', desc: 'Approves deployments, resolves ambiguity, makes business calls' },
              { role: 'Visual reviewer', desc: 'Reviews UI in his own browser — he is the smoke gate' },
              { role: 'Quality gatekeeper', desc: 'Feedback flows back into specs for future beads' },
              { role: 'System administrator', desc: 'Configures cloud services, manages credentials' },
            ].map((r) => (
              <div key={r.role} className="flex gap-3">
                <div className="w-1 bg-stone-300 shrink-0 rounded" />
                <div>
                  <p className="text-sm font-medium text-stone-700">{r.role}</p>
                  <p className="text-sm text-stone-500">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-stone-200 pt-12 flex items-center justify-between">
        <Link href="/projects/stp" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
          ← See what it built — Smarter Travel Planner
        </Link>
        <Link href="/contact" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
          Get in touch →
        </Link>
      </div>
    </div>
  );
}
