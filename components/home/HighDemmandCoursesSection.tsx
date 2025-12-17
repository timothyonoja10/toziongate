
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/home/courses";

export default function HighDemandCoursesSection() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#222A8C]">
          High-Demand Courses
        </h2>                
      </div>
          
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
            {/* Image */}
            <div className="relative h-72 w-full">
              <Image src={course.image} alt={course.title} fill className="object-cover"/>
            </div>
          
            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[#222A8C]">
                {course.title}
              </h3>
          
              <p className="mt-3 text-sm text-gray-600 flex-1">
                {course.description}
              </p>
          
              {/* CTA */}
              <div className="mt-6">
                <Link href={course.link} className="inline-block px-5 py-2 text-sm font-medium rounded-md bg-[#FF0066] text-white hover:bg-blue-700 transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}