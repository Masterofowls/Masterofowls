"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  const skills = {
    frontend: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 80 },
    ],
    backend: [
      { name: "Python", level: 95 },
      { name: "Django", level: 92 },
      { name: "FastAPI", level: 88 },
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
    ],
    devops: [
      { name: "Docker", level: 90 },
      { name: "GitHub Actions", level: 88 },
      { name: "GitLab CI", level: 85 },
      { name: "Linux", level: 88 },
      { name: "Nginx", level: 85 },
      { name: "Git", level: 95 },
    ],
    other: [
      { name: "Playwright", level: 85 },
      { name: "Electron.js", level: 80 },
      { name: "React Native", level: 75 },
      { name: "Three.js", level: 70 },
      { name: "REST API", level: 95 },
      { name: "WebSocket", level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category}>
              <Card className="glass-effect border-primary/20">
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-blue-500"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
