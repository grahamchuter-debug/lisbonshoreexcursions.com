import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import lisbonSchedule from "./imported-schedules/lisbon.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Lisbon cruise ship schedules?",
    answer:
      "Schedules are compiled from published timetables and updated periodically. Times and berths can change — confirm with your cruise line before booking excursions.",
  },
  {
    question: "How far is Sintra from Lisbon cruise terminal?",
    answer:
      "30–40 minutes by road via the IC19 — allow a full day for Sintra and Cascais excursions.",
  },
  {
    question: "Can I visit Sintra on a short port call?",
    answer:
      "Calls under 7 usable hours are tight for Sintra — choose Classic Lisbon Half Day or Belém independently. Standard 8–11 hour calls suit Sintra & Cascais Full Day.",
  },
];

const SCHEDULE_TIPS = [
  "Check which terminal your ship uses — Santa Apolónia, Jardim do Tabaco or Alcântara — before planning transport",
  "Book Sintra excursions before sailing on multi-ship days in July and August",
  "Allow 60–90 minute return buffer from Sintra to Lisbon terminal",
  "Morning departures protect against afternoon IC19 traffic returning from Sintra",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    seoTitle: "Lisbon Cruise Ship Schedule — Portugal Port Calls",
    metaDescription:
      "Lisbon cruise ship schedule — see which ships call at Lisbon terminals and plan Portugal shore excursions around published arrival and departure times.",
    intro:
      "Lisbon is the gateway to Portugal on Atlantic, Mediterranean and Iberian itineraries. Check scheduled arrivals and departures before booking Sintra, Lisbon or food excursions.",
    description:
      "Portugal's cruise capital — Sintra 30 km northwest, Cascais on the Atlantic coast, Alfama and Belém within minutes of central terminals.",
    scheduleOverview:
      "Peak cruise traffic April through October, with heaviest calls May to September on Atlantic crossing and Mediterranean itineraries.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  lisbon: lisbonSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
