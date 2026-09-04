"use client";

import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const email = "mathankumardevv@gmail.com";

  return (
    <section id="contact" className="py-20 sleek-border-t">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Let’s collaborate.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
            Have an application to build or looking for an experienced Flutter &amp; Full-Stack developer? Feel free to reach out directly.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3 text-sm">
            <a
              href={`mailto:${email}`}
              className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Send an Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/mathankumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-1.5 font-mono text-xs"
            >
              <span>GitHub (mathankumar-dev)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://in.linkedin.com/in/mathankumar01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-1.5 font-mono text-xs"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
