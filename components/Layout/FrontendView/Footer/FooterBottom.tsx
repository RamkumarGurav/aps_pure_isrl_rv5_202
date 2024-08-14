import Link from "next/link";
let currentYear = new Date().getFullYear();

const FooterBottom = () => {
  return (
    <footer className="bg-[#15222E] py-4 sm:px-[35px] xl:px-[70px] w-full ">
      <div className="px-4 mx-auto  flex flex-col gap-2  text-center w-full lg:flex-row justify-between items-center">
        <p className="text-sm text-gray-400  sm:whitespace-nowrap">
          © Copyright {currentYear}{" "}
          <span className="text-red-600">Appolo Public School</span>. All Rights
          Reserved.
        </p>
        {/* <div className="flex items-center justify-center flex-wrap gap-1 ">
          <Link href="/" className="footer-social-link">
            <BsFacebook size={20} className="footer-social-icon" />
          </Link>
          <Link href="/" className="footer-social-link">
            <BsTwitter size={20} className="footer-social-icon" />
          </Link>

          <Link href="/" className="footer-social-link">
            <FaInstagram size={20} className="footer-social-icon" />
          </Link>
          <Link href="/" className="footer-social-link">
            <TfiYoutube size={20} className="footer-social-icon" />
          </Link>
          <Link href="/" className="footer-social-link">
            <AiFillLinkedin size={20} className="footer-social-icon" />
          </Link>
          <Link href="/" className="footer-social-link">
            <FaPinterest size={20} className="footer-social-icon" />
          </Link>
        </div> */}
        <p className="text-sm text-gray-400 max-w-[300px]">
          <Link href="https://www.marswebsolution.com/">
            {" "}
            Design By : Mars Web Solutions
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterBottom;
