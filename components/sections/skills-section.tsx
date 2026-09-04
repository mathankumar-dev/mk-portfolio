import { SKILL_CATEGORIES } from "@/lib/skills";

export function SkillsSection() {
  return (
    <section className="py-16 sleek-border-t">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-tight">Skills &amp; Technologies</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Core competencies and everyday development tools.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="space-y-3">
              <h3 className="text-xs font-mono font-medium text-neutral-700 dark:text-neutral-200 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
                  >
                    {skill.name}
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
