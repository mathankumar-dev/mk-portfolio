import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-16 sleek-border-t">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-tight">Selected Projects</h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Mobile applications, utilities, and full-stack software.</p>
          </div>
          <Link
            href="/projects"
            className="text-xs text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            All projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
