"use client";

import React from "react";

export function FlipButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative inline-block cursor-pointer [perspective:1000px]">
      <div className="relative grid transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
        {children}
      </div>
    </div>
  );
}

export function FlipButtonFront({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-start-1 row-start-1 flex h-14 items-center justify-center bg-surface-container-low text-on-surface rounded-full px-12 py-4 font-label-sm text-label-sm hover:bg-white transition-colors duration-300 [backface-visibility:hidden] [transform:translateZ(28px)] uppercase tracking-widest">
      {children}
    </div>
  );
}

export function FlipButtonBack({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-start-1 row-start-1 flex h-14 items-center justify-center bg-primary text-on-primary rounded-full px-12 py-4 font-label-sm text-label-sm [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(28px)] uppercase tracking-widest">
      {children}
    </div>
  );
}
