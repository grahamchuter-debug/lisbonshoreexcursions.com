import Link from "next/link";

const ATLANTIC_LINKS = [
  {
    title: "Portugal cruise planning",
    description:
      "Lisbon is the gateway — use our guides to choose Sintra, Belém, Cascais or an independent city day with return-to-ship confidence.",
    href: "/guides",
  },
  {
    title: "Best Portugal shore excursions",
    description:
      "Beyond the capital — Sintra, Cascais, Belém, food and wine, and when a longer Portugal day is worth the coach time.",
    href: "/guides/best-portugal-shore-excursions",
  },
  {
    title: "Northern Spain & Galicia",
    description:
      "La Coruña and Galicia often sit on the same Atlantic routes — Santiago, coastline and seafood for the next port day.",
    href: "https://lacorunashoreexcursions.com",
  },
  {
    title: "Atlantic Europe authority",
    description:
      "Crossings and Iberian loops reward passengers who plan each port as a different experience — not the same coach template twice.",
    href: "/compare/best-portugal-tour-first-time",
  },
  {
    title: "Spain where relevant",
    description:
      "When your itinerary continues into Spain, compare private vs coach pacing and short-port realism before you book.",
    href: "/compare/private-tour-vs-coach-tour",
  },
  {
    title: "Cruise ship schedules",
    description:
      "Check which ships call at Lisbon and how long you have ashore before locking in Sintra or a city day.",
    href: "/ship-schedules/lisbon",
  },
];

export function AtlanticLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Portugal &amp; Atlantic cruise planning</p>
        <h2 className="section-title mt-2">Plan your wider Atlantic itinerary</h2>
        <p className="section-subtitle">
          Lisbon is often one unforgettable day on a longer Atlantic or Iberian voyage — explore related
          Portugal and Atlantic Europe planning without Mediterranean clutter.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ATLANTIC_LINKS.map((link) => (
            <a
              key={link.href + link.title}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-feature group"
            >
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
                {link.href.startsWith("http") && (
                  <span className="ml-1 text-coastal-400 text-sm" aria-hidden="true">
                    ↗
                  </span>
                )}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </a>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Lisbon planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
