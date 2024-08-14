/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });
/*** icons ***/
import { FaRegHandPointRight } from "react-icons/fa";
/*** components ***/
import { academicCalendarDetails } from "@/lib/helpers/displayData";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import AnimatedTd from "@/components/Animated/AnimatedTd";
import AnimatedTh from "@/components/Animated/AnimatedTh";

export default function PageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="Academic Calender" />

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` p-4 mx-auto   `}>
          <AnimatedDiv
            variants={springAnimate70pxFromBelow10}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2"
          >
            {academicCalendarDetails.mainHeadingList[0]} &nbsp;
            <span className="text-secondary-red1">
              {academicCalendarDetails.mainHeadingList[1]}
            </span>
          </AnimatedDiv>
          <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>

          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <thead className="border-b text-gray-800 border-neutral-200  bg-gray-50 dark:border-white/10">
                        <tr>
                          <AnimatedTh
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            // scope="col"
                            className="border-e   border-neutral-200 text-left text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4  dark:border-white/10"
                          >
                            Sl.No
                          </AnimatedTh>
                          <AnimatedTh
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10"
                          >
                            MONTH
                          </AnimatedTh>
                          <AnimatedTh
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="border-e border-neutral-200 text-left text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10"
                          >
                            EVENTS
                          </AnimatedTh>
                        </tr>
                      </thead>
                      <tbody>
                        {academicCalendarDetails.monthsList.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  ${
                                (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                              } border-neutral-200 dark:border-white/10`}
                            >
                              <AnimatedTd
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{ duration: 1.3 }}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10"
                              >
                                {i + 1}
                              </AnimatedTd>
                              <AnimatedTd
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{ duration: 1.3 }}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10"
                              >
                                {item.month}
                              </AnimatedTd>
                              <td className="whitespace-nowrap border-e border-neutral-200 text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10">
                                {item.eventsList.map(
                                  (event: string, j: number) => (
                                    <AnimatedDiv
                                      key={j}
                                      initial={{ opacity: 0, y: 50 }}
                                      whileInView={{
                                        opacity: 1,
                                        y: 0,
                                      }}
                                      transition={{
                                        duration: 1.3,
                                      }}
                                      viewport={{ once: true, amount: 0 }}
                                      className=" flex gap-2 mb-3"
                                    >
                                      <span className="flex justify-center items-center pb-[1px]">
                                        <FaRegHandPointRight className="text-red-700 text-[15px]  " />
                                      </span>
                                      <span
                                        className={`text-gray-800 text-wrap  leading-8`}
                                      >
                                        {event}
                                      </span>
                                    </AnimatedDiv>
                                  )
                                )}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
