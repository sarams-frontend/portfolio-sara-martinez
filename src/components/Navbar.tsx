import { useState, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { CONFIG } from "@/constants/config";
import { downloadFile } from "@/lib/download";

const Navbar = memo(() => {
  const { t } = useTranslation();
  const isScrolled = useScrollPosition(CONFIG.SCROLL_THRESHOLD);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: t("nav.home"), id: "home" },
    { name: t("nav.stack"), id: "stack" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.aiTools"), id: "ai-tools" },
    { name: t("nav.contact"), id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-all hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-fuchsia-700"
          >
            <span className="hidden sm:inline">Sara Martínez | Frontend Developer</span>
            <span className="sm:hidden">Sara M.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-all duration-300 hover:scale-110"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-transparent text-primary-foreground bg-gradient-button hover:bg-gradient-button-hover transition-all duration-300 hover:scale-110"
              onClick={() => downloadFile(CONFIG.CV_PATH, CONFIG.CV_FILENAME)}
            >
              <Download className="w-4 h-4 mr-2" />
              {t("nav.downloadCV")}
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left hover:text-primary transition-all duration-300 py-3 px-2 min-h-[44px] hover:scale-105 w-full"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="outline"
                size="default"
                className="border-transparent text-primary-foreground bg-gradient-button hover:bg-gradient-button-hover transition-all duration-300 w-full hover:scale-105 min-h-[44px]"
                onClick={() => downloadFile(CONFIG.CV_PATH, CONFIG.CV_FILENAME)}
              >
                <Download className="w-4 h-4 mr-2" />
                {t("nav.downloadCV")}
              </Button>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
