import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "sintra-or-lisbon",
    title: "Sintra or Lisbon?",
    seoTitle: "Sintra vs Lisbon — Lisbon Cruise Passengers",
    metaDescription:
      "Sintra delivers fairytale palaces and misty hills 30 km from Lisbon. The city offers Alfama, Belém and seven-hill culture — which suits your port day?",
    kind: "versus",
    optionA: "Sintra",
    optionB: "Lisbon",
    summary:
      "Sintra delivers fairytale palaces, lush hills and optional Atlantic coast — 30–40 minutes from the cruise terminal. Lisbon offers Alfama fado lanes, Baixa grandeur and Belém monuments within 10–20 minutes of most terminals.",
    verdict:
      "Choose Sintra for palaces, coastal glamour and photography on a first Portugal visit. Choose Lisbon for city culture, monuments and walkable neighbourhoods. You cannot do both properly on a standard 8-hour call.",
    overview: [
      "Sintra: 30–40 min by road, 4–5 hours needed for Pena Palace and historic centre, moderate walking on cobbled lanes.",
      "Lisbon: 10–20 min to Alfama/Baixa, 4–5 hours for city highlights and Belém, moderate hills.",
      "Combining both needs 10+ usable hours — see Lisbon, Sintra and Cascais combo only on extended calls.",
    ],
    comparisonTable: [
      { category: "Distance from terminal", optionA: "30–40 km / 30–40 min", optionB: "Central — 10–20 min" },
      { category: "Time on site", optionA: "4–5 hours minimum", optionB: "4–5 hours for highlights" },
      { category: "Best for", optionA: "Palaces, coast, first-time Portugal scenery", optionB: "City culture, monuments, walking" },
      { category: "Physical effort", optionA: "Moderate — palace paths and village steps", optionB: "Moderate — seven hills and cobbles" },
      { category: "Return confidence", optionA: "Good with 90-min buffer — IC19 traffic risk", optionB: "Very high — short transfer to terminal" },
    ],
    faqs: [
      {
        question: "Can I do both on one port day?",
        answer: "Not recommended on standard 8–9 hour calls — choose one anchor experience.",
      },
      {
        question: "Which is better for first-timers?",
        answer: "Sintra for fairytale Portugal; Lisbon for city immersion. Our Editor's Choice is Sintra & Cascais Full Day.",
      },
    ],
    relatedSlugs: ["sintra-from-lisbon-cruise-port", "historic-lisbon-guide", "sintra-cascais-full-day"],
    imageKey: "compare",
  },
  {
    slug: "sintra-or-cascais",
    title: "Sintra or Cascais?",
    seoTitle: "Sintra vs Cascais — Which Coast Day from Lisbon?",
    metaDescription:
      "Sintra offers palaces and misty hills; Cascais delivers Atlantic promenades and harbour glamour — honest comparison for Lisbon cruise passengers.",
    kind: "versus",
    optionA: "Sintra",
    optionB: "Cascais",
    summary:
      "Sintra is inland fairytale — Pena Palace, Regaleira and historic lanes. Cascais is Atlantic elegance — harbour promenade, cliff walks and beach culture. Most first-timers choose Sintra & Cascais Full Day to see both.",
    verdict:
      "Choose Sintra alone if palaces are your priority. Choose Cascais alone if you want a relaxed coastal day without hill transfers. On a first visit, the combined Sintra & Cascais Full Day is our Editor's Choice.",
    overview: [
      "Sintra: palaces, gardens, historic centre — unique in Europe.",
      "Cascais: coastal promenade, Boca do Inferno, beach atmosphere — easier terrain.",
      "Cabo da Roca sits between them — Europe's westernmost point, often included on combined tours.",
    ],
    comparisonTable: [
      { category: "Character", optionA: "Fairytale palaces and misty hills", optionB: "Atlantic resort town and harbour" },
      { category: "Walking difficulty", optionA: "Moderate — palace paths and village cobbles", optionB: "Easy — flat promenade and harbour" },
      { category: "Best for", optionA: "Photography, palaces, unique scenery", optionB: "Coastal relaxation, families, beach atmosphere" },
      { category: "Typical duration", optionA: "4–5 hours minimum", optionB: "2–3 hours sufficient" },
      { category: "Combined tour?", optionA: "Yes — Sintra & Cascais Full Day", optionB: "Yes — same tour" },
    ],
    faqs: [
      {
        question: "Can I visit both independently?",
        answer: "Possible by train (Sintra line + Cascais line) but timing is tight on port days — organised tours handle sequencing.",
      },
      {
        question: "Cascais alone worth a full day?",
        answer: "Rarely — most passengers combine with Sintra or spend half a day and return to Lisbon.",
      },
    ],
    relatedSlugs: ["cascais-from-lisbon", "cabo-da-roca", "sintra-cascais-full-day"],
    imageKey: "cascais",
  },
  {
    slug: "can-you-explore-lisbon-independently",
    title: "Can You Explore Lisbon Independently?",
    seoTitle: "Independent Lisbon from Cruise Port — Is DIY Realistic?",
    metaDescription:
      "Honest guide to exploring Lisbon independently from the cruise terminal — metro, trams, timing and when DIY beats organised tours.",
    kind: "guide",
    summary:
      "Lisbon is one of Europe's best cruise ports for independent exploration — terminals are close to Baixa and Alfama, metro and trams are reliable, and return buffers are manageable. Sintra and Fatima are harder DIY; central Lisbon suits confident cruisers.",
    verdict:
      "Yes for central Lisbon, Belém and even Sintra by train on longer calls. Book organised tours for Fatima combos, Arrabida wine country or when you want explicit return-to-ship guarantees.",
    overview: [
      "Central Lisbon: metro, tram 15E to Belém, walking to Alfama — 10–20 min from most terminals.",
      "Sintra: train from Rossio (~40 min) — feasible DIY but palace queues and return timing need discipline.",
      "Ship excursions guarantee vessel wait; reputable independents track all-aboard with buffers.",
    ],
    guideItems: [
      {
        name: "Independent Lisbon Guide",
        slug: "independent-lisbon-guide",
        href: "/guides/independent-lisbon-guide",
        reason: "Comprehensive DIY guide — terminal, metro, trams, Belém, Alfama and return planning.",
        topExcursion: "N/A — independent travel",
        returnConfidence: "High for central Lisbon with 90-min buffer",
        walkingDifficulty: "Moderate — hills and cobbles",
      },
      {
        name: "Discover Lisbon on Foot",
        slug: "discover-lisbon-on-foot",
        href: "/shore-excursions/discover-lisbon-on-foot",
        reason: "Guided walking alternative when you want immersion without navigating alone.",
        topExcursion: "Discover Lisbon on Foot",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Classic Lisbon Half Day",
        slug: "classic-lisbon-half-day",
        href: "/shore-excursions/classic-lisbon-half-day",
        reason: "Organised city introduction — ideal if DIY feels risky on a first visit.",
        topExcursion: "Classic Lisbon Half Day Tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
    ],
    faqs: [
      {
        question: "Which terminal is best for DIY?",
        answer: "Santa Apolónia and Jardim do Tabaco are closest to Baixa and Alfama. Alcântara is ideal for Belém-first days.",
      },
      {
        question: "Viva Viagem card worth it?",
        answer: "Yes for a full port day — covers metro, bus and tram within a 24-hour window.",
      },
    ],
    relatedSlugs: ["independent-lisbon-guide", "lisbon-cruise-port-guide", "belem-or-alfama"],
    imageKey: "tram",
  },
  {
    slug: "belem-or-alfama",
    title: "Belém or Alfama?",
    seoTitle: "Belém vs Alfama — Which Lisbon Neighbourhood on a Port Day?",
    metaDescription:
      "Belém offers riverside monuments and pastéis de nata; Alfama delivers fado lanes and miradouros — which suits your Lisbon port day?",
    kind: "versus",
    optionA: "Belém",
    optionB: "Alfama",
    summary:
      "Belém is riverside grandeur — Jerónimos Monastery, Belém Tower, Monument to the Discoveries and Pastéis de Belém. Alfama is medieval intimacy — fado quarter lanes, Sé Cathedral, miradouros and azulejo façades.",
    verdict:
      "Choose Belém for monuments, maritime history and the original custard tart. Choose Alfama for atmosphere, viewpoints and old Lisbon character. Lisbon Highlights covers both; on a half-day pick the one that matches your mood.",
    overview: [
      "Belém: tram 15E from Baixa (~20 min), flat riverside walking, 2–3 hours for monuments.",
      "Alfama: walk or short taxi from central terminals, steep lanes, 2–3 hours for lanes and miradouros.",
      "Combining both needs 5–6 hours — feasible on 8+ hour calls.",
    ],
    comparisonTable: [
      { category: "Character", optionA: "Riverside monuments and Age of Discovery", optionB: "Medieval lanes, fado and miradouros" },
      { category: "Terrain", optionA: "Flat riverside paths", optionB: "Steep hills and cobbles" },
      { category: "Iconic food", optionA: "Pastéis de Belém (original)", optionB: "Tascas and miradouro cafés" },
      { category: "Best for", optionA: "History, monuments, photography", optionB: "Atmosphere, walking, local culture" },
      { category: "From Alcântara terminal", optionA: "10–15 min walk or tram", optionB: "25–35 min by tram/metro" },
    ],
    faqs: [
      {
        question: "Pastéis de Belém worth the queue?",
        answer: "Yes — the original bakery since 1837. Go early or accept a 15–30 minute queue in peak season.",
      },
      {
        question: "Alfama accessible for limited mobility?",
        answer: "Challenging — steep lanes and uneven cobbles. Belém is flatter and more suitable.",
      },
    ],
    relatedSlugs: ["belem-guide", "historic-lisbon-guide", "lisbon-highlights"],
    imageKey: "belem",
  },
  {
    slug: "best-lisbon-shore-excursion",
    title: "Best Lisbon Shore Excursion",
    seoTitle: "Best Lisbon Shore Excursions — First-Timer Guide",
    metaDescription:
      "Ranked Lisbon shore excursions for first-time cruise passengers — Sintra, city highlights, food tours and private options.",
    kind: "guide",
    summary:
      "First-timers need one clear anchor, reliable timing and an operator who understands Lisbon terminal logistics — these excursions deliver consistently.",
    verdict:
      "Sintra & Cascais Full Day is our Editor's Choice for first-time Portugal. Lisbon Highlights for city lovers. Secret Food Tour for gastronomy anchors. Private Spirit of Lisbon for exclusive pacing.",
    overview: [
      "Editor's Choice: Sintra & Cascais Full Day — palaces, coast and return timing.",
      "City pick: Lisbon Highlights — Alfama, Baixa and Belém.",
      "Food pick: Secret Food Tour in Lisbon — petiscos and neighbourhood tastings.",
      "Ultimate Portugal Discovery will become our flagship recommendation at launch.",
    ],
    guideItems: [
      {
        name: "Sintra & Cascais Full Day",
        slug: "sintra-cascais-full-day",
        href: "/shore-excursions/sintra-cascais-full-day",
        reason: "Editor's Choice — fairytale palaces and Atlantic coast in one sequenced day.",
        topExcursion: "Sintra & Cascais (Full Day)",
        returnConfidence: "High on 8+ hour calls",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Lisbon Highlights",
        slug: "lisbon-highlights",
        href: "/shore-excursions/lisbon-highlights",
        reason: "Definitive city day — Alfama, Baixa and Belém monuments.",
        topExcursion: "Lisbon Highlights",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Secret Food Tour in Lisbon",
        slug: "secret-food-tour-lisbon",
        href: "/shore-excursions/secret-food-tour-lisbon",
        reason: "Best food anchor — petiscos, ginjinha and local tascas.",
        topExcursion: "Secret Food Tour in Lisbon",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "Private Spirit of Lisbon",
        slug: "private-spirit-of-lisbon",
        href: "/shore-excursions/private-spirit-of-lisbon",
        reason: "Best private option — flexible routing and exclusive pacing.",
        topExcursion: "Private - Spirit of Lisbon City Tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Flexible",
      },
      {
        name: "Ultimate Portugal Discovery",
        slug: "signature-portugal-experience",
        href: "/signature-portugal-experience",
        reason: "Flagship Signature Experience — in preparation.",
        topExcursion: "Ultimate Portugal Discovery",
        returnConfidence: "Planned for launch",
        walkingDifficulty: "Flexible",
      },
    ],
    faqs: [
      {
        question: "Sintra or Lisbon for first-timers?",
        answer: "Sintra for scenery; Lisbon for city culture. Most first-timers choose Sintra & Cascais Full Day.",
      },
      {
        question: "Book through cruise line or independently?",
        answer: "Ship tours guarantee vessel wait. Reputable independents offer smaller groups and lower prices with return buffers.",
      },
    ],
    relatedSlugs: ["sintra-or-lisbon", "best-portugal-tour-first-time", "sintra-cascais-full-day"],
    imageKey: "compare",
  },
  {
    slug: "private-tour-vs-coach-tour",
    title: "Private Tour vs Coach Tour",
    seoTitle: "Private vs Coach Shore Excursions — Lisbon Cruise Passengers",
    metaDescription:
      "Private tours vs large coach excursions from Lisbon — pacing, guide access, return timing and when each suits cruise passengers.",
    kind: "versus",
    optionA: "Private Tour",
    optionB: "Coach Tour",
    summary:
      "Private tours offer flexible routing, no group waits and personalised pacing — at premium cost. Coach tours cover more passengers efficiently with fixed itineraries and lower prices.",
    verdict:
      "Choose private for couples, photography stops, mobility flexibility and exclusive pacing. Choose coach for value, social atmosphere and standard Sintra/Lisbon routes. Ultimate Portugal Discovery and The Wow Collection are our small-group editorial recommendations.",
    overview: [
      "Private: dedicated guide and vehicle, route adapts in real time, premium pricing.",
      "Coach: fixed itinerary, 40–50 passengers, lower cost, proven return timing.",
      "Small-group (8–16) sits between — better pacing than large coach without full private cost.",
    ],
    comparisonTable: [
      { category: "Group size", optionA: "1–8 guests typical", optionB: "40–50 passengers" },
      { category: "Flexibility", optionA: "High — route adapts", optionB: "Low — fixed schedule" },
      { category: "Cost", optionA: "Premium", optionB: "Lower per person" },
      { category: "Return timing", optionA: "Planned to your ship", optionB: "Standard buffers — proven" },
      { category: "Best for", optionA: "Couples, photographers, special occasions", optionB: "Value, first-timers, standard routes" },
    ],
    faqs: [
      {
        question: "Is private worth the cost in Lisbon?",
        answer: "Yes for personalised routing, Pastéis de Belém timing and miradouro stops without group waits.",
      },
      {
        question: "Coach tours reliable for Sintra?",
        answer: "Yes with reputable operators — morning departures beat IC19 afternoon traffic.",
      },
    ],
    relatedSlugs: ["private-spirit-of-lisbon", "wow-collection", "signature-portugal-experience"],
    imageKey: "private",
  },
  {
    slug: "best-portugal-tour-first-time",
    title: "Best Portugal Tour for First-Timers",
    seoTitle: "Best Portugal Shore Excursion for First-Time Cruise Passengers",
    metaDescription:
      "Which Portugal shore excursion suits first-time cruise passengers at Lisbon — Sintra, Lisbon city, food and honest rankings.",
    kind: "guide",
    summary:
      "First-time Portugal visitors calling at Lisbon need one iconic experience that captures the country's character — palaces, coast, city culture or food — without overcommitting on a standard port day.",
    verdict:
      "Sintra & Cascais Full Day is our top first-timer pick — fairytale palaces plus Atlantic glamour. Full Day Sintra Deluxe for palace depth. Lisbon Highlights if city culture calls. Classic Lisbon Half Day for families.",
    overview: [
      "Most first-timers: Sintra & Cascais Full Day — the 'Portugal postcard' day.",
      "City lovers: Lisbon Highlights — Alfama, Baixa, Belém.",
      "Food lovers: Secret Food Tour in Lisbon.",
      "Families: Classic Lisbon Half Day — easier terrain, shorter duration.",
    ],
    guideItems: [
      {
        name: "Sintra & Cascais Full Day",
        slug: "sintra-cascais-full-day",
        href: "/shore-excursions/sintra-cascais-full-day",
        reason: "Editor's Choice — the definitive first-time Portugal experience.",
        topExcursion: "Sintra & Cascais (Full Day)",
        returnConfidence: "High on 8+ hour calls",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Full Day Sintra Deluxe",
        slug: "full-day-sintra-deluxe",
        href: "/shore-excursions/full-day-sintra-deluxe",
        reason: "Deeper Sintra — Regaleira and extended palace time.",
        topExcursion: "Full Day Sintra Deluxe Tour",
        returnConfidence: "High on 8+ hour calls",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Lisbon Highlights",
        slug: "lisbon-highlights",
        href: "/shore-excursions/lisbon-highlights",
        reason: "Best city introduction — monuments and neighbourhoods.",
        topExcursion: "Lisbon Highlights",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Classic Lisbon Half Day",
        slug: "classic-lisbon-half-day",
        href: "/shore-excursions/classic-lisbon-half-day",
        reason: "Best family first-timer — relaxed pacing and easier terrain.",
        topExcursion: "Classic Lisbon Half Day Tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
    ],
    faqs: [
      {
        question: "What if I have only 6 usable hours?",
        answer: "Classic Lisbon Half Day or Sintra Half Day — not the full combo days.",
      },
      {
        question: "Fatima on a first visit?",
        answer: "Only if heritage and spirituality are your priority — most first-timers choose Sintra or Lisbon.",
      },
    ],
    relatedSlugs: ["best-lisbon-shore-excursion", "sintra-or-lisbon", "one-day-in-lisbon"],
    imageKey: "sintra",
  },
  {
    slug: "one-day-in-lisbon",
    title: "One Day in Lisbon",
    seoTitle: "One Day in Lisbon from Cruise Port — Realistic Itinerary",
    metaDescription:
      "How to spend one port day in Lisbon — morning Alfama, midday Baixa, afternoon Belém and return-to-ship timing for cruise passengers.",
    kind: "guide",
    summary:
      "One day in Lisbon is enough for Alfama lanes, Baixa squares and Belém monuments if you sequence carefully — or enough for Sintra if you accept leaving the city unseen.",
    verdict:
      "City day: Alfama morning, Baixa lunch, Belém afternoon. Scenery day: Sintra & Cascais Full Day. Do not attempt Sintra plus central Lisbon on standard 8-hour calls.",
    overview: [
      "8+ hour call city itinerary: Alfama (09:00–11:00), Baixa/Chiado (11:00–13:00), Belém (14:00–16:00), return buffer.",
      "8+ hour Sintra itinerary: depart early, Pena Palace, Sintra centre, Cascais promenade, return by 16:30.",
      "6-hour call: Classic Lisbon Half Day or Belém-only independent afternoon from Alcântara.",
    ],
    guideItems: [
      {
        name: "Lisbon Highlights",
        slug: "lisbon-highlights",
        href: "/shore-excursions/lisbon-highlights",
        reason: "Organised city day covering Alfama, Baixa and Belém.",
        topExcursion: "Lisbon Highlights",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Sintra & Cascais Full Day",
        slug: "sintra-cascais-full-day",
        href: "/shore-excursions/sintra-cascais-full-day",
        reason: "Alternative one-day — palaces and coast instead of city.",
        topExcursion: "Sintra & Cascais (Full Day)",
        returnConfidence: "High",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Independent Lisbon Guide",
        slug: "independent-lisbon-guide",
        href: "/guides/independent-lisbon-guide",
        reason: "DIY city day with metro, tram and walking routes.",
        topExcursion: "Self-guided",
        returnConfidence: "High with 90-min buffer",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "Alfama and Belém in one day?",
        answer: "Yes on 8+ hour calls — allow 2 hours each plus transfer time between.",
      },
      {
        question: "Tram 28 worth it?",
        answer: "Iconic but crowded — walking Alfama or organised tours often work better on port days.",
      },
    ],
    relatedSlugs: ["one-day-in-lisbon", "belem-or-alfama", "independent-lisbon-guide"],
    imageKey: "historic",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
