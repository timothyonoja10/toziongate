
import { cookies } from "next/headers";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import SpeakWithUsSection from "@/components/home/SpeakWithUsSection";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import HighDemandCoursesSecton from "@/components/home/HighDemmandCoursesSection";
import LocationSection from "@/components/home/LocationSection";
import MapExploreSection from "@/components/home/MapExploreSection";

export default async function HomePage() {
  // await the cookie store
  const cookieStore = await cookies(); // <-- still a getter, no await needed for headers
  const flashCookie = cookieStore.get("flash")?.value;

  let flash: string | null = null;
  if (flashCookie) {
    flash = flashCookie;

    // To delete, we must set it again with maxAge: 0
    cookieStore.set("flash", "", { path: "/", maxAge: 0 });
  }
  return (
    <main className="min-h-screen bg-gray-50">
      {flash && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-800">
          {flash}
        </div>
      )}
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
