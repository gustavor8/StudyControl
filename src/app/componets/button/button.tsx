import React from "react";
import { ButtonProp } from "./button.types";

export default function Button({
  children,
  onClick,
  variant = "default",
  className = "",
}: ButtonProp) {
  const baseClasses = "rounded-lg px-4 py-2 m-4";

  const variantClasses = {
    default:
      "bg-blue-500 hover:bg-blue-700 text-white shadow-md active:bg-blue-800",
    outline: "border hover:bg-blue-500 hover:text-white active:bg-blue-800",
    text: "hover:bg-gray-100 hover:text-blue-500",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
