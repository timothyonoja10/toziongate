
import Link from "next/link";

type Props = {
  content?: string;
};

export default function ClosingSection({ content }: Props) {
  if (!content) return null;

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl bg-white p-8 text-center shadow-md">
          <p className="text-lg leading-relaxed text-gray-700">
            {content}
          </p>
          <Link href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#FF0066]
              px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white
              transition hover:bg-white hover:text-[#FF0066] mt-8">
              Enrol Now
          </Link>
        </div>
      </div>
    </section>
  );
}
