import { notFound } from 'next/navigation';
import Link from 'next/link';

// Placeholder — will be replaced with DB/filesystem reads when content pipeline is wired up
const journals: Record<string, { title: string; dates: string; content: string }> = {
  'ljubljana-2025': {
    title: 'Ljubljana, Slovenia',
    dates: 'May 31 – June 10, 2025',
    content: `Every trip worth remembering begins with a certain amount of beautiful chaos...`,
  },
};

export async function generateStaticParams() {
  return Object.keys(journals).map(slug => ({ slug }));
}

export default async function TravelJournal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journal = journals[slug];
  if (!journal) notFound();

  return (
    <article className="max-w-3xl mx-auto px-8 pt-16 pb-24">
      <Link href="/travel" className="text-sm text-stone-400 hover:text-stone-700 transition-colors mb-6 inline-block">
        ← Our Travels
      </Link>
      <p className="text-xs font-medium text-stone-400 tracking-widest uppercase mb-3">{journal.dates}</p>
      <h1 className="text-4xl font-light text-stone-900 mb-12">{journal.title}</h1>
      <div className="prose prose-stone prose-lg max-w-none prose-headings:font-light prose-p:text-stone-600 prose-p:leading-relaxed">
        <p>{journal.content}</p>
      </div>
    </article>
  );
}
