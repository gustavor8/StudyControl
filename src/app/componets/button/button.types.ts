export interface ButtonProp {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "text";
  className?: string;
}
