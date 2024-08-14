import Link from "next/link";

import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });

export default function Bedcrumb({
  heading,
  pageName1,
}: {
  heading: string;
  pageName1: string;
}) {
  return (
    <div
      className={`bedcrumb ${font.className} flex flex-col justify-center items-center h-[140px]   sm:h-[170px] bg-cover`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../../inner2.jpg')",
      }}
    >
      <h1 className={`text-2xl sm:text-4xl  text-white text-center`}>
        {heading}
      </h1>

      <div className="text-[13px] flex justify-center  items-center mt-2 font-sans">
        <Link href="/" className={`  text-[#ff5353] font-medium  `}>
          Home
        </Link>
        <span className="text-white ">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
        <span className="font-medium text-white  ">{pageName1}</span>
      </div>
    </div>
  );
}
