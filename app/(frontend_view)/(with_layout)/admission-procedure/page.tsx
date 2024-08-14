/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** icons ***/
import { FaRegHandPointRight } from "react-icons/fa";
/*** components ***/
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import { docsRequired } from "@/lib/helpers/displayData";
import AnimatedButton from "@/components/Animated/AnimatedButton";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";

export default function APPageName() {
  return (
    <>
      <Bedcrumb heading="About Us" pageName1="Admission Procedure" />

      <section
        id="admissionProcedureSection"
        className={`overflow-hidden bg-[#FDFBF0] py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px] ${font.className}`}
      >
        <div className={` px-4 mx-auto `}>
          <div className="headingContainer flex flex-col justify-center items-center mb-6">
            <AnimatedDiv
              className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
              variants={springAnimate70pxFromBelow10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.2 }}
            >
              Admission &nbsp;
              <span className="text-secondary-red1">Procedure</span>
            </AnimatedDiv>
            <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
          </div>
          <div className="grid lg:grid-cols-4 gap-4">
            <AnimatedDiv
              className="admitCard admitCardParent"
              // variants={springAnimate100perFromBelow10}
              initial={{ opacity: 0, y: "200px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full font-serif text-blue-800 text-xl"
                  >
                    01
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>

                  <div
                    className="apIcon1 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p className={`text-center text-gray-600 font-semibold`}>
                Enquiry
              </p>
              <p className={`text-center text-gray-700 font-medium`}>
                Submit the online enquiry form or visit the school office. The
                office staff will get back to you.
              </p>
            </AnimatedDiv>
            <AnimatedDiv
              className="admitCard admitCardParent"
              initial={{ opacity: 0, y: "200px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full font-serif text-blue-800 text-xl"
                  >
                    02
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon2 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p className={`text-center text-gray-600 font-semibold`}>
                Registration
              </p>
              <p className={`text-center text-gray-700 font-medium`}>
                Parents are requested to fill the registration form provided in
                the office.
              </p>
            </AnimatedDiv>
            <AnimatedDiv
              className="admitCard admitCardParent"
              initial={{ opacity: 0, y: "200px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween", delay: 0.4 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full font-serif text-blue-800 text-xl"
                  >
                    03
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon3 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p className={`text-center text-gray-600 font-semibold`}>
                Written Test
              </p>
              <p className={`text-center text-gray-700 font-medium`}>
                A written test will be conducted for the students seeking
                admission for grade 1 and above. Eligible student will be given
                seat and informed.
              </p>
            </AnimatedDiv>
            <AnimatedDiv
              className="admitCard admitCardParent"
              initial={{ opacity: 0, y: "200px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween", delay: 0.6 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full font-serif text-blue-800 text-xl"
                  >
                    04
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon4 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p className={`text-center text-gray-600 font-semibold`}>
                Admission
              </p>
              <p className={`text-center text-gray-700 font-medium`}>
                A meeting with the Principal will be scheduled at the time of
                admission. The filled application form along with the required
                documents are to be submitted within 7 days.
              </p>
            </AnimatedDiv>
          </div>
          <div className="border-b-gray-200 border-b-[1px] my-8"></div>
          <div className={`grid lg:grid-cols-2`}>
            <div className="left ">
              <div className="headingContainer mb-6">
                <AnimatedDiv
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  viewport={{ amount: 0, once: true }}
                  className="text-[20px] lg:text-[25px] xl:text-[27px] text-start font-bold text-gray-800 mb-4"
                >
                  Documents Required for Admission:
                </AnimatedDiv>
                <div className="w-[100px] border-b-[3px] border-red-700 mb-3"></div>
              </div>
              {docsRequired.map((item, i: number) => (
                <AnimatedDiv
                  key={i}
                  className=" flex gap-2 mb-3"
                  initial={{ opacity: 0, x: "20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.3,
                    duration: 1,
                    type: "tween",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <span>
                    <FaRegHandPointRight className="text-red-700 text-[15px] mt-1" />
                  </span>
                  <span className={`text-gray-800 text-sm leading-6`}>
                    {item}
                  </span>
                </AnimatedDiv>
              ))}
            </div>

            <div className="right mt-4 lg:mt-0">
              <div className="headingContainer mb-6">
                <AnimatedDiv
                  className="text-[20px] lg:text-[25px] xl:text-[27px]  text-start font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  viewport={{ amount: 0, once: true }}
                >
                  Enquire Here
                </AnimatedDiv>
                <div className="w-[100px] border-b-[3px] border-red-700 "></div>
              </div>
              <form className="relative  w-full flex flex-col ">
                <div className="gap-2 flex flex-col ">
                  <AnimatedDiv
                    className="w-full "
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="Name "
                      className="w-full p-[15px] py-[25px] bg-white text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] 
                     focus:outline-none appearance-none border-solid focus:border-red-700 hover:border-red-700 transition    "
                    />
                  </AnimatedDiv>
                  {""}
                  <AnimatedDiv
                    className="w-full "
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="Email "
                      className="w-full p-[15px] py-[25px] text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-red-700 hover:border-red-700 transition    "
                    />
                  </AnimatedDiv>
                  <AnimatedDiv
                    className="w-full "
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-[15px] py-[25px] text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-red-700 hover:border-red-500 transition    "
                    />
                  </AnimatedDiv>
                  <AnimatedDiv
                    className="w-full "
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <textarea
                      placeholder="Message"
                      cols={10}
                      rows={4}
                      className="w-full p-[15px] py-[10px] text-gray-600 font-medium placeholder-gray-500 
                   font-sans text-[16px]  
                    border-[1px] mb-4 h-[110px] focus:ring-0 focus:outline-none border-solid
                     focus:border-red-700 hover:border-red-700 transition "
                    />
                  </AnimatedDiv>

                  <div className={`flex `}>
                    <AnimatedButton
                      initial={{ opacity: 0, x: "20vw" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, type: "tween" }}
                      viewport={{ once: true, amount: 0 }}
                      className="w-[160px] h-[52px] font-medium text-base font-sans rounded text-white bg-[#E92226] inline-block  hover:bg-black hover:text-white"
                      type="submit"
                    >
                      Send Message
                    </AnimatedButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
