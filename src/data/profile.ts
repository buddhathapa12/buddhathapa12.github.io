import type { Profile } from "../types";

export const profile: Profile = {
  name: "Buddha Thapa Magar",
  title:
    "Computational Biologist & Software Engineer focused on data-driven biology and reproducible systems.",
  location: "Hays, Kansas",
  phone: "+1 316 670 4747",
  linkedin: "https://www.linkedin.com/in/buddha-thapa-magar",
  github: "https://github.com/buddhathapa12",
  email: "b_thapamagar@mail.fhsu.edu",
  orcid: "https://orcid.org/0000-0002-1234-5678",
  googleScholar: "https://scholar.google.com/citations?user=example",
  researchGate: "https://www.researchgate.net/profile/Buddha-Thapa-Magar",
  cv: "/Buddha_Thapa_Magar_CV.pdf",
  about: `I build systems that turn complex biological data into trusted research and production outcomes. My work bridges genomic science, data automation, and software engineering so that research teams can move from raw sequencing to reliable insights with reproducible, scalable pipelines.`,

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
      roleSummary:
        "Leading bioinformatics research pipelines that translate raw genomic data into repeatable, validated results.",
      domainHighlights: [
        "Designed workflows for mitochondrial and plastid genome assembly, variant detection, and sequence QC.",
        "Validated scientific results across human and plant sequencing datasets with reproducible pipelines.",
        "Supported collaborative publications and lab reporting through transparent data processing.",
      ],
      engineeringHighlights: [
        "Built containerized Nextflow pipelines with Docker to ensure reproducible execution across environments.",
        "Automated multi-stage data ingestion, analysis, and reporting to reduce manual overhead by 40%.",
        "Integrated code review, versioned workflow configuration, and logging for traceable analysis runs.",
      ],
    },
    {
      dates: "May 2021 – June 2024",
      title: "Software Engineer",
      organization: "Cedar Gate Technologies",
      location: "Kathmandu, Nepal",
      roleSummary:
        "Delivered software and engineering practices that improved reliability and delivery for data-driven product teams.",
      domainHighlights: [
        "Collaborated with analysts and stakeholders to understand data requirements and translate them into product features.",
        "Built reporting workflows that surfaced business and operational metrics for healthcare and compliance use cases.",
      ],
      engineeringHighlights: [
        "Implemented unit tests, CI pipelines, and technical design reviews to accelerate feature delivery.",
        "Delivered 2+ features per sprint, optimized support workflows, and reduced production incidents.",
        "Mentored new team members on clean code, documentation, and scalable system design.",
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
      name: "Reproducible Genome Workflow",
      description:
        "Automated sequence QC, assembly, and variant reporting for genomic research pipelines.",
      context:
        "Supported biological research by converting raw sequencing reads into validated genome assemblies and sample-level variation summaries.",
      systems:
        "Built containerized Nextflow workflows with Docker, data validation checks, and modular pipeline stages for reproducible execution.",
      outcome:
        "Delivered repeatable analysis runs that reduced manual preprocessing by 40% and improved traceability across research datasets.",
      link: "https://github.com/buddhathapa12",
      tags: ["Bioinformatics", "Nextflow", "Reproducibility"],
    },
    {
      name: "Multicamera Person Tracking",
      description:
        "Developed a multi-camera tracking system that sustained reliable identity matching across dense scenes.",
      context:
        "Enabled real-time monitoring and analysis of movement across multiple camera feeds for complex monitoring environments.",
      systems:
        "Engineered the pipeline with YOLOv4 detection, Kalman filtering, and Bhattacharya distance for robust re-identification.",
      outcome:
        "Improved tracking stability and reduced false positives in overlapping camera views.",
      link: "https://github.com/locusbnk",
      tags: ["Computer Vision", "YOLOv4", "Systems"],
    },
    {
      name: "Traffic Data Platform",
      description:
        "Built a data collection and visualization platform for traffic incident analytics.",
      context:
        "Created a practical system for collecting structured event data and turning it into actionable insights for safety planning.",
      systems:
        "Implemented a Django backend, clustering analytics, and interactive dashboards to support ongoing data exploration.",
      outcome:
        "Delivered a maintainable analytics workflow for monitoring incident patterns and operational decision-making.",
      link: "https://github.com/buddhathapa12/Road-accident-data-collection-and-visualization-system",
      tags: ["Django", "Data Engineering", "Visualization"],
    },
    {
      name: "E-commerce Product Platform",
      description:
        "Delivered a full-stack web application for product search, ordering, and admin workflows.",
      context:
        "Created a usable experience for merchants and buyers with a reliable ordering and reporting system.",
      systems:
        "Built React frontend components, Laravel backend services, and integrated database workflows for inventory and order processing.",
      outcome:
        "Launched a functional platform that supported end-to-end commerce workflows in a week-long hackathon cadence.",
      link: "https://github.com/buddhathapa12/LictProject",
      tags: ["React", "Laravel", "Full Stack"],
    },
    {
      name: "Machine Learning Prototype",
      description:
        "Built a handwritten digit recognition system with C++ and the MNIST dataset.",
      context:
        "Explored model deployment and algorithm performance for image-based classification tasks.",
      systems:
        "Implemented data preprocessing, Eigen-based matrix operations, and a lightweight inference pipeline.",
      outcome:
        "Delivered a compact prototype that demonstrated end-to-end training and inference on digit data.",
      link: "#",
      tags: ["C++", "Machine Learning", "Prototype"],
    },
  ],
};
