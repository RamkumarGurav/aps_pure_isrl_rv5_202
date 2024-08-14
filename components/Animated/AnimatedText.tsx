"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedProps extends HTMLMotionProps<"p"> {
  children: React.ReactNode;
}

export default function AnimatedText({ children, ...rest }: AnimatedProps) {
  return <motion.p {...rest}>{children}</motion.p>;
}
