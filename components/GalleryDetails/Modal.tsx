"use client";

import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { IoMdCloseCircle } from "react-icons/io";

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

export default function Modal({
  children,
  handleClose,
  modalOpen,
  text,
}: {
  children: React.ReactNode;
  handleClose: () => void;
  modalOpen: boolean;
  text?: string;
}) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        initial={"offscreen"}
        animate={"onscreen"}
        exit={"exit"}
        variants={animateDropIn}
        className="z-[9999]  relative bg-white  w-[clamp(50%,750px,90%)]  m-auto  rounded-md overflow-hidden flex flex-col items-center "
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdCloseCircle
          size={24}
          onClick={handleClose}
          className="text-gray-950 bg-white rounded-full absolute top-2 right-2 cursor-pointer z-[9999]"
        />
        {children}
      </motion.div>
    </Backdrop>
  );
}
