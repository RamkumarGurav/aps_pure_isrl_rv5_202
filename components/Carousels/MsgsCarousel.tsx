"use client";
// Import Swiper React components
import ApoLogo from "@/public/icons/test-2.png";
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
import { msgSlides } from "@/lib/helpers/displayData";
import { Lato } from "next/font/google";
const font = Lato({ weight: "400", subsets: ["latin"] });

export default function MsgsCarousel() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div
      className={`customSwiperContainer relative mx-4  z-[0] ${font.className}`}
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
        modules={[Navigation, Autoplay]}
        className="mySwiper "
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {msgSlides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="text-center   w-full    ">
              <div className="msgCard bg-[#fff] w-full flex flex-col justify-center items-center p-4 px-6">
                <div>
                  <Image
                    src={ApoLogo}
                    alt="logo"
                    className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] object-cover"
                  />
                </div>

                <p
                  className={`italic leading-5 sm:leading-8 text-sm sm:text-base text-center text-[#353535] ${font.className} font-medium mb-4`}
                >
                  <i> {item.msg}</i>
                </p>
                <p
                  className={`text-secondary-red1 text-[18px] font-bold font-sans mb-2`}
                >
                  {item.name}
                </p>
                <p className={`text-[#5a5a5a] leading-7 font-semibold text-sm`}>
                  {item.type}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="btnsContainer  ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-[50%] left-[-25px] z-[999] text-gray-200 hover:text-red-500 "
        >
          <IoCaretBack size={30} className=" " />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-[50%] right-[-25px] z-[999] text-gray-200 hover:text-red-500"
        >
          <IoCaretForward size={30} />
        </button>
      </div>
      <div></div>
    </div>
  );
}
