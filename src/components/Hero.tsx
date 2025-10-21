import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedText from "@/components/common/AnimatedText";
import { CONFIG } from "@/constants/config";
import { openExternalLink } from "@/lib/navigation";

const Hero = memo(() => {
  const { t } = useTranslation();

  const handleEmailClick = useCallback(() => {
    window.location.href = `mailto:${CONFIG.SOCIAL_LINKS.EMAIL}`;
  }, []);

  const handleGithubClick = useCallback(() => {
    openExternalLink(CONFIG.SOCIAL_LINKS.GITHUB);
  }, []);

  const handleLinkedInClick = useCallback(() => {
    openExternalLink(CONFIG.SOCIAL_LINKS.LINKEDIN);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Profile Image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow"></div>
              <img
                src="/profile-sara-martinez.jpg"
                alt="Sara Martínez - Frontend Developer"
                loading="eager"
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl object-cover border-4 border-primary/20 shadow-2xl transition-all duration-700 hover:translate-x-4 cursor-pointer animate-float"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left order-2 md:order-1 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <AnimatedText text={t("hero.greeting")} />
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-hover">
                {t("hero.title")}
              </span>
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button
                size="lg"
                className="min-h-[44px] min-w-[44px] bg-gradient-primary shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-110 transition-all duration-300"
                onClick={handleEmailClick}
                aria-label="Contact via email"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t("hero.contactMe")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-h-[44px] min-w-[44px] border-primary/50 hover:border-primary hover:bg-primary/10 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-110 transition-all duration-300"
                onClick={handleGithubClick}
                aria-label="View GitHub profile"
              >
                <Github className="w-5 h-5 mr-2" />
                {t("hero.viewGithub")}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={CONFIG.SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={CONFIG.SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
