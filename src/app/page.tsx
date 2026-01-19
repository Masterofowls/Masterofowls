"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

const ThreeBackground = dynamic(
  () => import("@/components/ThreeBackground").then(mod => ({ default: mod.ThreeBackground })),
  { 
    ssr: false,
    loading: () => null
  }
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ThreeBackground />
      <Navigation />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}