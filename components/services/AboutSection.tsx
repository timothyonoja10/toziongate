import Image from "next/image";

interface AboutSectionProps {
  about: string;
  image2: string;
}

export default function AboutSection({
  about,
  image2,
}: AboutSectionProps) {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Text */}
          <div className="md:py-8">
            <h2 className="mb-3 text-[#222A8C] text-xl font-bold uppercase tracking-wide md:text-2xl">
              About
            </h2>

            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              {about}
            </p>

          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={image2}
              alt={"image 2"}
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
