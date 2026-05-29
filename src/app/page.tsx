import Hero from "@/components/hero/Hero";
import Pillars from "@/components/home/Pillars";
import ExosomeSection from "@/components/home/ExosomeSection";
import HowItWorks from "@/components/home/HowItWorks";
import TherapeuticAreas from "@/components/home/TherapeuticAreas";
import DataEvidence from "@/components/home/DataEvidence";
import Comparison from "@/components/home/Comparison";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <ExosomeSection />
      <HowItWorks />
      <TherapeuticAreas />
      <DataEvidence />
      <Comparison />
      <CtaBanner />
    </>
  );
}
