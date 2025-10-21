import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  Icon: IconType;
  color: string;
}

export interface AITool extends Technology {
  isCustom?: boolean;
}
