import React from "react";
import ThemeToggle from "components/molecules/ThemeToggle/ThemeToggle";
import { Stack } from "react-bootstrap";
import style from "./Header.module.scss";
import LanguageToggle from "components/molecules/LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";
import "components/molecules/LanguageToggle/i18n";

export default function Header() {
  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <header>
      <Stack
        direction="horizontal"
        gap={3}
        className={`px-2 ${style.headerContainer}`}
      >
        <h1>{t("header.title")}</h1>
        <ThemeToggle />
        <LanguageToggle />
      </Stack>
    </header>
  );
}
