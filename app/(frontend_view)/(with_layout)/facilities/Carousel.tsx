"use client";
/*** nextjs ***/
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
/*** icons ***/
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
/*** images ***/
import infra1 from "@/public/infrastructure/1.jpg";
import infra2 from "@/public/infrastructure/2.jpg";
import infra3 from "@/public/events-img-1.jpg";
import infra4 from "@/public/events-img-2.jpg";
import infra5 from "@/public/events-img-3.jpg";
import infra6 from "@/public/events-img-4.jpg";
import infra7 from "@/public/sports/2.jpg";
import infra8 from "@/public/sports/1.jpg";
import knowledgeCentre1 from "@/public/knowledge-center/1.jpg";
import knowledgeCentre2 from "@/public/knowledge-center/2.jpg";
import scienceLab1 from "@/public/science-lab/5.jpg";
import scienceLab2 from "@/public/science-lab/6.jpg";
import scienceLab3 from "@/public/science-lab/01.jpg";
import scienceLab4 from "@/public/science-lab/02.jpg";
import scienceLab5 from "@/public/science-lab/03.jpg";
import scienceLab6 from "@/public/science-lab/4.jpg";
import sports1 from "@/public/sports/1.jpg";
import sports2 from "@/public/sports/2.jpg";
import sports3 from "@/public/sports/3.jpg";
import transport1 from "@/public/transport/1.jpg";
import transport2 from "@/public/transport/2.jpg";
import transport3 from "@/public/transport/3.jpg";

/*****************************************************
           component
*****************************************************/
export default function Carousel({
  autoPlay = false,
  interval = 3000,
  currentIndex,
}: {
  autoPlay?: boolean;
  interval?: number;
  currentIndex: number;
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(currentIndex);
  const totalSlidesNum = 22;

  // console.log(currentIndex ?? currentIndex);

  const handleNext = useCallback(
    () =>
      setCurrentSlideIndex(
        currentSlideIndex === totalSlidesNum - 1 ? 0 : currentSlideIndex + 1
      ),
    [currentSlideIndex, totalSlidesNum]
  );

  const handlePrev = () =>
    setCurrentSlideIndex(
      currentSlideIndex === 0 ? totalSlidesNum - 1 : currentSlideIndex - 1
    );

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => handleNext(), interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval, handleNext]);

  return (
    <>
      <div
        id="carousel-container"
        className=" relative  overflow-hidden border border-solid border-gray-300 shadow-2xl rounded-lg"
      >
        <div
          id="slides-container"
          className={`  bg-white  flex  transition-transform duration-700 ease-in-out 
    `}
          // whenever you want to add transform effect do it using style attribute instead of tailwindcss it will work correctly
          style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
        >
          <Image
            src={infra1}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={infra2}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={infra3}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={infra4}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={infra5}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={infra6}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={infra7}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={infra8}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={knowledgeCentre1}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={knowledgeCentre2}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={scienceLab1}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={scienceLab2}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={scienceLab3}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={scienceLab4}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={scienceLab5}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={scienceLab6}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={sports1}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={sports2}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={sports3}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={transport1}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={transport2}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
          <Image
            src={transport3}
            alt="my image"
            width={700}
            height={500}
            className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
            priority={true}
            placeholder="blur"
          />
        </div>
        <div
          id="carousel-nav-container"
          className={`absolute inset-0  flex justify-between  `}
        >
          <div
            className="px-2 flex justify-center items-center cursor-pointer"
            onClick={handlePrev}
          >
            <button className="bg-white/50 hover:bg-white text-gray-900 p-1 rounded-full shadow">
              <GrFormPrevious size={24} />
            </button>
          </div>

          <div
            className="px-2  flex justify-center items-center cursor-pointer"
            onClick={handleNext}
          >
            {" "}
            <button className="bg-white/50 hover:bg-white text-gray-900 p-1 rounded-full shadow">
              <MdNavigateNext size={24} />
            </button>
          </div>
        </div>
        {/* //{--------------Images Numbers-------------- */}
        <div className="absolute bottom-2  left-0 right-0 ">
          <span
            className="text-gray-100 text-xs inline-block w-[50px] text-right font-sans font-semibold py-1 pr-3  rounded-r-2xl bg-red-900
         bg-gradient-to-r from-gray-900 via-gary-300 to-gray-900 "
          >
            {currentSlideIndex + 1}/{totalSlidesNum}
          </span>
        </div>
        {/* //--------------------------------------------------} */}
        {/* //{--------------DOTS-------------- */}
        {/* <div
        id="dots-container"
        className=" absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2"
      >
        {slides.map((_, i) => (
          // here another dive to cover the real div bcz whereneve inner div becomes bigger I dont want to
          // show the resizing of entire dots_container
          <div
            key={i}
            id="dot-container"
            className="w-[3px] h-[3px] sm:w-3 sm:h-3 flex justify-center items-center"
          >
            <div
              id="dot"
              className={` rounded-full cursor-pointer transition-all  ${
                i === currentSlideIndex ? "bg-white p-[3px] sm:p-[6px]" : "p-[3px] sm:p-1 bg-gray-400"
              }`}
              onClick={() => setCurrentSlideIndex(i)}
            ></div>
          </div>
        ))}
      </div> */}
        {/* //--------------------------------------------------} */}
      </div>
    </>
  );
}
