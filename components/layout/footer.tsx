import { MKLogo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="mt-auto sleek-border-t bg-neutral-50/50 dark:bg-black py-12 text-xs text-neutral-500 dark:text-neutral-400">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center p-0.5">
            <MKLogo className="w-full h-full text-white" />
          </div>
          <div>
            <p className="text-neutral-900 dark:text-neutral-200 font-medium">Mathankumar V</p>
            <p className="text-neutral-500 dark:text-neutral-400 mt-0.5">Flutter &amp; Full-Stack Software Developer</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-neutral-600 dark:text-neutral-300">
          <a
            href="https://github.com/mathankumar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://in.linkedin.com/in/mathankumar01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mathankumardevv@gmail.com"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
