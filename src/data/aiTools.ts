import { SiOpenai, SiAnthropic, SiGithubcopilot } from "react-icons/si";
import type { IconType } from "react-icons";
import type { AITool } from "@/types";
import LovableIcon from "@/components/icons/LovableIcon";

export const aiTools: AITool[] = [
  {
    name: "GitHub Copilot",
    Icon: SiGithubcopilot,
    color: "#22C55E",
  },
  {
    name: "Claude",
    Icon: SiAnthropic,
    color: "#D97706",
  },
  {
    name: "OpenAI",
    Icon: SiOpenai,
    color: "#10A37F",
  },
  {
    name: "Lovable",
    Icon: LovableIcon as IconType,
    color: "#FF6B9D",
    isCustom: true,
  },
];
