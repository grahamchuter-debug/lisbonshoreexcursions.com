import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Lisbon?",
    answer:
      "At Santa Apolónia, Jardim do Tabaco or Alcântara depending on ship size and itinerary. Coaches and taxis meet passengers at the terminal exit.",
  },
  {
    question: "How long does it take to reach Sintra from Lisbon?",
    answer:
      "30–40 minutes by coach or private transfer via the IC19. Allow a full day for Sintra and Cascais; half-day options exist for shorter calls.",
  },
  {
    question: "Can I visit Sintra without a shore excursion?",
    answer:
      "Yes — train from Rossio station to Sintra (~40 min), then bus 434 to Pena Palace. Organised tours handle palace queues and return timing more reliably on port days.",
  },
  {
    question: "What is the best Portugal excursion for first-time visitors?",
    answer:
      "Sintra & Cascais Full Day on 8+ hour calls — Pena Palace and Atlantic coast. Lisbon Highlights if you prefer city culture.",
  },
  {
    question: "Should I book excursions through my cruise line?",
    answer:
      "Ship tours guarantee the vessel waits if their excursion is late. Reputable independent operators track all-aboard with buffers — often smaller groups and lower prices.",
  },
  {
    question: "Is a Lisbon port day long enough for Sintra and Lisbon city?",
    answer:
      "Only on 10+ hour calls via organised combo excursions. On standard 8–9 hour calls, choose one destination.",
  },
  {
    question: "How early should I return to Lisbon from Sintra?",
    answer:
      "Coaches typically leave Sintra by 15:00–16:00. Independent travellers should be at terminal 60–90 minutes before all-aboard. IC19 afternoon traffic can add 15–25 minutes.",
  },
  {
    question: "What currency is used in Portugal?",
    answer:
      "The euro. Cards work widely in Lisbon; carry cash for small tascas, market stalls and some taxis.",
  },
  {
    question: "Are Lisbon shore excursions suitable for limited mobility?",
    answer:
      "Belém and Baixa are relatively flat. Alfama hills and Sintra palace paths can be challenging — private tours with vehicle support work better than large coach groups.",
  },
  {
    question: "When is peak cruise season in Lisbon?",
    answer:
      "April through October, with heaviest ship traffic May to September. Book Sintra and Lisbon excursions before sailing in July and August.",
  },
  {
    question: "Is Cabo da Roca worth visiting?",
    answer:
      "Yes as part of a Sintra or Cascais day — Europe's westernmost mainland point with dramatic Atlantic cliffs. Not worth a standalone trip on standard port calls.",
  },
  {
    question: "Sintra or Lisbon from the cruise port?",
    answer:
      "Sintra for fairytale palaces and coast on a first Portugal visit. Lisbon for city culture, monuments and walkable neighbourhoods. See our comparison guide.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
