import HeroSection from "./components/HeroSection";
import AboutImpact from "./components/AboutImpact";
import ImpactStats from "./components/ImpactStats";
import MissionBanner from "./components/MissionBanner";
import InitiativesSection from "./components/InitiativesSection";
import SustainabilitySection from "./components/SustainabilitySection";
import SDGSection from "./components/SDGSection";
import SuccessStories from "./components/SuccessStories";
import ThinkTankSection from "./components/ThinkTankSection";
import PartnershipSection from "./components/PartnershipSection";
import FinalCTA from "./components/FinalCTA";

export const metadata = {
  title: "Impact | Zep Research",
  description:
    "Discover how Zep Research is advancing global research and academic innovation through conferences, publications, and collaborative initiatives.",
};

export default function Page() {
  return (
    <main className="bg-white">
      <HeroSection />
      <AboutImpact />
      <ImpactStats />
      <MissionBanner />
      <InitiativesSection />
      <SustainabilitySection />
      <SDGSection />
      <SuccessStories />
      <ThinkTankSection />
      <PartnershipSection />
      <FinalCTA />
    </main>
  );
}
