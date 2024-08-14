"use client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { footerContactUs, footerQuickLinks } from "@/lib/helpers/displayData";
import { Roboto } from "next/font/google";
const font = Roboto({ weight: "400", subsets: ["latin"] });

const FooterTop = () => {
  return (
    <footer
      className={`bg-gray-900 text-white py-10 ${font.className} font-sans`}
    >
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial position, animate from bottom
              exit={{ opacity: 0, y: 50 }} // Animation when component exits
              transition={{ duration: 1.5 }} // Animation duration
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h4 className=" mb-4 text-xl font-semibold tracking-wide">
                Quick Links
              </h4>
              <ul className="footer_nav2 list-unstyled space-y-2">
                {footerQuickLinks.slice(0, 4).map((item, i) => (
                  <li key={i} className=" my-2 flex items-center justify-start">
                    <FaAngleRight className="text-red-600" />
                    <Link
                      href={`${item.link}`}
                      title="Website Design"
                      className="footerQuickLink text-gray-400   hover:text-red-600"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial position, animate from bottom
              exit={{ opacity: 0, y: 50 }} // Animation when component exits
              transition={{ duration: 1.5 }} // Animation duration
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h4 className=" mb-4 text-xl font-semibold tracking-wide">
                &nbsp;
              </h4>
              <ul className="footer_nav2 list-unstyled space-y-2">
                {footerQuickLinks.slice(4).map((item, i) => (
                  <li key={i} className=" my-2 flex items-center justify-start">
                    <FaAngleRight className="text-red-600" />
                    <Link
                      href={`${item.link}`}
                      title="Website Design"
                      className="footerQuickLink text-gray-400   hover:text-red-600"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial position, animate from bottom
              exit={{ opacity: 0, y: 50 }} // Animation when component exits
              transition={{ duration: 1.5 }} // Animation duration
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h4 className=" mb-4 text-xl font-semibold tracking-wide">
                Contact Us
              </h4>
              <ul className="footer_nav2 list-unstyled space-y-2">
                <li className=" mb-4 flex  ">
                  <div className=" ">
                    {" "}
                    <IoLocationSharp size={15} className="text-red-600 mr-4" />
                  </div>

                  <div
                    className={`footerQuickLink text-gray-400   ${font.className} font-sans`}
                  >
                    {footerContactUs.address}
                  </div>
                </li>
                <li className=" mb-4 flex  ">
                  <div className=" ">
                    {" "}
                    <FaPhone size={12} className="text-red-600 mr-4" />
                  </div>

                  <div
                    title="Website Design"
                    className="footerQuickLink text-gray-400  "
                  >
                    {footerContactUs.phoneNumbers.map(
                      (item: string, i: number) => (
                        <div className="" key={i}>
                          +91{item}
                        </div>
                      )
                    )}
                  </div>
                </li>
                <li className=" mb-4 flex  ">
                  <div className=" ">
                    {" "}
                    <MdEmail size={15} className="text-red-600 mr-4" />
                  </div>

                  <div
                    title="Website Design"
                    className="footerQuickLink text-gray-400  "
                  >
                    {footerContactUs.email}
                  </div>
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial position, animate from bottom
              exit={{ opacity: 0, y: 50 }} // Animation when component exits
              transition={{ duration: 1.5 }} // Animation duration
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="w-full h-full bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7324382422685!2d77.55048051482149!3d12.92491069088659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6ab8f59d27ee566!2sAppolo%20Public%20School!5e0!3m2!1sen!2sin!4v1639141357781!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div></div>
    </footer>
  );
};

export default FooterTop;
