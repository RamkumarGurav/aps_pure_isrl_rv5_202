"use client";
import { MdError } from "react-icons/md";
import { useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
const font = Open_Sans({ weight: "400", subsets: ["latin"] });
export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div
      className={`min-h-[90vh] pt-[50px] flex justify-center bg-white ${font.className}`}
    >
      <div
        className="p-3 m-3  |||  text-xl font-bold text-center  ||| 
         |||  "
      >
        <div className={`inline-block rounded-full p-2 bg-gray-200`}>
          <MdError size={40} />
        </div>
        <h2 className={`text-red-600 `}>Oops! Something went wrong</h2>
        {process.env.NEXT_PUBLIC_APP_ENV == "development" ? (
          <h2 className={`text-base text-gray-600 `}>
            Error : {error.message}
          </h2>
        ) : (
          <h2 className={`sm:w-[400px] text-sm font-medium text-gray-600 `}>
            We are working on the problem right away. Please click on Try again
            or home button to continue using this app.
          </h2>
        )}

        <div className={`flex gap-4 justify-center mt-4`}>
          <Button onClick={() => reset()}>Try again</Button>
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
