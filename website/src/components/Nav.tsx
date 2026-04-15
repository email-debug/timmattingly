import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4">
        <Link href="/" className="text-base md:text-lg text-stone-900 font-medium tracking-tight hover:text-stone-600 transition-colors whitespace-nowrap">
          Tim Mattingly
        </Link>
        <div className="flex items-center gap-4 md:gap-10 text-sm md:text-base text-stone-500">
          <Link href="/experience" className="hover:text-stone-900 transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-stone-900 transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-stone-900 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
