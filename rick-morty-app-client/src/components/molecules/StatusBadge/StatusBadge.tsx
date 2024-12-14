import React from "react";
import styles from "./StatusBadge.module.scss";
import { CharacterStatus } from "../../../types/CharactersTypes";

interface BadgeProps {
  variant?: CharacterStatus;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = "unknown", children }) => {
  return (
    <span className={`${styles.badge} ${styles[variant.toLowerCase()]}`}>
      {children}
    </span>
  );
};

export default Badge;
