import Image from "next/image";
import Link from "next/link";

interface MainSectionProps {
  title: string;
  overview: string;
  image1: string;
}

export default function MainSection({
  title,
  overview,
  image1,
}: MainSectionProps) {
  return (
    <section className="w-full bg-[#222A8C] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Text */}
          <div className="text-center md:text-left md:items-start">
            <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
              {title}
            </h2>

            <p className="mb-8 text-white text-sm leading-relaxed text-gray-600">
              {overview}
            </p>

            <Link href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#FF0066]
                px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white
                transition hover:bg-white hover:text-[#FF0066]">
                Enrol Now
            </Link>

          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-xl md:m-2">
            <Image
              src={image1}
              alt={title}
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
