"use client";

import { motion } from "framer-motion";
import { Github, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mrdaniilsht@gmail.com",
      href: "mailto:mrdaniilsht@gmail.com",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@froggytalents",
      href: "https://t.me/froggytalents",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Masterofowls",
      href: "https://github.com/Masterofowls",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Saint Petersburg, Russia",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 h-full group hover:glow-effect">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground/70">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild className="group">
            <a href="mailto:mrdaniilsht@gmail.com">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Send me an email
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border text-center"
        >
          <p className="text-foreground/60 mb-4">
            Built with Next.js, Three.js, Tailwind CSS, and shadcn/ui
          </p>
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Daniil Shtarkman. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}