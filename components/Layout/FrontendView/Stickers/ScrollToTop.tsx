"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function ScrollToTop() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    let vh = window.innerHeight;
    const handleScroll = () => {
      if (window.scrollY > 2 * vh) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showBtn && (
        <Link
          href="#body"
          className={`fixed flex justify-center items-center bottom-9 lg:bottom-4 right-4 z-[99999] cursor-pointer
           bg-red-500 rounded-full p-2`}
        >
          <IoIosArrowUp className={`text-[20px] text-white `} />
        </Link>
      )}
    </>
  );
}
