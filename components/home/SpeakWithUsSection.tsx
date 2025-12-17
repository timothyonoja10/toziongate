import { Phone } from "lucide-react";

export default function SpeakWithUsSecton() {
  return (
    <div className="py-20 mx-auto px-4 text-center px-[10%] md:px-[20%]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#222A86]">
        Speak With Toziongate
      </h2>
          
      <p className="mt-4 text-gray-600 text-base md:text-md">
        Got questions or need expert guidance? Whether it’s NHS and HSC job
        applications, CV and personal statement support, accredited training,
        or travel and study guidance, our team is here to help.
      </p>
          
      <div className="mt-8 flex justify-center">
        <a href="https://wa.me/447949387706" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#FF0066] 
            text-white font-semibold text-lg hover:bg-[#222A86] transition">
            <Phone className="h-4 w-4" />
            +44 7949 387706
        </a>
      </div>
    </div>
  )
}