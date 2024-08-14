"use client";
/*** nextjs ***/
import Link from "next/link";
import { Suspense, useState } from "react";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });
/*** components ***/
import InfraGalleryModalContainer from "./InfraGalleryModalContainer";
import KCModalContainer from "./KCModalContainer";
import ScienceLabModalContainer from "./ScienceLabModalContainer";
import TransportModalContainer from "./TransportModalContainer";
import SportsModalContainer from "./SportsModalContainer";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import {
  springAnimate300pxFromBelow10,
  springAnimate70pxFromBelow16,
} from "@/lib/helpers/variants";
import AnimatedText from "@/components/Animated/AnimatedText";
/*** helpers ***/
const boxVariant = {
  hidden: {
    opacity: 0,
    y: "100px", //move out of the site
  },
  visible: {
    opacity: 1,
    y: 0, // bring it back to nrmal
    transition: {
      when: "beforeChildren", //use this instead of delay
      staggerChildren: 0.2, //apply stagger on the parent tag
    },
  },
};

const listVariant = {
  hidden: {
    opacity: 0,
    y: "150px", //move out of the site
  },
  visible: {
    opacity: 1,
    y: 1, //move out of the site
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

/*****************************************************
           page
*****************************************************/
export default function FPageName() {
  const NAVBAR_HEIGHT = 80; // Adjust this value according to your actual navbar height
  const [id, setId] = useState("");

  useEffect(() => {
    const section = document.getElementById(id); // Find the section element by id
    if (section) {
      const offsetTop = section.offsetTop - NAVBAR_HEIGHT; // Adjusted offset top considering navbar height
      window.scrollTo({ top: offsetTop, behavior: "smooth" }); // Scroll to the adjusted position
    }
  }, [id]);
  return (
    <div className={`  bg-[#FDFBF0] overflow-hidden`}>
      <div
        className={`bedcrumb flex flex-col justify-center items-center h-[140px]   sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white `}>Facilities</h1>

        <div className="flex justify-center items-center mt-2">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">Facilities</span>
        </div>
      </div>

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` p-4 mx-auto   `}>
          <AnimatedDiv
            initial={{ opacity: 0, x: "50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
              Our&nbsp;
              <span className="text-secondary-red1">Facilities</span>
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </AnimatedDiv>

          <div className="">
            <AnimatedDiv
              variants={boxVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              <AnimatedDiv
                variants={listVariant}
                viewport={{ once: true, amount: 0 }}
              >
                <div
                  // href={"#infrastuctureSection"}
                  onClick={() => setId("infrastuctureSection")}
                  className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
                >
                  <div className="flex justify-center items-center bg-transparent relative  mb-4">
                    <div
                      className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                    >
                      <div
                        className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>
                      <div
                        className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>

                      <div
                        className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                      ></div>

                      <div
                        className={`${styles.facilityIcon1} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                      ></div>
                    </div>
                  </div>
                  <h4
                    className={`text-center font-semibold text-base text-gray-800`}
                  >
                    Infrastructure
                  </h4>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                variants={listVariant}
                viewport={{ once: true, amount: 0 }}
              >
                <div
                  // href={"#knowledgeCenterSection"}
                  onClick={() => setId("knowledgeCenterSection")}
                  className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
                >
                  <div className="flex justify-center items-center bg-transparent relative  mb-4">
                    <div
                      className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                    >
                      <div
                        className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>
                      <div
                        className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>

                      <div
                        className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                      ></div>

                      <div
                        className={`${styles.facilityIcon2} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                      ></div>
                    </div>
                  </div>
                  <h4
                    className={`text-center font-semibold text-base text-gray-800`}
                  >
                    Knowledge centre
                  </h4>
                </div>
              </AnimatedDiv>

              <AnimatedDiv
                variants={listVariant}
                viewport={{ once: true, amount: 0 }}
              >
                <div
                  // href={"#scienceLabSection"}
                  onClick={() => setId("scienceLabSection")}
                  className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
                >
                  <div className="flex justify-center items-center bg-transparent relative  mb-4">
                    <div
                      className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                    >
                      <div
                        className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>
                      <div
                        className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>

                      <div
                        className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                      ></div>

                      <div
                        className={`${styles.facilityIcon3} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                      ></div>
                    </div>
                  </div>
                  <h4
                    className={`text-center font-semibold text-base text-gray-800`}
                  >
                    Science Lab
                  </h4>
                </div>
              </AnimatedDiv>

              <AnimatedDiv
                variants={listVariant}
                viewport={{ once: true, amount: 0 }}
              >
                <div
                  // href={"#"}
                  className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
                >
                  <div className="flex justify-center items-center bg-transparent relative  mb-4">
                    <div
                      className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                    >
                      <div
                        className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>
                      <div
                        className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>

                      <div
                        className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                      ></div>

                      <div
                        className={`${styles.facilityIcon4} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                      ></div>
                    </div>
                  </div>
                  <h4
                    className={`text-center font-semibold text-base text-gray-800`}
                  >
                    Computer Lab
                  </h4>
                </div>
              </AnimatedDiv>

              <AnimatedDiv
                variants={listVariant}
                viewport={{ once: true, amount: 0 }}
              >
                <div
                  // href={"#sportsSection"}
                  onClick={() => setId("sportsSection")}
                  className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
                >
                  <div className="flex justify-center items-center bg-transparent relative  mb-4">
                    <div
                      className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                    >
                      <div
                        className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>
                      <div
                        className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>

                      <div
                        className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                      ></div>

                      <div
                        className={`${styles.facilityIcon5} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                      ></div>
                    </div>
                  </div>
                  <h4
                    className={`text-center font-semibold text-base text-gray-800`}
                  >
                    Sports
                  </h4>
                </div>
              </AnimatedDiv>

              <AnimatedDiv
                variants={listVariant}
                viewport={{ once: true, amount: 0 }}
              >
                <div
                  // href={"#transportSection"}
                  onClick={() => setId("transportSection")}
                  className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
                >
                  <div className="flex justify-center items-center bg-transparent relative  mb-4">
                    <div
                      className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                    >
                      <div
                        className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>
                      <div
                        className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                      ></div>

                      <div
                        className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                      ></div>

                      <div
                        className={`${styles.facilityIcon6} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                      ></div>
                    </div>
                  </div>
                  <h4
                    className={`text-center font-semibold text-base text-gray-800`}
                  >
                    Transport
                  </h4>
                </div>
              </AnimatedDiv>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      <section id="Section" className={`  sm:px-[35px] xl:px-[70px]`}>
        <div className={` px-4 mx-auto `}>
          <div className="border-b-gray-200 border-b-[1px] my-0"></div>
        </div>
      </section>
      <section
        id="infrastuctureSection"
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <AnimatedDiv
            initial={{ opacity: 0, x: "50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
              Our&nbsp;
              <span className="text-secondary-red1">Infrastructure</span>
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </AnimatedDiv>
          <AnimatedText
            variants={springAnimate70pxFromBelow16}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className={`leading-8  text-[#1d1d1d] mb-3`}
          >
            Appolo is renowned for its education and holistic development that
            it renders to its students. It has always been catering to the needs
            of its budding students by providing an authentic environment and a
            friendly atmosphere for physical, social and mental development of
            child
          </AnimatedText>
          <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
            <InfraGalleryModalContainer />
          </div>
        </div>
      </section>
      <section className={`  sm:px-[35px] xl:px-[70px]`}>
        <div className={` px-4 mx-auto `}>
          <div className="border-b-gray-200 border-b-[1px] my-0"></div>
        </div>
      </section>
      <section
        id="knowledgeCenterSection"
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <AnimatedDiv
            initial={{ opacity: 0, x: "50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
              Knowledge&nbsp;
              <span className="text-secondary-red1">Center</span>
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </AnimatedDiv>

          <AnimatedText
            variants={springAnimate70pxFromBelow16}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className={`leading-8 font-semibold  text-[#1d1d1d] mb-3`}
          >
            &#x0022;NEVER STOP LEARNING, BECAUSE LIFE NEVER STOPS
            TEACHING&#x0022;
          </AnimatedText>
          <AnimatedText
            variants={springAnimate70pxFromBelow16}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className={`leading-8  text-[#1d1d1d] mb-3`}
          >
            Our school library serves as the center and coordinating agency to
            facilitate, support the students learning. The goal is to ensure all
            the members of the school community to have access to books and
            reading, to information and to information technology. The reference
            and lending library is well stocked with a vast collection of books,
            reports, journals and periodicals. The library also provides access
            to the business and management related digital resources. Students
            can utilize these services for their classroom –related work for
            further research into their areas of interest.
          </AnimatedText>
          <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
            <KCModalContainer />
          </div>
        </div>
      </section>
      <section id="Section" className={`  sm:px-[35px] xl:px-[70px]`}>
        <div className={` px-4 mx-auto `}>
          <div className="border-b-gray-200 border-b-[1px] my-0"></div>
        </div>
      </section>
      <section
        id="scienceLabSection"
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <AnimatedDiv
            initial={{ opacity: 0, x: "50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
              Science&nbsp;
              <span className="text-secondary-red1">Lab</span>
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </AnimatedDiv>

          <AnimatedText
            variants={springAnimate70pxFromBelow16}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className={`leading-8  text-[#1d1d1d] mb-3`}
          >
            Science lab is equipped with all the required materials to conduct
            laboratory teaching and experiments that encourage deep
            understanding in children. Children are able to retain the knowledge
            for longer when they are performing the experiments individually
            through teacher&apos;s guidelines. Students aregetting a first-hand
            learning experience by performing various experiments. Students are
            made to use the models and understand different scientific theories
            and concepts.. Anatomy models, physics science kits, and chemistry
            science kits for instance make it easy to understand the otherwise
            complex theories of science. Science is made very interesting and
            effective for students in our institution.
          </AnimatedText>
          <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
            <ScienceLabModalContainer />
          </div>
        </div>
      </section>
      <section id="Section" className={`  sm:px-[35px] xl:px-[70px]`}>
        <div className={` px-4 mx-auto `}>
          <div className="border-b-gray-200 border-b-[1px] my-0"></div>
        </div>
      </section>
      <section
        id="sportsSection"
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <AnimatedDiv
            initial={{ opacity: 0, x: "50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
              Sports&nbsp;
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </AnimatedDiv>

          <AnimatedText
            variants={springAnimate70pxFromBelow16}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className={`leading-8  text-[#1d1d1d] mb-3`}
          >
            SPORTS teaches us character, it teaches us how to play by rules, it
            teaches us to know what it feels like to win and lose, it teaches us
            about life. The best part of any game is the opportunity to play.
            Our Apolities are being encouraged, motivated, taught and trained in
            these perspectives. We categorize our children based on their age
            and are given ample of opportunities both in Indoor and Outdoor
            games. Along with this our Apolities are proficiently educated to
            celebrate our National festivals with much more discipline. We feel
            proud of our Apollo representators in various Scouts and Guides
            activities,KACA Cricket tournaments, Cluster and District level
            sports, State level parades during Independence Day and Republic Day
            and around 600+ Apolities were a part of our State festival Kannada
            Rajyothsava which added an extra feather of dignity to our APOLLO
            FAMILY
          </AnimatedText>
          <AnimatedText
            variants={springAnimate70pxFromBelow16}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className={`leading-8 font-semibold  text-[#1d1d1d] mb-3`}
          >
            &#x0022;SPORTS NOT ONLY BUILD BETTER SPORTSMEN BUT ALSO BETTER
            PEOPLE&#x0022;
          </AnimatedText>
          <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
            <SportsModalContainer />
          </div>
        </div>
      </section>
      <section id="Section" className={`  sm:px-[35px] xl:px-[70px]`}>
        <div className={` px-4 mx-auto `}>
          <div className="border-b-gray-200 border-b-[1px] my-0"></div>
        </div>
      </section>
      <section
        id="transportSection"
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <AnimatedDiv
            initial={{ opacity: 0, x: "50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
              Transport&nbsp;
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </AnimatedDiv>

          <AnimatedText
            variants={springAnimate70pxFromBelow16}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className={`leading-8  text-[#1d1d1d] mb-3`}
          >
            Transport – The need for safe passage of each child to school and
            back home is of paramount importance to us. To ensure safe travel
            the school has its own fleet of school buses designed as per
            standards and manned by trained drivers and personnel sensitized to
            the needs of small children. For supervision and monitoring a
            transport attendant is on board throughout the journey. Mobile
            phones have been provided in each bus that ensures efficiency in
            terms of service and better communication in case of emergencies.
            Besides ensuring the implementation of the safety norms, all staff
            on the bus is well trained in first aid and emergency management.
          </AnimatedText>

          <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
            <TransportModalContainer />
          </div>
        </div>
      </section>
    </div>
  );
}
