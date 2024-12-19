import React from "react";
import ThemeToggle from "components/molecules/ThemeToggle/ThemeToggle";
import { Stack } from "react-bootstrap";
import style from "./Header.module.scss";
import LanguageToggle from "components/molecules/LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";
import "components/molecules/LanguageToggle/i18n";
import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";

export default function Header() {
  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <header>
      <Stack
        direction="horizontal"
        gap={3}
        className={`px-2 ${style.headerContainer}`}
      >
        <ThemedTypography>{t("header.title")}</ThemedTypography>
        <ThemeToggle />
        <LanguageToggle />
      </Stack>
    </header>
  );
}
