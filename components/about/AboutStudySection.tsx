import Image from "next/image";
import { GraduationCap, Network, Briefcase } from "lucide-react";

export default function AboutStudySection() {
  return (
    <section className="w-full px-4 py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        
        {/* WHO WE ARE (2/3 width on tablet & desktop) */}
        <div className="md:col-span-2 bg-white shadow-lg overflow-hidden">
          <div className="relative h-68 w-full">
            <Image src="/about/about-us.jpg" alt="Who we are" fill className="h-44 object-cover"/>
          </div>

          <div className="p-6 md:p-8">
            <h2 className="mb-4 text-xl text-[#222A8C] font-bold">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Toziongate Institute is a UK-registered professional development
              and career advancement hub dedicated to equipping learners with
              globally recognised qualifications. Our programmes combine
              academic quality, industry relevance, and flexible learning to
              support international career growth.
            </p>
          </div>
        </div>

        {/* WHY STUDY WITH US (1/3 width) */}
        <div className="flex flex-col gap-3">
          <h2 className="mb-4 text-xl text-center text-[#222A8C] font-bold">
            Why Study With Us?
          </h2>
          <WhyCard icon={<GraduationCap size={32} />} title="Globally Recognised Qualifications"
            description="CPD-accredited certificates and diplomas recognised by employers and institutions worldwide."
          />

          <WhyCard icon={<Network size={32} />} title="London Graduation & Networking"
            description="Graduation and professional networking events in London with visa invitation support."
          />

          <WhyCard icon={<Briefcase size={32} />} title="Career Coaching & Job Access"
            description="Live career coaching sessions and extended access to UK and international job opportunities."
          />

        </div>
      </div>
    </section>
  );
}

/* ------------------------------
   Reusable Why Study Card
-------------------------------- */
function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center border p-6 text-center shadow-sm">
      <div className="mb-4 text-[#222A8C]">{icon}</div>
      <h3 className="mb-2 text-md font-semibold text-[#222A8C] ">
        {title}
      </h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}
