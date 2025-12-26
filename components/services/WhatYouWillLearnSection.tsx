type Item = {
  title: string;
  description: string;
};

type Props = {
  items?: Item[];
};

export default function WhatYouWillLearnSection({ items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-[#222A8C] text-center text-2xl font-bold md:text-3xl">
          What You Will Learn
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md
               border-l-4 border-l-[#FF0066]"
            >
              <h3 className="mb-2 text-[#222A8C] font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
