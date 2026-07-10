import { excursions } from "./excursions";
import { SIGNATURE_EXPERIENCE_PATH, signaturePortugalExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const INTEREST_OPTIONS = [
  { id: "sintra", label: "Sintra palaces & fairytale scenery" },
  { id: "lisbon", label: "Lisbon city & monuments" },
  { id: "coast", label: "Cascais & Atlantic coast" },
  { id: "food", label: "Food & wine" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
  { id: "luxury", label: "Luxury & romance" },
  { id: "heritage", label: "Culture & heritage" },
];

const INTEREST_TO_EXCURSION: Record<string, string[]> = {
  sintra: ["sintra-cascais-full-day", "full-day-sintra-deluxe", "sintra-half-day"],
  lisbon: ["lisbon-highlights", "classic-lisbon-half-day", "discover-lisbon-on-foot"],
  coast: ["sintra-cascais-full-day", "scenic-sintra-hiking", "arrabida-wine-discovery"],
  food: ["secret-food-tour-lisbon", "wine-and-food-tour", "lisbon-highlights-pastry"],
  photography: ["scenic-sintra-hiking", "sintra-cascais-full-day", "full-day-sintra-deluxe"],
  family: ["classic-lisbon-half-day", "lisbon-highlights", "sintra-half-day"],
  independent: ["discover-lisbon-on-foot", "classic-lisbon-half-day", "sintra-half-day"],
  luxury: ["private-spirit-of-lisbon", "full-day-sintra-deluxe", "sintra-cascais-full-day"],
  heritage: ["lisbon-highlights", "fatima-batalha-nazare-obidos", "discover-lisbon-on-foot"],
};

const ITINERARY_THEMES: Record<string, { headline: string; slugs: string[]; summary: string }> = {
  "editors-choice": {
    headline: "Editor's Choice — Sintra & Cascais Full Day",
    slugs: ["sintra-cascais-full-day", "full-day-sintra-deluxe", "lisbon-highlights"],
    summary: "Our Editor's Choice — Pena Palace, Sintra historic centre and Cascais coast with road timing built around your ship.",
  },
  "best-historic": {
    headline: "Lisbon Highlights",
    slugs: ["lisbon-highlights", "discover-lisbon-on-foot", "classic-lisbon-half-day"],
    summary: "Historic Lisbon — Alfama, Baixa and Belém monuments in one carefully timed port day.",
  },
  "best-food": {
    headline: "Secret Food Tour in Lisbon",
    slugs: ["secret-food-tour-lisbon", "wine-and-food-tour", "lisbon-highlights-pastry"],
    summary: "Petiscos, ginjinha and pastéis de nata fitted to your Lisbon port hours.",
  },
  "best-photography": {
    headline: "Scenic Sintra Hiking",
    slugs: ["scenic-sintra-hiking", "sintra-cascais-full-day", "full-day-sintra-deluxe"],
    summary: "Sintra forest trails, palace viewpoints and Atlantic vistas for photography lovers.",
  },
  "best-independent": {
    headline: "Independent Lisbon",
    slugs: ["discover-lisbon-on-foot", "classic-lisbon-half-day", "sintra-half-day"],
    summary: "Metro, trams and walking routes from Lisbon terminals — manage your own return buffer.",
  },
  "best-families": {
    headline: "Classic Lisbon Half Day",
    slugs: ["classic-lisbon-half-day", "lisbon-highlights", "sintra-half-day"],
    summary: "Alfama, Baixa and paced routing — easier terrain for mixed-age families.",
  },
  "best-luxury": {
    headline: "Private Spirit of Lisbon",
    slugs: ["private-spirit-of-lisbon", "full-day-sintra-deluxe", "sintra-cascais-full-day"],
    summary: "Premium private pacing — Ultimate Portugal Discovery in preparation via The Wow Collection.",
  },
  "hidden-gem": {
    headline: "Arrabida Wine Discovery",
    slugs: ["arrabida-wine-discovery", "wine-and-food-tour", "sintra-half-day"],
    summary: "Moscatel, Arrabida viewpoints and Setubal Peninsula — away from Sintra coach convoys.",
  },
};

function excursionLink(slug: string, why: string): PlannerLink | null {
  const e = excursions.find((x) => x.slug === slug);
  if (!e) return null;
  return { label: e.title, href: `/shore-excursions/${slug}`, why };
}

function usableHours(input: PlannerInput): number {
  if (input.arrivalTime && input.departureTime) {
    const [aH, aM] = input.arrivalTime.split(":").map(Number);
    const [dH, dM] = input.departureTime.split(":").map(Number);
    const raw = (dH * 60 + dM - (aH * 60 + aM)) / 60;
    return Math.max(0, raw - 1.5);
  }
  return 7.5;
}

function pickTheme(input: PlannerInput): keyof typeof ITINERARY_THEMES {
  const { interests, children, travelStyle, mobility, budget } = input;
  const active = interests.length ? interests : ["sintra", "lisbon"];

  if (children > 0 || active.includes("family")) return "best-families";
  if (budget === "premium" || active.includes("luxury") || mobility === "limited") return "best-luxury";
  if (travelStyle === "diy" || active.includes("independent")) return "best-independent";
  if (active.includes("food")) return "best-food";
  if (active.includes("photography") || active.includes("coast")) return "best-photography";
  if (active.includes("heritage")) return "best-historic";
  if (active.includes("lisbon")) return "best-historic";
  if (active.includes("sintra")) return "editors-choice";
  if (usableHours(input) < 6) return "best-families";
  return "editors-choice";
}

export function generatePortugalPlan(input: PlannerInput): PlannerResult {
  const { arrivalTime, departureTime, adults, children, interests, mobility, budget, travelStyle } = input;
  const party = adults + children;
  const hasKids = children > 0;
  const hours = usableHours(input);

  const themeKey = pickTheme(input);
  const theme = ITINERARY_THEMES[themeKey];

  const excSlugs: string[] = [];
  const pushSlug = (s: string) => {
    if (s && !excSlugs.includes(s)) excSlugs.push(s);
  };

  for (const s of theme.slugs) pushSlug(s);

  const activeInterests = interests.length ? interests : ["sintra", "lisbon"];
  for (const interest of activeInterests) {
    for (const s of INTEREST_TO_EXCURSION[interest] ?? []) pushSlug(s);
  }
  if (hasKids) pushSlug("classic-lisbon-half-day");
  if (travelStyle === "diy") pushSlug("discover-lisbon-on-foot");
  if (budget === "premium") pushSlug("private-spirit-of-lisbon");
  if (hours < 6) pushSlug("classic-lisbon-half-day");

  const reasonMap: Record<string, string> = {
    "sintra-cascais-full-day": "Editor's Choice — Pena Palace and Cascais coast for first-timers.",
    "lisbon-highlights": "Alfama, Baixa and Belém — definitive city day.",
    "full-day-sintra-deluxe": "Deeper Sintra — Regaleira and extended palace time.",
    "classic-lisbon-half-day": "Relaxed city introduction for shorter calls.",
    "secret-food-tour-lisbon": "Petiscos and neighbourhood tastings.",
    "private-spirit-of-lisbon": "Exclusive private pacing through Lisbon.",
    "scenic-sintra-hiking": "Forest trails and palace viewpoints for photographers.",
    "sintra-half-day": "Compact Sintra for limited hours.",
    "arrabida-wine-discovery": "Moscatel and Arrabida coast away from crowds.",
  };

  const excursionLinks = excSlugs
    .slice(0, 5)
    .map((s) => excursionLink(s, reasonMap[s] ?? "A strong match for your Portugal port day."))
    .filter((x): x is PlannerLink => x !== null);

  if (!excursionLinks.some((l) => l.href === SIGNATURE_EXPERIENCE_PATH)) {
    excursionLinks.unshift({
      label: signaturePortugalExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Flagship Signature Experience — in preparation via The Wow Collection.",
    });
  }

  const transfers: PlannerLink[] = [
    {
      label: "Lisbon Cruise Port Guide",
      href: "/cruise-port-guide",
      why: "Terminal layout, metro access and coach pickup points.",
    },
  ];

  const logistics: PlannerLink[] = [
    { label: "Ship Schedules", href: "/ship-schedules/lisbon", why: "See which ships share your Lisbon port day." },
    { label: "Sintra or Lisbon?", href: "/compare/sintra-or-lisbon", why: "Honest comparison to help you choose." },
    { label: "Private vs coach", href: "/compare/private-tour-vs-coach-tour", why: "When private pacing beats a large coach." },
  ];

  const topExc = excursionLinks[0]?.label ?? theme.headline;
  const dayPlan: { time: string; text: string }[] = [];
  const arriveLabel = arrivalTime ?? "07:30";
  const departLabel = departureTime ?? "17:00";

  dayPlan.push({
    time: "On arrival",
    text: `Disembark at your Lisbon cruise terminal (${arriveLabel}). Meet your excursion at the terminal exit, or walk to Baixa/Alfama from Santa Apolónia and Jardim do Tabaco terminals.`,
  });

  if (themeKey === "best-food") {
    dayPlan.push({ time: "Morning", text: "Secret Food Tour through Alfama or Mouraria — petiscos and ginjinha tastings." });
    dayPlan.push({ time: "Midday", text: "Tour tastings serve as lunch — allow 90 minutes seated across multiple stops." });
    dayPlan.push({ time: "Afternoon", text: "Optional Belém or miradouro visit if time allows before return buffer." });
  } else if (themeKey === "best-independent") {
    dayPlan.push({ time: "Morning", text: "Walk or metro to Alfama — self-guided lanes and miradouros." });
    dayPlan.push({ time: "Midday", text: "Baixa lunch stop — confirm return tram/metro before leaving central area." });
    dayPlan.push({ time: "Afternoon", text: "Tram 15E to Belém or return to terminal, 90 minutes before all-aboard." });
  } else if (themeKey === "best-families") {
    dayPlan.push({ time: "Morning", text: "Classic Lisbon Half Day — Alfama walk and Baixa squares at family pace." });
    dayPlan.push({ time: "Midday", text: "Lunch stop and pastel de nata break." });
    dayPlan.push({ time: "Afternoon", text: "Early return to terminal — avoid rushed Sintra with toddlers." });
  } else if (themeKey === "hidden-gem") {
    dayPlan.push({ time: "Morning", text: "Drive south to Arrabida Natural Park — cliff viewpoints and pine forests." });
    dayPlan.push({ time: "Midday", text: "Moscatel wine tasting and cheese pairings on the Setubal Peninsula." });
    dayPlan.push({ time: "Afternoon", text: "Return to Lisbon with generous buffer." });
  } else if (themeKey === "best-photography" || themeKey === "editors-choice") {
    dayPlan.push({
      time: "Morning",
      text: themeKey === "editors-choice" ? "Coach to Sintra — Pena Palace viewpoints and historic centre." : "Sintra forest trails and palace photography stops.",
    });
    dayPlan.push({ time: "Midday", text: "Lunch in Sintra historic centre — travesseiros pastry stop." });
    dayPlan.push({ time: "Afternoon", text: `Cascais promenade or return transfer planned for your ship — ${topExc}.` });
  } else if (themeKey === "best-historic") {
    dayPlan.push({ time: "Morning", text: "Alfama lanes, Sé Cathedral and miradouro viewpoints." });
    dayPlan.push({ time: "Midday", text: "Baixa and Chiado walk — Praça do Comércio and Rossio." });
    dayPlan.push({ time: "Afternoon", text: "Belém monuments and optional Pastéis de Belém stop." });
  } else {
    dayPlan.push({ time: "Morning", text: `Portugal anchor first: ${topExc}.` });
    dayPlan.push({ time: "Midday", text: "Lunch stop — tasca in Lisbon or Sintra depending on destination." });
    dayPlan.push({ time: "Afternoon", text: "Return transfer with explicit IC19 or city traffic buffer." });
  }

  dayPlan.push({
    time: "Return buffer",
    text: `Be back at Lisbon terminal 60–90 minutes before all-aboard (${departLabel} sailing). IC19 traffic from Sintra can add 15–25 minutes in peak summer.`,
  });

  const interestLabels = activeInterests
    .map((i) => INTEREST_OPTIONS.find((o) => o.id === i)?.label ?? i)
    .join(", ")
    .toLowerCase();

  const styleLabel = travelStyle === "diy" ? "independent" : "guided";

  return {
    headline: theme.headline,
    summary: `${theme.summary} A Lisbon port day (~${hours.toFixed(1)} usable hours) for ${party} guest${party === 1 ? "" : "s"} interested in ${interestLabels}, preferring ${styleLabel} travel.`,
    excursions: excursionLinks.slice(0, 5),
    transfers,
    stay: [],
    logistics,
    dayPlan,
  };
}

