import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Ships dock at Lisbon cruise terminals depending on vessel size and itinerary: Santa Apolónia (central, near Alfama and the historic waterfront), Jardim do Tabaco (Baixa waterfront, closest to Praça do Comércio), or Alcântara (west, near Belém and LX Factory). Coaches and taxis meet passengers at the terminal exit. Baixa and Alfama are 10–20 minutes by taxi or tram from Santa Apolónia and Jardim do Tabaco. Belém is 10–15 minutes west of central terminals. Sintra is 30–40 minutes by road via the IC19; Cascais about 35–45 minutes along the Marginal coast road. Confirm all-aboard and keep a 60–90 minute return buffer — afternoon traffic on the IC19 to Sintra or the coast road can add 15–25 minutes in peak season.";

export const excursions: ExcursionPage[] = [
  {
    slug: "sintra-cascais-full-day",
    title: "Sintra & Cascais (Full Day)",
    seoTitle: "Sintra & Cascais Full Day Shore Excursion from Lisbon Cruise Port",
    metaDescription:
      "Pena Palace, Sintra historic centre and Cascais coastal promenade on a cruise-timed full-day tour from Lisbon with return-to-ship confidence.",
    category: "Sintra & Coast",
    tagline: "Fairytale palaces, misty hills and Atlantic glamour — Portugal's essential port day in one carefully sequenced route.",
    duration: "8–9 hours",
    pace: "Moderate",
    bestFor: "First-time visitors who want the definitive Sintra and coast experience",
    overview:
      "Sintra & Cascais Full Day is our Editor's Choice — a sequenced route through Pena Palace viewpoints, Sintra's historic centre and Cascais waterfront with road timing built around your all-aboard.",
    body: [
      "Morning departures from Lisbon reach Sintra before midday coach crowds — Pena Palace exterior and gardens, historic centre stroll through narrow lanes and pastel façades.",
      "Afternoon transfer along the scenic coast to Cascais: harbour promenade, Boca do Inferno cliff viewpoint and time for coffee or gelado before return.",
      "Your guide sequences lunch and return legs so afternoon IC19 and Marginal traffic does not consume your return buffer. Typical return to terminal 16:30–17:00 for 18:00 all-aboard.",
      "Requires 8+ usable hours — on shorter calls choose Sintra Half Day or Classic Lisbon Half Day instead.",
    ],
    highlights: [
      "Pena Palace exterior and panoramic viewpoints",
      "Sintra historic centre and National Palace district",
      "Scenic coastal drive via Cabo da Roca area",
      "Cascais harbour and Atlantic promenade",
    ],
    included: ["Licensed guide", "Coach or minivan transport", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Book before sailing in July and August — Sintra queues peak mid-morning",
      "Wear layers — Sintra is cooler and mistier than Lisbon",
      "Comfortable shoes for cobbled Sintra lanes and palace paths",
    ],
    faqs: [
      {
        question: "Is this too much for a 9-hour port call?",
        answer: "Standard on organised full-day excursions — not recommended under 7.5 usable hours ashore.",
      },
      {
        question: "Pena Palace interior included?",
        answer: "Exterior and gardens standard — interior entry may be optional add-on with pre-booking due to timed slots.",
      },
      {
        question: "Sintra or Lisbon on a first visit?",
        answer: "Sintra for fairytale scenery and coastal glamour; Lisbon for city culture. This tour delivers both landscapes in one day.",
      },
    ],
    relatedExcursionSlugs: ["full-day-sintra-deluxe", "lisbon-sintra-cascais", "sintra-half-day"],
    featured: true,
  },
  {
    slug: "lisbon-sintra-cascais",
    title: "Lisbon, Sintra and Cascais",
    seoTitle: "Lisbon, Sintra & Cascais Combo Shore Excursion from Lisbon",
    metaDescription:
      "Belém monuments, Sintra palaces and Cascais coast in one ambitious cruise-timed combo day from Lisbon — for passengers with 10+ usable hours ashore.",
    category: "Combo",
    tagline: "City, palace and coast — three faces of Portugal when your port window allows.",
    duration: "10–11 hours",
    pace: "Active",
    bestFor: "Passengers with extended port calls who want city, Sintra and coast in one day",
    overview:
      "Lisbon, Sintra and Cascais sequences a focused Belém morning with Sintra palaces and an afternoon Cascais coastal stop — only recommended on extended port calls with expert road timing.",
    body: [
      "Early departure from Lisbon terminal, Belém monuments 09:00–10:30, road to Sintra 10:30–11:15, Pena Palace and historic centre 11:15–14:00, Cascais promenade 15:00–16:00, return with traffic buffer.",
      "Rushed compared to a dedicated Sintra day — choose this only if you have never seen Lisbon, Sintra or the coast and have 10+ usable hours.",
      "On standard 8–9 hour calls, choose Sintra & Cascais Full Day or Lisbon Highlights instead.",
    ],
    highlights: [
      "Belém Tower and Jerónimos Monastery exterior",
      "Pena Palace viewpoints",
      "Sintra historic centre",
      "Cascais harbour promenade",
    ],
    included: ["Licensed guide", "Coach transport", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Only book on 10+ hour calls",
      "Eat breakfast early — lunch timing is tight in Sintra",
      "See our Sintra or Lisbon comparison before booking",
    ],
    faqs: [
      {
        question: "Realistic on a 9-hour call?",
        answer: "No — needs 10+ usable hours. Choose one anchor destination on standard calls.",
      },
      {
        question: "Better than Sintra & Cascais only?",
        answer: "Only if you must see Belém and have extended hours — otherwise the dedicated Sintra day is less rushed.",
      },
    ],
    relatedExcursionSlugs: ["sintra-cascais-full-day", "lisbon-highlights", "one-day-in-lisbon"],
    featured: false,
  },
  {
    slug: "full-day-sintra-deluxe",
    title: "Full Day Sintra Deluxe Tour",
    seoTitle: "Full Day Sintra Deluxe Shore Excursion from Lisbon Cruise Port",
    metaDescription:
      "Pena Palace, Quinta da Regaleira, Sintra historic centre and coastal viewpoints on a deluxe cruise-timed Sintra day from Lisbon.",
    category: "Sintra",
    tagline: "Palaces, gardens and hidden corners — Sintra at a pace that respects the magic.",
    duration: "8–9 hours",
    pace: "Moderate",
    bestFor: "Passengers who want deeper Sintra without rushing through the highlights",
    overview:
      "Full Day Sintra Deluxe replaces the standard coach circuit with extended time at Pena Palace, Quinta da Regaleira and Sintra's historic centre — ideal for passengers who prioritise fairytale Portugal over city sightseeing.",
    body: [
      "Morning at Pena Palace with time for exterior photography and optional interior visit. Quinta da Regaleira's Initiation Well and romantic gardens follow — less crowded than midday coach arrivals.",
      "Historic centre lunch stop with traditional travesseiros pastry. Optional coastal viewpoint at Cabo da Roca when your port window allows.",
      "Deluxe pacing means fewer stops but more time at each — the opposite of a checklist coach tour.",
    ],
    highlights: [
      "Pena Palace exterior and gardens",
      "Quinta da Regaleira Initiation Well",
      "Sintra National Palace district",
      "Optional Cabo da Roca Atlantic viewpoint",
    ],
    included: ["Licensed guide", "Premium minivan or small coach", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Best alternative to the standard Sintra & Cascais day if you prefer depth over coast",
      "Regaleira timed entry may require advance booking in peak season",
      "Bring a light rain jacket — Sintra microclimate is unpredictable",
    ],
    faqs: [
      {
        question: "Deluxe vs standard Sintra full day?",
        answer: "Deluxe adds Regaleira and extended palace time; standard Sintra & Cascais includes Cascais waterfront instead.",
      },
      {
        question: "Cascais included?",
        answer: "Coastal viewpoint possible at Cabo da Roca — Cascais town is not the focus on this route.",
      },
    ],
    relatedExcursionSlugs: ["sintra-cascais-full-day", "scenic-sintra-hiking", "sintra-half-day"],
    featured: true,
  },
  {
    slug: "lisbon-highlights",
    title: "Lisbon Highlights",
    seoTitle: "Lisbon Highlights Shore Excursion from Lisbon Cruise Port",
    metaDescription:
      "Alfama, Baixa, São Jorge Castle viewpoint and Belém on a cruise-timed Lisbon highlights tour with return-to-ship confidence.",
    category: "Lisbon",
    tagline: "Seven hills, fado alleyways and riverside monuments — Lisbon's greatest hits in one port day.",
    duration: "7–8 hours",
    pace: "Moderate",
    bestFor: "First-time visitors who want the definitive Lisbon city experience",
    overview:
      "Lisbon Highlights sequences Alfama's miradouros, Baixa's grand squares, a castle viewpoint and Belém's riverside monuments with city timing built around your all-aboard.",
    body: [
      "Morning in Alfama: narrow lanes, Sé Cathedral exterior and Miradouro da Senhora do Monte or similar viewpoint for panoramic city photos.",
      "Baixa and Chiado walk: Praça do Comércio, Elevador de Santa Justa exterior and Rossio square. Afternoon transfer to Belém for Tower and Jerónimos Monastery exterior.",
      "Typical return to terminal 16:00–17:00 for 18:00 all-aboard. Requires 7+ usable hours.",
    ],
    highlights: [
      "Alfama historic quarter and miradouros",
      "Praça do Comércio and Baixa grand squares",
      "São Jorge Castle viewpoint area",
      "Belém Tower and Jerónimos Monastery exterior",
    ],
    included: ["Licensed guide", "Coach or minivan transport", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — Lisbon's hills are real",
      "Pastéis de Belém stop often possible near Jerónimos — ask your guide",
      "Excellent choice when you prefer city culture over Sintra",
    ],
    faqs: [
      {
        question: "Lisbon or Sintra for first-timers?",
        answer: "Lisbon for city culture, fado history and monuments; Sintra for palaces and coast. See our comparison guide.",
      },
      {
        question: "Tram 28 included?",
        answer: "Walking tours standard — tram rides may be optional depending on queues and timing.",
      },
    ],
    relatedExcursionSlugs: ["classic-lisbon-half-day", "discover-lisbon-on-foot", "private-spirit-of-lisbon"],
    featured: true,
  },
  {
    slug: "classic-lisbon-half-day",
    title: "Classic Lisbon Half Day Tour",
    seoTitle: "Classic Lisbon Half Day Shore Excursion from Lisbon Cruise Port",
    metaDescription:
      "Alfama, Baixa and a city viewpoint on a relaxed half-day Lisbon tour from the cruise terminal — ideal for shorter port calls.",
    category: "Lisbon",
    tagline: "The essentials without the rush — Lisbon's heart in a half-day.",
    duration: "5–6 hours",
    pace: "Relaxed",
    bestFor: "Families, shorter port calls and passengers who want an easy city introduction",
    overview:
      "Classic Lisbon Half Day focuses on Alfama lanes, Baixa squares and a single panoramic viewpoint — compact, walkable and ideal when your usable hours are limited.",
    body: [
      "Direct transfer from terminal to Alfama, 2–3 hours walking the historic quarter and Baixa, optional viewpoint stop, relaxed return with generous buffer.",
      "Ideal for calls with 6–7 usable hours or as a gentle day after a long sea passage.",
      "Pairs well with an independent Belém afternoon if your ship allows late return.",
    ],
    highlights: [
      "Alfama lanes and Sé Cathedral exterior",
      "Praça do Comércio waterfront",
      "Rossio and Baixa squares",
      "Panoramic miradouro viewpoint",
    ],
    included: ["Licensed guide", "Coach or minivan transport", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Perfect for families with young children",
      "Flat Baixa sections suit mixed mobility better than full hill walks",
      "Combine with Pastéis de Belém independently if time allows",
    ],
    faqs: [
      {
        question: "Enough for a port day?",
        answer: "Yes on shorter calls — many passengers prefer this to a rushed Sintra day.",
      },
      {
        question: "Belém included?",
        answer: "No — see Lisbon Highlights for Belém monuments or visit independently by tram.",
      },
    ],
    relatedExcursionSlugs: ["lisbon-highlights", "discover-lisbon-on-foot", "lisbon-highlights-pastry"],
    featured: false,
  },
  {
    slug: "discover-lisbon-on-foot",
    title: "Discover Lisbon on Foot",
    seoTitle: "Discover Lisbon on Foot — Walking Shore Excursion from Cruise Port",
    metaDescription:
      "Guided walking tour of Alfama, Baixa and Chiado from Lisbon cruise port — miradouros, azulejos and local neighbourhoods at pedestrian pace.",
    category: "Lisbon",
    tagline: "Walk the seven hills — Lisbon reveals itself step by step.",
    duration: "6–7 hours",
    pace: "Moderate",
    bestFor: "Active passengers who prefer walking over coach touring",
    overview:
      "Discover Lisbon on Foot replaces vehicle transfers with a sequenced walk through Alfama, Baixa, Chiado and optional Bairro Alto — the most immersive way to feel Lisbon's rhythm on a port day.",
    body: [
      "Meet at terminal, metro or short transfer to Alfama starting point. Morning walk through fado quarter lanes, azulejo-adorned façades and miradouros.",
      "Midday descent through Baixa and Chiado — café stop, Livraria Bertrand exterior, Carmo Convent ruins viewpoint.",
      "Afternoon flexibility: extend to Belém by tram if energy and time allow, or return via riverside walk.",
    ],
    highlights: [
      "Alfama walking routes and miradouros",
      "Baixa Pombaline architecture",
      "Chiado literary quarter",
      "Local café and pastel de nata stop",
    ],
    included: ["Licensed walking guide", "Metro/tram tickets where needed", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Requires reasonable fitness — Lisbon hills are steep",
      "Wear grippy shoes on calçada portuguesa cobbles",
      "Bring water — shade is limited on miradouro viewpoints",
    ],
    faqs: [
      {
        question: "Suitable for limited mobility?",
        answer: "Challenging — steep hills and uneven cobbles. Consider Classic Lisbon Half Day or Private Spirit of Lisbon with vehicle support.",
      },
      {
        question: "Better than Lisbon Highlights?",
        answer: "Better for active walkers who want immersion; Highlights covers more ground by vehicle including Belém.",
      },
    ],
    relatedExcursionSlugs: ["lisbon-highlights", "classic-lisbon-half-day", "private-spirit-of-lisbon"],
    featured: false,
  },
  {
    slug: "sintra-half-day",
    title: "Sintra Half Day Tour",
    seoTitle: "Sintra Half Day Shore Excursion from Lisbon Cruise Port",
    metaDescription:
      "Pena Palace viewpoints and Sintra historic centre on a compact half-day tour from Lisbon — ideal when you want Sintra without a full-day commitment.",
    category: "Sintra",
    tagline: "Palaces and pastel lanes — Sintra's magic in a half-day.",
    duration: "5–6 hours",
    pace: "Relaxed",
    bestFor: "Shorter port calls and passengers combining Sintra with independent Lisbon time",
    overview:
      "Sintra Half Day focuses on Pena Palace exterior and Sintra historic centre — compact, scenic and ideal when you want fairytale Portugal without sacrificing an afternoon in Lisbon.",
    body: [
      "Direct transfer from Lisbon to Sintra, 2–3 hours at Pena Palace viewpoints and historic centre, optional travesseiros stop, relaxed return with buffer.",
      "Ideal for calls with 6–7 usable hours or passengers who plan independent Belém or Alfama time on return.",
      "Not enough for Quinta da Regaleira — see Full Day Sintra Deluxe for deeper coverage.",
    ],
    highlights: [
      "Pena Palace exterior and panoramic views",
      "Sintra historic centre lanes",
      "National Palace square",
      "Optional traditional pastry stop",
    ],
    included: ["Licensed guide", "Coach or minivan transport", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Morning departures beat Sintra coach crowds",
      "Leave afternoon free for Belém if your ship allows",
      "Layers essential — Sintra is cooler than Lisbon",
    ],
    faqs: [
      {
        question: "Half day enough for Sintra?",
        answer: "Yes for Pena exterior and historic centre — not for Regaleira or Cascais.",
      },
      {
        question: "vs full Sintra & Cascais day?",
        answer: "Half day saves afternoon for Lisbon; full day adds Cascais coast and more palace time.",
      },
    ],
    relatedExcursionSlugs: ["sintra-cascais-full-day", "full-day-sintra-deluxe", "scenic-sintra-hiking"],
    featured: false,
  },
  {
    slug: "secret-food-tour-lisbon",
    title: "Secret Food Tour in Lisbon",
    seoTitle: "Secret Food Tour Lisbon — Best Food Shore Excursion from Cruise Port",
    metaDescription:
      "Guided Lisbon food tour with petiscos, ginjinha, bacalhau and local market tastings — the best food and wine port day from Lisbon cruise terminal.",
    category: "Food & Wine",
    tagline: "Petiscos, ginjinha and bacalhau — taste Lisbon neighbourhood by neighbourhood.",
    duration: "3.5–4 hours",
    pace: "Relaxed",
    bestFor: "Food lovers who want gastronomy as their port-day anchor",
    overview:
      "Secret Food Tour in Lisbon replaces monument rushing with sequenced tastings across Alfama, Mouraria or Baixa — petiscos, cherry liqueur, fresh seafood and the stories behind each bite.",
    body: [
      "Small-group routing through local tascas and markets inaccessible to large coach groups. Typical stops include cured meats, bacalhau croquettes, ginjinha and seasonal petiscos.",
      "Designed as a standalone half-day — pair with independent Belém or miradouro time if your ship allows a late return.",
      "Guides accommodate dietary requirements when notified at booking.",
    ],
    highlights: [
      "Multiple petisco tastings across neighbourhoods",
      "Ginjinha cherry liqueur tradition",
      "Local market or tasca visits",
      "Stories of Lisbon food culture",
    ],
    included: ["Food guide", "Multiple food tastings", "Return guidance to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Eat a light breakfast — this tour is your lunch",
      "Notify vegetarian or allergy requirements at booking",
      "Works well on 8+ hour calls as morning or midday anchor",
    ],
    faqs: [
      {
        question: "Enough food for lunch?",
        answer: "Yes — tastings are substantial, equivalent to a full meal across multiple stops.",
      },
      {
        question: "Combine with Sintra same day?",
        answer: "Not recommended — food tours need focused time. Choose one anchor experience per port day.",
      },
    ],
    relatedExcursionSlugs: ["wine-and-food-tour", "lisbon-highlights-pastry", "best-food-in-lisbon"],
    featured: true,
  },
  {
    slug: "wine-and-food-tour",
    title: "Wine and Food Tour",
    seoTitle: "Lisbon Wine & Food Shore Excursion from Cruise Port",
    metaDescription:
      "Portuguese wine tasting and food pairings on a cruise-timed gastronomy tour from Lisbon — Douro, Alentejo and local petiscos.",
    category: "Food & Wine",
    tagline: "Douro reds, Alentejo whites and petiscos — Portugal on the palate.",
    duration: "4–5 hours",
    pace: "Relaxed",
    bestFor: "Wine enthusiasts who want structured tasting with food pairings",
    overview:
      "Wine and Food Tour combines guided tastings of Portuguese wines — Douro, Alentejo, Vinho Verde — with paired petiscos in a Lisbon wine bar or cellar setting timed to your port window.",
    body: [
      "Structured flight of 4–5 Portuguese wines with expert commentary on regions, grape varieties and production traditions.",
      "Paired petiscos: cured presunto, queijo, bacalhau bites and seasonal accompaniments.",
      "More focused on wine than the Secret Food Tour — ideal for oenophiles who want depth over neighbourhood walking.",
    ],
    highlights: [
      "Douro and Alentejo wine flight",
      "Expert sommelier or wine guide commentary",
      "Paired Portuguese petiscos",
      "Introduction to Portuguese wine regions",
    ],
    included: ["Wine guide", "Wine and food pairings", "Return guidance to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Minimum age 18 for wine tastings",
      "Eat breakfast — pairings are generous but not a full multi-course meal",
      "See Arrabida Wine Discovery for vineyard setting outside the city",
    ],
    faqs: [
      {
        question: "vs Secret Food Tour?",
        answer: "Wine and Food Tour emphasises wine regions and pairings; Secret Food Tour walks neighbourhoods with broader street food focus.",
      },
      {
        question: "Non-drinkers welcome?",
        answer: "Contact operator — grape juice pairings may be available on request.",
      },
    ],
    relatedExcursionSlugs: ["secret-food-tour-lisbon", "arrabida-wine-discovery", "lisbon-highlights-pastry"],
    featured: false,
  },
  {
    slug: "lisbon-highlights-pastry",
    title: "Lisbon Highlights and Pastry Tasting",
    seoTitle: "Lisbon Highlights & Pastry Tasting Shore Excursion",
    metaDescription:
      "Alfama, Baixa and Belém with pastéis de nata and traditional Portuguese pastry tastings on a cruise-timed Lisbon tour.",
    category: "Food & Wine",
    tagline: "Monuments and pastries — Lisbon's sweet side alongside the classics.",
    duration: "7–8 hours",
    pace: "Moderate",
    bestFor: "Passengers who want sightseeing with built-in gastronomy stops",
    overview:
      "Lisbon Highlights and Pastry Tasting combines the standard city route — Alfama, Baixa, Belém — with curated stops for pastéis de nata, travesseiros and other regional specialities.",
    body: [
      "Morning city highlights walk with a mid-morning pastel de nata stop at a renowned bakery — not the tourist queue, but a guide-selected favourite.",
      "Belém afternoon including Jerónimos exterior and Pastéis de Belém (the original custard tart bakery, queues permitting).",
      "Sweet tooth optional — savoury petiscos often included at one stop.",
    ],
    highlights: [
      "Alfama and Baixa highlights",
      "Curated pastel de nata tasting",
      "Belém monuments",
      "Pastéis de Belém visit",
    ],
    included: ["Licensed guide", "Pastry tastings", "Coach transport", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Pastéis de Belém queues can be long — guides time visits strategically",
      "Excellent family-friendly food-and-sightseeing combo",
      "Notify dietary requirements at booking",
    ],
    faqs: [
      {
        question: "vs Lisbon Highlights standard?",
        answer: "Same route with dedicated pastry stops — choose this if food matters as much as monuments.",
      },
      {
        question: "Gluten-free options?",
        answer: "Limited — notify at booking; some stops may accommodate.",
      },
    ],
    relatedExcursionSlugs: ["lisbon-highlights", "secret-food-tour-lisbon", "classic-lisbon-half-day"],
    featured: false,
  },
  {
    slug: "private-spirit-of-lisbon",
    title: "Private - Spirit of Lisbon City Tour",
    seoTitle: "Private Spirit of Lisbon Tour — Best Private Shore Excursion",
    metaDescription:
      "Private Lisbon city tour with flexible routing — Alfama, Belém, miradouros and local neighbourhoods timed to your ship from Lisbon cruise port.",
    category: "Private",
    tagline: "Your Lisbon, your pace — a private guide who reads the city and your interests.",
    duration: "6–8 hours",
    pace: "Relaxed",
    bestFor: "Couples, families and passengers who want exclusive pacing and personalised routing",
    overview:
      "Private Spirit of Lisbon replaces fixed coach itineraries with a dedicated guide and vehicle — adapt Alfama walks, Belém monuments, viewpoint stops and lunch timing to your party's interests and mobility.",
    body: [
      "Meet your guide at terminal with private vehicle. Route flexes in real time: more miradouros for photographers, deeper Alfama for history lovers, extended Belém for monument enthusiasts.",
      "No waiting for straggling coach groups. Return timing planned backward from your all-aboard with explicit traffic buffer.",
      "Best private option for passengers who want Lisbon depth without sharing a 50-seat coach.",
    ],
    highlights: [
      "Private guide and vehicle",
      "Flexible Alfama and Baixa routing",
      "Belém monuments at your pace",
      "Customised miradouro and lunch stops",
    ],
    included: ["Private licensed guide", "Private vehicle", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share interests and mobility needs at booking",
      "Request Pastéis de Belém stop explicitly if desired",
      "Premium pricing reflects exclusivity — compare with Lisbon Highlights for value",
    ],
    faqs: [
      {
        question: "Private vs Lisbon Highlights coach tour?",
        answer: "Private offers flexible routing and no group waits; coach tour covers similar sights at lower cost.",
      },
      {
        question: "Can we add Sintra?",
        answer: "Not on standard duration — Sintra needs a dedicated full-day private tour. See Full Day Sintra Deluxe.",
      },
    ],
    relatedExcursionSlugs: ["lisbon-highlights", "discover-lisbon-on-foot", "sintra-cascais-full-day"],
    featured: true,
  },
  {
    slug: "scenic-sintra-hiking",
    title: "Scenic Sintra Hiking Tour",
    seoTitle: "Scenic Sintra Hiking Shore Excursion from Lisbon — Photography & Adventure",
    metaDescription:
      "Guided hiking through Sintra's forests, palace viewpoints and coastal trails — best photography and adventure shore excursion from Lisbon cruise port.",
    category: "Adventure",
    tagline: "Forest paths, palace vistas and Atlantic air — Sintra on foot for active explorers.",
    duration: "7–8 hours",
    pace: "Active",
    bestFor: "Photography enthusiasts and active passengers who prefer trails over coach circuits",
    overview:
      "Scenic Sintra Hiking replaces coach parking with guided forest trails linking Pena Palace viewpoints, Moorish Castle vistas and optional coastal sections — Portugal's best photography and adventure port day.",
    body: [
      "Morning trail through Sintra-Cascais Natural Park with expert pacing for photo stops at palace viewpoints and forest clearings.",
      "Moderate elevation gain — suitable for fit passengers comfortable with 8–12 km walking. Trail sections vary by season and weather.",
      "Afternoon descent to Sintra historic centre for restorative lunch before return to Lisbon with traffic buffer.",
    ],
    highlights: [
      "Sintra forest and palace viewpoint trails",
      "Pena Palace panoramic photography stops",
      "Moorish Castle vista points",
      "Natural park scenery",
    ],
    included: ["Licensed hiking guide", "Transport to trailhead", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Requires good fitness — not suitable for limited mobility",
      "Wear hiking shoes with grip — trails can be muddy after rain",
      "Bring camera gear — this is our Best Photography pick",
    ],
    faqs: [
      {
        question: "vs standard Sintra coach tour?",
        answer: "Hiking tour trades coach convenience for trail immersion and photography angles coaches cannot reach.",
      },
      {
        question: "Weather cancellations?",
        answer: "Heavy rain may modify or shorten trails — operators contact passengers on port day.",
      },
    ],
    relatedExcursionSlugs: ["full-day-sintra-deluxe", "sintra-cascais-full-day", "cabo-da-roca"],
    featured: false,
  },
  {
    slug: "fatima-batalha-nazare-obidos",
    title: "Fatima, Batalha, Nazare & Obidos",
    seoTitle: "Fatima, Batalha, Nazare & Obidos Shore Excursion from Lisbon",
    metaDescription:
      "Full-day pilgrimage and heritage tour — Fatima sanctuary, Batalha Monastery, Nazare cliffs and medieval Obidos from Lisbon cruise port.",
    category: "Heritage",
    tagline: "Sanctuary, Gothic splendour, giant waves and a walled village — Portugal beyond the capital.",
    duration: "10–11 hours",
    pace: "Moderate",
    bestFor: "Passengers with extended port calls interested in heritage, spirituality and coastal drama",
    overview:
      "Fatima, Batalha, Nazare & Obidos sequences Portugal's interior heritage with Atlantic coast drama — a longer day requiring 10+ usable hours and best for repeat visitors or those prioritising culture over Lisbon city sightseeing.",
    body: [
      "Morning at Fatima Sanctuary — Basilica, Chapel of Apparitions and esplanade. Batalha Monastery UNESCO Gothic masterpiece follows.",
      "Afternoon at Nazare cliff viewpoint (Sítio) for Atlantic panoramas and fishing village atmosphere. Final stop: medieval Obidos walled town stroll.",
      "Long road day — only recommended on 10+ hour port calls with organised return timing.",
    ],
    highlights: [
      "Fatima Sanctuary and Basilica",
      "Batalha Monastery UNESCO site",
      "Nazare cliff viewpoints",
      "Obidos medieval walled village",
    ],
    included: ["Licensed guide", "Coach transport", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Only book on 10+ hour calls",
      "Modest dress recommended at Fatima",
      "Obidos ginjinha in chocolate cup is a classic stop",
    ],
    faqs: [
      {
        question: "First visit to Lisbon — is this right?",
        answer: "No — prioritise Sintra or Lisbon Highlights first. This suits repeat visitors or those with specific heritage interests.",
      },
      {
        question: "Realistic on 9-hour call?",
        answer: "Tight — needs 10+ usable hours for comfortable pacing.",
      },
    ],
    relatedExcursionSlugs: ["sintra-cascais-full-day", "lisbon-highlights", "best-portugal-shore-excursions"],
    featured: false,
  },
  {
    slug: "arrabida-wine-discovery",
    title: "Arrabida Wine Discovery",
    seoTitle: "Arrabida Wine Discovery Shore Excursion from Lisbon Cruise Port",
    metaDescription:
      "Setubal Peninsula wine tasting, Arrabida Natural Park viewpoints and coastal scenery on a cruise-timed wine discovery tour from Lisbon.",
    category: "Food & Wine",
    tagline: "Moscatel, mountains and Atlantic blue — wine country twenty minutes from your ship.",
    duration: "7–8 hours",
    pace: "Relaxed",
    bestFor: "Wine lovers who want vineyard scenery without the Sintra coach convoys",
    overview:
      "Arrabida Wine Discovery explores the Setubal Peninsula — Moscatel de Setubal tastings, Arrabida mountain viewpoints and fishing village atmosphere — a refreshing alternative to city or Sintra touring.",
    body: [
      "Scenic drive south across the Tagus to Arrabida Natural Park — dramatic cliffs, pine forests and turquoise coves visible from mountain viewpoints.",
      "Winery visit with Moscatel and regional red tastings, paired with local cheeses and presunto.",
      "Optional Sesimbra fishing village stop for seafood lunch when timing allows.",
    ],
    highlights: [
      "Arrabida Natural Park viewpoints",
      "Moscatel de Setubal wine tasting",
      "Setubal Peninsula winery visit",
      "Optional Sesimbra coastal village",
    ],
    included: ["Wine guide", "Wine tastings", "Coach transport", "Return timed to ship"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Excellent alternative when you have already seen Sintra",
      "Arrabida viewpoints are spectacular for photography",
      "Minimum age 18 for wine tastings",
    ],
    faqs: [
      {
        question: "vs city Wine and Food Tour?",
        answer: "Arrabida adds vineyard setting and coastal scenery; city tour stays in Lisbon wine bars.",
      },
      {
        question: "Combine with Lisbon same day?",
        answer: "Not recommended — this is designed as a full anchor experience.",
      },
    ],
    relatedExcursionSlugs: ["wine-and-food-tour", "secret-food-tour-lisbon", "scenic-sintra-hiking"],
    featured: false,
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}
