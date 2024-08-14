"use client";
import { useCallback, useEffect, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import LinkGrid from "./LinkGrid";

export default function HomeCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  let autoPlay = true;
  let interval = 4000;
  let slides = [1, 2, 3, 4];

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const handlePrev = () =>
    setCurrentSlideIndex(
      currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1
    );

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => handleNext(), interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval, handleNext]);

  // console.log("currentSlideIndex", currentSlideIndex);
  return (
    <div
      id="homeCarousel"
      className="relative flex items-center justify-center w-full z-[100] "
    >
      <LinkGrid />
      <div className=" carousel-shell relative w-full  overflow-hidden  ">
        <div
          className={`carousel-container  w-full  flex  transition-transform duration-1000 ease-in-out ${
            currentSlideIndex === 3 && "duration-none"
          }
      `}
          style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
        >
          <div className="slide slide1 min-w-full   min-h-[calc(100vh-50px)]   flex flex-col items-center justify-center ">
            <span className="text-center cursor-pointer text-gray-100 font-bold text-2xl sm:text-5xl uppercase max-w-[350px] sm:max-w-[800px] leading-tight mb-2 ">
              Make your website stand arpat
            </span>

            <span className="text-center cursor-pointer text-base sm:text-lg text-gray-100 font-semibold max-w-[300px] sm:max-w-[500px] ">
              Attract more customers, make your website stand apart from the
              crowd.
            </span>
          </div>
          <div className="slide slide2 min-w-full min-h-[calc(100vh-132px)]     flex flex-col items-center justify-center ">
            <span className="text-center cursor-pointer text-gray-100 font-bold text-2xl sm:text-5xl uppercase max-w-[350px] sm:max-w-[800px] leading-tight mb-2">
              Our Seo Program opens more perspectives.{" "}
            </span>

            <span className="text-center cursor-pointer text-base sm:text-lg text-gray-100 font-semibold max-w-[300px] sm:max-w-[500px] ">
              Packages designed to captures a world wide presence in cyperspace.
            </span>
          </div>
          <div className="slide slide3 min-w-full min-h-[calc(100vh-132px)]     flex flex-col items-center justify-center ">
            <span className="text-center cursor-pointer text-gray-100 font-bold text-2xl sm:text-5xl uppercase max-w-[350px] sm:max-w-[800px] leading-tight mb-2">
              Software &amp; E-commerce in the sphere of opportunities
            </span>

            <span className="text-center cursor-pointer text-base sm:text-lg text-gray-100 font-semibold max-w-[300px] sm:max-w-[500px] ">
              If company needs to sell their products across the world or in a
              particular country we can help you.
            </span>
          </div>
          <div className="slide slide4 min-w-full min-h-[calc(100vh-132px)]     flex flex-col items-center justify-center ">
            <span className="text-center cursor-pointer text-gray-100 font-bold text-2xl sm:text-5xl uppercase max-w-[350px] sm:max-w-[800px] leading-tight mb-2">
              Data science delivering actionalbe insights
            </span>

            <span className="text-center cursor-pointer text-base sm:text-lg text-gray-100 font-semibold max-w-[300px] sm:max-w-[500px] ">
              Grow your Business with Data Science and Artificial Intelligence.
            </span>
          </div>
        </div>
        <div className={`absolute inset-0 sm:inset-4 flex justify-between   `}>
          <button className="" onClick={handlePrev}>
            <BsChevronLeft className="text-gray-400/50 hover:text-gray-200/50 text-[50px] sm:text-[100px] " />
          </button>
          <button onClick={handleNext}>
            <BsChevronRight className="text-gray-400/50 hover:text-gray-200/50 text-[50px] sm:text-[100px] " />
          </button>
        </div>

        <div className="absolute bottom-8 right-0 left-0 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={` w-[40px] sm:w-[70px] p-[3px] rounded-full border border-white ${
                i === currentSlideIndex ? "bg-gray-200/50 " : " bg-gray-400/10"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
