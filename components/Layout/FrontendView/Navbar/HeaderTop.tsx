import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { Lato } from "next/font/google";
import { ContactUsInt } from "@/lib/helpers/displayData";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function HeaderTop({ contactUs }: { contactUs: ContactUsInt }) {
  return (
    <div
      id="header-top"
      className={`bg-[#140A46] text-white md:px-[35px] xl:px-[70px] h-[31.5px] md:h-[41px] ${lato.className} relative z-[999]`}
    >
      <div className="px-4 h-full flex justify-between ">
        <div className="flex ">
          <div className="hidden lg:flex justify-center items-center  gap-1">
            <FiMail size={14} className="text-gray-100" />
            <span className="text-sm">{contactUs.email}</span>
          </div>
          <div className="hidden lg:flex h-full border-l border-gray-400 mx-2" />

          <div className="hidden lg:flex justify-center gap-1 items-center">
            <FaPhone size={13} className="text-gray-100" />
            <span className="text-sm">
              {contactUs.phoneNumbers[0]} / {contactUs.phoneNumbers[1]}
            </span>
          </div>
        </div>
        <Link
          href="/contact-us"
          className={`h-full px-3  || text-[13px] leading-loose  || flex items-center justify-center || 
           bg-red-500 text-white font-semibold uppercase hover:bg-blue-500`}
        >
          contact us
        </Link>
      </div>
    </div>
  );
}
