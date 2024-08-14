/*** images ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** components ***/
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import AnimatedTitle from "@/components/Animated/AnimatedDiv";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedTd from "@/components/Animated/AnimatedTd";
import AnimatedTh from "@/components/Animated/AnimatedTh";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import { schoolTimingsDetails } from "@/lib/helpers/displayData";

export default function SMPageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Academics" pageName1="School Timings" />

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` p-4 mx-auto   `}>
          <AnimatedDiv
            initial={{ opacity: 0, x: "40vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2 ">
              {" "}
              School &nbsp;
              <span className="text-secondary-red1 ">Timings</span>
            </div>

            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </AnimatedDiv>
          <div className="grid md:grid-cols-2 gap-8 mt-2">
            <div className="leftBox">
              <AnimatedTitle
                variants={springAnimate70pxFromBelow10}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0 }}
                className="text-lg md:text-2xl text-start font-bold text-gray-900 mb-2"
              >
                {schoolTimingsDetails.mondayToFridayTimingsData.mainHeading}
              </AnimatedTitle>
              <div className="w-[100px] border-b-[3px] border-red-700 mb-2"></div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                        <thead className="border-b text-gray-800 border-neutral-200  bg-gray-50 dark:border-white/10">
                          <tr>
                            <AnimatedTh
                              variants={springAnimate70pxFromBelow10}
                              initial={"offscreen"}
                              whileInView={"onscreen"}
                              viewport={{ once: true, amount: 0 }}
                              scope="col"
                              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              TIMINGS
                            </AnimatedTh>
                            <AnimatedTh
                              variants={springAnimate70pxFromBelow10}
                              initial={"offscreen"}
                              whileInView={"onscreen"}
                              viewport={{ once: true, amount: 0 }}
                              scope="col"
                              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              PERIOD
                            </AnimatedTh>
                          </tr>
                        </thead>
                        <tbody>
                          {schoolTimingsDetails.mondayToFridayTimingsData.list1.map(
                            (item: { [key: string]: any }, i: number) => (
                              <tr
                                key={i}
                                className={`border-b  ${
                                  (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                                } border-neutral-200 dark:border-white/10`}
                              >
                                <AnimatedTd
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    rotateX: [0, 360, 0, 360, 0],
                                  }}
                                  transition={{ delay: i * 0.2, duration: 1.3 }}
                                  viewport={{ once: true, amount: 0 }}
                                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                                >
                                  {item.timing}
                                </AnimatedTd>
                                <AnimatedTd
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    rotateX: [0, 360, 0, 360, 0],
                                  }}
                                  transition={{ delay: i * 0.2, duration: 1.3 }}
                                  viewport={{ once: true, amount: 0 }}
                                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                                >
                                  {item.period}
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
            <div className="rightBox">
              <AnimatedTitle
                variants={springAnimate70pxFromBelow10}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0 }}
                className="text-lg md:text-2xl text-start font-bold text-gray-900 mb-2"
              >
                {schoolTimingsDetails.saturdayTimingsData.mainHeading}
              </AnimatedTitle>
              <div className="w-[100px] border-b-[3px] border-red-700 mb-2"></div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                        <thead className="border-b text-gray-800 border-neutral-200  bg-gray-50 dark:border-white/10">
                          <tr>
                            <AnimatedTh
                              variants={springAnimate70pxFromBelow10}
                              initial={"offscreen"}
                              whileInView={"onscreen"}
                              viewport={{ once: true, amount: 0 }}
                              scope="col"
                              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              TIMINGS
                            </AnimatedTh>
                            <AnimatedTh
                              variants={springAnimate70pxFromBelow10}
                              initial={"offscreen"}
                              whileInView={"onscreen"}
                              viewport={{ once: true, amount: 0 }}
                              scope="col"
                              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                            >
                              PERIOD
                            </AnimatedTh>
                          </tr>
                        </thead>
                        <tbody>
                          {schoolTimingsDetails.saturdayTimingsData.list1.map(
                            (item: { [key: string]: any }, i: number) => (
                              <tr
                                key={i}
                                className={`border-b  ${
                                  (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                                } border-neutral-200 dark:border-white/10`}
                              >
                                <AnimatedTd
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    rotateX: [0, 360, 0, 360, 0],
                                  }}
                                  transition={{ delay: i * 0.2, duration: 1.3 }}
                                  viewport={{ once: true, amount: 0 }}
                                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                                >
                                  {item.timing}
                                </AnimatedTd>
                                <AnimatedTd
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    rotateX: [0, 360, 0, 360, 0],
                                  }}
                                  transition={{ delay: i * 0.2, duration: 1.3 }}
                                  viewport={{ once: true, amount: 0 }}
                                  className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                                >
                                  {item.period}
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
        </div>
      </section>
    </div>
  );
}
