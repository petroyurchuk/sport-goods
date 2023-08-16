import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SliderWhyUs = () => {
  return (
    <>
      <h2 className="text-center text-5xl font-semibold mb-4 text-gray-800">
        Ціни в конкурентів
      </h2>

      <Swiper
        className="w-full md:bg-blue-50 py-[10px]"
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide className="flex justify-center items-center z-0">
          <img
            className="max-h-[320px] object-contain"
            src="/whyUS/why-us-1.jpg"
            alt="why us"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center z-0">
          <img
            className="max-h-[320px] object-contain"
            src="/whyUS/why-us-2.jpg"
            alt="why us"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center z-0">
          <img
            className="max-h-[320px] object-contain"
            src="/whyUS/why-us-3.jpg"
            alt="why us"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center z-0">
          <img
            className="max-h-[320px] object-contain"
            src="/whyUS/why-us-4.jpg"
            alt="why us"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center z-0">
          <img
            className="max-h-[320px] object-contain"
            src="/whyUS/why-us-5.jpg"
            alt="why us"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center z-0">
          <img
            className="max-h-[320px] object-contain"
            src="/whyUS/why-us-6.jpg"
            alt="why us"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SliderWhyUs;
