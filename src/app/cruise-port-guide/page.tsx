import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { portGuideContent, portGuideFaqs } from "@/data/port-guide";

const path = "/cruise-port-guide";
const image = siteImages.port;
const description =
  "The complete Lisbon cruise port guide — terminal layout, metro and tram access, transfers to Sintra and Cascais, facilities and return-to-ship timing.";

export const metadata = buildMetadata({
  title: "Lisbon Cruise Port Guide",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["Lisbon cruise port", "Lisbon cruise terminal", "Sintra from Lisbon", "Lisbon cruise port guide"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Lisbon Cruise Port Guide", path },
];

export default function CruisePortGuidePage() {
  const { terminals, sections } = portGuideContent;

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(portGuideFaqs), articleSchema({ title: "Lisbon Cruise Port Guide", description, path, image: image.src })]} />
      <PhotoHeroBand image={image} eyebrow="Terminal guidance" title="Lisbon Cruise Port Guide" subtitle="Where ships dock, how to reach Sintra, Cascais and central Lisbon, metro and tram connections and return-to-ship timing — everything for arrival day at Lisbon." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title text-2xl mb-4">Lisbon cruise berths at a glance</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Terminal</th>
                  <th className="px-4 py-3 text-left font-semibold">Quay</th>
                  <th className="px-4 py-3 text-left font-semibold">Used by</th>
                  <th className="px-4 py-3 text-left font-semibold">Portugal access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {terminals.map((t) => (
                  <tr key={t.name}>
                    <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                    <td className="px-4 py-3 text-gray-600">{t.quay}</td>
                    <td className="px-4 py-3 text-gray-600">{t.usedBy}</td>
                    <td className="px-4 py-3 text-gray-600">{t.cityAccess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">Check your cruise app the night before — afternoon IC19 traffic to Sintra or the Marginal coast road can add 15–25 minutes to returns.</p>

          <div className="prose-body mt-4">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link href="/guides/sintra-from-lisbon-cruise-port" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Sintra guide</h3><p className="mt-1 text-sm text-gray-600">Fairytale palaces 30 km northwest.</p></Link>
            <Link href="/guides/independent-lisbon-guide" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Independent Lisbon</h3><p className="mt-1 text-sm text-gray-600">Metro, trams and walkable neighbourhoods.</p></Link>
            <Link href="/ship-schedules/lisbon" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Ship schedules</h3><p className="mt-1 text-sm text-gray-600">See who&apos;s in port before you book.</p></Link>
          </div>

          <div className="mt-12"><FAQSection faqs={portGuideFaqs} title="Lisbon Cruise Port — FAQs" /></div>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
