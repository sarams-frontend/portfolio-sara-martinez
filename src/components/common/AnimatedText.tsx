import { memo, useMemo } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = memo<AnimatedTextProps>(({ text, className = "" }) => {
  const animatedLetters = useMemo(
    () =>
      text.split("").map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-200 ease-in-out hover:scale-125 hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] cursor-pointer"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      )),
    [text]
  );

  return <span className={className}>{animatedLetters}</span>;
});

AnimatedText.displayName = "AnimatedText";

export default AnimatedText;
