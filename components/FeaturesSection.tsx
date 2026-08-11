import Image from "next/image";
import { features, heroSectionTitle } from "@/lib/content";
import { withBasePath } from "@/lib/paths";

const images = [
  { src: withBasePath("/images/screenshot-fertige-kataloge.png"), w: 900, h: 1505 },
  { src: withBasePath("/images/screenshot-eigene-kataloge.png"), w: 900, h: 1512 },
  { src: withBasePath("/images/screenshot-kataloge-teilen.png"), w: 900, h: 1735 },
];

export default function FeaturesSection() {
  return (
    <section id="funktionen" className="bg-blue-mid/70 pt-4 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
          {heroSectionTitle}
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-3xl bg-blue-light/60 p-6 text-center ring-1 ring-white/40"
            >
              <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl">
                <Image
                  src={images[i].src}
                  alt={feature.title}
                  width={images[i].w}
                  height={images[i].h}
                  className="mx-auto h-full w-auto object-cover object-top drop-shadow-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-navy">{feature.title}</h3>
              <p className="mt-2 text-navy/75">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
