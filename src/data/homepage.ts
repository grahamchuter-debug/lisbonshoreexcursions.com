import type { FAQ, VisitorType, ExperienceCard } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export const homepageTagline = "Discover the Best of Portugal from Lisbon";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Portugal for the day on a cruise",
    shortLabel: "Port day",
    description:
      "You're calling at Lisbon for the day. Find shore excursions, planning guides and a realistic Portugal itinerary from the cruise terminal.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Portugal",
    shortLabel: "First visit",
    description:
      "Sintra or Lisbon? Our first-timer guides and comparison pages help you choose confidently from Lisbon cruise port.",
    href: "/compare/best-portugal-tour-first-time",
    cta: "First-timer guide",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Metro to Alfama, tram to Belém, train to Sintra — manage your own return buffer when DIY beats a ship tour.",
    href: "/guides/independent-lisbon-guide",
    cta: "Independent guide",
  },
  {
    id: "planner",
    label: "I want a personalised itinerary",
    shortLabel: "Custom plan",
    description:
      "Tell us your hours ashore, interests and budget — get a tailored Portugal plan with return-to-ship timing.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    slug: "fairytale-sintra",
    title: "Fairytale Portugal / Sintra",
    description: "Pena Palace, misty hills and pastel lanes — the Portugal you imagined before you arrived.",
    href: "/guides/sintra-from-lisbon-cruise-port",
    cta: "Explore Sintra",
    imageKey: "sintra",
  },
  {
    slug: "atlantic-coast",
    title: "Atlantic Coast",
    description: "Cascais harbour, Cabo da Roca cliffs and the Marginal coast road — where Lisbon meets the ocean.",
    href: "/guides/cascais-from-lisbon",
    cta: "Discover the coast",
    imageKey: "coast",
  },
  {
    slug: "historic-lisbon",
    title: "Historic Lisbon",
    description: "Alfama fado lanes, Baixa grandeur and seven-hill miradouros — the city at your feet.",
    href: "/guides/historic-lisbon-guide",
    cta: "Explore Lisbon",
    imageKey: "historic",
  },
  {
    slug: "food-wine",
    title: "Food & Wine",
    description: "Petiscos, pastéis de nata, ginjinha and Moscatel — taste Portugal on a port day.",
    href: "/guides/best-food-in-lisbon",
    cta: "Taste Portugal",
    imageKey: "food",
  },
  {
    slug: "culture-heritage",
    title: "Culture & Heritage",
    description: "Belém monuments, azulejos and centuries of discovery — Portugal's story in stone and tile.",
    href: "/guides/belem-guide",
    cta: "Discover heritage",
    imageKey: "belem",
  },
  {
    slug: "private-portugal",
    title: "Private Portugal",
    description: "Your guide, your pace — exclusive routing through Lisbon, Sintra and beyond.",
    href: "/shore-excursions/private-spirit-of-lisbon",
    cta: "Private tours",
    imageKey: "private",
  },
  {
    slug: "signature-portugal",
    title: "Signature Experience",
    description: "Ultimate Portugal Discovery — our flagship small-group day, maximum 8 guests. In preparation.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Signature Experience",
    imageKey: "hero-home",
  },
  {
    slug: "wow-collection",
    title: "The Wow Collection",
    description: "Exclusive small-group excursions designed from scratch with local experts. In preparation.",
    href: "/wow-collection",
    cta: "The Wow Collection",
    imageKey: "photography",
  },
];

export const coreSections: HomeSection[] = [
  {
    slug: "compare",
    number: "01",
    title: "Compare Portugal",
    description: "Sintra or Lisbon? Belém or Alfama? Private vs coach — honest editorial comparisons.",
    href: "/compare",
    cta: "Compare options",
  },
  {
    slug: "shore-excursions",
    number: "02",
    title: "Shore Excursions",
    description: "Sintra, Lisbon, food tours and coast — cruise-timed from Lisbon terminals.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "cruise-planner",
    number: "03",
    title: "Portugal Cruise Planner",
    description: "Answer a few questions — get a tailored itinerary with return-to-ship confidence.",
    href: "/cruise-planner",
    cta: "Start planning",
  },
  {
    slug: "cruise-port-guide",
    number: "04",
    title: "Lisbon Cruise Port Guide",
    description: "Terminal layout, metro access, tram routes and coach pickup on arrival.",
    href: "/cruise-port-guide",
    cta: "Port guide",
  },
  {
    slug: "ship-schedules",
    number: "05",
    title: "Cruise Ship Schedules",
    description: "See which ships call at Lisbon and plan around published arrival and departure times.",
    href: "/ship-schedules/lisbon",
    cta: "View schedules",
  },
  {
    slug: "guides",
    number: "06",
    title: "Portugal Planning Guides",
    description: "Authority guides for Sintra, Lisbon, food and every type of passenger.",
    href: "/guides",
    cta: "Read guides",
  },
  {
    slug: "wow-collection",
    number: "07",
    title: "The Wow Collection",
    description: "Exclusive small-group excursions — a brand within your brand. In preparation.",
    href: "/wow-collection",
    cta: "Explore Wow",
  },
  {
    slug: "faq",
    number: "08",
    title: "FAQ",
    description: "Lisbon cruise port questions answered — timing, transport, excursions and return buffers.",
    href: "/faq",
    cta: "Read FAQs",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "How far is Sintra from Lisbon cruise port?",
      answer:
        "About 30 km — 30–40 minutes by coach or private transfer via the IC19. Allow a full day for Sintra and Cascais; half-day options exist for shorter calls.",
    },
    {
      question: "Can I explore Lisbon independently from the cruise terminal?",
      answer:
        "Yes — Lisbon is one of Europe's best ports for DIY. Santa Apolónia and Jardim do Tabaco are close to Baixa and Alfama. Metro, trams and walking routes reach Belém and central neighbourhoods.",
    },
    {
      question: "Sintra or Lisbon — which should I choose?",
      answer:
        "Sintra for fairytale palaces and Atlantic coast on a first Portugal visit. Lisbon for city culture, monuments and walkable neighbourhoods. See our honest comparison page.",
    },
    {
      question: "Where do cruise ships dock in Lisbon?",
      answer:
        "At Santa Apolónia, Jardim do Tabaco or Alcântara depending on ship size. All terminals have taxi ranks and excursion pickup points at the exit.",
    },
    {
      question: "Is Belém worth visiting on a port day?",
      answer:
        "Yes — Jerónimos Monastery, Belém Tower and Pastéis de Belém are essential. Tram 15E from Baixa takes ~20 minutes; Alcântara terminal is closest.",
    },
  ];
}
