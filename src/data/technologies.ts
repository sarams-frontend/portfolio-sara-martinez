import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import type { Technology } from "@/types";

export const technologies: Technology[] = [
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#666666" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
];
