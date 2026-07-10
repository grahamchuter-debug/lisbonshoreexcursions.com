# Ultimate Portugal Discovery — Internal Planning

**Status:** In preparation — not public-facing as a bookable product  
**Public route:** `/signature-portugal-experience` (placeholder only)  
**Do not imply this product exists on the website until launch.**

## Product concept

**Ultimate Portugal Discovery** is the flagship Signature Experience for lisbonshoreexcursions.com — a curated small-group day (maximum 8 guests) designed from scratch with a local Lisbon/Sintra partner once demand justifies development.

This is the experience the World 2.0 homepage is architected around: when launched, it becomes the primary editorial recommendation without requiring a homepage redesign.

## Target passenger

- First-time cruise passenger calling at Lisbon
- Wants the "best of Portugal" in one port day without coach-tour inertia
- Values small-group pacing, photography stops and return-to-ship confidence
- Budget: premium / mid-premium

## Proposed route (indicative)

Morning sequence depends on terminal and ship hours. Typical 8–9 hour call:

1. **Terminal pickup** — meet at cruise exit with explicit WhatsApp contact
2. **Sintra** — Pena Palace exterior/viewpoints, historic centre stroll (avoid midday coach crush)
3. **Cascais / Cabo da Roca** — coastal promenade and cliff viewpoints when port window allows
4. **Belém** — Jerónimos exterior, Belém Tower riverside, Monument to the Discoveries
5. **Pastéis de Belém** — timed stop for warm custard tarts, not rushed between coach hops
6. **Return** — planned backward from all-aboard with 60–90 min buffer; IC19 and Marginal traffic contingency

## Partner criteria

Local partner must demonstrate:

- Lisbon cruise terminal logistics (Santa Apolónia, Jardim do Tabaco, Alcântara)
- Small-group Mercedes or equivalent vehicle fleet
- Sintra palace timing expertise (queues, mist, walking levels)
- Explicit return-to-ship planning culture — not repurposed land tours
- English-speaking guides with editorial tone (informative, not scripted)

## Commercial trigger

Launch when:

- Sustained enquire/interest volume for Signature Experience
- Partner contract with quality assurance and cancellation policy
- Pricing and booking flow integrated (not enquiry-only)
- Editorial team satisfied with test departures and return buffers

Until then:

- Homepage shows "In preparation" badge
- Wow Collection page lists Ultimate Portugal Discovery as planned experience
- Editor's Choice remains **Sintra & Cascais Full Day** (bookable alternative)

## Site integration checklist (at launch)

- [ ] Set `comingSoon: false` in `src/data/signature-experience.ts`
- [ ] Replace placeholder copy on `/signature-portugal-experience`
- [ ] Update Editor's Collection signature card
- [ ] Add to Wow Collection as flagship item
- [ ] Update comparison pages that reference Signature Experience
- [ ] Add booking CTA (partner URL or internal checkout)
- [ ] Remove "register interest" as primary CTA

## What we will NOT do before launch

- Imply availability on excursion cards or comparison verdicts
- List pricing without confirmed partner rates
- Mark as Editor's Choice over existing bookable Sintra & Cascais Full Day

## Related internal paths

- Data: `src/data/signature-experience.ts`
- Component: `src/components/SignaturePortugalFeature.tsx`
- Wow Collection: `src/data/wow-collection.ts`
- AGENTS.md World 2.0 component list
