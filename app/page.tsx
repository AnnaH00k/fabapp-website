import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import FlyerSection from "@/components/FlyerSection";
import FeedbackSection from "@/components/FeedbackSection";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider backFill="fill-blue-light/80" frontFill="fill-blue-mid/70" />
      <FeaturesSection />
      <WaveDivider backFill="fill-blue-mid/70" frontFill="fill-blue-light" />
      <AboutSection />
      <WaveDivider backFill="fill-blue-light" frontFill="fill-navy" height="h-28 md:h-36" />
      <FlyerSection />
      <WaveDivider backFill="fill-navy" frontFill="fill-blue-mid/70" height="h-28 md:h-36" />
      <FeedbackSection />
    </>
  );
}
