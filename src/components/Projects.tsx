import { memo, useCallback, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { CONFIG } from "@/constants/config";
import { openExternalLink } from "@/lib/navigation";
import ImageModal from "@/components/ImageModal";

const Projects = memo(() => {
  const { t } = useTranslation();
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const handleProjectClick = useCallback((url: string, isDisabled?: boolean) => {
    if (!isDisabled) {
      openExternalLink(url);
    }
  }, []);

  const handleImageClick = useCallback((e: React.MouseEvent, imageSrc: string, imageAlt: string) => {
    e.stopPropagation();
    setModalImage({ src: imageSrc, alt: imageAlt });
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-hover">
              {t("projects.title")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden bg-gradient-card border-border/50 transition-all duration-300 animate-fade-in group flex flex-col h-full ${
                project.isDisabled
                  ? ""
                  : "hover:border-primary/50 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              }`}
              style={{ animationDelay: `${index * CONFIG.ANIMATION_DELAYS.CARD}s` }}
            >
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={(e) => handleImageClick(e, project.image, project.title)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-40 sm:h-48 md:h-52 transition-transform duration-500 object-contain bg-background ${
                    project.isDisabled
                      ? ""
                      : "group-hover:scale-105"
                  }`}
                  style={project.isDisabled ? { opacity: 0.7 } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Click para ampliar</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                  {t(`projects.items.${project.id}.title`, project.title)}
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  {t(`projects.items.${project.id}.description`, project.description)}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className={
                      project.isDisabled
                        ? "flex-1 bg-gray-500/30 border-gray-500/50 text-gray-400 cursor-not-allowed opacity-60 min-h-[44px] text-sm"
                        : "flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground min-h-[44px] text-sm"
                    }
                    onClick={() => handleProjectClick(project.liveUrl, project.isDisabled)}
                    disabled={project.isDisabled}
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("projects.viewDemo")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={
                      project.isDisabled
                        ? "bg-gray-500/30 border-gray-500/50 text-gray-400 cursor-not-allowed opacity-60 min-h-[44px] min-w-[44px]"
                        : "border-border/50 hover:bg-secondary min-h-[44px] min-w-[44px]"
                    }
                    onClick={() => handleProjectClick(project.githubUrl, project.isDisabled)}
                    disabled={project.isDisabled}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={modalImage !== null}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
