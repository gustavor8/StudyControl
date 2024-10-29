// components/Input.tsx

import React from "react";
import { InputProp } from "./input.types";

export default function Input({
  placeholder,
  onChange,
  variant = "default",
  size = "default",
  disabled = false,
  className = "",
  iconPosition = "left",
  icon,
}: InputProp) {
  const baseStyles =
    "mr-4 mb-2 flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out";

  const variantStyles = {
    default:
      "bg-gray-100 dark:bg-[#444444] border border-gray-300 border-none outline-none text-gray-900 dark:text-white placeholder-gray-500 focus:ring-blue-500",
    outline: "border dark:border-gray-800 bg-transparent",
    filledLarge:
      "bg-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",
  };

  const sizeStyles = {
    default: "px-4 py-2 text-base",
    small: "px-3 py-1 text-sm",
    large: "px-5 py-3 text-lg",
  };

  const iconSpacing = icon && iconPosition === "left" ? "mr-2" : "ml-2";

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <>
      {icon && iconPosition === "left" && (
        <span className={`${iconSpacing} text-gray-500`}>{icon}</span>
      )}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${
          sizeStyles[size]
        } ${disabled ? disabledStyles : ""} ${className} `}
      />
      {icon && iconPosition === "right" && (
        <span className={`${iconSpacing} text-gray-500`}>{icon}</span>
      )}
    </>
  );
}
