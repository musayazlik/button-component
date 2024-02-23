"use client";
import styles from "./button.module.scss";
import { IButtonProps } from "./type";

/**
 * Button bileşeni, düğme oluşturmak için kullanılır.
 *
 * @param {React.ReactNode} children - Düğme içeriği
 * @param {boolean} [isIconOnly] - Eğer düğme yalnızca bir simge içeriyorsa
 * @param {"primary" | "secondary" | "tertiary"} [color] - Düğmenin rengi
 * @param {"xs" | "sm" | "md" | "lg"} [size] - Düğmenin boyutu
 * @param {React.ReactNode} [endContent] - Düğmenin sonunda yer alacak içerik
 * @param {React.ReactNode} [startContent] - Düğmenin başında yer alacak içerik
 * @param {"xs" | "sm" | "md" | "lg" | "full"} [radius] - Düğmenin köşe yarıçapı
 * @param {boolean} [fullWidth] - Düğmenin tam genişlikte olup olmayacağı
 * @param {() => void} [onClick] - Düğme tıklandığında çağrılacak işlev
 * @param {"button" | "submit" | "reset"} [type] - Düğmenin tipi
 * @param {boolean} [disabled] - Düğmenin etkin olup olmadığı
 * @param {string} [className] - Düğmenin sınıf adı
 * @returns {React.ReactNode} - Oluşturulan düğme bileşeni
 */

export default function Button({
  children,
  isIconOnly,
  color = "primary",
  size = "md",
  endContent,
  startContent,
  radius = "md",
  fullWidth,
  type = "button",
  disabled,
  className,
}: IButtonProps) {
  return (
    <button
      className={` ${styles.button} ${styles[color]} ${
        styles["size-" + size]
      } ${styles["radius-" + radius]} ${fullWidth ? styles.fullWidth : ""} ${
        isIconOnly ? styles["icon-only-" + size] : ""
      } ${
        startContent && endContent
          ? styles["content-both-" + size]
          : startContent
          ? styles["content-start"]
          : endContent
          ? styles["content-end"]
          : ""
      } ${className} `}
      type={type}
      disabled={disabled}
    >
      {startContent}
      {!isIconOnly && <span className={styles.content}>{children}</span>}
      {endContent}
    </button>
  );
}
