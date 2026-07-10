import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-portugal-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signaturePortugalExperience = {
  slug: "signature-portugal-experience",
  title: "Ultimate Portugal Discovery",
  seoTitle: "Ultimate Portugal Discovery — Signature Experience in Preparation",
  metaDescription:
    "A future flagship Signature Experience for Lisbon cruise passengers — curated small-group Portugal day with local experts. Currently in preparation; register interest to be notified.",
  tagline:
    "The curated Portugal day we would genuinely recommend to a first-time cruise passenger — designed with local experts, maximum 8 guests, timed for your ship.",
  overview:
    "Ultimate Portugal Discovery is planned as our flagship product — a small-group day (maximum eight guests) designed from scratch with local experts once demand justifies launch. This page prepares the website for that experience; it is not currently bookable.",
  comingSoon: true,
  benefits: [
    { emoji: "👥", title: "Maximum 8 guests", description: "Small-group pacing through Sintra, Cascais and Belém without coach-tour inertia." },
    { emoji: "🚐", title: "Luxury Mercedes vehicle", description: "Comfortable private transport with room for photography gear and flexible stops." },
    { emoji: "🏰", title: "Sintra palaces & gardens", description: "Pena Palace viewpoints, historic centre stroll and fairytale scenery sequenced with expert timing." },
    { emoji: "🌊", title: "Cascais & Atlantic viewpoints", description: "Coastal promenades and dramatic headlands including Cabo da Roca when your port window allows." },
    { emoji: "⛪", title: "Belém monuments", description: "Jerónimos Monastery exterior, Belém Tower and the riverside heritage quarter." },
    { emoji: "🥧", title: "Pastéis de Belém", description: "The original custard tart — timed so you taste them warm, not rushed between coach stops." },
    { emoji: "📸", title: "Photography stops", description: "Miradouros and coastal viewpoints built into the route, not squeezed in at the end." },
    { emoji: "⏰", title: "Flexible pace", description: "Adapted to your ship's hours — linger where it matters, move on where it does not." },
    { emoji: "🤝", title: "Local expert guide", description: "Built with guides who understand Lisbon terminal logistics and return-to-ship reality." },
    { emoji: "🚢", title: "Return-to-ship planning", description: "Every departure planned backward from your all-aboard time with explicit traffic buffers." },
    { emoji: "💬", title: "WhatsApp support", description: "Direct contact on port day for timing updates, meeting points and peace of mind." },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "When will Ultimate Portugal Discovery launch?",
      answer: "We are finalising partnerships with local experts. Register your interest via our enquire page to be notified at launch.",
    },
    {
      question: "How is this different from standard shore excursions?",
      answer: "Signature Experiences are curated through trusted local partners — designed from scratch for cruise passengers, not repurposed land tours. Maximum 8 guests, explicit return buffers, and editorial endorsement.",
    },
    {
      question: "Will this replace other recommendations on the site?",
      answer: "No — we will always offer honest comparisons and alternatives. Ultimate Portugal Discovery becomes our flagship recommendation for passengers who want the very best small-group experience.",
    },
    {
      question: "Can I book this through my cruise line?",
      answer: "Not yet — this experience is in preparation. When launched, it will be available through our partner network. Until then, see our Editor's Choice excursions for bookable alternatives.",
    },
  ] satisfies FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "editors-choice" as const,
    title: "Ultimate Portugal Discovery",
    description: "Our flagship Signature Experience — curated Portugal, maximum 8 guests. In preparation.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}
