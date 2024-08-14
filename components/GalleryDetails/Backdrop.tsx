"use client";

import { motion } from "framer-motion";

export default function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="fixed top-0 left-0 w-full h-[100vh] bg-black/70 flex justify-center items-center z-[9990]"
    >
      {children}
    </motion.div>
  );
}
