import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n, t }: { i18n: any; t: (key: string) => string } =
    useTranslation();

  const languages = [
    { code: "en", label: t("languages.english") },
    { code: "es", label: t("languages.spanish") },
  ];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div>
      <p>{t("header.welcomeMessage")}</p>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          aria-label={t("aria.switchLanguage")}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
