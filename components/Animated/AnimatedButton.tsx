"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export default function AnimatedButton({ children, ...rest }: AnimatedProps) {
  return <motion.button {...rest}>{children}</motion.button>;
}
