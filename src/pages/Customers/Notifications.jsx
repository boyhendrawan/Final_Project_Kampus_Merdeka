import { IoMdArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { MdEventNote, MdOutlineAccountCircle } from "react-icons/md";

import { BiHomeAlt } from "react-icons/bi";
import CardNotification from "../../components/CardNotification";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";

const Notifications = () => {
  const promoData = [
    {
      id: 1,
      title: "Promosi Spesial 1",
      date: "20 Maret",
      time: "14.00",
      discount: "Potongan Harga 50%",
      description: "Syarat dan Ketentuan Berlaku",
    },
    {
      id: 2,
      title: "Promosi Spesial 2",
      date: "22 Maret",
      time: "16.00",
      discount: "Potongan Harga 30%",
      description: "Syarat dan Ketentuan Berlaku",
    },
  ];

  return (
    <div className="container w-11/12 h-11/12 ml-[1.5rem]">
      <div className="md:border-b md:border-slate-500 md:ml-[6rem]">
        <div className="mt-[6rem] mx-auto">
          <h1 className="text-xl font-bold">Notifikasi</h1>
        </div>
        <div className="hidden md:flex md:gap-3 md:mt-6 md:w-7/12 md:ml-6 md:p-2 md:rounded-t-lg md:mb-4 md:text-white md:bg-primary-darkblue03">
          <Link to={"/"}>
            <button className="flex items-center gap-2">
              <IoMdArrowBack size={20} />
              Beranda
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mx-auto max-h-screen mt-6 font-semibold md:ml-[10rem]">
        <div>
          {promoData.map((promo, index) => (
            <CardNotification
              key={index}
              promo={promo}
              className="border border-b-2 border-slate-500"
            />
          ))}
        </div>
        <span className="text-slate-500 font-thin text-xs">version 1.1.0</span>
      </div>
      <div className="fixed bottom-0 left-0 w-full shadow-md z-20 border-y-[1px] border-primary-darkblue04 py-2 px-4 md:bottom-auto md:top-0 md:mt-2">
        <div className="md:flex md:justify-between md:ml-24 lg:32 xl:ml-44 overflow-x-hidden">
          <div className="hidden md:flex">
            <img src={logo} alt="Logo" className="h-[50px]" />
          </div>
          <div className="flex items-center justify-between md:mr-24 lg:32 xl:mr-44">
            <div className="mr-4 flex flex-col items-center text-slate-500 md:hidden">
              <BiHomeAlt size={25} />
              <span className="text-xs mt-1">Beranda</span>
            </div>
            <div className="mr-4 flex flex-col items-center text-slate-500">
              <MdEventNote size={25} />
              <span className="text-xs mt-1 md:hidden">Riwayat</span>
            </div>
            <div className="mr-4 flex flex-col items-center text-primary-darkblue04">
              <Link to={"/user/notification"}>
                <IoMdNotificationsOutline size={25} />
                <span className="text-xs mt-1 md:hidden">Notifikasi</span>
              </Link>
            </div>
            <div className="mr-4 flex flex-col items-center text-slate-500 hover:text-primary-darkblue04">
              <Link to={"/user/account"}>
                <MdOutlineAccountCircle
                  className="flex items-center"
                  size={25}
                />
                <span className="font-bold text-xs mt-1 md:hidden">Akun</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
