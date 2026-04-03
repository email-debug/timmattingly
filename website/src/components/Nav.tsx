import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-stone-900 font-medium tracking-tight hover:text-stone-600 transition-colors">
          Tim Mattingly
        </Link>
        <div className="flex items-center gap-8 text-sm text-stone-500">
          <Link href="/work" className="hover:text-stone-900 transition-colors">Work</Link>
          <Link href="/travel" className="hover:text-stone-900 transition-colors">Our Travels</Link>
          <Link href="/now" className="hover:text-stone-900 transition-colors">Now</Link>
          <Link href="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
