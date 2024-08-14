/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });
/*** images ***/
import vc from "@/public/vc.jpg";
/*** components ***/
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import AnimatedText from "@/components/Animated/AnimatedText";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";

export default function VCPageName() {
  return (
    <div className="bg-[#FDFBF0] overflow-hidden">
      <Bedcrumb heading="Messages" pageName1="Vice Chairperson Message" />

      <section
        id="chairpersonMsg"
        className="py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]  "
      >
        <div className="px-4">
          <div className="mx-auto ">
            <AnimatedDiv
              className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
              variants={springAnimate70pxFromBelow10}
              initial={"offscreen"}
              whileInView={"onscreen"}
            >
              Vice Chairperson &nbsp;
              <span className="text-secondary-red1">Message</span>
            </AnimatedDiv>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </div>
          <div className="chairpersonMsgContainer bg-[#FAF6E2] ">
            <div className=" grid lg:grid-cols-2 p-4">
              <div>
                <AnimatedText
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className={`text-[#007BFF] text-lg sm:text-xl font-bold mb-2 `}
                >
                  Mr. SULTAN KASIAR
                </AnimatedText>
                <AnimatedText
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className={`text-[#e6272d] text-base font-semibold mb-2`}
                >
                  Vice Chairperson
                </AnimatedText>
                <AnimatedText
                  className="leading-8  text-[#1d1d1d]"
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                >
                  &ldquo;Welcome to the Appolo family!&rdquo;
                </AnimatedText>
                <AnimatedText
                  className={`  mt-3 leading-8  text-[#1d1d1d]`}
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                >
                  I take immense pleasure in introducing to Appolo public
                  school. We impart quality education to the children. The
                  school symbolises knowledge, competition, intellect and love.
                  Children are encouraged to channelize their potential in the
                  pursuit of excellence. We inculcate strong values combining
                  with academic and extra-curricular activities in the children.
                  A student harnessed in such an atmosphere has every hope and
                  possibility of becoming a responsible, balanced adult in
                  contributing to the society, of which he/she forms an integral
                  part. The learning process continues until the last breath.
                  Start your journey with us.
                </AnimatedText>
              </div>
              <div className=" flex justify-center items-start pt-0 md:pt-10 px-2">
                <div
                  className="p-4 
               "
                >
                  <AnimatedDiv
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                    className="flex justify-stretch  "
                  >
                    <div className="   ">
                      <Image
                        src={vc}
                        alt="vc"
                        className="w-full h-auto object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </AnimatedDiv>
                </div>
                {/* <div
              id="image-container"
              className="relative w-full h-[500px] lg:h-full overflow-hidden"
            > */}

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
