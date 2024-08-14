"use client";
/*** nextjs ***/
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
/*** packages ***/
import { AnimatePresence, motion } from "framer-motion";
/*** images ***/
import sports1 from "@/public/sports/1.jpg";
import sports2 from "@/public/sports/2.jpg";
import sports3 from "@/public/sports/3.jpg";
/*** components ***/
import { defaultBlurDataUrl } from "@/lib/helpers/displayData";
/*** components-d ***/
const Carousel = dynamic(() => import("./Carousel"), { ssr: false });
const Modal = dynamic(() => import("@/components/GalleryDetails/Modal"), {
  ssr: false,
});

/*****************************************************
           component
*****************************************************/
export default function ScienceLabModalContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(16);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(16);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={sports1}
              alt="sports"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(17);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={sports2}
              alt="sports"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(18);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={sports3}
              alt="sports"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <Carousel currentIndex={currentIndex} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
