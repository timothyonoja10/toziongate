
import ContactSection from "@/components/contact/ContactSection";
import MapSection from "@/components/contact/MapSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="h-24 w-full bg-[#222A8C] flex items-center justify-center">
        <h1 className="text-3xl text-white">Contact Us</h1>
      </div>
      <ContactSection />
      <MapSection /> 
    </main>
  );
}
