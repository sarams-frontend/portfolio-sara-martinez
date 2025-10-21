/**
 * Shared gradient and style constants
 */
export const GRADIENTS = {
  primary: "linear-gradient(135deg, hsl(258 90% 66%), hsl(221 83% 53%))",
  hover: "#d946ef",
} as const;

export const BUTTON_STYLES = {
  gradient: {
    background: GRADIENTS.primary,
    borderColor: "transparent",
  },
} as const;
