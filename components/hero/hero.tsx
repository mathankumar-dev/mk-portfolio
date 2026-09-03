"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {/* Subtle status tag */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for new projects &amp; engineering roles</span>
          </div>

          {/* Clean title */}
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Flutter &amp; Full-Stack Developer crafting reliable mobile architectures and modern web software.
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
            I’m <span className="text-neutral-200 font-medium">Mathankumar V</span>. I build cross-platform mobile apps with Flutter (Riverpod, Hive offline persistence) and full-stack systems with Spring Boot, Java, React.js, and Next.js.
          </p>

          {/* Direct Minimal Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/mathankumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <Link
              href="/about"
              className="px-4 py-2 text-neutral-400 hover:text-white transition-colors"
            >
              About &amp; Philosophy →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
