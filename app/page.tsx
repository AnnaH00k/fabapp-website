import Hero from "@/components/Hero";
import StoryChapter from "@/components/StoryChapter";
import AboutSection from "@/components/AboutSection";
import FlyerSection from "@/components/FlyerSection";
import FeedbackSection from "@/components/FeedbackSection";
import FluidBackground from "@/components/FluidBackground";
import WaterFluidCursor from "@/components/WaterFluidCursor";
import { storyChapters } from "@/lib/storyChapters";

export default function Home() {
  return (
    <div className="relative isolate">
      <FluidBackground />
      <WaterFluidCursor />
      <Hero />
      {storyChapters.map((chapter) => (
        <StoryChapter key={chapter.number} data={chapter} />
      ))}
      <AboutSection />
      <FlyerSection />
      <FeedbackSection />
    </div>
  );
}
