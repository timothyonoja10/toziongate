type Props = {
  jobs?: string[];
};

export default function CareerOpportunitiesSection({ jobs }: Props) {
  if (!jobs?.length) return null;

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Career Opportunities
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-4 shadow-sm border-1 border-[#FF0066]"
            >
              {job}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
