import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageDetector } from "@/components/LanguageDetector";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Daniil Shtarkman | Fullstack Developer",
  description:
    "Fullstack Developer with 4 years of experience building high-performance web applications. Specialization: React, TypeScript, Python, Django, Docker, CI/CD.",
  keywords: [
    "Fullstack Developer",
    "React",
    "TypeScript",
    "Python",
    "Django",
    "Next.js",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Daniil Shtarkman" }],
  creator: "Daniil Shtarkman",
  alternates: {
    languages: {
      en: "/en",
      ru: "/ru",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masterofowls.github.io/Masterofowls/",
    title: "Daniil Shtarkman | Fullstack Developer",
    description: "Fullstack Developer Portfolio",
    siteName: "Daniil Shtarkman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniil Shtarkman | Fullstack Developer",
    description: "Fullstack Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, jetbrainsMono.variable, "font-sans antialiased")}>
        <LanguageDetector />
        {children}
      </body>
    </html>
  );
}
