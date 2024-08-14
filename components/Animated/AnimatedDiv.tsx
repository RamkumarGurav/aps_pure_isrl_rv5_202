"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedProps extends HTMLMotionProps<"p"> {
  children: React.ReactNode;
}

export default function AnimatedDiv({ children, ...rest }: AnimatedProps) {
  return <motion.div {...rest}>{children}</motion.div>;
}
