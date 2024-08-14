/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** images ***/
import schoolStudentsImg from "@/public/school-students.jpg";
/*** icons ***/
import { FaRegDotCircle } from "react-icons/fa";
/*** components ***/
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import {
  springAnimate20vhFromBelow10,
  springAnimateFromBelow10,
  tweenAnimateFromLeft10,
  tweenAnimateFromLeft13,
} from "@/lib/helpers/variants";
import AnimatedText from "@/components/Animated/AnimatedText";
import { missionStatements, visionStatement } from "@/lib/helpers/displayData";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";

export default function MVPageName() {
  return (
    <div
      className={`${font.className} bg-yellow-muted relative z-[1] overflow-hidden`}
    >
      <Bedcrumb heading="About Us" pageName1="Our Vision/Mission" />

      <AnimatedDiv
        id="missionVisionSection "
        className={` py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px] overflow-hidden`}
        variants={springAnimate20vhFromBelow10}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={` px-4 mx-auto `}>
          <div>
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4`}>
              <AnimatedDiv
                className="left pt-4"
                initial={{ opacity: 0, rotate: 20 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, type: "tween" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="headingContainer mb-6">
                  <AnimatedDiv
                    className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                    variants={springAnimateFromBelow10}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    Our &nbsp;
                    <span className="">Vision</span>
                  </AnimatedDiv>
                  <div className="w-[100px] border-b-[2px] border-red-500 mb-3"></div>
                </div>
                <AnimatedText
                  className="text-black text-[18px] leading-6 mb-6"
                  variants={tweenAnimateFromLeft10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {visionStatement}
                </AnimatedText>
                <AnimatedDiv
                  variants={tweenAnimateFromLeft13}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Image
                    src={schoolStudentsImg}
                    alt="schoolstudents"
                    className="w-full h-auto object-cover   "
                    placeholder="blur"
                  />
                </AnimatedDiv>
              </AnimatedDiv>

              <AnimatedDiv
                className="right   col-span-2"
                initial={{ opacity: 0, rotate: -20 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, type: "tween" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className=" bg-white p-4">
                  <div className="headingContainer mb-6">
                    <AnimatedDiv
                      className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                      variants={springAnimateFromBelow10}
                      initial={"offscreen"}
                      whileInView={"onscreen"}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Our &nbsp;
                      <span className="">Mission</span>
                    </AnimatedDiv>
                    <div className="w-[100px] border-b-[2px] border-red-500 mb-3"></div>
                  </div>
                  <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
                    {missionStatements.map((item: string, i: number) => (
                      <AnimatedDiv
                        key={i}
                        initial={{ opacity: 0, x: "20vw" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.3,
                          duration: 1,
                          type: "tween",
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className=" flex gap-4 mb-3"
                      >
                        <span>
                          <FaRegDotCircle className="text-red-500 text-[15px] mt-1" />
                        </span>
                        <span className={`text-base ${font.className}`}>
                          {item}
                        </span>
                      </AnimatedDiv>
                    ))}
                  </div>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}
