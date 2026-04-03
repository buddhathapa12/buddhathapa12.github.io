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
  about: `I build systems that turn complex biological data into trusted outcomes. Bridging genomic science, data automation, and software engineering for reproducible, scalable pipelines.`,

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
        "Leading bioinformatics research pipelines for genomic data analysis and validation.",
      domainHighlights: [
        "Designed workflows for genome assembly, variant detection, and QC across human and plant datasets.",
        "Ensured reproducible results for publications and lab reporting.",
      ],
      engineeringHighlights: [
        "Built containerized Nextflow pipelines with Docker for cross-environment reproducibility.",
        "Automated data processing to reduce manual overhead by 40%.",
      ],
    },
    {
      dates: "May 2021 – June 2024",
      title: "Software Engineer",
      organization: "Cedar Gate Technologies",
      location: "Kathmandu, Nepal",
      roleSummary:
        "Delivered software engineering practices for data-driven product teams.",
      domainHighlights: [
        "Collaborated with stakeholders to translate data requirements into product features.",
        "Built reporting workflows for healthcare and compliance metrics.",
      ],
      engineeringHighlights: [
        "Implemented testing, CI, and design reviews to accelerate delivery.",
        "Reduced production incidents and mentored team on best practices.",
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
    {
      year: "2026 (placeholder)",
      citation:
        "Thapa, B. et al. Engineering reproducible variant-calling systems for cross-lab genomic studies. Preprint in preparation.",
      link: "https://example.com/preprint-placeholder",
    },
  ],
  talks: [
    {
      title: "Engineering Reproducible Genomics Pipelines",
      event: "Computational Biology Seminar Series",
      date: "2026-02-12",
      type: "Talk",
      link: "https://example.com/slides/genomics-pipelines",
    },
    {
      title: "From FASTQ to Findings: A Pipeline Walkthrough",
      event: "Data for Biology Workshop",
      date: "2026-03-22",
      type: "Poster",
      link: "https://example.com/poster/fastq-to-findings",
    },
  ],
  teaching: [
    {
      title: "Intro to Workflow-First Bioinformatics",
      format: "Graduate workshop",
      date: "Spring 2026",
      summary:
        "Hands-on introduction to modular pipeline design, versioned configs, and reproducible analysis reports.",
      link: "https://example.com/workshops/workflow-first-bioinformatics",
    },
    {
      title: "Mentorship: Research Software Fundamentals",
      format: "Peer mentorship",
      date: "Ongoing",
      summary:
        "Mentoring students on testing, Git workflows, and maintainable scientific Python code.",
      link: "https://example.com/mentorship/research-software",
    },
  ],
  reproducibility: [
    {
      title: "Workflow engines and modular stages",
      summary:
        "Pipeline stages are declarative and modular to ensure each biological step can be rerun, validated, and shared.",
      tools: ["Nextflow", "Snakemake", "nf-core conventions"],
      placeholderDiagram: "https://example.com/diagrams/workflow-architecture",
    },
    {
      title: "CI/CD for scientific pipelines",
      summary:
        "Automated linting, test datasets, and smoke runs prevent regressions before analyses are shared.",
      tools: ["GitHub Actions", "pytest", "test datasets"],
      placeholderDiagram: "https://example.com/diagrams/pipeline-ci-cd",
    },
    {
      title: "Containerized and versioned execution",
      summary:
        "Dockerized steps and versioned environment manifests create consistent execution across laptops, servers, and cloud.",
      tools: ["Docker", "Conda lockfiles", "versioned configs"],
      placeholderDiagram: "https://example.com/diagrams/container-layout",
    },
  ],
  exploringNow: [
    "Benchmarking GPU-accelerated alignment strategies for medium-scale population datasets.",
    "Designing a reproducibility scorecard for biological pipelines across student and lab projects.",
    "Evaluating typed configuration schemas for safer pipeline parameterization.",
  ],
  projects: [
    {
      slug: "reproducible-genome-workflow",
      name: "Reproducible Genome Workflow",
      description:
        "Automated sequence QC, assembly, and variant reporting for genomic research pipelines.",
      problemStatement:
        "Genome analysis in collaborative labs often fails reproducibility checks because runs depend on undocumented scripts, local environments, and inconsistent parameter settings.",
      dataSources: [
        "Public plastid and whole-genome read archives (placeholder)",
        "Lab-generated FASTQ runs from pilot studies (placeholder)",
      ],
      dataScale:
        "Prototype benchmark: 120 samples, ~1.8 TB compressed reads (placeholder).",
      algorithms: [
        "FastQC and adapter trimming",
        "Reference-guided and de novo assembly branches",
        "Variant calling with quality and depth filters",
      ],
      architecture:
        "Containerized Nextflow orchestration with per-stage caching, provenance manifests, and report generation.",
      results: [
        "Reduced manual preprocessing and handoffs by 40%.",
        "Enabled reproducible reruns with pinned pipeline and environment versions.",
        "Shortened review cycles for analysis validation and publication figures.",
      ],
      tradeoffs: [
        "Container startup overhead increased runtime for very small batches.",
        "Strict schema validation improved safety but added setup complexity for new users.",
      ],
      lessonsLearned: [
        "Versioning configuration files is as important as versioning code.",
        "A small curated test dataset catches most regression issues early.",
      ],
      context:
        "Supported biological research by converting raw sequencing reads into validated genome assemblies and sample-level variation summaries.",
      systems:
        "Built containerized Nextflow workflows with Docker, data validation checks, and modular pipeline stages for reproducible execution.",
      outcome:
        "Delivered repeatable analysis runs that reduced manual preprocessing by 40% and improved traceability across research datasets.",
      link: "https://github.com/buddhathapa12",
      publicationLink:
        "https://example.com/publications/reproducible-genome-workflow",
      demoLink: "https://example.com/demo/reproducible-genome-workflow",
      tags: ["Bioinformatics", "Nextflow", "Reproducibility"],
    },
    {
      slug: "multicamera-person-tracking",
      name: "Multicamera Person Tracking",
      description:
        "Developed a multi-camera tracking system that sustained reliable identity matching across dense scenes.",
      problemStatement:
        "Multi-camera environments struggle with identity drift and unstable re-identification, reducing the reliability of downstream analytics.",
      dataSources: [
        "Multi-view surveillance benchmarks (placeholder)",
        "Custom annotated sample sequences (placeholder)",
      ],
      dataScale:
        "Up to 8 synchronized feeds and ~250k labeled frames in evaluation sets (placeholder).",
      algorithms: ["YOLOv4", "Kalman filtering", "Bhattacharyya distance"],
      architecture:
        "Stream ingestion service, detector-tracker stage, and centralized identity reconciliation layer with event logs.",
      results: [
        "Improved identity consistency across camera handoffs.",
        "Reduced false positives in overlapping regions.",
      ],
      tradeoffs: [
        "Higher model complexity increased tuning effort.",
        "Cross-camera calibration quality strongly affected results.",
      ],
      lessonsLearned: [
        "Instrumentation and replay tooling are essential for debugging tracking failures.",
      ],
      context:
        "Enabled real-time monitoring and analysis of movement across multiple camera feeds for complex monitoring environments.",
      systems:
        "Engineered the pipeline with YOLOv4 detection, Kalman filtering, and Bhattacharya distance for robust re-identification.",
      outcome:
        "Improved tracking stability and reduced false positives in overlapping camera views.",
      link: "https://github.com/locusbnk",
      publicationLink: "https://example.com/publications/multicamera-tracking",
      demoLink: "https://example.com/demo/multicamera-tracking",
      tags: ["Computer Vision", "YOLOv4", "Systems"],
    },
    {
      slug: "traffic-data-platform",
      name: "Traffic Data Platform",
      description:
        "Built a data collection and visualization platform for traffic incident analytics.",
      problemStatement:
        "Operational safety teams lacked a reliable workflow to transform unstructured incident records into analysis-ready datasets and actionable trends.",
      dataSources: [
        "Field collection forms and administrative records (placeholder)",
        "Geospatial layers and weather context (placeholder)",
      ],
      dataScale: "~500k records over multi-year windows (placeholder).",
      algorithms: [
        "Spatial clustering",
        "Temporal trend analysis",
        "Anomaly-aware aggregations",
      ],
      architecture:
        "Django ingestion APIs, transformation jobs, and dashboard views over normalized reporting tables.",
      results: [
        "Improved incident hotspot visibility for planning.",
        "Reduced manual report assembly effort.",
      ],
      tradeoffs: [
        "Higher ingestion validation strictness initially rejected noisy legacy records.",
      ],
      lessonsLearned: [
        "Data quality policies must be explicit and visible to data contributors.",
      ],
      context:
        "Created a practical system for collecting structured event data and turning it into actionable insights for safety planning.",
      systems:
        "Implemented a Django backend, clustering analytics, and interactive dashboards to support ongoing data exploration.",
      outcome:
        "Delivered a maintainable analytics workflow for monitoring incident patterns and operational decision-making.",
      link: "https://github.com/buddhathapa12/Road-accident-data-collection-and-visualization-system",
      publicationLink: "https://example.com/publications/traffic-data-platform",
      demoLink: "https://example.com/demo/traffic-data-platform",
      tags: ["Django", "Data Engineering", "Visualization"],
    },
    {
      slug: "ecommerce-product-platform",
      name: "E-commerce Product Platform",
      description:
        "Delivered a full-stack web application for product search, ordering, and admin workflows.",
      problemStatement:
        "Small teams needed a maintainable system for product and order operations without heavyweight enterprise tooling.",
      dataSources: [
        "Product catalogs",
        "Order lifecycle events",
        "User activity logs",
      ],
      dataScale:
        "Pilot launch with ~20k products and 5k monthly orders (placeholder).",
      algorithms: [
        "Search ranking heuristics",
        "Inventory consistency checks",
        "Order status state-machine",
      ],
      architecture:
        "React frontend, Laravel API services, and relational persistence with role-based admin tooling.",
      results: [
        "Shipped end-to-end commerce capabilities under hackathon constraints.",
        "Provided maintainable foundations for future feature iteration.",
      ],
      tradeoffs: [
        "Rapid delivery reduced opportunity for deeper test automation in v1.",
      ],
      lessonsLearned: [
        "Clear domain boundaries speed up collaboration in mixed frontend/backend teams.",
      ],
      context:
        "Created a usable experience for merchants and buyers with a reliable ordering and reporting system.",
      systems:
        "Built React frontend components, Laravel backend services, and integrated database workflows for inventory and order processing.",
      outcome:
        "Launched a functional platform that supported end-to-end commerce workflows in a week-long hackathon cadence.",
      link: "https://github.com/buddhathapa12/LictProject",
      publicationLink:
        "https://example.com/publications/ecommerce-product-platform",
      demoLink: "https://example.com/demo/ecommerce-product-platform",
      tags: ["React", "Laravel", "Full Stack"],
    },
    {
      slug: "mnist-cpp-prototype",
      name: "Machine Learning Prototype",
      description:
        "Built a handwritten digit recognition system with C++ and the MNIST dataset.",
      problemStatement:
        "The goal was to evaluate a lightweight, dependency-minimal ML implementation suitable for constrained deployment environments.",
      dataSources: ["MNIST benchmark dataset"],
      dataScale: "60k training and 10k test examples.",
      algorithms: [
        "Feed-forward neural network",
        "Gradient descent",
        "Matrix operations using Eigen",
      ],
      architecture:
        "C++ training/inference executable with preprocessing and evaluation scripts.",
      results: [
        "Delivered reproducible training runs for educational and prototyping use.",
      ],
      tradeoffs: [
        "Low-level implementation improved transparency but required longer development cycles.",
      ],
      lessonsLearned: [
        "Performance profiling matters even in small prototypes when moving toward production.",
      ],
      context:
        "Explored model deployment and algorithm performance for image-based classification tasks.",
      systems:
        "Implemented data preprocessing, Eigen-based matrix operations, and a lightweight inference pipeline.",
      outcome:
        "Delivered a compact prototype that demonstrated end-to-end training and inference on digit data.",
      link: "https://example.com/repos/mnist-cpp-prototype",
      publicationLink: "https://example.com/publications/mnist-cpp-prototype",
      demoLink: "https://example.com/demo/mnist-cpp-prototype",
      tags: ["C++", "Machine Learning", "Prototype"],
    },
  ],
};
