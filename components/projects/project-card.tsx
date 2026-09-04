import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  featuredHero?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block sleek-card rounded-xl p-6 sm:p-7 transition-all duration-200"
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        <div>
          {/* Header info */}
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono mb-2">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-200 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          {/* Short Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-900/60 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800/80">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
