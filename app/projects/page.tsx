"use client";

import { useState } from "react";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";

const CATEGORIES = ["All", "Mobile", "Full-Stack", "Open Source Package"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const allProjects = getAllProjects();

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight">Projects &amp; Packages</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">A curated archive of mobile applications, published Flutter packages on pub.dev, and full-stack software.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-black font-medium"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:text-black dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
