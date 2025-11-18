import React from "react";

import { cn } from "@/lib/utils";
interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "rainbow-button relative inline-flex min-h-10 min-w-[8.5rem] items-center justify-center rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition-[transform,filter] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-200 disabled:pointer-events-none disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
