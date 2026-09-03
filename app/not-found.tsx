import { Terminal, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6 glass-card p-8 sm:p-10 rounded-2xl border border-slate-800">
        <div className="inline-flex p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
            {"//"} Error 404
          </span>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400 font-normal">
            The route or case study you are looking for has moved or does not exist in this deployment.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button variant="outline" href="/projects">
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
