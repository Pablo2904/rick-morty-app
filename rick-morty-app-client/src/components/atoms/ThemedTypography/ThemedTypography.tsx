import React from "react";
import styles from "./ThemedTypography.module.scss";

interface ThemedTypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  size?: "Small" | "Medium" | "Large";
  color?: "Primary" | "Secondary";
  children: React.ReactNode;
  className?: string;
}

const ThemedTypography: React.FC<ThemedTypographyProps> = ({
  variant = "p",
  size = "Medium",
  color = "Primary",
  children,
  className,
}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`${styles.typography} ${styles[`typography${size}`]} ${
        styles[`typography${color}`]
      } ${className || ""}`}
    >
      {children}
    </Tag>
  );
};

export default ThemedTypography;
