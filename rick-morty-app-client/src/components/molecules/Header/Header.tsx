import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Stack } from "react-bootstrap";
import style from "./Header.module.scss";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";
import "../LanguageToggle/i18n";

export default function Header() {
  return (
    <header>
      <Stack
        direction="horizontal"
        gap={3}
        className={`px-2 ${style.headerContainer}`}
      >
        Strona o Rick and Morty
        <ThemeToggle />
        <LanguageToggle />
      </Stack>
    </header>
  );
}
