import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's Choice",
    description: "Our top pick after comparing options for Lisbon cruise passengers.",
  },
  {
    id: "best-historic",
    label: "Best Historic Experience",
    shortLabel: "Historic",
    description: "Alfama, Belém and Lisbon's seven-hill heritage without rushing your port day.",
  },
  {
    id: "best-independent",
    label: "Best Independent Experience",
    shortLabel: "Independent",
    description: "The smartest DIY approach — metro, trams and trains from Lisbon cruise terminals.",
  },
  {
    id: "best-coastal",
    label: "Best Coastal Experience",
    shortLabel: "Coastal",
    description: "Cascais promenade, Cabo da Roca cliffs and Atlantic glamour timed to your ship.",
  },
  {
    id: "best-view",
    label: "Best Viewpoints",
    shortLabel: "Viewpoints",
    description: "Miradouros, Pena Palace panoramas and Cabo da Roca Atlantic horizons.",
  },
  {
    id: "best-got",
    label: "Signature Experience",
    shortLabel: "Signature",
    description: "Our flagship Ultimate Portugal Discovery — curated small-group Portugal.",
  },
  {
    id: "best-families",
    label: "Best for Families",
    shortLabel: "Families",
    description: "Paced routing, easier terrain and reliable return timing for children.",
  },
  {
    id: "best-photography",
    label: "Best Photography",
    shortLabel: "Photography",
    description: "Sintra palaces, Alfama miradouros and Atlantic cliff viewpoints.",
  },
  {
    id: "best-food",
    label: "Best Food & Wine",
    shortLabel: "Food & Wine",
    description: "Petiscos, pastéis de nata and Portuguese wine that fit a cruise schedule.",
  },
  {
    id: "best-luxury",
    label: "Luxury Choice",
    shortLabel: "Luxury",
    description: "Private vehicles, exclusive small groups and premium Sintra routing.",
  },
  {
    id: "hidden-gem",
    label: "Hidden Gem",
    shortLabel: "Hidden Gem",
    description: "Arrabida wine country and experiences away from the main coach convoys.",
  },
  {
    id: "best-value",
    label: "Best Value",
    shortLabel: "Best Value",
    description: "Strong sightseeing per euro when budget matters as much as timing.",
  },
  {
    id: "best-short-port",
    label: "Best Short Port Call",
    shortLabel: "Short Port",
    description: "Realistic when your ship is in Lisbon for under eight usable hours.",
  },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Sintra & Cascais Full Day — our top pick for first-time visitors who want the definitive Portugal experience.",
    href: "/shore-excursions/sintra-cascais-full-day",
    cta: "View pick",
  },
  {
    id: "first-time",
    emoji: "⭐",
    label: "Best First-Time Portugal Tour",
    description: "Sintra & Cascais Full Day or Full Day Sintra Deluxe — fairytale palaces and coast for your first Portugal stop.",
    href: "/compare/best-portugal-tour-first-time",
    cta: "First-timer guide",
  },
  {
    id: "coastal",
    emoji: "⭐",
    label: "Best Coastal Experience",
    description: "Sintra & Cascais Full Day — palaces in the morning, Cascais harbour and Atlantic promenade in the afternoon.",
    href: "/shore-excursions/sintra-cascais-full-day",
    cta: "Coastal guide",
  },
  {
    id: "food-wine",
    emoji: "⭐",
    label: "Best Food & Wine",
    description: "Secret Food Tour in Lisbon — petiscos, ginjinha and neighbourhood tascas as your port-day anchor.",
    href: "/shore-excursions/secret-food-tour-lisbon",
    cta: "Food & wine guide",
  },
  {
    id: "private",
    emoji: "⭐",
    label: "Best Private Tour",
    description: "Private Spirit of Lisbon — flexible routing, exclusive pacing and a dedicated guide for your party.",
    href: "/shore-excursions/private-spirit-of-lisbon",
    cta: "Private tour",
  },
  {
    id: "photography",
    emoji: "⭐",
    label: "Best Photography",
    description: "Scenic Sintra Hiking — forest trails, palace viewpoints and Atlantic vistas for active photographers.",
    href: "/shore-excursions/scenic-sintra-hiking",
    cta: "Photography guide",
  },
  {
    id: "families",
    emoji: "⭐",
    label: "Best Family Tour",
    description: "Classic Lisbon Half Day or Lisbon Highlights — paced routing and easier terrain for mixed-age families.",
    href: "/shore-excursions/classic-lisbon-half-day",
    cta: "Family guide",
  },
  {
    id: "independent",
    emoji: "⭐",
    label: "Best Independent Day",
    description: "Independent Lisbon Guide — metro, trams, Belém and Alfama with return-to-ship planning.",
    href: "/guides/independent-lisbon-guide",
    cta: "Independent guide",
  },
  {
    id: "signature-experience",
    emoji: "⭐",
    label: "Signature Experience",
    description: "Ultimate Portugal Discovery — our flagship small-group day, designed with local experts.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Learn more",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
