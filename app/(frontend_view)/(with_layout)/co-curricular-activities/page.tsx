/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** icons ***/
import { FaRegHandPointRight } from "react-icons/fa";
/*** images ***/
import knowledgeCenter2 from "@/public/knowledge-center/2.jpg";
/*** components ***/
import { cocurricularActivitiesDetails } from "@/lib/helpers/displayData";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedText from "@/components/Animated/AnimatedText";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";

export default function CCAPageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="Co-Curricular Activities" />
      <section className="py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]  ">
        <div className="px-4 ">
          <div className="mx-auto ">
            <AnimatedDiv
              variants={springAnimate70pxFromBelow10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
              className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
            >
              {
                cocurricularActivitiesDetails.cocurricularActivitiesData
                  .mainHeading
              }
            </AnimatedDiv>
            <div className="w-[100px] border-b-[3px] border-red-700 mb-4"></div>
          </div>
          <div className="  pb-4">
            <div className=" lg:grid lg:grid-cols-2 p-4 pb-0">
              <div className="left">
                <div>
                  <AnimatedText
                    variants={springAnimate70pxFromBelow10}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0 }}
                    className={`text-base my-4 font-semibold text-gray-900`}
                  >
                    {
                      cocurricularActivitiesDetails.cocurricularActivitiesData
                        .subHeading1
                    }
                  </AnimatedText>
                </div>
                {cocurricularActivitiesDetails.cocurricularActivitiesData.list1.map(
                  (item: string, i: number) => (
                    <AnimatedDiv
                      key={i}
                      initial={{ opacity: 0, x: "20vw" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.1,
                        duration: 1,
                        type: "tween",
                      }}
                      viewport={{ once: true, amount: 0 }}
                      className=" flex gap-2 mb-3"
                    >
                      <span className="flex justify-center items-center pb-[1px]">
                        <FaRegHandPointRight className="text-red-700 text-[15px] " />
                      </span>
                      <span className={`text-gray-800  leading-8`}>{item}</span>
                    </AnimatedDiv>
                  )
                )}

                <AnimatedDiv
                  variants={springAnimate70pxFromBelow10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0 }}
                >
                  <p className={`text-base my-4 font-medium text-gray-700`}>
                    {
                      cocurricularActivitiesDetails.cocurricularActivitiesData
                        .subHeading2
                    }
                  </p>
                </AnimatedDiv>
              </div>
              <div className="right flex  justify-center items-start pt-0  px-2">
                <div
                  className="p-4 
               "
                >
                  <AnimatedDiv
                    initial={{ opacity: 0, scale: 0, rotate: 90 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true, amount: 0 }}
                    className="flex justify-stretch  p-0 pb-0 "
                  >
                    <div className="   ">
                      <Image
                        src={knowledgeCenter2}
                        alt="knowledgeCenter2 "
                        className="w-full h-auto object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </AnimatedDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="" className={` sm:px-[35px] xl:px-[70px]`}>
        <div className={` px-4 mx-auto `}>
          <div className="border-b-gray-200/70 border-b-[1px] mt-3"></div>
        </div>
      </section>

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` p-4 mx-auto bg-[#FAF6E2]  `}>
          <AnimatedDiv
            variants={springAnimate70pxFromBelow10}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className="text-xl md:text-3xl text-start font-bold text-gray-900 mb-4"
          >
            {
              cocurricularActivitiesDetails.listOfCocurricularActivitiesData
                .mainHeading
            }
          </AnimatedDiv>
          <div className="w-[100px] border-b-[3px] border-red-700 mb-4"></div>
          <div className="grid lg:grid-cols-3 p-4 gap-4">
            {cocurricularActivitiesDetails.listOfCocurricularActivitiesData.lists.map(
              (item: any, i: number) => (
                <div key={i} className="box1">
                  <div className="mx-auto ">
                    {item.map((sub: string, j: number) => (
                      <AnimatedDiv
                        initial={{ opacity: 0, x: "20vw" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.1,
                          duration: 1,
                          type: "tween",
                        }}
                        viewport={{ once: true, amount: 0 }}
                        key={j}
                        className=" flex gap-2 mb-3"
                      >
                        <span className="flex justify-center items-start pt-[8px]">
                          <FaRegHandPointRight className="text-red-700 text-[15px]  " />
                        </span>
                        <span className={`text-gray-800  leading-8`}>
                          {sub}
                        </span>
                      </AnimatedDiv>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
