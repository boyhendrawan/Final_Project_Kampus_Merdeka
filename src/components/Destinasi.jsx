import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import gambar from "../assets/gambar4.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

SwiperCore.use([Autoplay]);

const Destinasi = () => {
  return (
    <div className="my-16 mx-5 md:mx-0">
      <h1 className="text-xl font-bold mb-5 text-center">Destinasi Favorit</h1>
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={32}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            centeredSlides: true,
          },
          1024: {
            centeredSlides: true,
            slidesPerView: 3.5,
          },
        }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="border-b-gray-300 border rounded-2xl shadow-lg">
              <img
                src={gambar}
                className="w-full rounded-t-2xl"
                alt="Destination"
              />
            <div className="m-2 grid gap-1 mb-5">
              <div className="flex gap-2 py-2 text-xl font-semibold text-gray-700">
                <h1>Jakarta</h1>
                <span className="pt-1">
                  <AiOutlineArrowRight />
                </span>
                <h1>Bali</h1>
              </div>
              <p className="text-blue-500">Garuda Indonesia</p>
              <p>20 Mei - 23 Mei 2023</p>
              <p>
                Start from{" "}
                <span className="font-semibold text-green-500">
                  IDR. 2000.000
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-b-gray-300 border rounded-2xl shadow-lg">
            <a href="#">
              <img
                src={gambar}
                className="w-full rounded-t-2xl"
                alt="Destination"
              />
            </a>
            <div className="m-2 grid gap-1 mb-5">
              <div className="flex gap-2 py-2 text-xl font-semibold text-gray-700">
                <h1>Jakarta</h1>
                <span className="pt-1">
                  <AiOutlineArrowRight />
                </span>
                <h1>Bali</h1>
              </div>
              <p className="text-blue-500">Garuda Indonesia</p>
              <p>20 Mei - 23 Mei 2023</p>
              <p>
                Start from{" "}
                <span className="font-semibold text-green-500">
                  IDR. 2000.000
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-b-gray-300 border rounded-2xl shadow-lg">
            <a href="#">
              <img
                src={gambar}
                className="w-full rounded-t-2xl"
                alt="Destination"
              />
            </a>
            <div className="m-2 grid gap-1 mb-5">
              <div className="flex gap-2 py-2 text-xl font-semibold text-gray-700">
                <h1>Jakarta</h1>
                <span className="pt-1">
                  <AiOutlineArrowRight />
                </span>
                <h1>Bali</h1>
              </div>
              <p className="text-blue-500">Garuda Indonesia</p>
              <p>20 Mei - 23 Mei 2023</p>
              <p>
                Start from{" "}
                <span className="font-semibold text-green-500">
                  IDR. 2000.000
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-b-gray-300 border rounded-2xl shadow-lg">
            <a href="#">
              <img
                src={gambar}
                className="w-full rounded-t-2xl"
                alt="Destination"
              />
            </a>
            <div className="m-2 grid gap-1 mb-5">
              <div className="flex gap-2 py-2 text-xl font-semibold text-gray-700">
                <h1>Jakarta</h1>
                <span className="pt-1">
                  <AiOutlineArrowRight />
                </span>
                <h1>Bali</h1>
              </div>
              <p className="text-blue-500">Garuda Indonesia</p>
              <p>20 Mei - 23 Mei 2023</p>
              <p>
                Start from{" "}
                <span className="font-semibold text-green-500">
                  IDR. 2000.000
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-b-gray-300 border rounded-2xl shadow-lg">
            <a href="#">
              <img
                src={gambar}
                className="w-full rounded-t-2xl"
                alt="Destination"
              />
            </a>
            <div className="m-2 grid gap-1 mb-5">
              <div className="flex gap-2 py-2 text-xl font-semibold text-gray-700">
                <h1>Jakarta</h1>
                <span className="pt-1">
                  <AiOutlineArrowRight />
                </span>
                <h1>Bali</h1>
              </div>
              <p className="text-blue-500">Garuda Indonesia</p>
              <p>20 Mei - 23 Mei 2023</p>
              <p>
                Start from{" "}
                <span className="font-semibold text-green-500">
                  IDR. 2000.000
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-b-gray-300 border rounded-2xl">
            <a href="#">
              <img
                src={gambar}
                className="w-full rounded-t-2xl"
                alt="Destination"
              />
            </a>
            <div className="m-2 grid gap-1 mb-5">
              <div className="flex gap-2 py-2 text-xl font-semibold text-gray-700">
                <h1>Jakarta</h1>
                <span className="pt-1">
                  <AiOutlineArrowRight />
                </span>
                <h1>Bali</h1>
              </div>
              <p className="text-blue-500">Garuda Indonesia</p>
              <p>20 Mei - 23 Mei 2023</p>
              <p>
                Start from{" "}
                <span className="font-semibold text-green-500">
                  IDR. 2000.000
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-b-gray-300 border rounded-2xl shadow-lg">
            <a href="#">
              <img
                src={gambar}
                className="w-full rounded-t-2xl"
                alt="Destination"
              />
            </a>
            <div className="m-2 grid gap-1 mb-5">
              <div className="flex gap-2 py-2 text-xl font-semibold text-gray-700">
                <h1>Jakarta</h1>
                <span className="pt-1">
                  <AiOutlineArrowRight />
                </span>
                <h1>Bali</h1>
              </div>
              <p className="text-blue-500">Garuda Indonesia</p>
              <p>20 Mei - 23 Mei 2023</p>
              <p>
                Start from{" "}
                <span className="font-semibold text-green-500">
                  IDR. 2000.000
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Destinasi;
