import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Stack } from "react-bootstrap";
import style from "./Header.module.scss";
import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";

export default function Header() {
  return (
    <header>
      <Stack
        direction="horizontal"
        gap={3}
        className={`px-2 ${style.headerContainer}`}
      >
        <ThemedTypography>Strona o Rick and Morty</ThemedTypography>
        <ThemeToggle />
      </Stack>
    </header>
  );
}
