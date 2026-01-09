import { memo } from "react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const FeaturedProject = memo(() => {
  const { t } = useTranslation();

  const technologies = [
    "React", "TypeScript", "Tailwind", "PostgreSQL", "Supabase", "OpenAI", "Eleven Labs", "Vercel"
  ];

  const responsibilities = [
    t("featuredProject.responsibilities.design"),
    t("featuredProject.responsibilities.architecture"),
    t("featuredProject.responsibilities.flows"),
    t("featuredProject.responsibilities.ai"),
    t("featuredProject.responsibilities.database"),
    t("featuredProject.responsibilities.deployment"),
    t("featuredProject.responsibilities.discovery"),
  ];

  return (
    <section id="featured-project" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-hover">
              {t("featuredProject.sectionTitle")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("featuredProject.sectionDescription")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-gradient-card border-border/50 transition-all duration-300 animate-fade-in">
            {/* Header del proyecto */}
            <div className="p-6 sm:p-8 border-b border-border/30">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Imagen del proyecto */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/crm-layla-ai.png"
                      alt="Layla AI Legal Tech"
                      loading="lazy"
                      className="w-full h-auto object-contain bg-background rounded-lg"
                    />
                  </div>
                </div>

                {/* Info del proyecto */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2 text-foreground">
                    {t("featuredProject.title")}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {t("featuredProject.subtitle")}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {t("featuredProject.description")}
                  </p>

                  {/* Tags de tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Descripción extendida */}
            <div className="p-6 sm:p-8 border-b border-border/30">
              <h4 className="text-xl font-display font-bold mb-4 text-foreground">
                {t("featuredProject.extendedTitle")}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t("featuredProject.extendedDescription")}
              </p>
            </div>

            {/* Qué hago en el proyecto */}
            <div className="p-6 sm:p-8">
              <h4 className="text-xl font-display font-bold mb-4 text-foreground">
                {t("featuredProject.responsibilitiesTitle")}
              </h4>
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
});

FeaturedProject.displayName = "FeaturedProject";

export default FeaturedProject;
