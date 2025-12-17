
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import SpeakWithUsSection from "@/components/home/SpeakWithUsSection";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import HighDemandCoursesSecton from "@/components/home/HighDemmandCoursesSection";
import LocationSection from "@/components/home/LocationSection";
import MapExploreSection from "@/components/home/MapExploreSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <WelcomeSection />
      <WhyChooseSection />
      <SpeakWithUsSection />
      <ProgrammesSection />
      <HighDemandCoursesSecton />
      <LocationSection />
      <MapExploreSection />
    </main>
  );
}
