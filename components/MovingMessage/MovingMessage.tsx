"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Roboto } from "next/font/google";
const font = Roboto({ weight: "400", subsets: ["latin"] });

export default function MovingMessage({
  message,
  classes,
}: {
  message: string;
  classes: string;
}) {
  return (
    <div
      id="movingNotificationContainer"
      className={`overflow-hidden  flex  items-center   ${classes} font-semibold w-full h-[35.5px] flex items-center`}
    >
      <AnimatePresence>
        <motion.div
          key="notification"
          initial={{ x: "99vw", opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "just",
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          <span className={`font-medium ${font.className}`}> {message}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
