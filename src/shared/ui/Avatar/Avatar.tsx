import { CSSProperties, useMemo } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  border?: number;
}

const Avatar = ({ src, alt, size, border }: AvatarProps) => {
  const avatarStyles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
      borderRadius: border || 16,
    }),
    [size, border]
  );
  return (
    <img src={src} alt={alt} style={avatarStyles} className={styles.avatar} />
  );
};

export default Avatar;
