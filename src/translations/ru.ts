import type { Translation } from "./en";

export const ru: Translation = {
  nav: {
    home: "Главная",
    about: "О себе",
    skills: "Навыки",
    projects: "Проекты",
    contact: "Контакты",
  },
  hero: {
    greeting: "Привет, меня зовут",
    name: "Даниил Штаркман",
    title: "Fullstack Разработчик",
    description:
      "Я создаю современные веб-приложения, используя новейшие технологии. Специализируюсь на React, Next.js и Node.js с увлечением чистым кодом и пользовательским опытом.",
    viewProjects: "Посмотреть работы",
    downloadCV: "Скачать CV",
  },
  about: {
    title: "О себе",
    heading: "Увлеченный разработчик",
    description:
      "Я fullstack разработчик с экспертизой в современных веб-технологиях. Люблю создавать масштабируемые приложения и решать сложные задачи.",
    experience: "Опыт",
    experienceYears: "3+ года",
    experienceDesc: "Профессиональной разработки",
    projects: "Проекты",
    projectsCount: "20+ проектов",
    projectsDesc: "Успешно завершено",
    clients: "Клиенты",
    clientsCount: "15+ клиентов",
    clientsDesc: "Довольных по всему миру",
  },
  skills: {
    title: "Навыки и технологии",
    frontend: "Фронтенд",
    backend: "Бэкенд",
    tools: "Инструменты и другое",
  },
  projects: {
    title: "Избранные проекты",
    viewLive: "Открыть",
    viewCode: "Код",
    projects: {
      portfolio: {
        title: "Личное портфолио",
        description:
          "Современный сайт-портфолио на Next.js 14, Three.js для 3D-анимаций и Tailwind CSS. С темной темой, адаптивным дизайном и плавными анимациями.",
        tags: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
      },
      ecommerce: {
        title: "E-Commerce платформа",
        description:
          "Полноценное решение для электронной коммерции с управлением товарами, корзиной и безопасной интеграцией платежей через Stripe.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
      },
      chat: {
        title: "Чат в реальном времени",
        description:
          "Приложение для обмена сообщениями в реальном времени с поддержкой WebSocket, аутентификацией пользователей и обменом файлами.",
        tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      },
      dashboard: {
        title: "Аналитическая панель",
        description:
          "Панель визуализации данных с интерактивными графиками, обновлениями в реальном времени и функцией экспорта.",
        tags: ["Next.js", "D3.js", "Tailwind CSS", "API"],
      },
    },
  },
  contact: {
    title: "Связаться со мной",
    subtitle: "Давайте работать вместе",
    description:
      "В настоящее время я доступен для фриланс-работы и открыт для обсуждения новых проектов. Есть вопрос или просто хотите поздороваться - пишите!",
    email: "Email",
    telegram: "Telegram",
    github: "GitHub",
    sendMessage: "Отправить сообщение",
  },
};
