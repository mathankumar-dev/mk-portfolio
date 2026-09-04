import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AmbientBackground } from "@/components/ui/ambient-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mathankumar.dev"),
  title: {
    default: "Mathankumar V — Flutter & Full-Stack Developer",
    template: "%s | Mathankumar V",
  },
  description:
    "Production-grade Flutter & Full-Stack developer portfolio showcasing enterprise mobile apps, clean Riverpod architectures, audio DSP utilities, and modern web systems.",
  keywords: [
    "Flutter Developer",
    "Full-Stack Engineer",
    "Dart",
    "Riverpod",
    "Next.js",
    "TypeScript",
    "Mobile App Development",
    "Salesforce Integration",
    "Offline-first sync",
    "Alight Motion XML",
  ],
  authors: [{ name: "Mathankumar V", url: "https://github.com/mathankumar-dev" }],
  creator: "Mathankumar V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mathankumar.dev",
    title: "Mathankumar V — Flutter & Full-Stack Developer",
    description:
      "Production-grade mobile apps, resilient offline-first state architectures, and modern web systems.",
    siteName: "Mathankumar V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathankumar V — Flutter & Full-Stack Developer",
    description:
      "Production-grade Flutter & Full-Stack developer portfolio showcasing enterprise mobile apps and modern web systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo-mk.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: [
      { url: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="bg-black text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden">
        <AmbientBackground />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
