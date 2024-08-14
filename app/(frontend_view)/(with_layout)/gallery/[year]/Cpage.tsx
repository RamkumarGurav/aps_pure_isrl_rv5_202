"use client";
/*** components ***/
import VideoCard from "@/components/GalleryDetails/VideoCard";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import { useQuery } from "@tanstack/react-query";
import { defaultBlurDataUrl } from "@/lib/helpers/displayData";
import GalleryCard from "@/components/Gallery/GalleryCard";
/*** util functions ***/
async function fetchData(fy: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/albums?fy=${fy}`
  );

  return await res.json();
}

/*****************************************************
           page
*****************************************************/
export default function CPage({
  initialData,
  fy,
}: {
  initialData: any;
  fy: string;
}) {
  const { data, isLoading } = useQuery({
    queryKey: [`album_data/${fy}`],
    queryFn: async () => fetchData(fy),
    initialData: initialData,
    staleTime: 0,
    refetchOnWindowFocus: true, // Invalidate cache on window focus
  });

  const albumsData = data.data;
  const yearData = data.yearData;

  // console.log(data);

  let albumCoverImages = albumsData.map((item: { [key: string]: any }) => ({
    ...item,
    imageUrl: `${process.env.NEXT_PUBLIC_API_URL}/uploads/album/${yearData?.fiscal_year}/cover_images/${item.cover_image}`,
  }));
  return (
    <div className="w-[100%] overflow-hidden">
      <Bedcrumb heading="Gallery" pageName1={`Gallery`} />

      <section id="albums" className="albumsShell py-20 pt-10 px-2 sm:px-12 ">
        <AnimatedDiv
          initial={{ opacity: 0, x: "50vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-start font-bold text-gray-900 mb-4">
            Gallery{" "}
            <span className="text-secondary-red1">{yearData?.fiscal_year}</span>
          </div>
          <div className="w-[100px] border-b-[3px] border-red-500"></div>
        </AnimatedDiv>

        <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start ">
          {albumCoverImages.map((item: { [key: string]: any }, i: number) => (
            <GalleryCard
              key={i}
              i={i}
              id={item.id}
              name={item.name}
              srcUrl={item.imageUrl}
              blurDataUrl={defaultBlurDataUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
