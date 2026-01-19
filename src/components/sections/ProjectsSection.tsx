"use client";

import { motion } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";
import { ProjectIframe } from "@/components/ProjectIframe";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  preview: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "3D Game Platform",
      description:
        "Interactive 3D game built with Three.js and WebGL. Features advanced physics, custom shaders, and multiplayer support.",
      url: "https://3-d-game-tau.vercel.app/",
      preview: "https://3-d-game-tau.vercel.app/",
      tags: ["Three.js", "WebGL", "React", "TypeScript"],
    },
    {
      title: "Video Player Application",
      description:
        "Custom video player with advanced controls, subtitle support, and playlist management. Built for optimal performance.",
      url: "https://player-ten-pearl.vercel.app/",
      preview: "https://player-ten-pearl.vercel.app/",
      tags: ["React", "TypeScript", "Video.js", "Next.js"],
    },
    {
      title: "Yoom - Video Conferencing",
      description:
        "Real-time video conferencing platform with screen sharing, chat, and recording capabilities.",
      url: "https://yoom-topaz.vercel.app/",
      preview: "https://yoom-topaz.vercel.app/",
      tags: ["Next.js", "WebRTC", "Socket.io", "TypeScript"],
    },
    {
      title: "Creative Portfolio",
      description:
        "Modern portfolio website with smooth animations, responsive design, and interactive elements.",
      url: "https://poetic-manatee-218ab7.netlify.app/",
      preview: "https://poetic-manatee-218ab7.netlify.app/",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Live previews of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 h-full group hover:glow-effect overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open in new tab"
                      >
                        <Maximize2 className="h-5 w-5" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                {/* Live Preview Iframe */}
                <ProjectIframe src={project.preview} title={project.title} url={project.url} />

                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="default" size="sm" asChild className="w-full">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Full Site
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
