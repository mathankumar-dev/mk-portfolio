"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-12">
          {/* Main Left Content */}
          <div className="flex-1 space-y-5 sm:space-y-6">
            {/* Mobile Portrait Card (Option A) */}
            <div className="md:hidden pb-1">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-70" />
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
                  <Image
                    src="/mk-portfolio/images/profile.jpg"
                    alt="Mathankumar V"
                    fill
                    priority
                    sizes="112px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Clean title */}
            <h1 className="space-y-1.5 tracking-tight">
              <span className="block text-2xl sm:text-4xl md:text-[2.65rem] font-bold text-neutral-900 dark:text-white leading-tight">
                Flutter &amp; Full-Stack Developer
              </span>
              <span className="block text-lg sm:text-2xl md:text-[1.65rem] font-medium text-neutral-600 dark:text-neutral-300 leading-snug">
                crafting reliable mobile architectures and modern web software.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              I’m <span className="text-neutral-900 dark:text-white font-medium">Mathankumar V</span>. I build cross-platform mobile apps with Flutter (Riverpod, Hive offline persistence) and full-stack systems with Spring Boot, Java, React.js, and Next.js.
            </p>

            {/* Direct Minimal Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 text-sm">
              <Link
                href="/projects"
                className="px-4 py-2 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-black font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/mathankumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <Link
                href="/about"
                className="px-3 sm:px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors text-xs sm:text-sm"
              >
                About &amp; Philosophy →
              </Link>
            </div>
          </div>

          {/* Prominent Portrait Card - Desktop Right */}
          <div className="hidden md:block shrink-0 relative group">
            {/* Subtle ambient glow behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

            <div className="relative w-52 h-52 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/80 shadow-xl dark:shadow-2xl">
              <Image
                src="/mk-portfolio/images/profile.jpg"
                alt="Mathankumar V"
                fill
                priority
                sizes="224px"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 scale-[1.02]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
