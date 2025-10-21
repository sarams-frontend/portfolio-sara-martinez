import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { CONFIG } from "@/constants/config";

const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem(CONFIG.LANGUAGE_STORAGE_KEY, newLang);
  }, [i18n]);

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`Change language to ${i18n.language === "en" ? "Spanish" : "English"}`}
    >
      {i18n.language === "en" ? (
        <span className="text-2xl" role="img" aria-label="Spanish flag">
          🇪🇸
        </span>
      ) : (
        <span className="text-2xl" role="img" aria-label="US flag">
          🇺🇸
        </span>
      )}
    </button>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
