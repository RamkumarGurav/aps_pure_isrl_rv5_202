"use client";

/*** nextjs ***/
import { useRef, useState } from "react";
/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** icons ***/
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
/*** components ***/
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import {
  springAnimate70pxFromBelow10,
  tweenAnimateFromLeft10,
  tweenAnimateFromLeft13,
  tweenAnimateFromLeft16,
  tweenAnimateFromRight10,
  tweenAnimateFromRight13,
  tweenAnimateFromRight16,
  tweenAnimateFromRight19,
} from "@/lib/helpers/variants";
import LoadingButton from "@/components/Buttons/LoadingButton";
/*** packages ***/
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import EnquireForm from "@/components/Forms/EnquireForm";

const sendData = async (data: any) => {
  const res = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return await res.json();
};

export default function CUPageName() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data: any) => {
    setIsSubmitted(true);
    try {
      const responseKey = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();
      if (responseKey) {
        data.subject = "contact message";
        data.responseKey = responseKey;
        const response = await sendData(data);
        if (response.success) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
        setIsSubmitted(false);
        reset();
      } else {
        toast.error("Please verify that you are not a robot.");
      }
    } catch (error) {
      toast.error("Error validating reCAPTCHA.");
      console.error("Error validating reCAPTCHA:", error);
    }
  };
  return (
    // <div className={`${font.className} bg-[#F9F9F9] overflow-hidden`}>
    <div className={` bg-[#F9F9F9] overflow-hidden`}>
      <Bedcrumb heading="Contact Us" pageName1="Contact Us" />

      <section
        id="contactUsSection "
        className={`contactUsSection py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <div className={`grid lg:grid-cols-2`}>
            <div className="left ">
              <div className="headingContainer mb-6">
                <AnimatedDiv
                  className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                  variants={springAnimate70pxFromBelow10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Contact &nbsp;
                  <span className="text-secondary-red1">Us</span>
                </AnimatedDiv>
                <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
              </div>
              <AnimatedDiv
                variants={tweenAnimateFromLeft10}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4 rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <IoLocationSharp size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    APPOLO PUBLIC SCHOOL
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    #320,5TH CROSS,5th BLOCK ,3RD PHASE BSK III STAGE
                    Bangalore-560085
                  </p>
                </div>
              </AnimatedDiv>

              <AnimatedDiv
                variants={tweenAnimateFromLeft13}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4  rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <MdEmail size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    Email Address
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    appolopublicsch@gmail.com
                  </p>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                variants={tweenAnimateFromLeft16}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4  rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <FaPhone size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    Phone Number
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    +91 80-26698908/9 / +91 8792539589
                  </p>
                </div>
              </AnimatedDiv>
            </div>

            <div className="right">
              <div className="headingContainer mb-6">
                <AnimatedDiv
                  className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                  variants={springAnimate70pxFromBelow10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Enquire &nbsp;
                  <span className="text-secondary-red1">Here</span>
                </AnimatedDiv>
                <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
              </div>
              <div>
                <EnquireForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
