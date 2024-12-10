import React from "react";
import styles from "./Avatar.module.scss";

//Def. interfejsu = mówi jakie propsy trzeba przekazac do komponentu
interface AvatarProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

//Komponent
const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "medium" }) => {
  return (
    <img src={src} alt={alt} className={`${styles.avatar} ${styles[size]}`} />
  );
};

export default Avatar;
