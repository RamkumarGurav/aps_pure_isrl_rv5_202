"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GalleryCard({
  id,
  i,
  srcUrl,
  blurDataUrl,
  name,
}: {
  id: any;
  i: number;
  srcUrl: string;
  blurDataUrl: string;
  name: string;
}) {
  return (
    <motion.div
      initial={{ y: "100px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      viewport={{ once: true, amount: 0 }}
      key={i}
      className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]"
    >
      <Link
        prefetch={true}
        href={`/gallery-details/${id}`}
        id="image-container"
        className="relative block w-full  h-[240px] mx-auto cursor-pointer"
      >
        <Image
          src={srcUrl}
          alt="x"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover "
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </Link>
      <div className="text-gray-900 font-bold text-lg text-center my-2 text-wrap">
        {name}
      </div>
    </motion.div>
  );
}
