"use client";

import type { ReactNode } from "react";
import { GradientBackground } from "@/components/gradient-surface";

const tunedColors: [string, string, ...string[]] = ["#b8562a","#ffd9bf","#ffb070"];
const tunedProps = { ...  {"background":"#060302","blur":0.3,"colors":["#b8562a","#ffd9bf","#ffb070"],"dither":{"cell":3,"enabled":false,"levels":8},"grain":0.06,"interaction":{"pointer":0.15,"scroll":0.2},"loopSeconds":30,"scale":0.6,"seed":30,"speed":0.27,"warp":0.2}, colors: tunedColors };
const tunedDefaults =   {"background":"#060302","blur":0.3,"colors":["#b8562a","#ffd9bf","#ffb070"],"dither":{"cell":3,"enabled":false,"levels":8},"grain":0.06,"interaction":{"pointer":0.15,"scroll":0.2},"kind":"chrome","loopSeconds":30,"scale":0.6,"seed":30,"speed":0.27,"warp":0.2};

export interface CopperProps {
  className?: string;
  children?: ReactNode;
}

export function Copper({ className, children }: CopperProps) {
  return (
    <GradientBackground defaults={tunedDefaults} {...tunedProps} className={className}>
      {children}
    </GradientBackground>
  );
}
