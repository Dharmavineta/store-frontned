import Image from "next/image";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

type url = {
  id: number;
  url: string;
};

type props = {
  urls: url[];
};

const ImageSlider: FC<props> = ({ urls }) => {
  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
  const inActiveStyles = "hidden text-gray-400";
  return (
    <div className="group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl ">
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button></button>
        <button></button>
      </div>
      <Image src={urls[0].url} alt="" fill />
      {/* <Swiper className="h-full w-full">
        {urls.map((url, i) => (
          <SwiperSlide className="-z-10 relative h-full w-full" key={url.id}>
            <Image
              fill
              className="-z-10 h-full w-full object-cover object-center"
              src={url.url}
              alt="product image"
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default ImageSlider;
