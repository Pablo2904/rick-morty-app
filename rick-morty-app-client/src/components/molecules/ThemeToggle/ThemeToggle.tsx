import React from "react";
import { useTheme } from "context/ThemeContext/ThemeContext";
import Form from "react-bootstrap/Form";
import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <ThemedTypography variant="span">Zmień motyw strony na:</ThemedTypography>
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
