import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Lisbon Shore Excursions",
  description:
    "About Lisbon Shore Excursions — an independent Portugal cruise planning authority for passengers arriving into Lisbon on Atlantic and Iberian sailings.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Lisbon Shore Excursions", description: "About Lisbon Shore Excursions.", path })]} />
      <PageHero title="About Lisbon Shore Excursions" subtitle="An independent planning authority built for cruise passengers — your gateway to Portugal from Lisbon cruise port." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose prose-gray">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Lisbon. Whether you have one day ashore or want to understand Sintra, the Atlantic coast, Belém and historic neighbourhoods before you sail, our goal is to help you choose the best version of Portugal — not just browse a catalogue of tours.
            </p>
            <p>
              We focus on the practical decisions that shape a good Portugal cruise day: Sintra or Lisbon, whether independent exploring suits your hours, when a small-group tour beats a large coach, and how to build a realistic return-to-ship buffer on busy IC19 and coast road traffic.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic tourism. We highlight honest editorial comparisons, Editor&apos;s Collection recommendations for different traveller types, and future flagship products like The Wow Collection and Ultimate Portugal Discovery. Ship schedules and transfer times are indicative — always confirm all-aboard times with your cruise line.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
