/*** nextjs ***/
import Image from "next/image";
/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });
/*** images ***/
import komalImg from "@/public/komal.jpg";
import nabeelaImg from "@/public/nabeela.jpg";
/*** components ***/
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import { springAnimate70pxFromBelow10 } from "@/lib/helpers/variants";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";

export default function TMPageName() {
  return (
    <div className={` ${font.className} bg-[#FDFBF0] overflow-hidden`}>
      <Bedcrumb heading="Messages" pageName1=" Trustee's Message" />

      <section
        id="trusteesMsg"
        className="py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]  "
      >
        <div className="px-4 ">
          <div className="mx-auto ">
            <AnimatedDiv
              variants={springAnimate70pxFromBelow10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
              className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
            >
              Trustee&apos;s &nbsp;
              <span className="text-secondary-red1">Message</span>
            </AnimatedDiv>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </div>
          <AnimatedDiv
            initial={{ opacity: 0, x: "-50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="trusteesMsgContainer p-4 mb-10 bg-[#FAF6E2] pb-4"
          >
            <div className=" grid md:grid-cols-4 p-4 pb-0">
              <div className="left md:col-span-3">
                <h3
                  className={`text-[#007BFF] text-lg sm:text-xl lg:text-2xl  font-bold mb-3 `}
                >
                  Ms. Komal Gurudev
                </h3>
                <h4
                  className={`text-[#e6272d] text-base xl:text-lg font-semibold mb-3`}
                >
                  Trustee
                </h4>
                <p className="leading-8  text-[#1d1d1d] mb-3">
                  &ldquo;APPOLO invests in shaping the younger generation to
                  promote the passion of knowledge and skills. We thrive towards
                  continuous learning process while also keeping in mind the
                  school’s moto which is Character, Conduct and Culture.&rdquo;
                </p>
              </div>
              <div className="right w-full mx-auto  flex  justify-center items-center pt-0  px-2">
                <div
                  className="p-4 mx-auto
               "
                >
                  <div className="flex justify-stretch  py-0 pb-0 ">
                    <div className="   ">
                      <Image
                        src={komalImg}
                        alt="komalImg "
                        className="lg:w-[141px] w-[250px] h-auto lg:h-[177px] object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv
            initial={{ opacity: 0, x: "50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="trusteesMsgContainer p-4 mb-10 bg-[#FAF6E2] pb-4"
          >
            <div className=" grid md:grid-cols-4 p-4 pb-0">
              <div className="left md:col-span-3">
                <h3
                  className={`text-[#007BFF] text-lg sm:text-xl lg:text-2xl  font-bold mb-3 `}
                >
                  Ms. Nabeela Nagoor Meera
                </h3>
                <h4
                  className={`text-[#e6272d] text-base xl:text-lg font-semibold mb-3`}
                >
                  Trustee
                </h4>
                <p className="leading-8  text-[#1d1d1d] mb-3">
                  &ldquo;Appolo moulds the children to face any challenges put
                  forth to them and helps them rise above the rest in this
                  competitive world.&rdquo;
                </p>
              </div>
              <div className="right w-full mx-auto  flex  justify-center items-center pt-0  px-2">
                <div
                  className="p-4 mx-auto
               "
                >
                  <div className="flex justify-stretch  py-0 pb-0 ">
                    <div className="   ">
                      <Image
                        src={nabeelaImg}
                        alt="nabeelaImg "
                        className="lg:w-[141px] w-[250px] h-auto lg:h-[177px] object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv
            initial={{ opacity: 0, x: "-50vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="trusteesMsgContainer p-4 mb-10 bg-[#FAF6E2] pb-4"
          >
            <div className=" grid md:grid-cols-4 p-4 pb-0">
              <div className="left md:col-span-3">
                <h3
                  className={`text-[#007BFF] text-lg sm:text-xl lg:text-2xl  font-bold mb-3 `}
                >
                  Ms. Natchi Fathima
                </h3>
                <h4
                  className={`text-[#e6272d] text-base xl:text-lg font-semibold mb-3`}
                >
                  Trustee
                </h4>
                <p className="leading-8  text-[#1d1d1d] mb-3">
                  &ldquo;We believe education is a tool which helps us in
                  identifying our career goal and to lead a more civilized
                  life..&rdquo;
                </p>
              </div>
              <div className="right w-full mx-auto  flex  justify-center items-center pt-0  px-2">
                <div
                  className="p-4 mx-auto
               "
                >
                  <div className="flex justify-stretch  py-0 pb-0 ">
                    <div className="   ">
                      <Image
                        src={komalImg}
                        alt="sreelakshmi "
                        className="lg:w-[141px] w-[250px] h-auto lg:h-[177px] object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </div>
  );
}
