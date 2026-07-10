# Lisbon Shore Excursions

World 2.0 editorial cruise planning site for lisbonshoreexcursions.com.

## Positioning

Gateway to Portugal / Portugal Begins in Lisbon

## Key paths

- Homepage: `src/app/page.tsx`
- World 2.0 components: `ChooseYourPortugal.tsx`, `SpiritOfPortugal.tsx`, `HonestAdvice.tsx`, `EditorsCollection.tsx`, `WowCollectionFeature.tsx`, `SignaturePortugalFeature.tsx`, `CruisePassengerRatings.tsx`
- Signature placeholder: `/signature-portugal-experience`
- Internal planning: `FUTURE_SIGNATURE_TOUR.md`
- Content generator: `scripts/generate-lisbon-data.mjs`
- Data: `src/data/`

## Regenerate content

```bash
npm run generate:data
npm run download:images
npm run build
```
