import React from "react";
import { ButtonProp } from "./button.types";
import Spin from "../spin/spin";

export default function Button({
  children,
  onClick,
  variant = "default",
  size = "default",
  disabled = false,
  loading = false,
  loadingText = "loading...",
  className = "",
  iconPosition = "left",
  icon,
}: ButtonProp) {
  const baseStyles =
    "flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease-in-out duration-150 m-4 rounded-lg relative";

  const variantStyles = {
    default:
      "bg-blue-500 hover:bg-blue-700 text-white  active:bg-blue-800 focus:ring-blue-500",
    outline: "border text-blue-500 hover:bg-gray-100",
    text: "hover:bg-gray-100 hover:text-blue-500",
  };

  const sizeStyles = {
    default: "px-4 py-2 text-base",
    small: "px-3 py-1 text-sm",
    large: "px-6 py-3 text-lg",
  };

  const iconSpacing = icon && iconPosition == "left" ? "mr-2" : "ml-2";

  const disabledStyles = "opacity-50";

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        sizeStyles[size]
      } ${disabled || loading ? disabledStyles : ""}`}
    >
      {loading && <Spin className="mr-2" size={7} loading={loading} />}
      {!loading && icon && iconPosition == "left" && (
        <span className={`${iconSpacing}`}>{icon}</span>
      )}
      {loading ? loadingText : children}
      {!loading && icon && iconPosition == "right" && (
        <span className={`${iconSpacing}`}>{icon}</span>
      )}
    </button>
  );
}
