
import Image from "next/image";
import Link from "next/link";
import { programmes } from "@/data/home/programmes"

export default function ProgrammesSecton() {
  return (
    <div className="bg-white py-20 max-w-7xl mx-auto px-8">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#222A8C]">
          Explore Our Services & Programmes
        </h2>        
      </div>
          
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {programmes.map((item, index) => (
          <div key={index} className=" bg-white border overflow-hidden flex flex-col">
            {/* Image */}
            <div className="relative h-64 w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover"/>
            </div>
          
            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[#FF0066]">
                {item.title}
              </h3>
          
              <p className="mt-3 text-sm text-gray-600 flex-1">
                {item.description}
              </p>
          
              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={item.link} className="px-5 py-2 rounded-lg bg-[#FF0066] text-white text-sm font-medium hover:bg-blue-700">
                  {item.primaryCta}
                </Link>
          
                <Link href="/contact" className="px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100">
                  {item.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}