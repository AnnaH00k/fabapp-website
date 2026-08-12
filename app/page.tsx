import Hero from "@/components/Hero";
import Chapter01Ankommen from "@/components/chapters/Chapter01Ankommen";
import Chapter02Fragenkataloge from "@/components/chapters/Chapter02Fragenkataloge";
import Chapter03FreiAntworten from "@/components/chapters/Chapter03FreiAntworten";
import Chapter04MultipleChoice from "@/components/chapters/Chapter04MultipleChoice";
import Chapter05Fortschritt from "@/components/chapters/Chapter05Fortschritt";
import Chapter06PraxisTraining from "@/components/chapters/Chapter06PraxisTraining";
import Chapter07AllesImGriff from "@/components/chapters/Chapter07AllesImGriff";
import AboutSection from "@/components/AboutSection";
import FlyerSection from "@/components/FlyerSection";
import FeedbackSection from "@/components/FeedbackSection";
import FluidBackground from "@/components/FluidBackground";
import WaterFluidCursor from "@/components/WaterFluidCursor";

export default function Home() {
  return (
    <div className="relative isolate">
      <FluidBackground />
      <WaterFluidCursor />
      <Hero />
      <Chapter01Ankommen />
      <Chapter02Fragenkataloge />
      <Chapter03FreiAntworten />
      <Chapter04MultipleChoice />
      <Chapter05Fortschritt />
      <Chapter06PraxisTraining />
      <Chapter07AllesImGriff />
      <AboutSection />
      <FlyerSection />
      <FeedbackSection />
    </div>
  );
}
