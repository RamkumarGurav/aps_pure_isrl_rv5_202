"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import ContactForm from "./ContactForm";

export default function SideEnquire({
  admissionYear,
}: {
  admissionYear: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`  text-sm text-white  font-semibold relative z-[999]`}>
      <div
        className={` visible fixed bottom-0 left-0 right-0 w-full sm:hidden  `}
      >
        <div
          className="flex justify-center items-center gap-1 bg-[#E92226] text-white p-4 py-2 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`  text-sm text-white  font-semibold grid place-content-center font-sans `}
          >
            Admissions Open {admissionYear}
          </span>
        </div>
      </div>

      <div
        className="fixed  right-[-90px] top-[250px]  transform rotate-[-90deg]
         bg-red-600 py-[11px] px-[19px]   cursor-pointer hidden sm:flex"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Admissions Open {admissionYear}
      </div>

      <div
        className={`fixed ${
          open ? "right-0 sm:right-[0px]" : "right-[-100vw] sm:right-[-300px]"
        } top-0 sm:top-[110px] w-[100vw] h-[100vh]  border border-gray-200 border-t-0   sm:h-auto sm:w-[300px] sm:flex transition-all ease-in-out duration-700 z-[999]  bg-white shadow`}
      >
        <div className="relative bg-white w-full flex flex-col p-[25px]">
          <div className="gap-2 flex flex-col ">
            <div
              className="absolute top-0 right-0 bg-[#E92226] text-white w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              X
            </div>
            <h1 className="text-lg text-center text-gray-900 font-semibold">
              Enquire With Us
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
