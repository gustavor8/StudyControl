import React from "react";
import { ButtonProps } from "./Button.type";
import Spin from "../Spin/Spin";
import Icon from "../Icon/Icon";

export default function Button({
  children,
  onClick,
  variant = "filled",
  size = "medium",
  disabled = false,
  loading = false,
  loadingText = "loading...",
  className = "",
  iconPosition = "left",
  icon,
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center focus:outline-none  focus:ring-violet-500 focus:ring-2 focus:ring-offset-2 transition-all ease-in-out duration-150 rounded-lg  gap-2";

  const variantStyles = {
    filled:
      "bg-violet-500 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-800 text-white",
    outline:
      "bg-white border border-neutral-300 text-violet-500 hover:bg-violet-50 dark:bg-neutral-700 dark:text-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600",
    text: "text-violet-500 hover:bg-violet-100 dark:hover:bg-neutral-600 dark:text-neutral-100",
  };

  const sizeStyles = {
    medium: "px-4 py-2 text-base",
    small: "px-3 py-1 text-sm",
    large: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-70";

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={` ${baseStyles} ${variantStyles[variant]} ${
        sizeStyles[size]
      } ${disabled ? disabledStyles : ""} ${className}`}
    >
      {loading && <Spin size={7} loading={loading} variant="neutral" />}
      {!loading && icon && iconPosition == "left" && <Icon icon={icon} />}
      {loading ? loadingText : children}
      {!loading && icon && iconPosition == "right" && <Icon icon={icon} />}
    </button>
  );
}
