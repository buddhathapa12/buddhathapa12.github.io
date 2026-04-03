export type NavLink = {
  href: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  problemStatement?: string;
  dataSources?: string[];
  dataScale?: string;
  algorithms?: string[];
  architecture?: string;
  results?: string[];
  tradeoffs?: string[];
  lessonsLearned?: string[];
  context: string;
  systems: string;
  outcome?: string;
  link: string;
  publicationLink?: string;
  demoLink?: string;
  tags: string[];
};

export type EducationItem = {
  dates: string;
  institution: string;
  degree: string;
  location?: string;
  highlights: string[];
};

export type ExperienceItem = {
  dates: string;
  title: string;
  organization: string;
  location?: string;
  roleSummary: string;
  domainHighlights: string[];
  engineeringHighlights: string[];
};

export type Publication = {
  year: string;
  citation: string;
  link?: string;
};

export type TalkItem = {
  title: string;
  event: string;
  date: string;
  type: "Talk" | "Poster" | "Tutorial";
  link?: string;
};

export type TeachingItem = {
  title: string;
  format: string;
  date: string;
  summary: string;
  link?: string;
};

export type ReproducibilityPractice = {
  title: string;
  summary: string;
  tools: string[];
  placeholderDiagram: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  phone: string;
  linkedin: string;
  github: string;
  email: string;
  cv?: string;
  orcid?: string;
  googleScholar?: string;
  researchGate?: string;
  about: string;
  skills: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  publications: Publication[];
  talks: TalkItem[];
  teaching: TeachingItem[];
  reproducibility: ReproducibilityPractice[];
  exploringNow: string[];
  projects: Project[];
};
