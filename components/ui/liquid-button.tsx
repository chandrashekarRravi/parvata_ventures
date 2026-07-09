"use client";

import React from "react";

export interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverse-primary" | "inverse-secondary";
  size?: "default" | "icon";
}

export function LiquidButton({
  children,
  className = "",
  variant = "primary",
  size = "default",
  ...props
}: LiquidButtonProps) {
  const isSecondary = variant === "secondary";
  const isInversePrimary = variant === "inverse-primary";
  const isInverseSecondary = variant === "inverse-secondary";
  const sizeClasses = size === "icon" ? "p-3" : "px-10 py-4";

  let baseClasses = "";
  let textHoverClass = "";
  let fillClass = "";

  if (isInversePrimary) {
    baseClasses = "bg-white text-primary";
    textHoverClass = "group-hover:text-white";
    fillClass = "bg-primary";
  } else if (isInverseSecondary) {
    baseClasses = "border border-white/30 text-white";
    textHoverClass = "group-hover:text-primary";
    fillClass = "bg-white";
  } else if (isSecondary) {
    baseClasses = "border border-secondary text-secondary";
    textHoverClass = "group-hover:text-on-secondary";
    fillClass = "bg-secondary";
  } else {
    baseClasses = "bg-primary text-on-primary";
    textHoverClass = "group-hover:text-primary";
    fillClass = "bg-white";
  }

  return (
    <button
      className={`group relative overflow-hidden rounded-full font-bold transition-all duration-300 hover:scale-105 ${sizeClasses} ${baseClasses} ${className}`}
      {...props}
    >
      <span className={`relative z-10 transition-colors duration-500 delay-100 ${textHoverClass}`}>
        {children}
      </span>
      
      {/* Liquid Fill Element */}
      <div
        className={`absolute top-[100%] left-1/2 z-0 aspect-square w-[200%] -translate-x-1/2 rounded-[45%] transition-all duration-700 ease-in-out group-hover:top-[-10%] group-hover:rotate-180 ${fillClass}`}
      />
    </button>
  );
}
