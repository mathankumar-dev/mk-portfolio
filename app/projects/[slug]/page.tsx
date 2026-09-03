import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to projects</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 sleek-border-b pb-8">
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.role}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4 text-xs font-mono">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-neutral-900 text-neutral-200 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-white text-black font-medium hover:bg-neutral-200 transition-colors inline-flex items-center gap-1"
              >
                <span>Live Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </header>

        {/* Overview */}
        <section className="space-y-3">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">01. Overview</h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* The Problem */}
        <section className="space-y-3">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">02. The Problem</h2>
          <h3 className="text-lg font-medium text-white">{project.problem.title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {project.problem.description}
          </p>
          <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-neutral-400 font-mono">
            {project.problem.painPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-neutral-600">—</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The Solution */}
        <section className="space-y-3">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">03. The Engineering Solution</h2>
          <h3 className="text-lg font-medium text-white">{project.solution.title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {project.solution.description}
          </p>
          <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-neutral-300 font-mono">
            {project.solution.keyDeliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">04. Technical Architecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.architecture.stackBreakdown.map((layer, idx) => (
              <div key={idx} className="sleek-card rounded-lg p-4 space-y-1">
                <div className="text-xs font-mono text-white font-medium">{layer.layer}</div>
                <p className="text-xs text-neutral-400 leading-relaxed">{layer.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Challenges */}
        <section className="space-y-3">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">05. Key Technical Challenges</h2>
          <div className="space-y-3">
            {project.technicalChallenges.map((item, idx) => (
              <div key={idx} className="sleek-card rounded-lg p-4 space-y-1">
                <h4 className="text-sm font-medium text-white">{item.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="space-y-3">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-wider">06. Results &amp; Impact</h2>
          <div className="sleek-card rounded-lg p-5 space-y-2">
            {project.impactAndResults.map((res, idx) => (
              <div key={idx} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2">
                <span className="text-neutral-500">▹</span>
                <span>{res}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Nav */}
        <div className="pt-8 sleek-border-t flex items-center justify-between text-xs font-mono">
          <Link href="/projects" className="text-neutral-400 hover:text-white transition-colors">
            ← Back to all projects
          </Link>
          <Link href="/#contact" className="text-white hover:text-neutral-300 transition-colors">
            Get in touch →
          </Link>
        </div>
      </div>
    </article>
  );
}
