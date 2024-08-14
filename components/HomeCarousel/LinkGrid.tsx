import { IoMdDesktop } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import Link from "next/link";
export default function LinkGrid() {
  return (
    <div className="linkGridShell absolute bottom-[10%] w-full z-[900] px-10">
      <div className="mx-auto max-w-[700px] grid grid-cols-2 sm:grid-cols-4  gap-4 place-content-center place-items-center">
        <Link
          href="/"
          className="linkGridItem flex flex-col justify-start py-4 items-center gap-2 text-white 
          w-full h-full "
        >
          <IoMdDesktop className="text-[20px] md:text-[50px] text-gray-200 hover:text-red-500/70" />

          <h2 className="text-center text-sm md:text-xl font-semibold">
            Web Designing
          </h2>
        </Link>
        <Link
          href="/"
          className="linkGridItem flex flex-col justify-start py-2 items-center gap-2 text-white w-full h-full"
        >
          <FaGlobeAmericas className="text-[20px] md:text-[50px] text-gray-200 hover:text-red-500/70" />

          <h2 className="text-center text-sm md:text-xl font-semibold">
            Software Development
          </h2>
        </Link>
        <Link
          href="/"
          className="linkGridItem flex flex-col justify-start py-2 items-center gap-2 text-white w-full h-full"
        >
          <FaShoppingCart className="text-[20px] md:text-[50px] text-gray-200 hover:text-red-500/70" />

          <h2 className="text-center text-sm md:text-xl font-semibold">
            E-commerce Solution
          </h2>
        </Link>
        <Link
          href="/"
          className="linkGridItem flex flex-col justify-start py-2 items-center gap-2 text-white w-full h-full"
        >
          <FaSearchPlus className="text-[20px] md:text-[50px] text-gray-200 hover:text-red-500/70" />

          <h2 className="text-center text-sm md:text-xl font-semibold">
            Search Engine Optimization
          </h2>
        </Link>
      </div>
    </div>
  );
}
