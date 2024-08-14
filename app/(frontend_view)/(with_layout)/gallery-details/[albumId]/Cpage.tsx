"use client";
/*** components ***/
import VideoCard from "@/components/GalleryDetails/VideoCard";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import AlbumsContainer from "./AlbumsContainer";
import { useQuery } from "@tanstack/react-query";
/*** util functions ***/
async function fetchData(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/album-images?albumID=${id}`;
  const res = await fetch(url);

  return await res.json();
}

/*****************************************************
           page
*****************************************************/
export default function CPage({
  initialData,
  albumId,
}: {
  initialData: any;
  albumId: string;
}) {
  const { data, isLoading } = useQuery({
    queryKey: [`gallery_data/${albumId}`],
    queryFn: async () => fetchData(albumId),
    initialData: initialData,
    staleTime: 0,
    refetchOnWindowFocus: true, // Invalidate cache on window focus
  });

  const albumsImagesData = data.data;
  const albumData = data.albumData;
  const yearData = data.yearData;

  let filterImages = albumsImagesData
    .slice()
    .filter((item: { [key: string]: any }) => item.type == "1");
  let filteredVideos = albumsImagesData
    .slice()
    .filter((item: { [key: string]: any }) => item.type == "0");

  // console.log(filteredVideos);
  let albumImages = filterImages.map((item: { [key: string]: any }) => ({
    ...item,
    imageUrl: `${process.env.NEXT_PUBLIC_API_URL}/uploads/album/${yearData.fiscal_year}/album_images/${item.album_image}`,
  }));

  return (
    <div className="w-[100%] overflow-hidden">
      <Bedcrumb heading="Gallery" pageName1={`Gallery - ${albumData.name}`} />

      <section id="albums" className="albumsShell py-20 pt-10 px-2 sm:px-12 ">
        <AnimatedDiv
          initial={{ opacity: 0, x: "50vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl text-start font-bold text-gray-900 mb-4">
            {albumData.name} &nbsp;
            <span className="text-secondary-red1">{yearData.fiscal_year}</span>
          </div>
          <div className="w-[100px] border-b-[3px] border-red-500"></div>
        </AnimatedDiv>
        <AlbumsContainer data={albumImages} />

        <div className="w-full mt-4   grid md:grid-cols-2  gap-4  gap-y-8 place-content-center place-items-start">
          {filteredVideos.map((item: { [key: string]: any }, i: number) => (
            <VideoCard key={i} code={item.album_image} />
          ))}
        </div>
      </section>
    </div>
  );
}
