import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "sintra-from-lisbon-cruise-port",
    title: "Sintra from Lisbon Cruise Port",
    seoTitle: "Sintra from Lisbon Cruise Port — Shore Excursion Guide",
    metaDescription:
      "How to reach Sintra from Lisbon cruise port — Pena Palace, transfer times, IC19 traffic and return-to-ship planning for cruise passengers.",
    attractionName: "Sintra from Lisbon",
    tagline: "Fairytale palaces above the clouds — Portugal's most magical day trip from your ship.",
    overview:
      "Sintra sits 30 km northwest of Lisbon — 30–40 minutes by road via the IC19 or ~40 minutes by train from Rossio station. Pena Palace, Quinta da Regaleira and the historic centre need 4–5 hours minimum.",
    body: [
      "Cruise ships dock at Santa Apolónia, Jardim do Tabaco or Alcântara — organised excursions collect at the terminal and handle IC19 timing. Independent travellers can take the train from Rossio to Sintra (~40 min) but palace queues and return discipline are harder solo.",
      "Morning arrivals beat midday coach crowds at Pena Palace. Sintra's microclimate is cooler and mistier than Lisbon — bring layers.",
      "Afternoon IC19 traffic returning to Lisbon can add 15–25 minutes in peak season — keep a 60–90 minute terminal buffer.",
    ],
    distanceFromPort: "About 30 km / 30–40 min by road from Lisbon terminals",
    travelTime: "30–40 minutes by coach; ~40 minutes by train from Rossio",
    timeNeeded: "Allow 4–5 hours in Sintra for Pena Palace and historic centre",
    gettingThere: [
      { method: "Shore excursion coach", detail: "Sintra & Cascais Full Day is the standard organised option.", time: "Full day", cost: "Tour price" },
      { method: "Train from Rossio", detail: "CP urban train to Sintra — walk or bus 434 to Pena Palace.", time: "~40 min", cost: "€2–5" },
      { method: "Private transfer", detail: "Direct via IC19 — flexible palace timing.", time: "30–40 min", cost: "€80–150" },
    ],
    highlights: [
      "Pena Palace colourful exterior and gardens",
      "Sintra historic centre pastel lanes",
      "Quinta da Regaleira Initiation Well",
      "Optional Cabo da Roca Atlantic viewpoint",
    ],
    tips: [
      "Book excursions before peak summer sailings",
      "Bus 434 queues at Pena in midday — morning departures help",
      "See Sintra or Lisbon comparison before choosing",
    ],
    faqs: [
      {
        question: "Sintra independently on a port day?",
        answer: "Feasible by train but palace timing and return buffers need discipline — organised tours handle sequencing.",
      },
      {
        question: "Half day enough?",
        answer: "Yes for Pena exterior and historic centre — see Sintra Half Day tour.",
      },
    ],
    relatedAttractionSlugs: ["cascais-from-lisbon", "cabo-da-roca"],
    relatedExcursionSlug: "sintra-cascais-full-day",
  },
  {
    slug: "belem-guide",
    title: "Belém Guide for Cruise Passengers",
    seoTitle: "Belém Lisbon — Shore Excursion Guide for Cruise Passengers",
    metaDescription:
      "Belém Tower, Jerónimos Monastery, Pastéis de Belém and Monument to the Discoveries — complete guide for Lisbon cruise passengers.",
    attractionName: "Belém",
    tagline: "Riverside monuments, maritime glory and the world's best custard tart.",
    overview:
      "Belém is Lisbon's Age of Discovery quarter — UNESCO monuments, riverside promenades and Pastéis de Belém bakery. From Alcântara terminal it is 10–15 minutes on foot; from central terminals take tram 15E (~20 min).",
    body: [
      "Jerónimos Monastery and Belém Tower are the headline sights — exterior tours need 1–2 hours; interior visits add timed entry. Monument to the Discoveries and MAAT museum exterior suit photography lovers.",
      "Pastéis de Belém — the original pastel de nata since 1837 — queues 15–30 minutes in peak season. Worth it once.",
      "Belém suits flat walking and limited mobility better than Alfama's hills.",
    ],
    distanceFromPort: "10–15 min from Alcântara; 20 min by tram 15E from Baixa",
    travelTime: "10–20 minutes depending on terminal",
    timeNeeded: "Allow 2–3 hours for monuments and bakery",
    gettingThere: [
      { method: "Tram 15E from Praça do Comércio", detail: "Scenic riverside tram — frequent service.", time: "~20 min", cost: "€3 (Viva Viagem)" },
      { method: "Walk from Alcântara terminal", detail: "Riverside path via Docas de Santo Amaro.", time: "10–15 min", cost: "Free" },
      { method: "Shore excursion", detail: "Lisbon Highlights includes Belém afternoon.", time: "Full day", cost: "Tour price" },
    ],
    highlights: [
      "Jerónimos Monastery UNESCO site",
      "Belém Tower on the Tagus",
      "Monument to the Discoveries",
      "Pastéis de Belém original bakery",
    ],
    tips: [
      "Tram 15E can be crowded — morning visits beat cruise-ship afternoon peaks",
      "Monastery interior needs timed tickets in peak season",
      "See Belém or Alfama comparison for neighbourhood choice",
    ],
    faqs: [
      {
        question: "Belém alone enough for a port day?",
        answer: "Yes on shorter calls from Alcântara — combine with LX Factory or riverside walk.",
      },
      {
        question: "Tower interior worth it?",
        answer: "Small interior — exterior photos satisfy most passengers. Jerónimos interior is the priority.",
      },
    ],
    relatedAttractionSlugs: ["historic-lisbon-guide", "cascais-from-lisbon"],
    relatedExcursionSlug: "lisbon-highlights",
  },
  {
    slug: "historic-lisbon-guide",
    title: "Historic Lisbon Guide",
    seoTitle: "Historic Lisbon — Alfama, Baixa & Chiado for Cruise Passengers",
    metaDescription:
      "Alfama fado quarter, Baixa Pombaline squares and Chiado literary district — historic Lisbon guide for cruise passengers.",
    attractionName: "Historic Lisbon",
    tagline: "Seven hills of stories — from Roman walls to earthquake rebirth.",
    overview:
      "Historic Lisbon spans Alfama (medieval), Baixa (18th-century grid) and Chiado (literary quarter). From Santa Apolónia and Jardim do Tabaco terminals, Alfama is 10–20 minutes on foot or by taxi.",
    body: [
      "Alfama: narrow lanes, Sé Cathedral, Fado Museum exterior, miradouros (Senhora do Monte, Portas do Sol). Steep cobbles — wear grippy shoes.",
      "Baixa: Praça do Comércio, Rossio, Elevador de Santa Justa, Rua Augusta arch. Flat and grand — earthquake reconstruction showcase.",
      "Chiado: Livraria Bertrand (world's oldest bookshop), Carmo Convent ruins, café culture. Connects Baixa to Bairro Alto nightlife district.",
    ],
    distanceFromPort: "Central terminals: Alfama 10–20 min walk; Baixa 5–15 min",
    travelTime: "Walking distance from Santa Apolónia and Jardim do Tabaco",
    timeNeeded: "Allow 4–5 hours for Alfama, Baixa and Chiado",
    gettingThere: [
      { method: "Walk from terminal", detail: "Santa Apolónia to Alfama via riverside or uphill lanes.", time: "10–20 min", cost: "Free" },
      { method: "Metro", detail: "Blue line to Baixa-Chiado from Santa Apolónia.", time: "5 min", cost: "€1.80" },
      { method: "Shore excursion", detail: "Lisbon Highlights or Discover Lisbon on Foot.", time: "Full day", cost: "Tour price" },
    ],
    highlights: [
      "Alfama miradouros and fado quarter",
      "Praça do Comércio waterfront",
      "Elevador de Santa Justa",
      "Carmo Convent ruins viewpoint",
    ],
    tips: [
      "Morning Alfama before tour groups arrive",
      "Miradouro da Senhora do Monte for best panoramic photos",
      "Tram 28 is iconic but crowded — walking often faster on port days",
    ],
    faqs: [
      {
        question: "Alfama and Belém same day?",
        answer: "Yes on 8+ hour calls — see One Day in Lisbon guide.",
      },
      {
        question: "São Jorge Castle worth entering?",
        answer: "Viewpoints around the castle walls satisfy most — interior adds 1 hour.",
      },
    ],
    relatedAttractionSlugs: ["belem-guide", "sintra-from-lisbon-cruise-port"],
    relatedExcursionSlug: "discover-lisbon-on-foot",
  },
  {
    slug: "cascais-from-lisbon",
    title: "Cascais from Lisbon Cruise Port",
    seoTitle: "Cascais from Lisbon — Coastal Shore Excursion Guide",
    metaDescription:
      "How to visit Cascais from Lisbon cruise port — harbour promenade, beaches, Boca do Inferno and return-to-ship planning.",
    attractionName: "Cascais",
    tagline: "Harbour glamour, Atlantic breezes and the coast where Lisbon comes to play.",
    overview:
      "Cascais is 35 km west of Lisbon — 35–45 minutes by road along the Marginal coast road or ~40 minutes by train from Cais do Sodré. A relaxed coastal town with harbour promenade, beaches and cliff viewpoints.",
    body: [
      "Most passengers visit Cascais as part of Sintra & Cascais Full Day — Sintra palaces in the morning, Cascais promenade in the afternoon. Standalone Cascais suits passengers who prefer coast over palaces.",
      "Boca do Inferno cliff arch, Cascais harbour and Citadel museum district are the main stops. Flat promenade walking suits families.",
      "Train from Cais do Sodré is scenic along the coast — feasible DIY on longer port days.",
    ],
    distanceFromPort: "About 35 km / 35–45 min by road from Lisbon terminals",
    travelTime: "35–45 minutes by coach; ~40 min by train from Cais do Sodré",
    timeNeeded: "Allow 2–3 hours for harbour, promenade and Boca do Inferno",
    gettingThere: [
      { method: "Shore excursion", detail: "Sintra & Cascais Full Day includes Cascais afternoon.", time: "Full day", cost: "Tour price" },
      { method: "Train from Cais do Sodré", detail: "CP Cascais line — frequent coastal service.", time: "~40 min", cost: "€2–3" },
      { method: "Coastal road transfer", detail: "Marginal scenic drive from Belém area.", time: "35–45 min", cost: "€60–100 taxi" },
    ],
    highlights: [
      "Cascais harbour and marina",
      "Boca do Inferno cliff viewpoint",
      "Citadel district and museums",
      "Coastal promenade and beaches",
    ],
    tips: [
      "Combine with Sintra on first visit — Cascais alone is rarely a full day",
      "Seafood lunch at harbour restaurants",
      "See Sintra or Cascais comparison",
    ],
    faqs: [
      {
        question: "Cascais vs Estoril?",
        answer: "Cascais has more character — Estoril is the casino resort next door, often passed en route.",
      },
      {
        question: "Beach time on a port day?",
        answer: "Possible on extended calls — most excursions allow promenade time only.",
      },
    ],
    relatedAttractionSlugs: ["cabo-da-roca", "sintra-from-lisbon-cruise-port"],
    relatedExcursionSlug: "sintra-cascais-full-day",
  },
  {
    slug: "cabo-da-roca",
    title: "Cabo da Roca Guide",
    seoTitle: "Cabo da Roca — Europe's Westernmost Point from Lisbon",
    metaDescription:
      "Cabo da Roca cliff viewpoint — Europe's westernmost mainland point — guide for Lisbon cruise passengers visiting Sintra and the coast.",
    attractionName: "Cabo da Roca",
    tagline: "Where the land ends and the Atlantic begins — dramatic cliffs and endless horizon.",
    overview:
      "Cabo da Roca is Europe's westernmost mainland point — 40 km from Lisbon, often included on Sintra and Cascais excursions between the palace hills and coastal towns. The cliff viewpoint needs 30–45 minutes.",
    body: [
      "The lighthouse and cliff edge offer spectacular Atlantic panoramas — windy, exposed and unforgettable for photography. The stone marker quoting Luís de Camões is the classic photo stop.",
      "Most organised tours pause 20–30 minutes — enough for photos and the visitor centre. Scenic Sintra Hiking may include coastal trail sections nearby.",
      "Independent access by bus 403 from Sintra or Cascais — feasible but adds complexity on port days.",
    ],
    distanceFromPort: "About 40 km / 45–55 min by road from Lisbon terminals",
    travelTime: "15–20 min from Sintra; 10 min from Cascais",
    timeNeeded: "Allow 30–45 minutes at the viewpoint",
    gettingThere: [
      { method: "Shore excursion stop", detail: "Sintra & Cascais Full Day often includes Cabo da Roca.", time: "En route", cost: "Included in tour" },
      { method: "Bus 403 from Sintra", detail: "Scotturb bus — check return timetables carefully.", time: "20 min", cost: "€3–4" },
      { method: "Private transfer", detail: "Flexible photo stops.", time: "Varies", cost: "€40–80 from Sintra" },
    ],
    highlights: [
      "Europe's westernmost mainland cliff",
      "Lighthouse and Camões monument",
      "Atlantic panorama photography",
      "Sintra-Cascais Natural Park coastline",
    ],
    tips: [
      "Windproof layer essential — exposed clifftop",
      "Hold hats and loose items in strong wind",
      "Best light late afternoon — tour timing varies",
    ],
    faqs: [
      {
        question: "Worth a dedicated visit?",
        answer: "As part of Sintra/coast day — yes. Not as a standalone from Lisbon on standard calls.",
      },
      {
        question: "Accessible for limited mobility?",
        answer: "Viewpoint area is relatively flat — path to cliff edge is short and paved.",
      },
    ],
    relatedAttractionSlugs: ["cascais-from-lisbon", "sintra-from-lisbon-cruise-port"],
    relatedExcursionSlug: "scenic-sintra-hiking",
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}
