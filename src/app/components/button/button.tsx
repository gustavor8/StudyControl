import React from "react";
import { ButtonProps } from "./Button.type";
import Spin from "../Spin/Spin";
import Icon from "../Icon/Icon";

export default function Button({
  children,
  onClick,
  variant = "default",
  size = "medium",
  disabled = false,
  loading = false,
  loadingText = "loading...",
  className = "",
  iconPosition = "left",
  icon,
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease-in-out duration-150 m-4 rounded-full relative gap-2";

  const variantStyles = {
    default:
      "bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-blue-700 text-white dark:active:bg-blue-800 active:bg-blue-800 focus:ring-blue-500",
    outline:
      "border border-gray-300 dark:border-gray-300 dark:text-white  text-blue-500 hover:bg-gray-200 dark:hover:bg-gray-600",
    text: "hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-blue-500 text-blue-500 dark:text-white",
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
