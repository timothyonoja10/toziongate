
import ProgrammesSection from "@/components/home/ProgrammesSection";
import HighDemandCoursesSection from "@/components/home/ProgrammesSection";

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="h-24 w-full bg-[#222A8C] flex items-center justify-center">
        <h1 className="text-3xl text-white">Our Services</h1>
      </div>
      <ProgrammesSection />
      <HighDemandCoursesSection />
    </main>
  );
}
