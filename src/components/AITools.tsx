import { memo, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { aiTools } from "@/data/aiTools";
import AnimatedText from "@/components/common/AnimatedText";

const AITools = memo(() => {
  const { t } = useTranslation();

  // Duplicar las herramientas para el efecto de bucle continuo
  const duplicatedTools = useMemo(() => [...aiTools, ...aiTools], []);

  return (
    <section id="ai-tools" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4">
            <AnimatedText text={t("aiTools.title")} />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("aiTools.description")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto py-8 overflow-hidden" style={{ perspective: "1000px" }}>
          <div className="flex gap-4 sm:gap-6 animate-scroll">
            {duplicatedTools.map((tool, index) => {
              const Icon = tool.Icon;
              return (
                <div key={`${tool.name}-${index}`} className="flex-shrink-0 w-48 sm:w-56 md:w-64">
                  <Card
                    className="p-4 sm:p-5 md:p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer relative hover:translate-y-[-10px] sm:hover:translate-y-[-20px]"
                    style={{
                      background: `linear-gradient(135deg, ${tool.color}30, ${tool.color}10)`
                    }}
                  >
                    <div className="text-center relative z-10 transition-transform duration-300 hover:scale-110">
                      <div className="mb-3 flex justify-center">
                        {tool.name === "Lovable" ? (
                          <img
                            src="/icon-lovable.png"
                            alt="Lovable"
                            loading="lazy"
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                          />
                        ) : tool.name === "Claude" ? (
                          <img
                            src="/icon-claude.png"
                            alt="Claude"
                            loading="lazy"
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                          />
                        ) : (
                          <Icon className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" style={{ color: tool.color }} />
                        )}
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-base sm:text-lg">
                        {tool.name}
                      </h3>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

AITools.displayName = "AITools";

export default AITools;
