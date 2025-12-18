import Image from "next/image";

export default function MissionAndVisionSection() {
  return (
    <section className="w-full px-4 bg-white py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        
        <h2 className="mb-12 text-center text-[#222A8C] text-lg font-bold">
          Mission & Vision
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Mission Card */}
          <div className="overflow-hidden border bg-white shadow-lg">
            <div className="relative h-52 w-full">
              <Image
                src="/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-sm font-semibold text-[#222A8C]">
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To equip learners with internationally relevant skills,
                accredited qualifications, and practical career guidance
                through accessible education, innovative learning solutions,
                and strong global partnerships.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="overflow-hidden border bg-white shadow-lg">
            <div className="relative h-52 w-full">
              <Image
                src="/vision.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-sm font-semibold text-[#222A8C]">
                Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted global institute that empowers individuals
                to achieve academic excellence, professional success, and
                international career opportunities through inclusive,
                high-quality education.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
