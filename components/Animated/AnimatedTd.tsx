"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedProps extends HTMLMotionProps<"td"> {
  children: React.ReactNode;
}

export default function AnimatedButton({ children, ...rest }: AnimatedProps) {
  return <motion.td {...rest}>{children}</motion.td>;
}
