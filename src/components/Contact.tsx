import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CONFIG } from "@/constants/config";
import { downloadFile } from "@/lib/download";

const Contact = memo(() => {
  const { t } = useTranslation();

  const handleDownloadCV = useCallback(() => {
    downloadFile(CONFIG.CV_PATH, CONFIG.CV_FILENAME);
  }, []);

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-hover">
              {t("contact.title")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <Card className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-card border-border/50 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">
                {t("contact.contactInfo")}
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${CONFIG.SOCIAL_LINKS.EMAIL}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  aria-label={`Send email to ${CONFIG.SOCIAL_LINKS.EMAIL}`}
                >
                  <div className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{CONFIG.SOCIAL_LINKS.EMAIL}</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group cursor-pointer">
                  <div className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>{t("contact.location")}</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-display font-semibold mb-4">
                  {t("contact.followMe")}
                </h4>
                <div className="flex gap-3">
                  <a
                    href={CONFIG.SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit GitHub profile"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={CONFIG.SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <div className="animate-float">
                <Button
                  size="lg"
                  className="bg-gradient-button hover:bg-gradient-button-hover transition-all duration-300 shadow-lg hover:shadow-primary/50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group hover:scale-105 min-h-[44px]"
                  onClick={handleDownloadCV}
                  aria-label="Download CV"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t("contact.downloadCV")}
                </Button>
              </div>
              <p className="text-muted-foreground text-sm mt-4 sm:mt-6 md:mt-8 text-center">
                {t("contact.downloadDescription")}
              </p>
            </div>
          </div>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>{t("footer.copyright")}</p>
        </footer>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
