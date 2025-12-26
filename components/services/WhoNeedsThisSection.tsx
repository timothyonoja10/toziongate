
import { Users } from "lucide-react";

type WhoNeedsThisItem = {
  title: string;
  description: string;
};

type Props = {
  items: WhoNeedsThisItem[];
};

export default function WhoNeedsThisSection ({ items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-[#222A8C] text-center text-2xl font-bold md:text-3xl">
          Who Needs This?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item, index) => {
            const Icon = Users;

            return (
              <div key={index}
                className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-md transition-shadow hover:shadow-lg"
              >
                {/* Icon */}
                {Icon && (
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <Icon className="h-7 w-7 text-[#FF0066]" />
                  </div>
                )}

                {/* Title */}
                <h3 className="relative mb-4 text-lg text-[#222A8C] font-semibold">
                  {item.title}
                  <span className="absolute left-1/2 top-full mt-2 h-0.5 w-10 -translate-x-1/2 bg-[#FF0066]" />
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};