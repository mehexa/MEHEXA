import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-20 lg:mt-32 border-t border-ink-50/[0.06] bg-surface-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 lg:py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-ink-50/10 shadow-sm">
              <Image src="/brand/logo.jpeg" alt="MEHEXA" fill sizes="40px" className="object-cover" />
            </div>
            <span className="display text-xl text-ink-50">
              ME<span className="text-gold-600">HEXA</span>
            </span>
          </div>
          <p className="text-sm text-ink-300 max-w-xs leading-relaxed">
            The operating system for precision drug delivery — AI-engineered exosomes for
            therapeutics, regenerative medicine, and cellular communication.
          </p>
          <p className="text-xs text-ink-400 pt-3">
            © {new Date().getFullYear()} MEHEXA Bio, Inc. All rights reserved.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <div className="eyebrow">Platform</div>
            <Link href="/science" className="block text-ink-200 hover:text-gold-700 transition">Exosome Science</Link>
            <Link href="/#how-it-works" className="block text-ink-200 hover:text-gold-700 transition">How It Works</Link>
            <Link href="/resources" className="block text-ink-200 hover:text-gold-700 transition">Resource Library</Link>
          </div>
          <div className="space-y-3">
            <div className="eyebrow">Solutions</div>
            <Link href="/plant-exosomes" className="block text-ink-200 hover:text-gold-700 transition">Plant Exosomes</Link>
            <Link href="/milk-exosomes" className="block text-ink-200 hover:text-gold-700 transition">Milk Exosomes</Link>
            <Link href="/investors" className="block text-ink-200 hover:text-gold-700 transition">For Investors</Link>
          </div>
          <div className="space-y-3">
            <div className="eyebrow">Company</div>
            <Link href="/about" className="block text-ink-200 hover:text-gold-700 transition">About</Link>
            <Link href="/contact" className="block text-ink-200 hover:text-gold-700 transition">Contact</Link>
            <Link href="/contact" className="block text-ink-200 hover:text-gold-700 transition">Careers</Link>
          </div>
          <div className="space-y-3">
            <div className="eyebrow">Legal</div>
            <Link href="#" className="block text-ink-200 hover:text-gold-700 transition">Privacy</Link>
            <Link href="#" className="block text-ink-200 hover:text-gold-700 transition">Terms</Link>
            <Link href="#" className="block text-ink-200 hover:text-gold-700 transition">Regulatory</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-50/[0.05] px-5 sm:px-6 lg:px-10 py-5 text-xs text-ink-400 flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto gap-2">
        <span>
          MEHEXA / ExoTech products are investigational. No exosome therapeutics are FDA-approved.
          Medical foods and supplements available as indicated.
        </span>
        <span>Built for the next decade of medicine.</span>
      </div>
    </footer>
  );
}
