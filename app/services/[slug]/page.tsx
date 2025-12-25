
 import { notFound } from "next/navigation"
import { services } from "@/data/services/services"


export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function Page({ params }: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const { 
    title, 
    subtitle, 
    overview, 
    about, 
    whoNeedsThis, 
    whatYouWillLearn, 
    benefits, 
    careerOpportunities, 
    furtherPathways, 
    closing 
  } = service.data

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-xl text-gray-700 mb-6">{subtitle}</p>

      {overview && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>{overview}</p>
        </section>
      )}

      {about && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p>{about}</p>
        </section>
      )}

      {whoNeedsThis?.length && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Who Needs This?</h2>
          <ul className="list-disc pl-5">
            {whoNeedsThis.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {whatYouWillLearn?.length && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What You Will Learn</h2>
          <ul className="list-disc pl-5">
            {whatYouWillLearn.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {benefits?.length && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
          <ul className="list-disc pl-5">
            {benefits.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {careerOpportunities?.length && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Career Opportunities</h2>
          <ul className="list-disc pl-5">
            {careerOpportunities.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </section>
      )}

      {furtherPathways && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Further Pathways</h2>
          <p>{furtherPathways}</p>
        </section>
      )}

      {closing && (
        <section className="mb-6">
          <p>{closing}</p>
        </section>
      )}
    </main>
  )
}
