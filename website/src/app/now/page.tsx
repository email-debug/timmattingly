export default function Now() {
  return (
    <div className="max-w-3xl mx-auto px-8 pt-16 pb-24">
      <div className="mb-12">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Now</p>
        <h1 className="text-4xl font-light text-stone-900 mb-2">What I'm doing</h1>
        <p className="text-sm text-stone-400">Updated April 2026 · Ballwin, Missouri</p>
      </div>
      <div className="space-y-10 text-base text-stone-600 leading-relaxed">
        <div>
          <h2 className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-3">Building</h2>
          <p>
            Finishing the last features on Smarter Travel Planner — trip sharing, subscription payments,
            the AI concierge that makes the whole thing work. Close to demo-ready.
          </p>
          <p className="mt-3">
            Also building the travel journal engine: processes 140,000 photos alongside Google Timeline
            data to generate readable, honest travel writing. Ljubljana is already done.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-3">Advising</h2>
          <p>
            Working with health tech startups through BioSTL. Early-stage companies, real problems,
            genuinely interesting work.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-3">Planning</h2>
          <p>
            The next trip. Always the next trip. Porto is on the list. Akumal is on the list.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-stone-400 tracking-widest uppercase mb-3">The bigger picture</h2>
          <p>
            Building toward a life that works from a café in Porto as easily as it does from Missouri.
            The work is interesting. The goal is flexibility. Those two things are not in conflict.
          </p>
        </div>
      </div>
    </div>
  );
}
