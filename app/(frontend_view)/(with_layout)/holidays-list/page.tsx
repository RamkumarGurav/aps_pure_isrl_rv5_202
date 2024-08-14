/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** components ***/
import { holidayCalendarDetails } from "@/lib/helpers/displayData";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedTh from "@/components/Animated/AnimatedTh";
import AnimatedTd from "@/components/Animated/AnimatedTd";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";

export default function HLPageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="Holiday's list" />

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
            {holidayCalendarDetails.mainHeadingList[0]} &nbsp;
            <span className="text-secondary-red1">
              {holidayCalendarDetails.mainHeadingList[1]}
            </span>
          </AnimatedDiv>
          <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>

          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full  py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <thead className="border-b text-gray-800 border-neutral-200  bg-gray-50 dark:border-white/10">
                        <tr>
                          <AnimatedTh
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            // scope="col"
                            className="border-e   border-neutral-200 text-left text-sm md:text-base px-3 py-2 md:px-6  md:py-4  dark:border-white/10"
                          >
                            Sl.No
                          </AnimatedTh>
                          <AnimatedTh
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                          >
                            MONTH AND DATE
                          </AnimatedTh>
                          <AnimatedTh
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                          >
                            DAY
                          </AnimatedTh>
                          <AnimatedTh
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                          >
                            EVENT
                          </AnimatedTh>
                        </tr>
                      </thead>
                      <tbody>
                        {holidayCalendarDetails.holidaysList.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  ${
                                (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                              } border-neutral-200 dark:border-white/10`}
                            >
                              <AnimatedTd
                                initial={{ opacity: 0 }}
                                whileInView={{
                                  opacity: 1,
                                  rotateX: [0, 360, 0, 360, 0],
                                }}
                                transition={{ delay: i * 0.02, duration: 1.3 }}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                              >
                                {i + 1}
                              </AnimatedTd>
                              <AnimatedTd
                                initial={{ opacity: 0 }}
                                whileInView={{
                                  opacity: 1,
                                  rotateX: [0, 360, 0, 360, 0],
                                }}
                                transition={{ delay: i * 0.02, duration: 1.3 }}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                initial={{ opacity: 0 }}
                                whileInView={{
                                  opacity: 1,
                                  rotateX: [0, 360, 0, 360, 0],
                                }}
                                transition={{ delay: i * 0.02, duration: 1.3 }}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                initial={{ opacity: 0 }}
                                whileInView={{
                                  opacity: 1,
                                  rotateX: [0, 360, 0, 360, 0],
                                }}
                                transition={{ delay: i * 0.02, duration: 1.3 }}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                              >
                                {item.event}
                              </AnimatedTd>
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
