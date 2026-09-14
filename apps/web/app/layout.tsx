import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "UFC Cornerman",
  description: "AI-assisted fight research and card intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className="mx-auto min-h-screen max-w-3xl px-4 py-8 sm:px-6">
            <header className="mb-8 border-b border-border pb-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-octagon-red">
                Cornerman
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                UFC Fight Research
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Card intel, picks, and confidence — dark octagon mode.
              </p>
            </header>
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
