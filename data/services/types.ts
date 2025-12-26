

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
  image1: string
  image2: string
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
