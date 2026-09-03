export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  location: string;
  type: "Internship" | "Full-Time" | "Contract" | "Independent Engineering";
  summary: string;
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-cygnusa",
    year: "Jul 2026 – Present",
    role: "Flutter Developer Trainee",
    company: "CYGNUSA Technologies",
    location: "Chennai, Tamil Nadu, India",
    type: "Internship",
    isCurrent: true,
    summary:
      "Specializing in Flutter cross-platform mobile development, offline-first architectures, Riverpod state management, and real-time backend API integrations.",
    achievements: [
      "Engineered mobile modules with responsive widget architecture and clean state bindings.",
      "Implemented resilient local data caching and asynchronous network synchronizations.",
      "Collaborated on feature enhancements and cross-platform UI profiling."
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "Hive", "REST APIs", "Git"]
  },
  {
    id: "exp-wenxt",
    year: "Jan 2026 – Apr 2026",
    role: "Full Stack Engineer",
    company: "WENXT Technologies",
    location: "Chennai, Tamil Nadu, India (On-site)",
    type: "Internship",
    summary:
      "Built enterprise web applications and full-stack systems focusing on frontend engineering and Spring Boot backend services.",
    achievements: [
      "Developed responsive frontend modules with React.js and TypeScript.",
      "Engineered robust RESTful backend microservices using Java and Spring Boot.",
      "Integrated database schemas with PostgreSQL/MySQL and established secure role-based access control."
    ],
    technologies: ["Spring Boot", "React.js", "Java", "TypeScript", "PostgreSQL", "REST APIs"]
  },
  {
    id: "exp-zedindex",
    year: "Jun 2025 – Jul 2025",
    role: "Software Developer",
    company: "Zedindex",
    location: "Hybrid",
    type: "Internship",
    summary:
      "Contributed to software features, full-stack components, and performance optimizations using Next.js and Java.",
    achievements: [
      "Developed high-performance web pages utilizing Next.js App Router and server-side rendering.",
      "Assisted in backend service implementation and API endpoint validation in Java.",
      "Participated in automated testing, code reviews, and CI/CD pipelines."
    ],
    technologies: ["Next.js", "Java", "TypeScript", "Tailwind CSS", "Git"]
  }
];
