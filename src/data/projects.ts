import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Modern SaaS for IT data visualization with interactive charts and data analytics.",
    image: "/project-dashboard-analytics.png",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://free-react-tailwind-dashboard.netlify.app",
    githubUrl: "https://github.com/sarams-frontend/free-react-tailwind-admin-dashboard-main",
    isDisabled: false,
  },
  {
    id: "dashboard-atp",
    title: "Dashboard - ATP",
    description: "Real-time statistics and rankings of the world's best tennis players.",
    image: "/project-in-progress.png",
    tags: ["React", "TypeScript", "Tailwind", "APIs"],
    liveUrl: "https://tu-proyecto-demo-2.com",
    githubUrl: "https://github.com/tu-usuario/tu-proyecto-2",
    isDisabled: true,
  },
  {
    id: "crm-marketing",
    title: "CRM - Marketing",
    description: "Intuitive marketing CRM to manage campaigns, leads, and real-time analytics.",
    image: "/project-in-progress.png",
    tags: ["React", "TypeScript", "Tailwind", "APIs"],
    liveUrl: "https://tu-proyecto-demo-3.com",
    githubUrl: "https://github.com/tu-usuario/tu-proyecto-3",
    isDisabled: true,
  },
];
