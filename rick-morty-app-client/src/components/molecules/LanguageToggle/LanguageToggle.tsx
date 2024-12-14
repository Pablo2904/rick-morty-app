import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const { t }: { t: (key: string) => string } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div>
      <p>{t("welcome")}</p>
      <button
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
      >
        English
      </button>

      <button
        onClick={() => changeLanguage("es")}
        aria-label="Switch to Spanish"
      >
        Español
      </button>
    </div>
  );
};

export default LanguageToggle;
