import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="w-[100%] overflow-hidden">
      <div
        className="flex flex-col justify-center items-center h-[140px]   sm:h-[170px] bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../../inner2.jpg')",
        }}
      >
        <h1 className={`text-2xl sm:text-4xl  text-white text-center`}>
          Gallery
        </h1>

        <div className="text-[13px] flex justify-center  items-center mt-2 font-sans">
          <Link href="/" className={`  text-[#ff5353] font-medium  `}>
            Home
          </Link>
          <span className="text-white ">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white  ">Gallery</span>
        </div>
      </div>

      <section id="albums" className="albumsShell py-20 pt-10 px-2 sm:px-12 ">
        <div>
          <div className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-start font-bold text-gray-900 mb-4">
            <Skeleton className="w-[300px] h-[40px] " />
          </div>
          <div className="w-[100px] border-b-[3px] border-red-500"></div>
        </div>

        <div className=" mt-4  grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <div
              key={i}
              className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]"
            >
              <Skeleton className=" h-[240px]" />
              <Skeleton className=" h-[20px] w-[80%] mt-2" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
