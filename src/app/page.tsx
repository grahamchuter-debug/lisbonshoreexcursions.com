import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourPortugal } from "@/components/ChooseYourPortugal";
import { SpiritOfPortugal } from "@/components/SpiritOfPortugal";
import { WowCollectionFeature } from "@/components/WowCollectionFeature";
import { SignaturePortugalFeature } from "@/components/SignaturePortugalFeature";
import { EditorsCollection } from "@/components/EditorsCollection";
import { HonestAdvice } from "@/components/HonestAdvice";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { CruisePassengerRatings } from "@/components/CruisePassengerRatings";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs, homepageTagline } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { AtlanticLinks } from "@/components/AtlanticLinks";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Lisbon — Gateway to Portugal | Cruise Port Guide",
  description:
    "Discover the best of Portugal from Lisbon cruise port. Honest comparisons, Editor's Collection recommendations and carefully selected shore excursions with independent cruise advice.",
  path: "/",
  keywords: [
    "Gateway to Portugal",
    "Lisbon cruise port",
    "Sintra shore excursions",
    "Lisbon shore excursions",
    "Portugal cruise planning",
    "Lisbon cruise excursions",
  ],
});

const SITE_DESCRIPTION =
  "The gateway to Portugal — help choosing between Sintra, Lisbon, the Atlantic coast and Belém, with carefully selected shore excursions and honest independent cruise advice from Lisbon cruise port.";

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Lisbon — Gateway to Portugal",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      {/* Hero — Gateway positioning */}
      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100 animate-fade-up">Gateway to Portugal</p>
          <h1 className="home-hero-heading animate-fade-up-delay">{homepageTagline}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            Carefully selected Lisbon shore excursions, independent cruise advice and honest comparisons
            — because the best bookings start with understanding which Portugal experience suits your
            port day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions" className="btn-accent">
              Explore Shore Excursions
            </Link>
            <Link
              href="/compare"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Help Me Choose My Portugal Experience
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 animate-fade-up-delay-2">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">🏰</span> Sintra
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">⛵</span> Lisbon
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">🌊</span> Atlantic Coast
            </span>
          </div>
        </div>
      </section>

      <ChooseYourPortugal />
      <SpiritOfPortugal />
      <WowCollectionFeature />
      <SignaturePortugalFeature />
      <EditorsCollection />
      <HonestAdvice />

      {/* Featured excursions */}
      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-coastal-200">When you&apos;re ready</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Featured shore excursions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Once you know which experience suits your day, these cruise-timed tours are designed for
              passengers who already understand why Portugal matters.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => {
              const image = getExcursionImage(e.slug);
              const isEditorsChoice = e.slug === "sintra-cascais-full-day";
              return (
                <Link
                  key={e.slug}
                  href={`/shore-excursions/${e.slug}`}
                  className="card-editorial group overflow-hidden bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {isEditorsChoice && (
                      <span className="absolute left-3 top-3 badge-editors-choice">
                        ⭐ Editor&apos;s Choice
                      </span>
                    )}
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="font-display text-lg font-bold group-hover:text-maple-300">{e.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{e.tagline}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-maple-300">
                      Discover more →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-accent">
              All Shore Excursions
            </Link>
          </div>
        </div>
      </section>

      <ExperienceSelector />

      <CruisePassengerRatings />

      {/* Independent Lisbon guide teaser */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="card-accent">
            <p className="section-eyebrow">Independent exploring</p>
            <h2 className="section-title mt-2">Can you explore Lisbon without a tour?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Yes — and Lisbon is better for it than most European cruise ports. Alfama, Baixa, Chiado,
              Tram 28, Belém and the riverfront are all realistic on a port day with a clear return
              buffer. Our independent guide covers metro routes, tram timings and when DIY beats a ship tour.
            </p>
            <Link href="/guides/independent-lisbon-guide" className="btn-secondary mt-6 inline-flex text-sm">
              Read the independent Lisbon guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison guides */}
      <section className="section-padding bg-coastal-50">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">Sintra or Lisbon?</h3>
            <p className="mt-3 text-gray-700">
              Fairytale palaces versus city culture — our comparison pages help you choose the day that
              suits your interests, mobility and port window.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/sintra-or-lisbon" className="btn-secondary text-sm">
                Compare options
              </Link>
              <Link href="/compare/best-lisbon-shore-excursion" className="btn-secondary text-sm">
                Best excursion guide
              </Link>
            </div>
          </div>
          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">Private tour or large coach?</h3>
            <p className="mt-3 text-gray-700">
              Prefer exclusive small-group pacing? Compare private touring with standard coach
              excursions — and see how The Wow Collection is being prepared for passengers who want
              Portugal done properly.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/private-tour-vs-coach-tour" className="btn-secondary text-sm">
                Private vs coach
              </Link>
              <Link href="/wow-collection" className="btn-secondary text-sm">
                The Wow Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Planning hub */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Plan your port day</p>
          <h2 className="section-title mt-2">Everything you need to choose the right Portugal experience</h2>
          <p className="section-subtitle">
            Not just an excursion catalogue — comparisons, guides, schedules and honest advice because
            the best bookings start with genuine understanding.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-maple-600">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cruise schedule teaser */}
      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            See which ships call at Lisbon
          </h2>
          <p className="mt-4 text-white/85">
            Check cruise ship schedules before you book Sintra, Lisbon or food excursions. Times are
            indicative — always confirm with your cruise line.
          </p>
          <Link href="/ship-schedules/lisbon" className="btn-accent mt-8 inline-flex">
            View Lisbon ship schedules
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Lisbon & Portugal — FAQs" />
        </div>
      </section>

      <AtlanticLinks />

      {/* Trust */}
      <section className="section-padding bg-coastal-50 border-t border-coastal-100">
        <div className="container-wide max-w-3xl text-center">
          <p className="section-eyebrow">Why trust us</p>
          <h2 className="section-title mt-2">Independent editorial advice</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {SITE.name} is an independent planning resource — not affiliated with any cruise line or the
            Port of Lisbon. We recommend honestly, build return-to-ship buffers into every guide, and
            never imply a product exists before it is ready to book.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <span className="pill">Cruise-focused planning</span>
            <span className="pill">Carefully selected excursions</span>
            <span className="pill">Honest recommendations</span>
            <span className="pill">Independent advice</span>
            <span className="pill">Local expertise</span>
            <span className="pill">Secure booking partners</span>
          </div>
        </div>
      </section>
    </>
  );
}
