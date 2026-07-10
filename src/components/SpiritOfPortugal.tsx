import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SpiritOfPortugal() {
  const image = subjectImages.miradouro;

  return (
    <section className="section-padding bg-gradient-to-b from-coastal-50 via-white to-white border-b border-coastal-100">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">The Spirit of Portugal</p>
            <h2 className="section-title mt-2 max-w-xl">
              Centuries of discovery, colour and Atlantic drama
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Portugal blends centuries of maritime history with colourful neighbourhoods, dramatic
              Atlantic scenery, elegant palaces and welcoming food culture. From Lisbon&apos;s seven hills
              to Sintra&apos;s fairytale forests and Cabo da Roca&apos;s windswept cliffs, this is a
              country that rewards cruise passengers who plan with intention.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Lisbon districts reveal azulejo lanes and riverfront grandeur. Sintra palaces rise above
              misty woodland. The Atlantic coast delivers harbour glamour and Europe&apos;s westernmost
              headlands — all within a carefully timed port day from your ship.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { emoji: "🏛️", label: "Lisbon districts" },
                { emoji: "🏰", label: "Sintra palaces" },
                { emoji: "🌊", label: "Cabo da Roca cliffs" },
              ].map((item) => (
                <div key={item.label} className="card-feature text-center">
                  <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
                  <p className="mt-2 text-sm font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <ResponsiveImage
              image={image}
              role="card"
              imgClassName="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-coastal-900/30 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
