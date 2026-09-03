"use client";

export function Footer() {
  return (
    <footer className="mt-auto sleek-border-t bg-black py-12 text-xs text-neutral-500">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-neutral-400 font-medium">Mathankumar V</p>
          <p className="text-neutral-600 mt-0.5">Flutter &amp; Full-Stack Software Developer</p>
        </div>

        <div className="flex items-center gap-5 text-neutral-400">
          <a
            href="https://github.com/mathankumar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://in.linkedin.com/in/mathankumar01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mathankumardevv@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
