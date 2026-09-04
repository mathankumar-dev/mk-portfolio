import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "About",
  description: "Background, engineering philosophy, and published packages of Mathankumar V.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-white tracking-tight">About</h1>
          <p className="text-sm text-neutral-300 font-mono">Flutter &amp; Full-Stack Software Developer</p>
        </header>

        <section className="space-y-4 text-sm sm:text-base text-neutral-200 leading-relaxed">
          <p>
            I’m <strong className="text-white font-medium">Mathankumar V</strong>. I build reliable cross-platform mobile applications, publish open-source Flutter packages on <strong className="text-white">pub.dev</strong>, and architect full-stack web platforms with clean system design.
          </p>
          <p>
            Currently, I am a <strong className="text-white">Flutter Developer Trainee at CYGNUSA Technologies</strong>. Previously, I worked as a <strong className="text-white">Full Stack Engineer Intern at WENXT Technologies</strong>, building React.js and Spring Boot enterprise systems like HRMS.
          </p>
          <p>
            I am also the author and maintainer of published Flutter packages on pub.dev, including <a href="https://pub.dev/packages/cupertino_anchor" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-neutral-300">cupertino_anchor</a> (a zero-flicker Cupertino dropdown and popover picker) and <a href="https://pub.dev/packages/activity_logger" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-neutral-300">activity_logger</a> (a structured, production-safe activity logging framework for Dart &amp; Flutter).
          </p>
          <p>
            My core engineering toolkit includes <strong className="text-white">Flutter (Bloc, Riverpod, GetX, Provider, Hive)</strong>, <strong className="text-white">Spring Boot &amp; Java</strong>, <strong className="text-white">React.js &amp; Next.js</strong>, <strong className="text-white">TypeScript</strong>, <strong className="text-white">Firebase</strong>, <strong className="text-white">PostgreSQL</strong>, <strong className="text-white">MySQL</strong>, and <strong className="text-white">Supabase</strong>.
          </p>
        </section>

        <section className="space-y-4 sleek-border-t pt-8">
          <h2 className="text-xs font-mono text-neutral-300 uppercase tracking-wider">Published Flutter Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://pub.dev/packages/cupertino_anchor"
              target="_blank"
              rel="noopener noreferrer"
              className="sleek-card rounded-lg p-4 space-y-1 block hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white">cupertino_anchor</h3>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">pub.dev</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Zero-flicker dynamic positioning Cupertino dropdown &amp; picker with native iOS popover aesthetics.
              </p>
            </a>

            <a
              href="https://pub.dev/packages/activity_logger"
              target="_blank"
              rel="noopener noreferrer"
              className="sleek-card rounded-lg p-4 space-y-1 block hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white">activity_logger</h3>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">pub.dev</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Structured, production-safe application activity logger with component tags and custom sinks.
              </p>
            </a>
          </div>
        </section>

        <section className="space-y-4 sleek-border-t pt-8">
          <h2 className="text-xs font-mono text-neutral-300 uppercase tracking-wider">Engineering Philosophy</h2>
          <div className="space-y-3">
            <div className="sleek-card rounded-lg p-4 space-y-1">
              <h3 className="text-sm font-medium text-white">Offline-First by Design</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Mobile connections drop unpredictably. Applications should cache transactions locally first (using Hive/SQLite), give instantaneous feedback, and sync reliably in the background.
              </p>
            </div>

            <div className="sleek-card rounded-lg p-4 space-y-1">
              <h3 className="text-sm font-medium text-white">Predictable, Immutable State &amp; RBAC</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Unidirectional data flow and strict Role-Based Access Control ensure data integrity across complex enterprise workflows.
              </p>
            </div>

            <div className="sleek-card rounded-lg p-4 space-y-1">
              <h3 className="text-sm font-medium text-white">Simple, Intentional UI</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Clean typography, crisp layouts, and fast load times matter more than heavy decorative animations.
              </p>
            </div>
          </div>
        </section>

        <div className="sleek-border-t pt-4">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
