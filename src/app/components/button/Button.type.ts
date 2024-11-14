export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "filled" | "outline" | "text";
  size?: "small" | "medium" | "large";
  className?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  iconPosition?: "left" | "right";
}
