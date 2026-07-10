import Link from "next/link";
import { SITE } from "@/lib/site";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">{SITE.name}</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">
              The gateway to Portugal — helping cruise passengers choose between Sintra, Lisbon, the
              Atlantic coast and Belém with honest comparisons and carefully selected shore excursions.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Choose your Portugal</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/compare/sintra-or-lisbon" className="hover:text-white">Sintra or Lisbon?</Link></li>
              <li><Link href="/compare/belem-or-alfama" className="hover:text-white">Belém or Alfama?</Link></li>
              <li><Link href="/compare/best-lisbon-shore-excursion" className="hover:text-white">Best Lisbon excursion</Link></li>
              <li><Link href="/wow-collection" className="hover:text-white">The Wow Collection</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your port day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/cruise-planner" className="hover:text-white">Portugal Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/guides/sintra-from-lisbon-cruise-port" className="hover:text-white">Sintra guide</Link></li>
              <li><Link href="/guides/independent-lisbon-guide" className="hover:text-white">Independent Lisbon guide</Link></li>
              <li><Link href="/cruise-port-guide" className="hover:text-white">Lisbon Port Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Editor&apos;s Collection</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/shore-excursions/sintra-cascais-full-day" className="hover:text-white">Editor&apos;s Choice</Link></li>
              <li><Link href={SIGNATURE_EXPERIENCE_PATH} className="hover:text-white">Signature Experience</Link></li>
              <li><Link href="/compare/best-portugal-tour-first-time" className="hover:text-white">First-timers</Link></li>
              <li><Link href="/compare/private-tour-vs-coach-tour" className="hover:text-white">Private vs coach</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Enquire</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent Portugal cruise planning resource — not affiliated with any cruise line or the Port of Lisbon.
      </div>
    </footer>
  );
}
