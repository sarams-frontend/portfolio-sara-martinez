import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "dashboard-analytics",
    title: "Dashboard Snsorial",
    description: "Modern SaaS for IT data visualization with interactive charts and data analytics.",
    image: "/Snsorial.png",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://dashboard-snsorial.netlify.app",
    githubUrl: "https://github.com/sarams-frontend/free-react-tailwind-admin-dashboard-main",
    isDisabled: false,
  },
  {
    id: "instagram-analytics",
    title: "Instagram Analytics",
    description: "Analyze Instagram influencers with detailed metrics, audience analysis and engagement statistics.",
    image: "/project-instagram-analytics.png",
    tags: ["React", "TypeScript", "Instagram API", "Analytics"],
    liveUrl: "https://instagram-analytics-tau.vercel.app",
    githubUrl: "https://github.com/sarams-frontend/instagram-analytics",
    isDisabled: false,
  },
];
