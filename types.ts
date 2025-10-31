
export interface NavLink {
  name: string;
  path: string;
  subLinks?: NavLink[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string[];
  heroHeadline: string;
  heroSubheadline: string;
  imageUrl?: string;
  ctas: Cta[];
  commonCalls?: string[]; // For Emergency Electrical Repair
  capabilities?: string[]; // For other services
  bullets?: string[]; // For other services
}

export interface Industry {
  id: string;
  title: string;
  shortDescription: string;
  description: string[];
  heroHeadline: string;
  heroSubheadline: string;
  imageUrl?: string;
  ctas: Cta[];
  capabilities?: string[];
}

export interface ServiceArea {
  id: string;
  name: string;
  description: string[];
  heroHeadline: string;
  heroSubheadline: string;
  servicesIncluded: string[];
  ctas: Cta[];
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: {
    headline: string;
    body: string;
  };
  sections: BlogSection[];
  keyTakeaway?: string;
  finalWord: string;
  seoSummary: {
    primaryKeywords: string[];
    supportingEntities: string[];
    internalLinks: { text: string; path: string; }[];
    localAnchor?: string;
  };
}

export interface BlogSection {
  headline: string;
  body: string | string[];
  bullets?: string[];
  cta?: Cta;
}

export interface Cta {
  text: string;
  path?: string;
  isExternal?: boolean;
  isPhone?: boolean;
  phone?: string;
}

export interface HomePageContent {
  hero: {
    videoUrl: string;
    videoPoster: string;
    headline: string;
    subheadline: string;
    ctas: Cta[];
  };
  introText: string[];
  servicesSection: {
    headline: string;
    copy: string;
    cta: Cta;
  };
  whoWeServeSection: {
    headline: string;
    copy: string;
    cta: Cta;
  };
  serviceAreaSection: {
    copy: string;
    cta: Cta;
  };
  testimonialsSection: {
    headline: string;
    testimonials: { quote: string; author: string; }[];
  };
  trustedBySection: {
    headline: string;
    copy: string;
    logos: string[];
  };
  finalCtaBanner: {
    headline: string;
    copy: string;
    ctas: Cta[];
  };
}

export interface AboutPageContent {
  hero: {
    headline: string;
    subheadline: string;
    body: string[];
    stats: { label: string; value: string; }[];
  };
  valuesSection: {
    headline: string;
    values: { title: string; description: string; }[];
    copy: string;
    cta?: Cta;
  };
}

export interface ServiceOverviewContent {
  hero: {
    headline: string;
    intro: string;
  };
  cta: Cta;
}

export interface IndustriesOverviewContent {
  hero: {
    headline: string;
    subheadline: string;
    body: string[];
  };
  cta: Cta;
}

export interface ServiceAreasOverviewContent {
  hero: {
    headline: string;
    subheadline: string;
    body: string[];
  };
  cta: Cta;
}

export interface BlogOverviewContent {
  hero: {
    headline: string;
  };
}

export interface ContactPageContent {
  hero: {
    headline: string;
    copy: string[];
    address: string;
    phone: string;
    email: string;
  };
}

export interface FooterContent {
  column1: {
    name: string;
    address: string;
    dispatch: string;
    email: string;
    license: string;
    status: string;
  };
  column2Links: NavLink[];
  column3Areas: string[];
  column4: {
    title: string;
    certifications: string[];
    links: NavLink[];
  };
  bottomBar: string;
}
