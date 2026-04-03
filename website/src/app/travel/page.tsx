import Link from 'next/link';

const journals = [
  {
    slug: 'ljubljana-2025',
    title: 'Ljubljana, Slovenia',
    dates: 'May 31 – June 10, 2025',
    excerpt: 'The Ljubljanica River was the first thing that stopped me in my tracks — that impossible emerald green, like someone had dissolved a gemstone into the water and just left it there to glow.',
  },
];

export default function Travel() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-16 pb-24">
      <div className="mb-16">
        <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-4">Our Travels</p>
        <h1 className="text-4xl font-light text-stone-900 mb-4">Tim & Jill</h1>
        <p className="text-lg text-stone-500 font-light max-w-2xl leading-relaxed">
          We've been traveling together for a long time. These are the journals —
          written from notes, photos, and the particular clarity that comes after you've
          left somewhere and realize you were paying attention.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {journals.map(journal => (
          <Link key={journal.slug} href={`/travel/${journal.slug}`} className="group border border-stone-200 hover:border-stone-400 transition-colors">
            <div className="aspect-video bg-stone-100 flex items-center justify-center">
              <p className="text-stone-400 text-xs">Photo coming soon</p>
            </div>
            <div className="p-6">
              <p className="text-xs text-stone-400 mb-2">{journal.dates}</p>
              <h2 className="text-lg font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">
                {journal.title}
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">{journal.excerpt}</p>
            </div>
          </Link>
        ))}
        <div className="border border-dashed border-stone-200 p-6 flex items-center justify-center">
          <p className="text-sm text-stone-300 text-center">More journals coming</p>
        </div>
      </div>
    </div>
  );
}
