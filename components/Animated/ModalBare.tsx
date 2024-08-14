"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function ModalBare({
  children,
  modalOpen,
  closeIt,
  backdropClasses = "fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/70 flex justify-center items-center",
  modalClasses = "z-[999999] relative bg-white w-[clamp(50%,700px,90%)] sm:w-auto h-[min(50%,300px)] sm:h-auto m-auto  rounded-md overflow-hidden flex flex-col items-center",
}: {
  children: React.ReactNode;
  modalOpen: boolean;
  closeIt: () => void;
  backdropClasses?: string;
  modalClasses?: string;
}) {
  const animateDropIn = {
    offscreen: {
      y: "-100vh",
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.1,
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeIt}
            className={backdropClasses}
          >
            <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              exit={"exit"}
              variants={animateDropIn}
              className={modalClasses}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
