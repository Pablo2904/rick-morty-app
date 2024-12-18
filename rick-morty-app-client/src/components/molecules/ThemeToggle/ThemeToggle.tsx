import React from "react";
import { useTheme } from "context/ThemeContext/ThemeContext";
import Form from "react-bootstrap/Form";
import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";

import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <div>
      <ThemedTypography variant="span">
        {t("header.themeToggle")}
      </ThemedTypography>
      <Form.Switch
        onClick={toggleTheme}
        type="switch"
        label={
          <ThemedTypography variant="span" size="Small" color="Secondary">
            {theme === "light" ? "Dark" : "Light"}
          </ThemedTypography>
        }
        onChange={() => {}}
        checked={Boolean(theme === "dark")}
      />
    </div>
  );
};

export default ThemeToggle;
