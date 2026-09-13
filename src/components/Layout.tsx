import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-cage min-h-svh">
      <header className="border-b border-border bg-surface/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-3 no-underline">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-blood font-display text-xl text-cream tracking-wider">
              UFC
            </span>
            <div>
              <div className="font-display text-2xl tracking-[0.12em] text-cream leading-none group-hover:text-blood transition-colors">
                PREDICTION LAB
              </div>
              <div className="font-heading text-[10px] uppercase tracking-[0.25em] text-muted">
                Phase 1 · Research Dashboard
              </div>
            </div>
          </Link>
          <div className="hidden sm:block font-heading text-xs uppercase tracking-widest text-muted">
            Mock Data Only
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center font-heading text-xs uppercase tracking-widest text-muted">
          Phase 1 UI · No live APIs · Review aesthetic before Phase 2
        </div>
      </footer>
    </div>
  );
}
