import type { Translation } from "./en";

export const zh: Translation = {
  nav: {
    home: "首页",
    about: "关于",
    skills: "技能",
    projects: "项目",
    contact: "联系",
  },
  hero: {
    greeting: "你好，我的名字是",
    name: "Daniil Shtarkman",
    title: "全栈开发者",
    description:
      "我使用尖端技术创建现代Web应用程序。专注于React、Next.js和Node.js，热衷于编写简洁的代码和优化用户体验。",
    viewProjects: "查看我的作品",
    downloadCV: "下载简历",
  },
  about: {
    title: "关于我",
    heading: "充满热情的开发者",
    description:
      "我是一名全栈开发者，精通现代Web技术。我热爱构建可扩展的应用程序和解决复杂问题。",
    experience: "经验",
    experienceYears: "3年以上",
    experienceDesc: "专业开发",
    projects: "项目",
    projectsCount: "20多个项目",
    projectsDesc: "成功完成",
    clients: "客户",
    clientsCount: "15多位客户",
    clientsDesc: "全球满意",
  },
  skills: {
    title: "技能与技术",
    frontend: "前端",
    backend: "后端",
    tools: "工具与其他",
  },
  projects: {
    title: "精选项目",
    viewLive: "查看演示",
    viewCode: "查看代码",
    projects: {
      portfolio: {
        title: "个人作品集",
        description:
          "使用Next.js 14、Three.js 3D动画和Tailwind CSS构建的现代作品集网站。具有深色主题、响应式设计和流畅动画。",
        tags: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
      },
      ecommerce: {
        title: "电商平台",
        description:
          "完整的电子商务解决方案，包括产品管理、购物车、支付集成和管理员仪表板。使用Next.js和Stripe构建。",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      },
      chat: {
        title: "实时聊天应用",
        description:
          "支持 WebSocket 的实时消息应用，具有用户身份验证和文件共享功能。",
        tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      },
      dashboard: {
        title: "分析仪表板",
        description:
          "实时分析仪表板，具有交互式图表、数据可视化和导出功能。使用Recharts和TanStack Query。",
        tags: ["React", "Recharts", "TanStack Query", "TypeScript"],
      },
    },
  },
  contact: {
    title: "联系我",
    subtitle: "让我们合作",
    description:
      "我目前可以接受自由职业工作，并愿意讨论新项目。无论您有问题还是只想打声招呼，请随时联系我！",
    email: "电子邮件",
    telegram: "Telegram",
    github: "GitHub",
    sendMessage: "发送消息",
  },
};
