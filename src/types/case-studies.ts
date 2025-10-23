export type CaseStudyTechStack = {
  technologyName: string;
};

export type CaseStudyFields = {
  challenge: string;
  clientName: string;
  industry: string;
  projectUrl: string;
  resultHeadline: string;
  resultMetric: string;
  solution: string;
  techStack: CaseStudyTechStack[];
  testimonialAuthor: string;
  testimonialQuote: string;
};

export type FeaturedImage = {
  node: {
    altText: string;
    sourceUrl: string;
  };
};

export type CaseStudyNode = {
  caseStudyFields: CaseStudyFields;
  title: string;
  slug: string;
  featuredImage: FeaturedImage | null;
};

export type CaseStudiesResponse = {
  caseStudies: {
    nodes: CaseStudyNode[];
  };
};

export type GraphQLResponse<T> = {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{
      line: number;
      column: number;
    }>;
  }>;
};
