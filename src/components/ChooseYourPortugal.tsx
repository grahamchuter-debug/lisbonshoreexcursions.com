"use client";

import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CHOOSE_CARDS = [
  {
    slug: "sintra",
    emoji: "🏰",
    title: "Fairytale Portugal",
    tagline: "Pena Palace, misty hills and pastel lanes — the Portugal you imagined before you arrived.",
    highlights: [
      "Pena Palace colourful exterior and gardens",
      "Sintra historic centre and Quinta da Regaleira",
      "Fairytale scenery above the clouds",
      "Photography at every miradouro",
      "Editor's Choice for first-time visitors",
    ],
    cta: "Discover Sintra",
    href: "/guides/sintra-from-lisbon-cruise-port",
    imageKey: "sintra",
    wide: true,
  },
  {
    slug: "coast",
    emoji: "🌊",
    title: "Atlantic Coast",
    tagline: "Cascais harbour glamour, Cabo da Roca cliffs and the Marginal coast road — where Lisbon meets the ocean.",
    highlights: [
      "Cascais waterfront promenade",
      "Cabo da Roca — Europe's westernmost point",
      "Boca do Inferno cliff viewpoint",
      "Scenic coastal drive from Sintra",
      "Gelado and harbour cafés",
    ],
    cta: "Discover the coast",
    href: "/guides/cascais-from-lisbon",
    imageKey: "coast",
    wide: true,
  },
  {
    slug: "historic-lisbon",
    emoji: "⛵",
    title: "Historic Lisbon",
    tagline: "Alfama fado lanes, Baixa grandeur and seven-hill miradouros — the city at your feet from the cruise terminal.",
    highlights: [
      "Alfama, Baixa and Chiado neighbourhoods",
      "Tram 28 and Praça do Comércio",
      "Miradouros with river views",
      "Walkable from central terminals",
      "Ideal for independent explorers",
    ],
    cta: "Explore Lisbon",
    href: "/guides/historic-lisbon-guide",
    imageKey: "historic",
    wide: false,
  },
  {
    slug: "food-wine",
    emoji: "🍷",
    title: "Food & Wine",
    tagline: "Petiscos, pastéis de nata, ginjinha and Moscatel — taste Portugal on a port day.",
    highlights: [
      "Pastéis de Belém and custard tart culture",
      "Time Out Market and petiscos bars",
      "Wine tastings and Moscatel de Setúbal",
      "Seafood along the Tagus",
      "Food tours timed to your ship",
    ],
    cta: "Taste Portugal",
    href: "/guides/best-food-in-lisbon",
    imageKey: "food",
    wide: false,
  },
  {
    slug: "culture-heritage",
    emoji: "🚋",
    title: "Culture & Heritage",
    tagline: "Belém monuments, azulejos and centuries of maritime discovery — Portugal's story in stone and tile.",
    highlights: [
      "Jerónimos Monastery and Belém Tower",
      "Monument to the Discoveries",
      "Azulejo tile traditions",
      "Tram 15E to Belém from Baixa",
      "Riverside heritage quarter",
    ],
    cta: "Discover heritage",
    href: "/guides/belem-guide",
    imageKey: "tram",
    wide: false,
  },
  {
    slug: "private",
    emoji: "🚗",
    title: "Private Portugal",
    tagline: "Your guide, your pace — exclusive routing through Lisbon, Sintra and the Atlantic coast.",
    highlights: [
      "Private vehicle and licensed guide",
      "Flexible Sintra and coast sequencing",
      "Photography stops built in",
      "Maximum comfort and pacing",
      "Return-to-ship confidence",
    ],
    cta: "Private tours",
    href: "/shore-excursions/private-spirit-of-lisbon",
    imageKey: "private",
    wide: false,
  },
] as const;

export function ChooseYourPortugal() {
  return (
    <section id="choose" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your Portugal</p>
        <h2 className="section-title mt-2 max-w-3xl">
          How Would You Like To Experience Portugal?
        </h2>
        <p className="section-subtitle">
          Lisbon is not the only story — it is your gateway. Passengers dream of fairytale palaces,
          Atlantic cliffs, colourful neighbourhoods and welcoming food culture. Choose the experience
          that inspires you before you browse excursions.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages.sintra;
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${card.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 text-3xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    &ldquo;{card.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
