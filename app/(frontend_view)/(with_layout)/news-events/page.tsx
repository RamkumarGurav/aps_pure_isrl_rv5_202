/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });
/*** components ***/
import { eventsDetails } from "@/lib/helpers/displayData";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import AnimatedTd from "@/components/Animated/AnimatedTd";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";

export default function NEPageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="News and Events" pageName1="News and Events" />

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` p-4 mx-auto   `}>
          <AnimatedDiv
            variants={springAnimate70pxFromBelow10}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
              {eventsDetails.mainHeadingList[0]} &nbsp;
              <span className="text-secondary-red1">
                {eventsDetails.mainHeadingList[1]}
              </span>
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </AnimatedDiv>

          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full  py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <tbody>
                        {/* //{--------------TERM-I-------------- */}
                        <tr
                          className={`border-b bg-gray-50
                               border-neutral-200  table-`}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>TERM-I</p>
                          </AnimatedTd>
                        </tr>
                        <tr
                          className={`border-b  
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                          >
                            SL.NO.
                          </AnimatedTd>
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                          >
                            DATE
                          </AnimatedTd>
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                          >
                            DAY
                          </AnimatedTd>
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                          >
                            EVENT
                          </AnimatedTd>
                        </tr>
                        {/* //{--------------MAY-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>MAY</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term1.may.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JUNE-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>JUNE</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term1.june.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JULY-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>JULY</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term1.july.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------AUGUST-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>AUGUST</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term1.august.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------SEPTEMBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>SEPTEMBER</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term1.september.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------OCTOBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>OCTOBER</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term1.october.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        <tr
                          className={`border-b 
                               border-neutral-200  table-`}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>TERM-II</p>
                          </AnimatedTd>
                        </tr>
                        {/* //{---------------TERM2-------------- */}
                        <tr
                          className={`border-b  bg-gray-50
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                          >
                            SL.NO.
                          </AnimatedTd>
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                          >
                            DATE
                          </AnimatedTd>
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                          >
                            DAY
                          </AnimatedTd>
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                          >
                            EVENT
                          </AnimatedTd>
                        </tr>
                        {/* //{--------------OCTOBER-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>MAY</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term2.october.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------NOVEMBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>NOVEMBER</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term2.november.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------DECEMBER-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>DECEMBER</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term2.december.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JANUARY-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>JANUARY</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term2.january.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={2}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4"
                          >
                            <p className="text-wrap ">
                              {String(
                                eventsDetails.term2.january.specialEvents[0]
                                  .oneToTwo
                              )}
                            </p>
                          </AnimatedTd>
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={2}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4"
                          >
                            <p className="text-wrap ">
                              {String(
                                eventsDetails.term2.january.specialEvents[0]
                                  .threToFour
                              )}
                            </p>
                          </AnimatedTd>
                        </tr>
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------FEBRUARY--------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>FEBRUARY</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term2.february.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------MARCH--------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>MARCH</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term2.march.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------APRIL--------------- */}
                        <tr
                          className={`border-b bg-gray-50  
                               border-neutral-200 `}
                        >
                          <AnimatedTd
                            variants={springAnimate70pxFromBelow10}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0 }}
                            colSpan={4}
                            className="pt-2 pb-4 px-4"
                          >
                            <p>APRIL</p>
                          </AnimatedTd>
                        </tr>
                        {eventsDetails.term2.april.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.slno}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.date}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.day}
                              </AnimatedTd>
                              <AnimatedTd
                                variants={springAnimate70pxFromBelow10}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0 }}
                                className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 "
                              >
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </AnimatedTd>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}{" "}
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
