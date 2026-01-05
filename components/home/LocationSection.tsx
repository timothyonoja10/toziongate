import { Facebook, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";

export default function LocationSecton() {
  return (
    <div className="bg-white py-20 max-w-3xl mx-auto px-4 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#222A8C]">
        Toziongate
      </h2>
          
      {/* Subtitle */}
      <p className="mt-2 text-[#222A8C] text-base">
        Where to Find Us
      </p>
          
      {/* Address */}
      <div className="mt-6 flex flex-col items-center gap-2 text-gray-700">
        <MapPin className="h-6 w-6 text-blue-600" />
          <p className="text-sm md:text-base">
            Barking and Dagenham, United Kingdom
          </p>
      </div>
          
      {/* Social Links */}
      <div className="mt-8 flex justify-center gap-6">
        <Link href="https://www.facebook.com/toziongate" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow hover:bg-blue-50 transition">
          <Facebook className="h-5 w-5 text-blue-600" />
        </Link>
          
        <Link href="https://www.linkedin.com/company/toziongate" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow hover:bg-blue-50 transition"
          aria-label="LinkedIn">
          <Linkedin className="h-5 w-5 text-blue-600" />
        </Link>
      </div>
    </div>
  )
}