import { SpinProps } from "./spin.type";

export default function Spin({
  size = 12,
  className,
  loading = false,
  variant = "default",
}: SpinProps) {
  if (!loading) return null;

  const variantStyle = {
    default: {
      leftRight: "bg-red-500 dark:bg-red-600 animate-orbit-left-right",
      rightLeft: "bg-blue-500 dark:bg-blue-600 animate-orbit-right-left",
    },
    neutral: {
      leftRight: "bg-gray-400 dark:bg-gray-100 animate-orbit-left-right",
      rightLeft: "bg-gray-300 dark:bg-gray-50 animate-orbit-right-left",
    },
  };

  return (
    <div className={`p-1 flex justify-center items-center  ${className}`}>
      <div
        className={`rounded-full ${variantStyle[variant].leftRight}`}
        style={{ width: size, height: size }}
      />
      <div
        className={`rounded-full ${variantStyle[variant].rightLeft}`}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
