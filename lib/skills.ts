export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    highlight?: boolean;
    description?: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications with Flutter, Dart, state management architectures, and offline persistence.",
    skills: [
      { name: "Flutter", level: "Advanced", highlight: true, description: "Multi-platform architecture, custom UI widgets, profiling" },
      { name: "Dart", level: "Advanced", highlight: true, description: "Async streams, isolates, strong typing" },
      { name: "Bloc", level: "Advanced", highlight: true, description: "Event-driven state streams, state-to-UI mapping" },
      { name: "Riverpod", level: "Advanced", highlight: true, description: "Immutable state, provider families, reactive bindings" },
      { name: "GetX", level: "Advanced", highlight: true, description: "Reactive state, route management, dependency injection" },
      { name: "Clean Architecture", level: "Advanced", highlight: true, description: "Domain, data & presentation layer separation, testability" },
      { name: "Provider", level: "Advanced", description: "ChangeNotifier, scoped state bindings" },
      { name: "Hive / SQLite", level: "Advanced", highlight: true, description: "Offline persistence, TypeAdapters, local caching" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Robust REST APIs, microservices, and server-side logic in Java, Spring Boot, and Node.js.",
    skills: [
      { name: "Spring Boot", level: "Advanced", highlight: true, description: "REST controllers, Spring Security (RBAC/JWT), Spring Data JPA" },
      { name: "Java", level: "Advanced", highlight: true, description: "Object-oriented design, collections, multi-threading" },
      { name: "Node.js & Express", level: "Proficient", description: "REST endpoints, middleware, async pipelines" },
      { name: "REST API Design", level: "Advanced", highlight: true, description: "Idempotency, status codes, OpenAPI documentation" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Modern, responsive web applications built with React, Next.js, and TypeScript.",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true, description: "Component composition, hooks, state patterns" },
      { name: "Next.js (App Router)", level: "Advanced", highlight: true, description: "Server components, routing, SEO, static site generation" },
      { name: "TypeScript", level: "Advanced", highlight: true, description: "Strict typing, interfaces, generics" },
      { name: "Tailwind CSS", level: "Advanced", description: "Design systems, utility classes, responsive layouts" }
    ]
  },
  {
    title: "Database & Cloud / BaaS",
    description: "Relational modeling, NoSQL document stores, BaaS platforms, and cloud deployments.",
    skills: [
      { name: "Firebase", level: "Advanced", highlight: true, description: "Authentication, Firestore, Cloud Functions, real-time sync" },
      { name: "Supabase", level: "Advanced", highlight: true, description: "PostgreSQL BaaS, row-level security, auth, edge functions" },
      { name: "PostgreSQL", level: "Proficient", highlight: true, description: "Relational schemas, indexing, JPA queries" },
      { name: "MySQL", level: "Proficient", description: "Database modeling, SQL queries, relational keys" },
      { name: "Vercel & Render", level: "Proficient", description: "Cloud orchestration, continuous deployment" }
    ]
  },
  {
    title: "Tooling & Workflow",
    description: "Development environments, version control, and debugging tools.",
    skills: [
      { name: "Git / GitHub", level: "Advanced", highlight: true, description: "Branching, PRs, CI/CD actions" },
      { name: "VS Code & Android Studio", level: "Advanced", description: "Flutter DevTools, build profiling, debugging" },
      { name: "Postman", level: "Advanced", description: "REST API endpoint testing and automation" }
    ]
  }
];
