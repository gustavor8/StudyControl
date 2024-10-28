export interface InputProp {
  placeholder: string;
  onChange?: () => void;
  variant?: "default" | "outline" | "filled";
  size?: "default" | "small" | "large";
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: "left" | "right";
}
