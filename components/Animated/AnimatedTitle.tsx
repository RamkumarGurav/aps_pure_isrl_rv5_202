"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedProps extends HTMLMotionProps<"p"> {
  children: React.ReactNode;
}

export default function AnimatedTitle({ children, ...rest }: AnimatedProps) {
  return <motion.h2 {...rest}>{children}</motion.h2>;
}
