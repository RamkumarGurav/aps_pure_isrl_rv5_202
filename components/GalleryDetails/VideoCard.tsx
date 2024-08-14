"use client";
import { motion } from "framer-motion";

export default function VideoCard({
  key,
  code,
}: {
  key: number;
  code: string;
}) {
  return (
    <motion.div
      className="w-full h-full"
      key={key}
      initial={{ y: "100px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      viewport={{ once: true, amount: 0 }}
    >
      <iframe
        width="100%"
        height="415"
        src={`https://www.youtube.com/embed/${code}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
}
