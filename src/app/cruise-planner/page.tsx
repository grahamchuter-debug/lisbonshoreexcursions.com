import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { PortugalCruisePlanner } from "@/components/PortugalCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Portugal cruise plan from Lisbon. Enter your arrival and departure times, party size, interests, mobility, budget and travel style — get tailored excursions, guides and a realistic day plan.";

export const metadata = buildMetadata({
  title: "Portugal Cruise Planner — Lisbon Port Day Itinerary",
  description,
  path,
  keywords: ["Lisbon cruise planner", "Portugal cruise day plan", "Lisbon port day itinerary", "Sintra from Lisbon planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Portugal Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Portugal Cruise Planner", description, path })]} />
      <PageHero
        title="Portugal Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial itinerary recommendations from Sintra and the coast to Lisbon, food tours and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <PortugalCruisePlanner />
        </div>
      </section>
    </>
  );
}
