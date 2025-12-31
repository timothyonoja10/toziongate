
import { cookies } from "next/headers";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import SpeakWithUsSection from "@/components/home/SpeakWithUsSection";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import HighDemandCoursesSecton from "@/components/home/HighDemmandCoursesSection";
import LocationSection from "@/components/home/LocationSection";
import MapExploreSection from "@/components/home/MapExploreSection";
import FlashMessage from "@/components/FlashMessage";

export default async function HomePage() {
  // await the cookie store
  const cookieStore = await cookies(); // <-- still a getter, no await needed for headers
  const flash = cookieStore.get("flash")?.value;

  return (
    <main className="min-h-screen bg-gray-50">
      <FlashMessage initialMessage={flash} />
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
