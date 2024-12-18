import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n, t }: { i18n: any; t: (key: string) => string } =
    useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div>
      <p>{t("header.welcomeMessage")}</p>
      <button
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
      >
        English
      </button>

      <button
        onClick={() => changeLanguage("es")}
        aria-label="Cambiar a español"
      >
        Español
      </button>
    </div>
  );
};

export default LanguageToggle;
