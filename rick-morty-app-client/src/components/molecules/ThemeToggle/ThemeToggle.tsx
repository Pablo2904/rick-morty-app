import React from "react";
import { useTheme } from "context/ThemeContext/ThemeContext";
import Form from "react-bootstrap/Form";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      Zmień motyw strony na:
      <Form.Switch
        onClick={toggleTheme}
        type="switch"
        label={theme === "light" ? "Dark" : "Light"}
        onChange={() => {}}
        checked={Boolean(theme === "dark")}
      />
    </div>
  );
};

export default ThemeToggle;
