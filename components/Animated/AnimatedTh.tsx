"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedProps extends HTMLMotionProps<"th"> {
  children: React.ReactNode;
}

export default function AnimatedButton({ children, ...rest }: AnimatedProps) {
  return <motion.th {...rest}>{children}</motion.th>;
}
