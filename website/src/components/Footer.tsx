export default function Footer() {
  return (
    <footer className="mt-8 border-t border-stone-100 py-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between text-sm md:text-base text-stone-400">
        <span>Tim Mattingly</span>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="https://linkedin.com/in/timothywmattingly" className="hover:text-stone-600 transition-colors">LinkedIn</a>
          <a href="https://calendly.com/timmattingly" className="hover:text-stone-600 transition-colors">Calendly</a>
        </div>
      </div>
    </footer>
  );
}
