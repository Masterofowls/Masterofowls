export const en = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, my name is",
    name: "Daniil Shtarkman",
    title: "Fullstack Developer",
    description:
      "I create modern web applications using cutting-edge technologies. Specialized in React, Next.js, and Node.js with a passion for clean code and user experience.",
    viewProjects: "View My Work",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    heading: "Passionate Developer",
    description:
      "I'm a fullstack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems.",
    experience: "Experience",
    experienceYears: "3+ Years",
    experienceDesc: "Professional Development",
    projects: "Projects",
    projectsCount: "20+ Projects",
    projectsDesc: "Completed Successfully",
    clients: "Clients",
    clientsCount: "15+ Clients",
    clientsDesc: "Satisfied Worldwide",
  },
  skills: {
    title: "Skills & Technologies",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Others",
  },
  projects: {
    title: "Featured Projects",
    viewLive: "View Live",
    viewCode: "View Code",
    projects: {
      portfolio: {
        title: "Personal Portfolio",
        description:
          "Modern portfolio website built with Next.js 14, Three.js for 3D animations, and Tailwind CSS. Features dark theme, responsive design, and smooth animations.",
        tags: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
      },
      ecommerce: {
        title: "E-Commerce Platform",
        description:
          "Full-stack e-commerce solution with product management, shopping cart, and secure payment integration using Stripe.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
      },
      chat: {
        title: "Real-time Chat App",
        description:
          "Real-time messaging application with WebSocket support, user authentication, and file sharing capabilities.",
        tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      },
      dashboard: {
        title: "Analytics Dashboard",
        description:
          "Data visualization dashboard with interactive charts, real-time updates, and export functionality.",
        tags: ["Next.js", "D3.js", "Tailwind CSS", "API"],
      },
    },
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Let's Work Together",
    description:
      "I'm currently available for freelance work and open to discussing new projects. Whether you have a question or just want to say hi, feel free to reach out!",
    email: "Email",
    telegram: "Telegram",
    github: "GitHub",
    sendMessage: "Send Message",
  },
};

export type Translation = typeof en;
