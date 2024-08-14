import {
  navLinks,
  contactUs,
  defaultYearsData,
} from "@/lib/helpers/displayData";
import MovingMessage from "@/components/MovingMessage/MovingMessage";
import { notFound } from "next/navigation";
import SideEnquire from "@/components/Layout/FrontendView/Stickers/SideEnquire";
import ScrollToTop from "@/components/Layout/FrontendView/Stickers/ScrollToTop";
import Navbar from "@/components/Layout/FrontendView/Navbar/Navbar";
import FooterTop from "@/components/Layout/FrontendView/Footer/FooterTop";
import FooterBottom from "@/components/Layout/FrontendView/Footer/FooterBottom";

let year = new Date().getFullYear();
let nextYear = year + 1;
let admissionYear = year + "-" + nextYear.toString().slice(2);
/*** util functions ***/
async function fetchData() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/years`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
      const text = await res.text();
      console.error("Error fetching data:", text);
      return null;
    }

    try {
      const json = await res.json();
      return json;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
/*****************************************************
           layout
*****************************************************/
export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let yearsData = await fetchData();
  yearsData = yearsData ? yearsData : defaultYearsData;

  return (
    <div className="bg-white">
      <Navbar
        contactUs={contactUs}
        navLinksData={navLinks}
        yearsData={yearsData}
      />
      <MovingMessage
        message="&ldquo;Admissions Open 2024-25&rdquo;"
        classes="text-secondary-red1 bg-[#F8F4E1]"
      />
      <main>{children}</main>
      <SideEnquire admissionYear={admissionYear} />
      <ScrollToTop />
      <footer id="footer">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
}
