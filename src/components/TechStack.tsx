import { memo } from "react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { technologies } from "@/data/technologies";
import { CONFIG } from "@/constants/config";
import AnimatedText from "@/components/common/AnimatedText";

const TechStack = memo(() => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4">
            <AnimatedText text={t("stack.title")} />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("stack.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.Icon;
            return (
              <Card
                key={tech.name}
                className="p-4 sm:p-5 md:p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in cursor-pointer relative overflow-hidden"
                style={{
                  animationDelay: `${index * CONFIG.ANIMATION_DELAYS.ITEM}s`,
                  background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}10)`
                }}
              >
                <div className="text-center relative z-10 transition-transform duration-300 hover:scale-125">
                  <div className="mb-3 flex justify-center">
                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" style={{ color: tech.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-xs sm:text-sm">
                    {tech.name}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
});

TechStack.displayName = "TechStack";

export default TechStack;
