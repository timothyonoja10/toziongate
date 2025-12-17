import Image from "next/image";
import Link from "next/link";

export default function MapExploreSecton() { 
  return(
    <div className="bg-gray-50 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                
        {/* Map (comes first on mobile) */}
        <div className="md:col-span-2 rounded-lg overflow-hidden shadow">
          <iframe title="Toziongate Location" loading="lazy" className="w-full h-[300px] md:h-full"
            src="https://www.google.com/maps?q=Dagenham,Essex,UK&output=embed"/>
        </div>
      
        {/* Card */}
        <div className="bg-white border shadow-md overflow-hidden flex flex-col">
          {/* Image */}
          <div className="relative h-56 w-full">
            <Image src="/future.jpg" alt="Career Guidance" fill className="object-cover"/>
          </div>
      
          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg font-semibold text-[#222A8C]">
              Shape Your Future with Expert Support
            </h3>
      
            <p className="mt-3 text-sm text-gray-600 flex-1">
              Receive personalised guidance for your education and career
              journey. From accredited training and professional development
              to NHS and HSC job applications and international opportunities,
              Toziongate is here to support you every step of the way.
            </p>
      
            {/* CTA */}
            <div className="mt-6">
              <Link href="/services" className="inline-block text-center px-5 py-3 text-sm 
                font-medium rounded-md bg-[#FF0066] text-white hover:bg-blue-700 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}