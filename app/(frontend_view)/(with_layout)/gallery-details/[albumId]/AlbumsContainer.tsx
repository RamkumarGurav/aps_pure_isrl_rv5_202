"use client";
/*** nextjs ***/
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
/*** packages ***/
import { AnimatePresence, motion } from "framer-motion";
import { defaultBlurDataUrl } from "@/lib/helpers/displayData";
/*** images ***/
/*** components-d ***/
const Modal = dynamic(() => import("@/components/GalleryDetails/Modal"), {
  ssr: false,
});

const GalleryCarousel = dynamic(
  () => import("@/components/Carousels/GalleryCarousel"),
  {
    ssr: false,
  }
);
/*****************************************************
           component
*****************************************************/
export default function AlbumsContainer({ data }: { data: any }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(8);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div className=" mt-4  grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
      {data &&
        data?.map((item: { [key: string]: any }, i: number) => (
          <div
            key={i}
            className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]"
          >
            <div className="bg-white w-full  flex items-center justify-center">
              <motion.div
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring" }}
                viewport={{ once: true, amount: 0 }}
                id="image-container"
                onClick={() => {
                  setCurrentIndex(i);
                  return modalOpen ? close() : open();
                }}
                className="relative  w-full h-[240px] mx-auto cursor-pointer"
              >
                <Image
                  src={item.imageUrl}
                  alt="school"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover "
                  placeholder="blur"
                  blurDataURL={`${defaultBlurDataUrl}`}
                  priority={i < 6}
                />
              </motion.div>
            </div>
          </div>
        ))}

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <GalleryCarousel slides={data} currentIndex={currentIndex}>
              {data.map((item: { [key: string]: any }, i: number) => (
                //width and height attributes are not real width and heights of the image
                // most imp - always give width in terms of min-width and you must give the height
                //gieve object-cover to automatically adjuct the aspect ratio
                //if you give both width and height to Image component without placing Image component in any container then always use object-cover
                <Image
                  key={i}
                  src={item.imageUrl}
                  alt="school"
                  width={700}
                  height={500}
                  className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
                  priority={i < 6}
                  placeholder="blur"
                  blurDataURL={`${defaultBlurDataUrl}`}
                />
              ))}
            </GalleryCarousel>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
