export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Mobile" | "Full-Stack" | "Open Source Package";
  featured: boolean;
  priority: number;
  year: string;
  clientOrContext: string;
  role: string;
  timeline: string;
  technologies: string[];
  thumbnail: string;
  heroImage: string;
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    keyDeliverables: string[];
  };
  architecture: {
    title: string;
    description: string;
    stackBreakdown: { layer: string; details: string }[];
  };
  technicalChallenges: {
    title: string;
    solution: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  impactAndResults: string[];
  lessonsLearned: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "travelon",
    title: "Travelon – Smart Tourism & Safety Ecosystem",
    tagline: "Real-time smart tourism platform with geofencing, live tracking, and automated SOS safety alerts.",
    description:
      "Architected a real-time smart tourism platform with GPS geofencing, live location tracking, automated SOS alerts, and an offline-first mobile UI to ensure travel itineraries remain accessible in low-connectivity areas.",
    category: "Mobile",
    featured: true,
    priority: 1,
    year: "Jan 2026 – May 2026",
    clientOrContext: "Associated with Mount Zion College of Engineering and Technology",
    role: "Lead Mobile Architect & Engineer",
    timeline: "Jan 2026 – May 2026",
    technologies: ["Flutter", "Dart", "Geofencing", "Live Tracking", "SOS Alerts", "Offline-First UI", "Firebase", "Google Maps SDK"],
    thumbnail: "/images/projects/travelon-thumb.png",
    heroImage: "/images/projects/travelon-hero.png",
    liveUrl: "https://github.com/mathankumar-dev/travelon-client-app",
    githubUrl: "https://github.com/mathankumar-dev/travelon-client-app",
    overview:
      "Travelon is a smart tourism and tourist safety ecosystem engineered to safeguard travelers while providing dynamic location-based guidance. The system integrates intelligent geofencing to trigger localized landmark narratives while running background emergency SOS dispatch pipelines.",
    problem: {
      title: "Tourist Vulnerability and Network Dropouts in Remote Destinations",
      description:
        "Travelers often navigate remote, unfamiliar terrains with poor cellular reception, rendering standard online navigation apps useless and leaving tourists isolated during medical or route emergencies.",
      painPoints: [
        "Inability to trigger emergency assistance when cell signals drop.",
        "Loss of digital tour itineraries and map waypoints in low-connectivity regions.",
        "Lack of localized hazard proximity warnings for traveling cohorts."
      ]
    },
    solution: {
      title: "Real-Time Geofenced Safety Tracking & Resilient Offline Itineraries",
      description:
        "Engineered an offline-first Flutter mobile client paired with an automated SOS safety alert broadcaster that queues alerts locally and synchronizes upon any momentary network link.",
      keyDeliverables: [
        "Automated SOS safety alert broadcasting with last-known coordinates.",
        "Real-time GPS geofencing & live tracking telemetry.",
        "Offline-first mobile UI preserving complete travel itineraries and emergency procedures."
      ]
    },
    architecture: {
      title: "Offline-First Geo-Tracking & Safety Engine",
      description:
        "Built with clean separation between location sensors, offline caching layers, and the UI view hierarchy.",
      stackBreakdown: [
        { layer: "Mobile Client", details: "Flutter, Dart, Custom Map Renderers, Offline State Machine" },
        { layer: "Geo Core", details: "Native Location Streams, Geofence Regions, Background Service Handlers" },
        { layer: "Safety Dispatch", details: "Automated SOS Triggers, SMS Gateway integration, Cloud Telemetry" }
      ]
    },
    technicalChallenges: [
      {
        title: "Ensuring 100% Reliable SOS Dispatch in Intermittent Coverage",
        solution:
          "Designed a SQLite persistence queue with exponential backoff retries and fallback SMS emergency payloads."
      }
    ],
    keyFeatures: [
      {
        title: "Automated SOS Alerts",
        description: "One-tap emergency safety broadcast dispatching real-time coordinates."
      },
      {
        title: "Smart Geofence Exploration",
        description: "Context-aware point-of-interest notifications when entering landmark zones."
      },
      {
        title: "Offline Itineraries",
        description: "Zero-data access to day-by-day travel schedules and emergency contacts."
      }
    ],
    impactAndResults: [
      "Presented and deployed across university cohorts at Mount Zion College of Engineering and Technology.",
      "Achieved sub-second offline itinerary retrieval and battery-optimized background tracking."
    ],
    lessonsLearned: [
      "Mastered low-latency background geolocation filters and fault-tolerant emergency sync patterns."
    ]
  },
  {
    slug: "cupertino-anchor",
    title: "cupertino_anchor – Flutter Package",
    tagline: "Production-ready Cupertino dropdown picker with zero-flicker dynamic positioning.",
    description:
      "A published Flutter package providing a zero-flicker Cupertino dropdown and popover picker with safe-area awareness, intelligent placement calculation, and native iOS popover aesthetics.",
    category: "Open Source Package",
    featured: true,
    priority: 2,
    year: "Published 2026",
    clientOrContext: "Published on pub.dev",
    role: "Package Author & Maintainer",
    timeline: "2026",
    technologies: ["Flutter", "Dart", "OverlayEntry", "RenderBox Geometry", "Cupertino UI", "Pub.dev"],
    thumbnail: "/images/projects/cupertino-thumb.png",
    heroImage: "/images/projects/cupertino-hero.png",
    liveUrl: "https://pub.dev/packages/cupertino_anchor",
    githubUrl: "https://github.com/mathankumar-dev",
    overview:
      "cupertino_anchor is a published Flutter package that solves dropdown overlay positioning on iOS. It calculates anchor bounds, safe-area insets, and screen height before rendering, ensuring zero layout jumps or frame flicker.",
    problem: {
      title: "Layout Jumps and Viewport Clipping in Standard Dropdown Overlays",
      description:
        "Standard dropdown overlays often render off-screen or jump positions after measuring child dimensions, causing visual stutter and clipping on smaller screens.",
      painPoints: [
        "Flickering dropdowns that re-render after estimating size.",
        "Dropdowns opening underneath on-screen keyboards or outside device safe areas."
      ]
    },
    solution: {
      title: "Geometric Pre-Calculation Engine with Direction-Aware Popover Transitions",
      description:
        "Engineered CupertinoDropdownPositionCalculator to inspect RenderBox coordinates and screen space synchronously before mounting the OverlayEntry.",
      keyDeliverables: [
        "Zero-flicker synchronous positioning calculation.",
        "Intelligent auto-placement (top vs bottom resolution).",
        "Full Cupertino theming with frosted glass backdrop blur (BackdropFilter).",
        "Comprehensive widget and geometry unit test suite."
      ]
    },
    architecture: {
      title: "Pure Geometry & Overlay Architecture",
      description: "Mathematical coordinate calculation decoupled from Flutter widget tree mounting.",
      stackBreakdown: [
        { layer: "Calculator Engine", details: "CupertinoDropdownPositionCalculator (Global coordinate & safe-area math)" },
        { layer: "Overlay Layer", details: "Flutter OverlayEntry, custom DirectionalScaleTransition" },
        { layer: "Theming & Builders", details: "CupertinoDropdownTheme, custom Generic Item Builders" }
      ]
    },
    technicalChallenges: [
      {
        title: "Synchronous Layout Calculation without Frame Drop",
        solution: "Extracted global coordinate offsets directly from Element render objects before scheduling overlay paint."
      }
    ],
    keyFeatures: [
      {
        title: "Intelligent Auto-Placement",
        description: "Automatically flips upward or downward depending on screen space."
      },
      {
        title: "Keyboard & Safe Area Aware",
        description: "Responds to MediaQuery viewInsets to avoid soft keyboards."
      },
      {
        title: "Generic Model Support",
        description: "Works seamlessly with custom Dart data classes."
      }
    ],
    impactAndResults: [
      "Published as a top-scoring package on pub.dev.",
      "100% test coverage on positioning calculator and gesture handlers."
    ],
    lessonsLearned: [
      "Mastered deep Flutter RenderBox coordinate systems and OverlayEntry lifecycles."
    ]
  },
  {
    slug: "activity-logger",
    title: "activity_logger – Flutter Package",
    tagline: "Lightweight, structured application activity logger for Dart & Flutter.",
    description:
      "A published Dart/Flutter package for structured component-based logging, severity filtering, debug-mode guarding, and custom sink routing.",
    category: "Open Source Package",
    featured: true,
    priority: 3,
    year: "Published 2026",
    clientOrContext: "Published on pub.dev",
    role: "Package Author & Maintainer",
    timeline: "2026",
    technologies: ["Dart", "Flutter", "Logging Architecture", "LogSink", "Production Safety", "Pub.dev"],
    thumbnail: "/images/projects/logger-thumb.png",
    heroImage: "/images/projects/logger-hero.png",
    liveUrl: "https://pub.dev/packages/activity_logger",
    githubUrl: "https://github.com/mathankumar-dev",
    overview:
      "activity_logger provides structured, tag-based log tracking for Flutter applications. It prevents log leaks in release builds via kDebugMode guarding and provides a clean LogSink interface for custom telemetry.",
    problem: {
      title: "Anonymous Prints and Production Information Leaks",
      description:
        "Developers commonly use raw print() statements which leak sensitive customer telemetry into production console logs and lack component context.",
      painPoints: [
        "Unformatted, unsearchable console spam.",
        "Security risks when debug logs accidentally execute in production builds."
      ]
    },
    solution: {
      title: "Structured Immutable LogEntry Pipeline with LogSink Abstraction",
      description:
        "Created an extensible logging framework supporting component tags ([SessionService]), 5 severity levels, and automatic production silencing.",
      keyDeliverables: [
        "Structured component tagging and severity comparison.",
        "Automatic release build protection with debugModeOnly.",
        "Extensible LogSink abstraction for memory, file, and remote sinks.",
        "ConsoleLogSink with clean colorized output."
      ]
    },
    architecture: {
      title: "Sink-Driven Pipeline Architecture",
      description: "Decoupled log emission from output formatting using immutable LogEntry objects.",
      stackBreakdown: [
        { layer: "Logger API", details: "ActivityLogger contextual instance factory" },
        { layer: "Core Engine", details: "Severity evaluation, release-mode guards, timestamp formatting" },
        { layer: "Sinks", details: "ConsoleLogSink, MemoryLogSink, Custom Telemetry Sinks" }
      ]
    },
    technicalChallenges: [
      {
        title: "Zero Runtime Overhead in Release Builds",
        solution: "Short-circuit evaluation on minimum severity level and kDebugMode prevents string formatting overhead."
      }
    ],
    keyFeatures: [
      {
        title: "Component Identification",
        description: "Every log is tagged with its origin class (e.g. [AuthService])."
      },
      {
        title: "5 Severity Levels",
        description: "Debug, Info, Success, Warning, and Error levels."
      },
      {
        title: "Custom Sinks",
        description: "Route logs to console, memory buffer, or backend analytics."
      }
    ],
    impactAndResults: [
      "Published on pub.dev with 100+ downloads within launch window.",
      "Zero external dependencies for minimal app footprint."
    ],
    lessonsLearned: [
      "Gained deep expertise in package API design and pub.dev score optimization."
    ]
  },
  {
    slug: "trim-url-shortener",
    title: "Trim – URL Shortener Platform",
    tagline: "Full-stack URL shortening & analytics service built with Spring Boot, PostgreSQL, React, and TypeScript.",
    description:
      "A high-performance full-stack URL shortening application engineered using Spring Boot, PostgreSQL (JPA), React, and TypeScript to generate, manage, and redirect shareable short links.",
    category: "Full-Stack",
    featured: false,
    priority: 4,
    year: "Jul 2026",
    clientOrContext: "Production Full-Stack Project",
    role: "Full-Stack Engineer",
    timeline: "Jul 2026",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "JPA / Hibernate", "React", "TypeScript", "Vercel", "Render"],
    thumbnail: "/images/projects/trim-thumb.png",
    heroImage: "/images/projects/trim-hero.png",
    liveUrl: "https://github.com/mathankumar-dev",
    githubUrl: "https://github.com/mathankumar-dev",
    overview:
      "Trim is a modern URL shortening application providing ultra-fast link hashing, custom aliases, click analytics, and responsive link management deployed across Vercel (frontend) and Render (Spring Boot backend).",
    problem: {
      title: "Bulky URLs and Lack of Real-Time Click Attribution",
      description:
        "Long query-heavy URLs look unprofessional and fail to offer creators and businesses visibility into link click rates.",
      painPoints: [
        "Unwieldy links breaking in messaging and marketing copy.",
        "Need for atomic redirect resolution with minimal server response latency."
      ]
    },
    solution: {
      title: "Optimized Base62 Hashing & RESTful Redirection Pipeline",
      description:
        "Developed a Spring Boot backend utilizing JPA indexing on PostgreSQL for O(1) link lookup and a clean TypeScript React interface.",
      keyDeliverables: [
        "REST API development with Spring Boot & Java.",
        "High-efficiency URL shortening, custom aliases, and instant 302 redirection.",
        "PostgreSQL integration with Spring Data JPA.",
        "Responsive React + TypeScript frontend deployed on Vercel & Render."
      ]
    },
    architecture: {
      title: "Decoupled Full-Stack Cloud Architecture",
      description: "React frontend communicating over secure HTTPS REST endpoints with a Spring Boot application.",
      stackBreakdown: [
        { layer: "Frontend UI", details: "React.js, TypeScript, Tailwind CSS, Vercel Edge" },
        { layer: "Backend API", details: "Java, Spring Boot, Spring Security, REST Controllers" },
        { layer: "Database", details: "PostgreSQL with Spring Data JPA / Hibernate" }
      ]
    },
    technicalChallenges: [
      {
        title: "Collision-Free Short Code Generation Under High Throughput",
        solution: "Implemented an indexed Base62 encoding strategy with database unique constraint checking."
      }
    ],
    keyFeatures: [
      {
        title: "Instant URL Shortening",
        description: "Paste any link to get a clean, memorable short URL in milliseconds."
      },
      {
        title: "Custom Aliases",
        description: "Create branded custom links with instant availability validation."
      }
    ],
    impactAndResults: [
      "Achieved sub-50ms redirect response times on Spring Boot / PostgreSQL."
    ],
    lessonsLearned: [
      "Deepened expertise in Spring Boot REST API patterns and managed PostgreSQL deployment."
    ]
  },
  {
    slug: "hrms",
    title: "HRMS – HR Management System",
    tagline: "Enterprise HR Management System automating payroll, leave workflows, and employee records.",
    description:
      "Built an HR Management System (HRMS) using React.js and Spring Boot, automating employee payroll, leave approvals, centralized notifications, dynamic reporting, and role-based access control (RBAC).",
    category: "Full-Stack",
    featured: false,
    priority: 5,
    year: "Jan 2026 – Apr 2026",
    clientOrContext: "Associated with WENXT Technologies / Mount Zion",
    role: "Full-Stack Developer",
    timeline: "Jan 2026 – Apr 2026",
    technologies: ["Spring Boot", "React.js", "Java", "TypeScript", "RBAC", "MySQL / PostgreSQL", "REST APIs"],
    thumbnail: "/images/projects/hrms-thumb.png",
    heroImage: "/images/projects/hrms-hero.png",
    overview:
      "HRMS streamlines human resource operations by centralizing employee directory records, payroll computations, multi-tier leave approval chains, and organizational announcements.",
    problem: {
      title: "Manual HR Paperwork and Fragmented Leave Approval Chains",
      description:
        "Managing employee leave requests through spreadsheets leads to miscommunications, delayed approvals, and compliance risks.",
      painPoints: [
        "Slow multi-level leave approval hierarchies.",
        "Risk of unauthorized data access without strict role segregation."
      ]
    },
    solution: {
      title: "Centralized RBAC Management Suite with Dynamic Reporting",
      description:
        "Engineered a React + Spring Boot system with JWT authentication and strict Role-Based Access Control.",
      keyDeliverables: [
        "Automated leave management & payroll computation pipelines.",
        "Centralized notification system and dynamic reporting modules.",
        "Role-Based Access Control (RBAC) ensuring data integrity."
      ]
    },
    architecture: {
      title: "Tiered Enterprise Service Architecture",
      description: "Frontend client communicating with Spring Boot REST microservices secured by Spring Security.",
      stackBreakdown: [
        { layer: "Frontend Client", details: "React.js, TypeScript, Component UI system" },
        { layer: "Backend Logic", details: "Spring Boot, Spring Security (JWT / RBAC)" },
        { layer: "Data Layer", details: "Relational DB (PostgreSQL/MySQL)" }
      ]
    },
    technicalChallenges: [
      {
        title: "Enforcing Dynamic Multi-Role Access Across Nested Routes",
        solution: "Constructed custom React route guards paired with Spring Security `@PreAuthorize` annotations."
      }
    ],
    keyFeatures: [
      {
        title: "Leave Approval Automation",
        description: "Submit, track, and approve leave requests with automated balance deductions."
      },
      {
        title: "Role-Based Access Control",
        description: "Strict view and action permissions for Admins, Managers, and Employees."
      }
    ],
    impactAndResults: [
      "Eliminated manual email leave approval bottlenecks."
    ],
    lessonsLearned: [
      "Mastered Spring Security JWT implementations and enterprise RBAC domain modeling."
    ]
  },
  {
    slug: "qrgenx",
    title: "QrGenX – QR & Barcode Utility App",
    tagline: "Feature-rich mobile QR/barcode generator and scanner with offline history using Hive.",
    description:
      "A feature-rich Flutter utility application for scanning, generating, and exporting QR codes and barcodes with persistent offline history using Hive local storage and Provider state management.",
    category: "Mobile",
    featured: false,
    priority: 6,
    year: "Aug 2025",
    clientOrContext: "Open Source Mobile Utility",
    role: "Mobile Developer",
    timeline: "Aug 2025",
    technologies: ["Flutter", "Dart", "Hive Local Storage", "Provider", "Camera SDK", "Barcode Scanning"],
    thumbnail: "/images/projects/qrgenx-thumb.png",
    heroImage: "/images/projects/qrgenx-hero.png",
    liveUrl: "https://github.com/mathankumar-dev/QrGenX",
    githubUrl: "https://github.com/mathankumar-dev/QrGenX",
    overview:
      "QrGenX provides an ultra-fast mobile barcode and QR scanner coupled with a custom visual code generator. Features offline scan history powered by Hive NoSQL storage.",
    problem: {
      title: "Ad-Cluttered & Slow Mobile QR Utilities",
      description:
        "Most store-available QR scanner apps are inundated with invasive ads and fail to maintain structured offline scan histories.",
      painPoints: [
        "Invasive ad delays during urgent scans.",
        "Loss of scanned link histories upon app close."
      ]
    },
    solution: {
      title: "Ad-Free, Ultra-Fast Scanner with Instant Hive Persistence",
      description:
        "Built a lightweight Flutter utility with Provider state bindings and Hive binary box storage for instant sub-millisecond local reads.",
      keyDeliverables: [
        "High-fps camera viewfinder barcode detection.",
        "Custom QR code generator supporting Wi-Fi credentials, URLs, and vCards.",
        "Persistent offline scan and generate history powered by Hive."
      ]
    },
    architecture: {
      title: "Lightweight Reactive Architecture",
      description: "Flutter UI connected to Hive NoSQL boxes via Provider change notifiers.",
      stackBreakdown: [
        { layer: "Presentation", details: "Flutter UI, Custom Viewfinder Overlay, Dynamic Themes" },
        { layer: "Scan Engine", details: "Native Mobile Camera Streams, QR/Barcode Decoding" },
        { layer: "Storage", details: "Hive TypeAdapters, Encrypted Local Box Persistence" }
      ]
    },
    technicalChallenges: [
      {
        title: "Optimizing Camera Viewfinder Frame Throughput",
        solution: "Throttled image stream buffer processing to prevent thermal throttling on entry-level Android hardware."
      }
    ],
    keyFeatures: [
      {
        title: "Instant Multi-Format Scanner",
        description: "Scans QR codes, UPC, EAN, Code 128 barcodes instantly from live camera or gallery."
      },
      {
        title: "Custom Code Generator",
        description: "Create customized QR codes with custom styling and instant export."
      }
    ],
    impactAndResults: [
      "Open-sourced on GitHub with 100% offline functionality and zero ad dependencies."
    ],
    lessonsLearned: [
      "Deepened proficiency in Hive NoSQL database serialization and camera stream lifecycle handling."
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured).sort((a, b) => a.priority - b.priority);
}

export function getAllProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => a.priority - b.priority);
}
