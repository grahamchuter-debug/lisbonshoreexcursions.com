export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img("hero-home", "Yellow tram climbing colourful Lisbon streets — gateway to Portugal from cruise port"),
  ogDefault: img("og-default", "Portugal cruise planning — Sintra, Lisbon and Atlantic coast from Lisbon cruise port"),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Lisbon Shore Excursions",
  },
  port: img("cruise-port", "Lisbon cruise port — gateway to Portugal"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  sintra: img("sintra", "Pena Palace and Sintra fairytale scenery from Lisbon cruise port"),
  belem: img("belem", "Belém Tower and Jerónimos Monastery — Lisbon heritage"),
  cascais: img("cascais", "Cascais harbour and Atlantic promenade from Lisbon"),
  tram: img("tram", "Historic tram in Lisbon — culture and heritage"),
  alfama: img("alfama", "Alfama neighbourhood lanes and miradouros in Lisbon"),
  historic: img("historic", "Historic Lisbon city centre from cruise port"),
  coast: img("coast", "Atlantic coast and Cabo da Roca cliffs from Lisbon"),
  pasteis: img("pasteis", "Pastéis de Belém custard tarts — Lisbon food culture"),
  miradouro: img("miradouro", "Lisbon miradouro viewpoint over the Tagus"),
  wine: img("wine", "Portuguese wine and petiscos culture"),
  walking: img("walking", "Walking Lisbon neighbourhoods from cruise port"),
  photography: img("photography", "Photography viewpoints in Sintra and Lisbon"),
  private: img("private", "Private Portugal shore excursion from Lisbon"),
  food: img("food", "Portuguese food and wine in Lisbon"),
  family: img("family", "Family exploring Portugal from Lisbon cruise ship"),
  compare: img("compare", "Comparing Portugal cruise excursion options from Lisbon"),
  port: img("cruise-port", "Lisbon cruise port terminal"),
  highlights: img("historic", "Portugal highlights from Lisbon cruise port"),
  city: img("historic", "Lisbon historic centre from cruise port"),
  history: img("historic", "Historic Lisbon monuments and neighbourhoods"),
  "hero-home": img("hero-home", "Lisbon and Portugal gateway hero image"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "sintra-cascais-full-day": "sintra",
  "lisbon-sintra-cascais": "sintra",
  "full-day-sintra-deluxe": "sintra",
  "lisbon-highlights": "historic",
  "classic-lisbon-half-day": "historic",
  "discover-lisbon-on-foot": "walking",
  "sintra-half-day": "sintra",
  "secret-food-tour-lisbon": "food",
  "wine-and-food-tour": "wine",
  "lisbon-highlights-pastry": "pasteis",
  "private-spirit-of-lisbon": "private",
  "scenic-sintra-hiking": "walking",
  "fatima-batalha-nazare-obidos": "historic",
  "arrabida-wine-discovery": "wine",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("sintra");

const highlightImageKeys: Record<string, string> = {
  "sintra-from-lisbon-cruise-port": "sintra",
  "belem-guide": "belem",
  "historic-lisbon-guide": "historic",
  "cascais-from-lisbon": "coast",
  "cabo-da-roca": "coast",
};

const comparisonImageKeys: Record<string, string> = {
  "sintra-or-lisbon": "compare",
  "sintra-or-cascais": "coast",
  "can-you-explore-lisbon-independently": "walking",
  "belem-or-alfama": "belem",
  "best-lisbon-shore-excursion": "sintra",
  "private-tour-vs-coach-tour": "private",
  "best-portugal-tour-first-time": "sintra",
  "one-day-in-lisbon": "historic",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getGuideImage(key: string): SiteImage {
  return pick(key in subjectImages ? key : "historic");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("historic");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("tram");
}

export const guidesHubImage = pick("sintra");
