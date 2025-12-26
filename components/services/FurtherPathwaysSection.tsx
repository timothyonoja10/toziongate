type Props = {
  content?: string;
};

export default function FurtherPathwaysSection({ content }: Props) {
  if (!content) return null;

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-[#222A8C] text-2xl font-bold md:text-3xl">
          Further Pathways
        </h2>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    </section>
  );
}
