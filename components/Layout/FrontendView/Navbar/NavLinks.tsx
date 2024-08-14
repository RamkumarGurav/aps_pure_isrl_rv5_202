/*** nextjs ***/
import Link from "next/link";
/*** icons ***/
import { FaCaretDown } from "react-icons/fa";
/*** fonts ***/
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });

/*****************************************************
           component
*****************************************************/
export default function NavLinks({
  navLinks,
  yearsData,
  isSticky,
}: {
  navLinks: { [key: string]: any };
  yearsData: any;
  isSticky?: boolean;
}) {
  return (
    <div
      className={`hidden ${
        font.className
      } h-full lg:flex  items-stretch justify-evenly transition-all ${
        isSticky ? "gap-2" : "gap-0"
      }`}
    >
      <Link
        href={navLinks.home.link}
        className={`navLink  flex justify-center items-center   `}
      >
        {navLinks.home.name}
      </Link>

      <div className="dropDownContainer relative h-full flex justify-center items-stretch ">
        <div
          className={`flex justify-center  items-center  flex-nowrap h-full hover:text-[#e6272d] `}
        >
          <div className="navLink flex justify-center relative items-center">
            <span className={`  link-text  inline-block py-2 cursor-pointer `}>
              {navLinks.aboutUs.name}
            </span>
            <FaCaretDown size={13} className="navlinkDownIcon" />
          </div>
        </div>

        <div className=" dropDownLinks   absolute top-[100%] shadow-2xl   left-0   border-b-4 rounded border-red-500   text-gray-900 visible">
          <div className="dropDownLinks-x w-full h-full  relative  ">
            {navLinks.aboutUs.dropDown.map(
              (item: { [key: string]: any }, i: number) => (
                <Link key={i} href={item.link} className="navLinkInDrop">
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <div className="dropDownContainer relative h-full flex justify-center items-stretch ">
        <div
          className={`flex justify-center  items-center  flex-nowrap h-full hover:text-[#e6272d] `}
        >
          <div className="navLink flex justify-center relative items-center">
            {" "}
            <span className={`    inline-block py-2 cursor-pointer `}>
              {navLinks.messages.name}
            </span>
            <FaCaretDown size={13} className="navlinkDownIcon" />
          </div>
        </div>

        <div className=" dropDownLinks   absolute top-[100%] shadow-2xl   left-0   border-b-4 rounded border-red-500   text-gray-900 visible">
          <div className="dropDownLinks-x w-full h-full  relative  ">
            {navLinks.messages.dropDown.map(
              (item: { [key: string]: any }, i: number) => (
                <Link key={i} href={item.link} className="navLinkInDrop">
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <div className="dropDownContainer relative h-full flex justify-center items-stretch ">
        <div
          className={`flex justify-center  items-center  flex-nowrap h-full hover:text-[#e6272d] `}
        >
          <div className="navLink flex justify-center relative items-center">
            {" "}
            <span
              className={`  navlink-text  inline-block py-2  cursor-pointer `}
            >
              {navLinks.academics.name}
            </span>
            <FaCaretDown size={13} className="navlinkDownIcon" />
          </div>
        </div>

        <div className=" dropDownLinks   absolute top-[100%] shadow-2xl   left-0   border-b-4 rounded border-red-500   text-gray-900 visible">
          <div className="dropDownLinks-x w-full h-full  relative  ">
            {navLinks.academics.dropDown.map(
              (item: { [key: string]: any }, i: number) => (
                <Link key={i} href={item.link} className="navLinkInDrop">
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <Link
        href={navLinks.facilities.link}
        className={`navLink flex justify-center items-center`}
      >
        {navLinks.facilities.name}
      </Link>

      <div className="dropDownContainer relative h-full flex justify-center items-stretch ">
        <div
          className={`flex justify-center  items-center  flex-nowrap h-full hover:text-[#e6272d] `}
        >
          <div className="navLink flex justify-center relative items-center">
            {" "}
            <span className={`  link-text  inline-block py-2 cursor-pointer `}>
              {navLinks.gallery.name}
            </span>
            <FaCaretDown size={13} className="navlinkDownIcon" />
          </div>
        </div>

        <div className=" dropDownLinks min-w-[220px]   absolute top-[100%] shadow-2xl   left-0   border-b-4 rounded border-red-500   text-gray-900 visible">
          <div className="dropDownLinks-x w-full h-full  relative  ">
            {yearsData.data.map((item: any, i: number) => (
              <Link
                prefetch={true}
                key={i}
                href={`/gallery/${item.fiscal_year}`}
                className="navLinkInDrop"
              >
                {item.fiscal_year}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link
        href={navLinks.newsandevents.link}
        className={`navLink flex justify-center items-center `}
      >
        {navLinks.newsandevents.name}
      </Link>
    </div>
  );
}
