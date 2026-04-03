export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-8 pt-16 pb-24">
      <div className="mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Contact</p>
        <h1 className="text-4xl font-light text-stone-900 mb-6">Let's talk</h1>
        <p className="text-lg text-stone-500 font-light leading-relaxed max-w-xl">
          If you're building something interesting and need technical leadership,
          a sharp strategic advisor, or someone who's done it before — I'm easy to reach.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 mb-16">
        <a href="https://calendly.com/timmattingly" className="border border-stone-200 p-8 hover:border-stone-900 transition-colors group">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Schedule a call</p>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            30 minutes. No pitch deck required. Tell me what you're building.
          </p>
          <p className="text-sm text-stone-400 group-hover:text-stone-700 transition-colors">calendly.com/timmattingly →</p>
        </a>
        <a href="https://linkedin.com/in/timothywmattingly" className="border border-stone-200 p-8 hover:border-stone-900 transition-colors group">
          <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">LinkedIn</p>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            2,800+ connections, mostly exec-level. Message me there if you prefer async.
          </p>
          <p className="text-sm text-stone-400 group-hover:text-stone-700 transition-colors">linkedin.com/in/timothywmattingly →</p>
        </a>
      </div>
      <div className="border-t border-stone-100 pt-10">
        <p className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-6">How I can help</p>
        <div className="grid grid-cols-3 gap-6 text-sm text-stone-500">
          <div>
            <p className="font-medium text-stone-700 mb-2">Fractional CTO</p>
            <p className="leading-relaxed">Technical leadership for startups that need a CTO but aren't ready for a full-time hire.</p>
          </div>
          <div>
            <p className="font-medium text-stone-700 mb-2">Strategic Advisory</p>
            <p className="leading-relaxed">Product strategy, roadmap alignment, go-to-market — especially in health tech and fintech.</p>
          </div>
          <div>
            <p className="font-medium text-stone-700 mb-2">AI-native Development</p>
            <p className="leading-relaxed">Help your team build reliably with AI agents. The system matters more than the tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
