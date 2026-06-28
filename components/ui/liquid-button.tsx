"use client";

import React from "react";

export interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
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
  const sizeClasses = size === "icon" ? "p-3" : "px-10 py-4";

  return (
    <button
      className={`group relative overflow-hidden rounded-full font-bold transition-all duration-300 hover:scale-105 ${sizeClasses} ${
        isSecondary
          ? "border border-on-primary/30 text-on-primary"
          : "bg-primary-container text-on-primary-container"
      } ${className}`}
      {...props}
    >
      <span className={`relative z-10 transition-colors duration-500 delay-100 ${
        isSecondary ? "group-hover:text-on-primary-container" : "group-hover:text-primary"
      }`}>
        {children}
      </span>
      
      {/* Liquid Fill Element */}
      <div
        className={`absolute top-[100%] left-1/2 z-0 aspect-square w-[200%] -translate-x-1/2 rounded-[45%] transition-all duration-700 ease-in-out group-hover:top-[-10%] group-hover:rotate-180 ${
          isSecondary ? "bg-primary" : "bg-white"
        }`}
      />
    </button>
  );
}
