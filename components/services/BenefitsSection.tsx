type Item = {
  title: string;
  description: string;
};

type Props = {
  items?: Item[];
};

export default function BenefitsSection({ items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-[#222A8C] text-center text-2xl font-bold md:text-3xl">
          Benefits
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="mb-3 font-semibold text-[#222A8C]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
