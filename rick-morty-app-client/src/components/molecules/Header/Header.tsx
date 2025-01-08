import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Stack } from "react-bootstrap";
import style from "./Header.module.scss";

const BuggyComponent = () => {
  throw new Error("Test error!");
  return <div>Oops!</div>;
};

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
      </Stack>
      <BuggyComponent />
    </header>
  );
}
