"use client";
// Import Swiper React components
import gowriImg from "@/public/topper/gowri.png";
import ayeshaImg from "@/public/topper/ayesha.png";
import yeshImg from "@/public/topper/yesh.png";
import sumaImg from "@/public/topper/suma-1.png";
import amithaImg from "@/public/topper/amitha.png";
import Image from "next/image";
import { IoCaretForward, IoCaretBack } from "react-icons/io5";
// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import { Roboto } from "next/font/google";
const font = Roboto({ weight: "400", subsets: ["latin"] });

export default function ToppersCarousel() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div
      className={`customSwiperContainer relative mx-4 z-[0] ${font.className}`}
    >
      <style global jsx>{`
        span.swiper-pagination-bullet {
          background-color: rgb(0, 0, 0) !important;
          opacity: 0.6 !important;
        }

        span.swiper-pagination-bullet.swiper-pagination-bullet-active {
          background-color: white !important;
          display: inline-block;
          width: 10px !important;
          height: 10px !important;
          border: 2px white solid !important;
        }
      `}</style>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={800}
        slidesPerView={1}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper "
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="text-center   w-[300px]  py-4 px-4 ">
            <div className="topperCard rounded bg-[#F8F5E4] w-[260px]  shadow-md pb-2 mx-auto">
              <div
                id="image-container"
                className="relative h-[240px] w-[260px]  overflow-hidden "
              >
                {/* Image component using Tailwind classes */}
                <Image
                  // Source of the image
                  src={sumaImg}
                  alt="pagination"
                  fill
                  sizes="500px"
                  // Tailwind classes for styling the image
                  className="object-cover hover:scale-[1.1]  transition-all duration-300 ease-in-out"
                  // Placeholder for the image
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Sumedha Kulkarni</p>
              <p className="mb-1 text-muted">(98.8%)</p>
              <p className="mb-1 text-muted">His/Civ - 100</p>
              <p className="mb-1 text-muted">Biology - 100</p>
              <p className="mb-1 text-muted">Computers - 100</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center    py-4 px-4 flex justify-center items-center">
            <div className="topperCard rounded bg-[#F8F5E4]  shadow-md pb-2">
              <div
                id="image-container"
                className="relative h-[240px] w-[260px]  overflow-hidden "
              >
                {/* Image component using Tailwind classes */}
                <Image
                  // Source of the image
                  src={amithaImg}
                  alt="pagination"
                  fill
                  sizes="500px"
                  // Tailwind classes for styling the image
                  className="object-cover hover:scale-[1.1]  transition-all duration-300  ease-in-out"
                  // Placeholder for the image
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Amith P</p>
              <p className="mb-1 text-muted">(95.6%)</p>
              <p className="mb-1 text-muted">His/Civ - 100</p>
              <p className="mb-1 text-muted">Computers - 100</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center    py-4 px-4 flex justify-center items-center">
            <div className="topperCard rounded bg-[#F8F5E4]  shadow-md pb-2">
              <div
                id="image-container"
                className="relative h-[240px] w-[260px]  overflow-hidden "
              >
                {/* Image component using Tailwind classes */}
                <Image
                  // Source of the image
                  src={gowriImg}
                  alt="pagination"
                  fill
                  sizes="500px"
                  // Tailwind classes for styling the image
                  className="object-cover hover:scale-[1.1]  transition-all duration-300  ease-in-out"
                  // Placeholder for the image
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Gowri T.R</p>
              <p className="mb-1 text-muted">(95.6%)</p>
              <p className="mb-1 text-muted">Computers - 100</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center    py-4 px-4 flex justify-center items-center">
            <div className="topperCard rounded bg-[#F8F5E4]  shadow-md pb-2">
              <div
                id="image-container"
                className="relative h-[240px] w-[260px]  overflow-hidden "
              >
                {/* Image component using Tailwind classes */}
                <Image
                  // Source of the image
                  src={ayeshaImg}
                  alt="pagination"
                  fill
                  sizes="500px"
                  // Tailwind classes for styling the image
                  className="object-cover hover:scale-[1.1]  transition-all duration-300  ease-in-out"
                  // Placeholder for the image
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Aayesha Tasleema</p>
              <p className="mb-1 text-muted">(94.0%)</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center    py-4 px-4 flex justify-center items-center">
            <div className="topperCard rounded bg-[#F8F5E4]  shadow-md pb-2">
              <div
                id="image-container"
                className="relative h-[240px] w-[260px]  overflow-hidden "
              >
                {/* Image component using Tailwind classes */}
                <Image
                  // Source of the image
                  src={yeshImg}
                  alt="pagination"
                  fill
                  sizes="500px"
                  // Tailwind classes for styling the image
                  className="object-cover hover:scale-[1.1]  transition-all duration-300  ease-in-out"
                  // Placeholder for the image
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Yeshwant C.M</p>
              <p className="mb-1 text-muted">(91.4%)</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="btnsContainer  ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-[50%] left-[-25px] z-[999] text-gray-600 hover:text-red-500 "
        >
          <IoCaretBack size={30} className=" " />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-[50%] right-[-25px] z-[999] text-gray-600 hover:text-red-500"
        >
          <IoCaretForward size={30} />
        </button>
      </div>
      <div></div>
    </div>
  );
}
