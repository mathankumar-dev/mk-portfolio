import { Smartphone, Server, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-24 border-y border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Engineering Focus"
              title="Building software with structural integrity and cinematic finish."
              className="mb-6"
            />
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I specialize in crafting mobile applications that handle unpredictable real-world network conditions and complex state models gracefully. My work sits at the intersection of <span className="text-white font-medium">meticulous mobile UI craftsmanship</span> and <span className="text-white font-medium">solid distributed backend engineering</span>.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Whether architecting a zero-latency offline synchronization engine with Riverpod and SQLite, parsing uncompressed audio frequencies for timeline automation, or constructing server-rendered Next.js web applications, I prioritize code clarity, testability, and measurable end-user performance.
            </p>
            <div className="pt-2">
              <Button variant="outline" href="/about">
                <span>Read Full Engineering Philosophy &amp; Background</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Pillars Card Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-xl glass-card border border-slate-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-base">Mobile Architecture</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Flutter (Bloc, Riverpod, GetX), clean feature-first architecture, background geolocation, offline sync pipelines.
              </p>
            </div>

            <div className="p-5 rounded-xl glass-card border border-slate-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-base">Full-Stack &amp; APIs</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Next.js App Router, TypeScript, Node.js, PostgreSQL, Redis, RESTful service design.
              </p>
            </div>

            <div className="p-5 rounded-xl glass-card border border-slate-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-800/60 text-purple-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-base">Developer Tooling &amp; DSP</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Audio spectral analysis, XML generator engines, background isolate concurrency, custom canvas painters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
