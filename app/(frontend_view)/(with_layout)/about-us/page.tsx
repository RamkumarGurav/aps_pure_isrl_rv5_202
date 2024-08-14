/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });
/*** images ***/
import AbouApsImg from "@/public/abt-img.jpg";
/*** components ***/
import {
  springAnimateFromBelow10,
  tweenAnimateFromLeft10,
  tweenAnimateFromLeft13,
  tweenAnimateFromLeft16,
  tweenAnimateFromRight10,
} from "@/lib/helpers/variants";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import AnimatedText from "@/components/Animated/AnimatedText";

export default function AUPageName() {
  return (
    <div className={`${font.className}  relative z-[1] overflow-hidden`}>
      <Bedcrumb heading="Contact Us" pageName1="Contact Us" />

      <section
        id="contactUsSection "
        className={`contactUsSection py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px] overflow-hidden`}
      >
        <div className={` px-4 mx-auto `}>
          <div>
            <div className={`grid lg:grid-cols-2`}>
              <div className="left ">
                <div className="headingContainer mb-6">
                  <AnimatedDiv
                    className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                    variants={springAnimateFromBelow10}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    About &nbsp;
                    <span className="text-secondary-red1">Us</span>
                  </AnimatedDiv>
                  <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
                </div>
                <AnimatedText
                  className={`  mt-3 leading-8  text-[#1d1d1d]`}
                  variants={tweenAnimateFromLeft10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {" "}
                  Appolo Public School, is established by Mrs. Rajab Kasiar
                  under the patronage of The Apollo Education Trust. It has
                  built an admirable reputation as a school that offers a high
                  quality of holistic education in Bangalore. The school is
                  affiliated to the Indian Certificate of Secondary Education
                  (C.I.S.C.E) with affiliation number KA400. At Appolo Public
                  School, learning is valued and cherished as a life-long
                  commitment; to foster this, it provides a secure and open
                  atmosphere that supports diversity and welcomes inquiry. It
                  also believes in developing positive character traits and
                  will-power in students throughout their lives, fostering each
                  individual’s personal development. The school educators are a
                  committed lot, who promote self-confidence, integrity,
                  perseverance, responsibility, self-respect and inter-personal
                  skills.
                </AnimatedText>
                <AnimatedText
                  className={`  mt-3 leading-8  text-[#1d1d1d]`}
                  variants={tweenAnimateFromLeft13}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  At Appolo, we look at education as an inviting and exciting
                  journey into the new world of intellectual, spiritual and
                  emotional learning. An educational system that engenders the
                  development and growth of all five aspects of a child&apos;s
                  personality - that is the Physical, Cognitive, Aesthetic,
                  Emotional and Spiritual.
                </AnimatedText>
              </div>

              <div className="right p-4 ">
                <div className="headingContainer mb-6">
                  <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"></div>
                </div>
                <AnimatedDiv
                  className=" relative flex justify-center items-start pt-4 mt-4  z-[99]"
                  variants={tweenAnimateFromRight10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="absolute z-[-1] top-[-20px] right-[-30px] w-full h-full border-red-500 border-[10px] rounded"></div>
                  <Image
                    src={AbouApsImg}
                    alt="pagination"
                    className="w-full h-auto object-cover   "
                    placeholder="blur"
                  />
                  {/* </div> */}
                </AnimatedDiv>
              </div>
            </div>
            <AnimatedText
              className={`  mt-3 leading-8  text-[#1d1d1d]`}
              variants={tweenAnimateFromLeft16}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.2 }}
            >
              In Appolo, Bangalore, the campus environment and learning
              environment is totally unique where each student is treated with
              love, care and respect. Learning is an unending process and
              bearing this in mind, we at Appolites employ holistic technology
              of teaching to enable continuous absorption. Dedicated and
              talented faculty of Appolo supports the continuous development of
              the students.
            </AnimatedText>
          </div>
        </div>
      </section>
    </div>
  );
}
