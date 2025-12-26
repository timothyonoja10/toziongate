
import { notFound } from "next/navigation"
import { services } from "@/data/services/services"

import MainSection from "@/components/services/MainSection";
import AboutSection from "@/components/services/AboutSection";
import WhoNeedsThisSection from "@/components/services/WhoNeedsThisSection";
import WhatYouWillLearnSection from "@/components/services/WhatYouWillLearnSection";
import BenefitsSection from "@/components/services/BenefitsSection";
import CareerOpportunitiesSection from "@/components/services/CareerOpportunitiesSection";
import FurtherPathwaysSection from "@/components/services/FurtherPathwaysSection";
import ClosingSection from "@/components/services/ClosingSection";

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
    image1,
    image2,
    about, 
    whoNeedsThis, 
    whatYouWillLearn, 
    benefits, 
    careerOpportunities, 
    furtherPathways, 
    closing 
  } = service.data

  return (
    <main className="min-h-screen bg-gray-50">
      <MainSection title={title} overview={overview} image1={image1}/>
      <AboutSection about={about} image2={image2} />


      <WhoNeedsThisSection items={whoNeedsThis} />
      <WhatYouWillLearnSection items={whatYouWillLearn} />
      <BenefitsSection items={benefits} />
      <CareerOpportunitiesSection jobs={careerOpportunities} />
      <FurtherPathwaysSection content={furtherPathways} />
      <ClosingSection content={closing} />
    </main>
  )
}
