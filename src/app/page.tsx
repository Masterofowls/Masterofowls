"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Defer Three.js until browser is idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setShowBackground(true), { timeout: 2000 });
    } else {
      setTimeout(() => setShowBackground(true), 1000);
    }
  }, []);

  return (
    <main className="relative min-h-screen">
      {showBackground && <ThreeBackground />}
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