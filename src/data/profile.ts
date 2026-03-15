export type Project = {
  name: string;
  description: string;
  link: string;
  tags: string[];
};

export type Education = {
  dates: string;
  institution: string;
  degree: string;
  location?: string;
  highlights: string[];
};

export type Experience = {
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
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  projects: Project[];
};

export const profile: Profile = {
  name: "Buddha Thapa Magar",
  title:
    "I build high-performance software that turns complex genomic data into actionable insights.",
  location: "Hays, Kansas",
  phone: "+1 316 670 4747",
  linkedin: "https://www.linkedin.com/in/buddha-thapa-magar",
  github: "https://github.com/buddhathapa12",
  email: "b_thapamagar@mail.fhsu.edu",
  about: `I’m a software engineer focused on bioinformatics and computational biology, with hands-on experience building tools and pipelines for DNA sequencing analysis, genome assembly, and large-scale biological data workflows. I specialize in transforming raw genomic data into reliable, scalable systems—combining strong data science skills, Linux-based engineering, and a product-driven mindset to support research teams and enterprise-level biology platforms.`,

  skills: [
    "Python",
    "R",
    "C#",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "NumPy",
    "Pandas",
    "scikit-learn",
    "TensorFlow",
    "Docker",
    "Git",
    "SQL",
    "Nextflow",
    "Samtools",
    "Bowtie2",
    "FastQC",
  ],
  education: [
    {
      dates: "Jan 2025 – present",
      institution: "Fort Hays State University",
      degree: "Master of Science in Biology",
      location: "Hays, Kansas",
      highlights: [
        "Research focus: Bioinformatics, Genomic Data Analysis, and Machine Learning",
        "Focused coursework: BioStatistics, BioInformatics, AI in biology, Immunology, Molecular Biology",
      ],
    },
    {
      dates: "2016 – 2021",
      institution:
        "Pulchowk Campus, Institute of Engineering, Tribhuvan University",
      degree: "Bachelor in Computer Engineering",
      highlights: [
        "Focused coursework: Data Science, Big Data, Machine Learning, Database systems, and Statistical Modeling",
        "Developed strong computational and problem-solving skills through software development and data-driven projects",
      ],
    },
  ],
  experience: [
    {
      dates: "Jan 2025 – present",
      title: "Graduate Research Assistant",
      organization: "Fort Hays State University",
      location: "Kansas",
      highlights: [
        "Conduct research in bioinformatics, genomic data analysis, and machine learning",
        "Develop and implement pipelines for analyzing human mitochondrial genomes using Nextflow",
        "Perform data preprocessing, genome assembly, and variant analysis on SRA datasets",
        "Collaborate on research publications and lab presentations",
        "Build reproducible workflows using R, Python, and Docker",
      ],
    },
    {
      dates: "May 2021 – June 2024",
      title: "Software Engineer",
      organization: "Cedar Gate Technologies",
      location: "Kathmandu, Nepal",
      highlights: [
        "Broke down complex tasks into sub-tasks and performed root cause analysis to improve efficiency",
        "Reviewed code and technical design to accelerate feature delivery",
        "Delivered 2+ features per sprint with unit tests and strong documentation",
        "Collaborated with cross-functional teams on planning, analysis, and development",
        "Mentored new hires on development processes and production support",
      ],
    },
  ],
  publications: [
    {
      year: "2025",
      citation:
        "Jenke, N., Smith, G.M., Magar, B.T. et al. Variation of and associations with the depth and evenness of sequencing coverage in archived plastid genomes. Sci Rep 15, 26294 (2025).",
      link: "https://doi.org/10.1038/s41598-025-11568-9",
    },
  ],
  projects: [
    {
      name: "Multicamera Person Tracking",
      description:
        "Developed a multi-camera person tracking system leveraging YOLOv4, Kalman filtering, and Bhattacharya distance for robust re-identification.",
      link: "#",
      tags: ["Computer Vision", "YOLOv4", "Kalman Filter"],
    },
    {
      name: "Road Accident Data Collection and Visualization System",
      description:
        "Built a Django-based platform for collecting and analyzing traffic accident data with K-means clustering.",
      link: "#",
      tags: ["Django", "Data Analysis", "Clustering"],
    },
    {
      name: "Byapaar (Hack a Week)",
      description:
        "Created an e-commerce web application with a React frontend and Laravel backend.",
      link: "#",
      tags: ["React", "Laravel", "E-commerce"],
    },
    {
      name: "LICT Personnel Management",
      description:
        "Delivered a Laravel-based personnel management system for HR workflows and reporting.",
      link: "#",
      tags: ["Laravel", "PHP", "Management"],
    },
    {
      name: "Hand Written Number Identification",
      description:
        "Built a C++ system using the Eigen library and MNIST dataset for handwritten digit recognition.",
      link: "#",
      tags: ["C++", "Machine Learning", "Computer Vision"],
    },
  ],
};
