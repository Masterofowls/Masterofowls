import type { Translation } from "./en";

export const fr: Translation = {
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },
  hero: {
    greeting: "Bonjour, je m'appelle",
    name: "Daniil Shtarkman",
    title: "Développeur Fullstack",
    description:
      "Je crée des applications web modernes en utilisant des technologies de pointe. Spécialisé en React, Next.js et Node.js avec une passion pour le code propre et l'expérience utilisateur.",
    viewProjects: "Voir mon travail",
    downloadCV: "Télécharger le CV",
  },
  about: {
    title: "À propos de moi",
    heading: "Développeur passionné",
    description:
      "Je suis un développeur fullstack avec une expertise dans les technologies web modernes. J'aime créer des applications évolutives et résoudre des problèmes complexes.",
    experience: "Expérience",
    experienceYears: "3+ ans",
    experienceDesc: "Développement professionnel",
    projects: "Projets",
    projectsCount: "20+ projets",
    projectsDesc: "Réalisés avec succès",
    clients: "Clients",
    clientsCount: "15+ clients",
    clientsDesc: "Satisfaits dans le monde entier",
  },
  skills: {
    title: "Compétences et technologies",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Outils et autres",
  },
  projects: {
    title: "Projets en vedette",
    viewLive: "Voir en direct",
    viewCode: "Voir le code",
    projects: {
      portfolio: {
        title: "Portfolio personnel",
        description:
          "Site web de portfolio moderne construit avec Next.js 14, Three.js pour les animations 3D et Tailwind CSS. Dispose d'un thème sombre, design réactif et animations fluides.",
        tags: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
      },
      ecommerce: {
        title: "Plateforme e-commerce",
        description:
          "Solution e-commerce complète avec gestion des produits, panier d'achat, intégration de paiement et tableau de bord administrateur. Construit avec Next.js et Stripe.",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      },
      chat: {
        title: "Application de Chat en Temps Réel",
        description:
          "Application de messagerie en temps réel avec support WebSocket, authentification des utilisateurs et capacités de partage de fichiers.",
        tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      },
      dashboard: {
        title: "Tableau de bord analytique",
        description:
          "Tableau de bord analytique en temps réel avec graphiques interactifs, visualisation de données et fonctions d'exportation. Utilise Recharts et TanStack Query.",
        tags: ["React", "Recharts", "TanStack Query", "TypeScript"],
      },
    },
  },
  contact: {
    title: "Entrer en contact",
    subtitle: "Travaillons ensemble",
    description:
      "Je suis actuellement disponible pour du travail freelance et ouvert à discuter de nouveaux projets. Que vous ayez une question ou que vous vouliez simplement dire bonjour, n'hésitez pas à me contacter !",
    email: "E-mail",
    telegram: "Telegram",
    github: "GitHub",
    sendMessage: "Envoyer un message",
  },
};
