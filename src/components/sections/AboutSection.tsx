"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Rocket, Server, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const features = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and interactive UIs with React, Next.js, and TypeScript",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Creating robust APIs with Python, Django, FastAPI, and Node.js",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Architecting efficient database solutions with PostgreSQL and MySQL",
    },
    {
      icon: Globe,
      title: "Full Stack",
      description: "End-to-end development from concept to deployment",
    },
    {
      icon: Rocket,
      title: "DevOps & CI/CD",
      description: "Automating deployments with Docker, GitHub Actions, and GitLab CI",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Implementing secure authentication and best practices (JWT, OAuth, HTTPS)",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Fullstack Developer with 4 years of experience building high-performance web
            applications. I specialize in the complete development cycle — from UI/UX design to
            production deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 h-full group hover:glow-effect">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass-effect border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                  <p className="text-foreground/70">
                    React, TypeScript, Next.js, Responsive Design, Mobile-First, PWA
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Backend</h4>
                  <p className="text-foreground/70">
                    Python (Django, Flask, FastAPI), Node.js, REST/GraphQL API
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">DevOps</h4>
                  <p className="text-foreground/70">
                    Docker, CI/CD (GitHub Actions, GitLab CI), Linux, Nginx, SSL/TLS
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Testing</h4>
                  <p className="text-foreground/70">
                    API Testing, E2E (Playwright), Automated Testing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
