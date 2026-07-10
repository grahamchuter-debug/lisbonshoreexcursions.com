import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Lisbon Cruise Port Guide",
  subtitle: "Cruise terminals, metro and tram access, transfers to Sintra and Cascais, and return-to-ship timing.",
  terminals: [
    {
      name: "Santa Apolónia Cruise Terminal",
      quay: "Central riverside terminal near Alfama and the historic waterfront",
      usedBy: "Many medium and large ships — MSC, Costa, Celebrity and others on Atlantic and Mediterranean itineraries",
      cityAccess:
        "10–15 min walk to Alfama; metro (blue line) to Baixa-Chiado; taxi to Belém ~15 min; Sintra 30–40 min by road",
    },
    {
      name: "Jardim do Tabaco Cruise Terminal",
      quay: "Baixa waterfront terminal closest to Praça do Comércio",
      usedBy: "Large ships when Santa Apolónia berths are full — central location ideal for city exploration",
      cityAccess:
        "5–10 min walk to Praça do Comércio and Baixa; tram 15E to Belém; metro at Terreiro do Paço; Sintra 30–40 min by road",
    },
    {
      name: "Alcântara Cruise Terminal",
      quay: "Western terminal near Belém, Docas and LX Factory",
      usedBy: "Large and mega-ships — west-of-centre location suits Belém-first itineraries",
      cityAccess:
        "10–15 min walk or tram to Belém monuments; 25–35 min to Alfama by tram/metro; Sintra 35–45 min via Marginal coast road",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Lisbon",
      paragraphs: [
        "Cruise ships dock at one of three Lisbon terminals depending on vessel size and itinerary: Santa Apolónia (central, near Alfama), Jardim do Tabaco (Baixa waterfront) or Alcântara (west, near Belém).",
        "Lisbon is Portugal's cruise gateway — Sintra's fairytale palaces are 30–40 minutes by road, Cascais 35–45 minutes along the coast, and central Alfama and Baixa are walking distance or a short metro ride from Santa Apolónia and Jardim do Tabaco.",
        "Lisbon appears on Atlantic crossings, Western Mediterranean, Iberian Peninsula and repositioning itineraries from March through November, with heaviest traffic April to October.",
      ],
    },
    {
      heading: "Getting from Lisbon terminals to Sintra, Cascais and the city",
      paragraphs: [
        "Sintra is 30–40 minutes by coach or private transfer via the IC19 — the standard option for palace shore excursions. Train from Rossio (~40 min) is feasible DIY but palace queues need planning.",
        "Cascais is 35–45 minutes along the scenic Marginal coast road, or ~40 minutes by train from Cais do Sodré. Often combined with Sintra on full-day excursions.",
        "Central Lisbon — Alfama, Baixa, Chiado — is 10–20 minutes on foot or by metro from Santa Apolónia and Jardim do Tabaco. Belém is 10–15 minutes from Alcântara or ~20 minutes by tram 15E from Baixa.",
        "Fatima, Batalha and Obidos are 90–120 minutes north — full-day heritage excursions requiring 10+ usable hours ashore.",
      ],
    },
    {
      heading: "Facilities and practicalities",
      paragraphs: [
        "All terminals offer toilets, seating and tourist information desks. Nearby metro stations (Santa Apolónia, Terreiro do Paço) have ticket machines for Viva Viagem rechargeable cards.",
        "Currency is the euro. Portuguese is the local language; English is widely spoken on excursions and in tourist areas. Download offline maps — terminal Wi-Fi is unreliable.",
        "Lisbon is generally safe. Watch belongings on crowded trams and metro during cruise season. Pickpockets target Praça do Comércio and tram 28.",
      ],
    },
    {
      heading: "Return-to-ship timing",
      paragraphs: [
        "Confirm all-aboard time — usually 30–60 minutes before departure. Keep a 60–90 minute buffer beyond expected travel time, especially returning from Sintra on the IC19.",
        "Afternoon traffic on the IC19 to Sintra and the Marginal coast road can add 15–25 minutes in peak season. Metro and tram services are reliable but afternoon queues at popular stops can delay returns.",
        "Independent travellers should plan return journeys with margin — the ship will not wait if you miss all-aboard on non-ship excursions.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "How far is Sintra from Lisbon cruise port?",
      answer:
        "About 30 km — 30–40 minutes by coach via the IC19. Allow a full day for Sintra and Cascais.",
    },
    {
      question: "Can I walk to Alfama from the cruise terminal?",
      answer:
        "Yes from Santa Apolónia — 10–15 minutes uphill. Jardim do Tabaco to Baixa is 5–10 minutes flat walk.",
    },
    {
      question: "Which terminal is best for Belém?",
      answer: "Alcântara — Belém Tower and Jerónimos Monastery are 10–15 minutes on foot or by tram.",
    },
    {
      question: "How much time to return from Sintra?",
      answer:
        "Allow 30–40 minutes road transfer plus 60–90 minutes before all-aboard. IC19 afternoon traffic can add 15–25 minutes.",
    },
    {
      question: "Is Lisbon worth exploring near the terminal?",
      answer:
        "Yes — Alfama, Baixa and the riverside promenade suit half-day independent exploration from central terminals.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
