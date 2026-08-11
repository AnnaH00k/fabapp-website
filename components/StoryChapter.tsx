import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import type { StoryChapterData, StoryTone } from "@/lib/storyChapters";

const TONE_TEXT: Record<StoryTone, string> = {
  light: "text-navy",
  mid: "text-navy",
  dark: "text-blue-light",
};

const TONE_KICKER: Record<StoryTone, string> = {
  light: "text-navy/60",
  mid: "text-navy/60",
  dark: "text-blue-light/70",
};

const TONE_DESCRIPTION: Record<StoryTone, string> = {
  light: "text-navy/80",
  mid: "text-navy/80",
  dark: "text-blue-light/85",
};

const TONE_CAPTION: Record<StoryTone, string> = {
  light: "text-navy/70",
  mid: "text-navy/70",
  dark: "text-blue-light/75",
};

export default function StoryChapter({ data }: { data: StoryChapterData }) {
  const { number, kicker, title, description, tone, images } = data;

  return (
    <section data-tone={tone} className={`py-24 ${TONE_TEXT[tone]}`}>
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className={`font-mono text-xs tracking-[0.2em] uppercase ${TONE_KICKER[tone]}`}>
          {number} — {kicker}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className={`mx-auto mt-4 max-w-2xl text-left text-lg ${TONE_DESCRIPTION[tone]}`}>
          {description}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {images.map((image) => (
            <figure key={image.src} className="w-48 sm:w-56 md:w-64">
              <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/40 shadow-xl">
                <Image
                  src={withBasePath(`/images/screenshotsApp/${image.src}`)}
                  alt={image.caption}
                  width={1440}
                  height={3120}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className={`mt-3 text-center text-sm font-medium ${TONE_CAPTION[tone]}`}>
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
