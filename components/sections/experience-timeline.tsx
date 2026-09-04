import { EXPERIENCES } from "@/lib/experience";

export function ExperienceTimeline() {
  return (
    <section className="py-16 sleek-border-t">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-white tracking-tight">Experience</h2>
          <p className="text-xs text-neutral-400 mt-0.5">Engineering roles and production development track record.</p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="sleek-card rounded-xl p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-white">{item.role}</h3>
                  <div className="text-xs font-mono text-neutral-300">
                    <span className="text-neutral-200">{item.company}</span> • <span>{item.location}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-neutral-400">{item.year}</span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
