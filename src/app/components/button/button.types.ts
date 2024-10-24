export interface ButtonProp {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "text";
  size?: "default" | "small" | "large";
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string; 
  iconPosition?: "left" | "right";
}
