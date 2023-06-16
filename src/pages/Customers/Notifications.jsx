import { MdEventNote, MdOutlineAccountCircle } from "react-icons/md";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { IoMdArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";

const Notifications = () => {
  return (
    <div className="w-11/12 h-11/12 ml-[1.5rem]">
      {/* Komponen Account */}
      <div className="md:border-b md:border-slate-500  md:ml-[6rem] ">
        <div className="mt-[6rem]">
          <h1 className="text-xl font-bold">Notifikasi</h1>
        </div>
        <div className="hidden md:flex md:gap-3 md:mt-6 md:w-7/12 md:ml-6 md:p-2 md:rounded-t-lg md:mb-4 md:text-white md:bg-primary-darkblue03">
          <Link to={"/"}>
            <button className="flex items-center gap-2">
              <IoMdArrowBack size="20px" />
              Beranda
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col max-w-sm mt-6 font-semibold md:ml-[10rem]">
        <span className="text-slate-500 font-thin text-xs">version 1.1.0</span>
      </div>
      {/* Akhir Komponen Account */}

      {/* Navbar */}
      <div
        className="fixed bottom-0 left-0 w-full shadow-md py-2 px-4 md:bottom-auto md:top-0 md:mt-2"
        style={{ overflow: "hidden" }}
      >
        <div className="md:flex md:justify-between md:ml-24 lg:32 xl:ml-44 overflow-x-hidden">
          <div className="hidden md:flex">
            <img src={logo} alt="Logo" className="h-[50px]" />
          </div>
          <div className="flex items-center justify-between md:mr-24 lg:32 xl:mr-44">
            <div className="mr-4 flex flex-col items-center text-slate-500 md:hidden">
              <BiHomeAlt size="25px" />
              <span className="text-xs mt-1 ">Beranda</span>
            </div>
            <div className="mr-4 flex flex-col items-center text-slate-500">
              <MdEventNote size="25px" />
              <span className="text-xs mt-1 md:hidden">Riwayat</span>
            </div>
            <div className="mr-4 flex flex-col items-center  text-primary-main">
            <Link to={"/notifications"}>
              <IoMdNotificationsOutline size="25px" />
              <span className="text-xs mt-1 md:hidden">Notifikasi</span>
              </Link>
            </div>
            <div className="mr-4 flex flex-col items-center text-slate-500 hover:text-primary-main">
              <Link to={"/Akun"}>
                <MdOutlineAccountCircle
                  className="flex items-center"
                  size="25px"
                />
                <span className="font-bold text-xs mt-1 md:hidden">Akun</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Akhir Navbar */}
    </div>
  );
};

export default Notifications;
