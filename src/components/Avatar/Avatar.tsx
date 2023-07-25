import styles from "./Avatar.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
