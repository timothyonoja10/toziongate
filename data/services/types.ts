

export type Service = {
  id: string
  slug: string
  data: ServiceData
}

export type ServiceData = {
  title: string
  subtitle: string
  overview: string
  about: string
  whoNeedsThis: {
    title: string
    description: string
  }[]
  whatYouWillLearn: {
    title: string
    description: string
  }[]
  benefits: {
    title: string
    description: string
  }[]
  whyChooseUs: {
    title: string
    description: string
  }[]
  careerOpportunities: string[]
  furtherPathways: string
  closing: string
}
