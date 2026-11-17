"use client";

import type { ReactNode } from "react";
import { GradientBackground } from "@/components/gradient-surface";

const tunedColors: [string, string, ...string[]] = ["#0047BD","#FFE30F","#FFFFFF"];
const tunedProps = { ...  {"background":"#040506","blur":0.2,"colors":["#0047BD","#FFE30F","#FFFFFF"],"dither":{"cell":3,"enabled":false,"levels":8},"grain":0.06,"interaction":{"pointer":0.15,"scroll":0.2},"loopSeconds":30,"scale":0.6,"seed":30,"speed":0.2,"warp":0.9}, colors: tunedColors };
const tunedDefaults =   {"background":"#040506","blur":0.2,"colors":["#0047BD","#FFE30F","#FFFFFF"],"dither":{"cell":3,"enabled":false,"levels":8},"grain":0.06,"interaction":{"pointer":0.15,"scroll":0.2},"kind":"chrome","loopSeconds":30,"scale":0.6,"seed":30,"speed":0.2,"warp":0.9};

export interface MercuryProps {
  className?: string;
  children?: ReactNode;
}

export function Mercury({ className, children }: MercuryProps) {
  return (
    <GradientBackground defaults={tunedDefaults} {...tunedProps} className={className}>
      {children}
    </GradientBackground>
  );
}
