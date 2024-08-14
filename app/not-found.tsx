import Link from "next/link";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
const font = Poppins({ weight: "400", subsets: ["latin"] });
const NotFoundPage = () => {
  return (
    <>
      <div className="min-h-screen flex pt-[100px] justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-semibold text-gray-800 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
          <p className="text-gray-500 mb-4">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link href="/">
            <Button> Go home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
