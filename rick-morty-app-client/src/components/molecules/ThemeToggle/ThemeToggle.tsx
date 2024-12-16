import React from "react";
import { useTheme } from "context/ThemeContext/ThemeContext";
import Form from "react-bootstrap/Form";

import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <div>
      <p>{t("header.themeToggle")}</p>
      <Form.Switch
        onClick={toggleTheme}
        type="switch"
        label={theme === "light" ? t("header.darkMode") : t("header.lightMode")}
        onChange={() => {}}
        checked={Boolean(theme === "dark")}
      />
    </div>
  );
};

export default ThemeToggle;
