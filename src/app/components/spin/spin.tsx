import { SpinProps } from "./spin.type";

export default function Spin({
  size = 12,
  className,
  loading = false,
}: SpinProps) {
  if (!loading) return null;

  return (
    <div className={`p-1 flex justify-center items-center  ${className}`}>
      <div
        className={`rounded-full bg-red-500 animate-orbit-red`}
        style={{ width: size, height: size }}
      />
      <div
        className={`rounded-full bg-blue-500 animate-orbit-blue`}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
