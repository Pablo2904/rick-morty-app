import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "medium" }) => {
  return (
    <img src={src} alt={alt} className={`${styles.avatar} ${styles[size]}`} />
  );
};

export default Avatar;
