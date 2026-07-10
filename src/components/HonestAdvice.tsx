import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do You Need a Shore Excursion in Lisbon?</h2>
        <p className="section-subtitle">
          The honest answer: many passengers enjoy Lisbon perfectly well on their own. But if you have
          never visited Portugal, Sintra deserves serious consideration.
        </p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              You can explore Lisbon independently — and many passengers do
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Lisbon is one of Europe&apos;s best cruise ports for DIY exploration. Central terminals,
              reliable metro and trams, and walkable neighbourhoods make independent days realistic:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Alfama, Baixa and Chiado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Tram 28 and Praça do Comércio
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Time Out Market and petiscos bars
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Belém monuments and riverfront
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              But if you have never visited Portugal, Sintra deserves serious consideration
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Fairytale palaces, misty forests and mountain scenery are not walkable from the terminal.
              For many first-time visitors, Sintra is the once-in-a-lifetime day:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Pena Palace</strong> — colourful exterior and panoramic viewpoints above the clouds
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Sintra historic centre</strong> — pastel lanes, palaces and forested hills
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Ideal for first-time visitors</strong> — a destination worth the road journey from Lisbon
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Combine with Cascais</strong> — coast and palace in one day on longer calls
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare/sintra-or-lisbon" className="btn-secondary text-sm">
            Sintra or Lisbon?
          </Link>
          <Link href="/compare/can-you-explore-lisbon-independently" className="btn-secondary text-sm">
            Explore independently?
          </Link>
          <Link href="/guides/independent-lisbon-guide" className="btn-secondary text-sm">
            Independent Lisbon guide
          </Link>
        </div>
      </div>
    </section>
  );
}
