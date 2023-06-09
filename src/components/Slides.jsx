import React from "react";
import Data from "./Data";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Slides = () => {
  return (
    <div className="relative">
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        className="w-full h-[500px]"
      >
        {Data.heroData.map((item, index) => (
          <SwiperSlide
            className="linear-bg relative rounded overflow-hidden"
            key={index}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-50"></div>
            <div className="">
              <img
                src={item.img}
                alt="movie"
                className="w-full h-[500px] md:h-[800px] object-cover"
              />
              <div className="">
                <div className="absolute bottom-0 right-0 left-0 flex flex-col md:py-48 text-center py-72 justify-center mx-5">
                  <h1 className="text-white lg:text-4xl xl:text-5xl truncate capitalize font-sans text-xl font-bold ">
                    {item.title}
                  </h1>
                  <div className="flex-MovieItem">
                    <div className="flex gap-2 pt-[-16px] py-2 lg:text-lg">
                      <div className="flex justify-center mx-auto">
                        <p className="text-white text-xs lg:text-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slides;
