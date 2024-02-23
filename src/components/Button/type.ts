export interface IButtonProps {
  children: React.ReactNode;
  isIconOnly?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg";
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  radius?: "xs" | "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}
