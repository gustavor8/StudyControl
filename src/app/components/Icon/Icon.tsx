import React from "react";
import { IconProps } from "./Icon.type";

export default function Icon({
  icon: IconSvg,
  color = "currentColor",
  size = 24,
}: IconProps) {
  return <IconSvg fill={color} width={size} />;
}
