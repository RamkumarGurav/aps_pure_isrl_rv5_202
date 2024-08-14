import { getPlaiceholder } from "plaiceholder";

// Function to retrieve the base64 representation of an image from its URL
export async function getBase64(imageUrl: string) {
  try {
    // Fetch the image from the provided URL
    const res = await fetch(imageUrl);

    // Check if the fetch was successful
    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    // Retrieve the image's binary data in the form of an ArrayBuffer
    const buffer = await res.arrayBuffer();

    // Convert the binary ArrayBuffer into a Node.js Buffer using Buffer.from()
    // This allows Plaiceholder to process the image buffer
    // Buffer.from(buffer) method is nodejs method that converts raw binary data into base64 encoded string

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    //The conversion of the ArrayBuffer into a Node.js Buffer in this scenario is primarily due to the requirement of the plaiceholder library to work with Node.js buffers rather than raw ArrayBuffer data.
    // Here's why it's necessary:
    // Library Compatibility: plaiceholder might be designed to process images specifically from Node.js buffers rather than raw binary ArrayBuffer data. This could be due to its internal implementation or dependency on Node.js-specific APIs for image processing.

    // Return the base64 representation of the processed image
    return base64;
  } catch (e) {
    // Handle any errors that might occur during the process
    if (e instanceof Error) console.log(e.stack);
  }
}

interface ImageUrlDetails {
  imageUrl: string;
  [key: string]: any; // Allow any other properties
}

export async function getImagesWithSrcAndBlurDataUrlArr(
  imageUrlDetailsArr: ImageUrlDetails[]
) {
  //make all requests at once instead of awaiting each one - avoiding waterfall
  const base64Promises = imageUrlDetailsArr.map((imgOb) =>
    getBase64(imgOb.imageUrl)
  );

  //Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  //createing an array of objects where each object has image src and blurDataUrl
  const photosWithSrcAndBlurDataUrl = imageUrlDetailsArr.map((item, i) => ({
    blurDataUrl: base64Results[i],
    ...item,
  }));

  return photosWithSrcAndBlurDataUrl;
}

export const defaultBlurDataUrl =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAFnAj0DASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAVEAEBAAAAAAAAAAAAAAAAAAAAEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDIDLQAAAAAAAAAIAAAAAAAAIoCAAAAAAIqAAAAAgAAAIAAACAAAAgqAAAIqAAKAACKAgqAAAAAAAAAAAAA9ACKAAAAAAAAACAAAAAAAAAAIKgAAAACKAgAAAIKgAACKAgACKAgAAAIKgACgigIKgAAAAAAIKAgoCCoAAAAD0AIoAAAAAAAIAAAAAAAAAAAAIoCAAAAAAIoCAAAAgoCAAIoCCoAAogoCCoAACCgIKAgAAAIKAgoCCgIAAAIAA9AAoAAAAAAACCiCCgIAAAAAAAAAAigIKgAAAAAAIKAgCgACCgIKgAAIKAgoCAAIoCCgIKAgACKAgoIgoCCgIKAgoDsAKAAAAAAAAAAAAAAIoCAAAAAAACAACKAgoCAAAAAAAAgoCCgqCoAigIKAgoCCoAigIKCIKAgqAAAgoogoCCgIKA7AIoigIKAgoCAAAAAAAAAAAAgqCAAAAAAAAAAAAAAAACKAgoCCgIKAgoKgAgigIKAgoCAAgoogoCCgIAAAAAAADqAigAAAAAAAIKgAAAAAAgAAAAigIKAgoCCgIKAgoCCgIKAAAgoCCgIKAgoCCgIKgAAIKKIKAgACKAgoCCgIKgAAAAOgCKAAAAAAAAAAgqCAAAAAAAAAAAAAAAAAAAAAKCCgIKAgoCCgIKAgoCCgIKKIKgAAIKAgoCAAIoCCgIKAgAAANgIoAAAAAoAAACCKgAAAAAAAAAAAAAAACAAAoAAAAACgIKAgoCCgIKAgoogoCCoAAAigIKAgACKAgoCCoAAAADQAoAAAAAIAAAgAAAAAAAAAAAAAAAAAAKAAAAAgKAAAAAAoCCgIKAgoogoCAAAAgoCAAAAgoCAAAAAAAAoAAAAAAICoAAAAAAAAAAgCiAKAAAAAAACgAAAoAAAAKgAAAAAAAAAKAAAAIKAgAAAIKgAAAAIKAgAAAKIAogAAAAAAAIAogAAAAAAAAAqAKIoAAAAKAAqKAAACgAIAAAKCCgAACKAgqAAKAACKAgAAAIKgAAAACKAgAAgCiAKIAAAAAAACAKIAogCiAKAAAAqAKAAACgAKgCgAKigAIAAKAAAAAAAAAAioAAoAAgAAACKgAAAACKgAAIIAogCoAAAAAAAAgCiAKIAoAAACoAoACoAoACooAAKAgKigAAKgCgCgAAAAAAAgCAAAAKIAAACAAAACAAAAAMAAAAAACAKIAogCiAKIAogCgAKgCiKAACiKAqKAACgICooAAKAKAAoigAAAAAAAgAAAACKggAoIqAAACAAAAAAAOYggogoogCiAKIAogCiAKIAogCiKAqAKACiAKqAKACiKgoigKgKoACooAAAAKIAogCiAAAAAAIAAAIAAAICoAACAAAAAOQggogCiAKIAogoogCiAKACiAKIoCoAoAKIoKIoCooCoIqgAoACooAAKIoAAAAAAAAAACAAAAgAAAIAAIAAoAgiiAKIA4iCKogCiAKICKIAoigogoogCgAoigKgCqgCgAoAqiKgoigoigKgCgAoigAAogCgIAAAgCoCgAAgAAAIAAIAAAgAAAAgKIKOAgyKIKKIAogCiANCAKICKqCiiKCiAKqAqqgCqggqoAqoAqoAoAKACiKAqAKAgAAAAAAAAAAIAAACAoAgAACAACAAAAACAPOMiDQyoKIAogCqyqiiAKrKgoigoigKigKigKigoigoigoigoigoigKigKggoACoAoigAAAACAAAAACAACAAAICgIAAAIAAAAAPJRBhVECjQyqoogCqgooigoiqKIoKIoKIoKIoKACqgCqgCqigKigKigKggoACooAAAAAAAAoAAAAgCAIAAAgAAgACggAAgKgAAA8YDCioAogCgAoiqiiKooiqKIoKACqgCqigKigoigoAKACgAoAKAgoAAAKAAAKAAAAAAIqAAAIqAACIACAAIqAAKIAAAAADxgMKAAAAKACgoKCoKACgoKAKACgAqgAoAoAKACgAoAKAgKAAAKAAAKAAAAAAIAAAIAAgCAAIAAgAAKIAAAAAD//Z";
