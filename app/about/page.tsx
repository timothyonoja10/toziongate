
import AboutStudySection from "@/components/about/AboutStudySection";
import CounterSection from "@/components/about/CounterSection";
import MissionAndVisionSection from "@/components/about/MissionAndVision";
import ProgrammesSecton from "@/components/home/ProgrammesSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="h-24 w-full bg-[#222A8C] flex items-center justify-center">
        <h1 className="text-3xl text-white">About Us</h1>
      </div>
      <AboutStudySection />
      <CounterSection />
      <MissionAndVisionSection />
      <ProgrammesSecton />
    </main>
  );
}
