export interface InputProp {
  placeholder: string;
  onChange?: () => void;
  variant?: "default" | "outline" | "filledLarge";
  size?: "default" | "small" | "large";
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: "left" | "right";
}
