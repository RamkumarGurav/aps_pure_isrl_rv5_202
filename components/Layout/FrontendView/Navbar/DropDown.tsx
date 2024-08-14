/*** nextjs ***/
import Link from "next/link";
/*** icons ***/
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
/*****************************************************
           component
*****************************************************/
export default function DropDown({
  open,
  navLinkName,
  handleNavLinkName,
  navLinks,
  yearsData,
}: {
  open: boolean;
  navLinkName: string;
  handleNavLinkName: (name: string) => void;
  navLinks: { [key: string]: any };
  yearsData: any;
}) {
  return (
    <div
      className={`bg-yellow-muted w-full  h-[250px] absolute  left-0  ${
        open ? "top-[100%] shadow-b" : " top-[-500px] "
      } visible transition-all duration-700 ease-in-out lg:hidden  py-2 pt-6 px-6 sm:px-12  font-sans 
      text-sm   z-[-1]`}
    >
      <div className={`h-full overflow-y-auto`}>
        <Link
          href={navLinks.home.link}
          className="navLinkMobile inline-block w-full py-2 text-gray-900 font-sans text-sm  border-b border-b-gray-900"
          title="Home"
        >
          {navLinks.home.name}
        </Link>
        <div
          className="   w-full cursor-pointer   "
          onClick={() => handleNavLinkName(navLinks.aboutUs.name)}
        >
          <div className="relative w-full flex  justify-between items-center  hover:text-red-500">
            <span
              className={`navLinkMobile w-full py-2 text-gray-900 font-sans text-sm border-b border-b-gray-900`}
            >
              {navLinks.aboutUs.name}
            </span>
            {navLinkName != navLinks.aboutUs.name ? (
              <FaAngleRight
                size={15}
                className={`navLinkMobileIcon absolute top-[8x] right-0`}
              />
            ) : (
              <FaAngleDown
                size={15}
                className={`navLinkMobileIcon absolute top-[8x] right-0`}
              />
            )}
          </div>
          {navLinkName == navLinks.aboutUs.name && (
            <div className=" w-full    text-gray-900 font-sans text-sm visible normal-case">
              {navLinks.aboutUs.dropDown.map(
                (item: { [key: string]: any }, i: number) => (
                  <Link
                    href={item.link}
                    className=" mobileDropDownLink"
                    key={i}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
        <div
          className="   w-full cursor-pointer   "
          onClick={() => handleNavLinkName(navLinks.messages.name)}
        >
          <div className="relative w-full flex  justify-between items-center  hover:text-red-500">
            <span
              className={`navLinkMobile w-full py-2 text-gray-900 font-sans text-sm border-b border-b-gray-900`}
            >
              {navLinks.messages.name}
            </span>
            {navLinkName != navLinks.messages.name ? (
              <FaAngleRight
                size={15}
                className={`navLinkMobileIcon absolute top-[8x] right-0`}
              />
            ) : (
              <FaAngleDown
                size={15}
                className={`navLinkMobileIcon absolute top-[8x] right-0`}
              />
            )}
          </div>
          {navLinkName == navLinks.messages.name && (
            <div className=" w-full    text-gray-900 font-sans text-sm visible normal-case">
              {navLinks.messages.dropDown.map(
                (item: { [key: string]: any }, i: number) => (
                  <Link
                    href={item.link}
                    className=" mobileDropDownLink"
                    key={i}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
        <div
          className="   w-full cursor-pointer   "
          onClick={() => handleNavLinkName(navLinks.academics.name)}
        >
          <div className="relative w-full flex  justify-between items-center  hover:text-red-500">
            <span
              className={`navLinkMobile w-full py-2 text-gray-900 font-sans text-sm border-b border-b-gray-900`}
            >
              {navLinks.academics.name}
            </span>
            {navLinkName != navLinks.academics.name ? (
              <FaAngleRight
                size={15}
                className={`navLinkMobileIcon absolute top-[8x] right-0`}
              />
            ) : (
              <FaAngleDown
                size={15}
                className={`navLinkMobileIcon absolute top-[8x] right-0`}
              />
            )}
          </div>
          {navLinkName == navLinks.academics.name && (
            <div className=" w-full    text-gray-900 font-sans text-sm visible normal-case">
              {navLinks.academics.dropDown.map(
                (item: { [key: string]: any }, i: number) => (
                  <Link
                    href={item.link}
                    className=" mobileDropDownLink"
                    key={i}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
        <Link
          href={navLinks.facilities.link}
          className="navLinkMobile inline-block w-full py-2 text-gray-900 font-sans text-sm  border-b border-b-gray-900"
          title="Home"
        >
          {navLinks.facilities.name}
        </Link>
        <div
          className="   w-full cursor-pointer   "
          onClick={() => handleNavLinkName(navLinks.gallery.name)}
        >
          <div className="relative w-full flex  justify-between items-center  hover:text-red-500">
            <span
              className={`navLinkMobile w-full py-2 text-gray-900 font-sans text-sm border-b border-b-gray-900`}
            >
              {navLinks.gallery.name}
            </span>
            {navLinkName != navLinks.gallery.name ? (
              <FaAngleRight
                size={15}
                className={`navLinkMobileIcon absolute top-[8x] right-0`}
              />
            ) : (
              <FaAngleDown
                size={15}
                className={`navLinkMobileIcon absolute top-[8x] right-0`}
              />
            )}
          </div>
          {navLinkName == navLinks.gallery.name && (
            <div className=" w-full    text-gray-900 font-sans text-sm visible normal-case">
              {yearsData.data.map((item: any, i: number) => (
                <Link
                  prefetch={true}
                  href={`/gallery/${item.fiscal_year}`}
                  className=" mobileDropDownLink"
                  key={i}
                >
                  {item.fiscal_year}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          href={navLinks.newsandevents.link}
          className="navLinkMobile inline-block w-full py-2 text-gray-900 font-sans text-sm"
          title="Home"
        >
          {navLinks.newsandevents.name}
        </Link>
      </div>
    </div>
  );
}
