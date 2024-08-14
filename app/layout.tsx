/*** nextjs ***/
import "./globals.css";
/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** meta ***/
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Appolo Public Schools",
  description: "Welcome to Appolo Public Schools",
};
/*** components ***/
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

/*****************************************************
      RootLayout
 ****************************************************/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="body"
        className={` ${font.className} max-w-[1536px] mx-auto  ||  bg-white  dark:bg-black dark:text-white text-black`}
      >
        <Providers>
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
/*****************************************************
           other
*****************************************************/
