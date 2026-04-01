export type NavLink = {
  href: string;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  link: string;
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
  highlights: string[];
};

export type Publication = {
  year: string;
  citation: string;
  link?: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  phone: string;
  linkedin: string;
  github: string;
  email: string;
  about: string;
  skills: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  publications: Publication[];
  projects: Project[];
};
