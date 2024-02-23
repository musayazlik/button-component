"use client";
import styles from "./button.module.scss";
import { IButtonProps } from "./type";

/**
 *
 * The Button component is used to create buttons.
 * @param {React.ReactNode} children - Content of the button
 * @param {boolean} [isIconOnly] - If the button contains only an icon
 * @param {"primary" | "secondary" | "tertiary"} [color] - The color of the button
 * @param {"xs" | "sm" | "md" | "lg"} [size] - The size of the button
 * @param {React.ReactNode} [endContent] - Content at the end of the button
 * @param {React.ReactNode} [startContent] - Content at the beginning of the button
 * @param {"xs" | "sm" | "md" | "lg" | "full"} [radius] - The radius of the button
 * @param {boolean} [fullWidth] - If the button should be full width
 * @param {() => void} [onClick] - Function to be called when the button is clicked
 * @param {"button" | "submit" | "reset"} [type] - The type of the button
 * @param {boolean} [disabled] - If the button is disabled
 * @param {string} [className] - The class name of the button
 * @returns {React.ReactNode} - The generated button component
 * @example
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
