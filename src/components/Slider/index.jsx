import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider = () => {
  return (
    <Swiper
      name="головна"
      className="w-full md:bg-blue-50 py-[10px]"
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide className="flex justify-center items-center z-0">
        <img src="/img/good-1.jpg" alt="Sport good 1" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/img/good-2.jpg" alt="Sport good 2" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/img/good-3.jpg" alt="Sport good 2" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center max-h-[365px]">
        <img src="/img/good-4.jpg" alt="Sport good 2" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/img/good-5.jpg" alt="Sport good 2" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/img/good-6.jpg" alt="Sport good 2" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/img/good-7.jpg" alt="Sport good 2" />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
