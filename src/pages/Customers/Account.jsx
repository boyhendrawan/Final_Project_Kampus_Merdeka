import { IoMdArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MdEventNote, MdOutlineAccountCircle } from "react-icons/md";
import React, { useState } from "react";

import { BiHomeAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { TbPencilMinus } from "react-icons/tb";
import logo from "../../assets/logo.png";
import { logout } from "../../utilites/redux/action/login";
import { useDispatch } from "react-redux";

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika penyimpanan data atau pengiriman ke server
    // Berdasarkan nilai fullName, phoneNumber, dan email
    console.log("Data Profil:", fullName, phoneNumber, email);
    closeModal();
  };

  return (
    <div className="container mx-auto px-4">
      {/* Komponen Account */}
      <div className="md:border-b md:border-slate-500 md:ml-[6rem]">
        <div className="mt-[6rem]">
          <h1 className="text-xl font-bold">Akun</h1>
        </div>
        <div className="hidden md:flex md:gap-3 md:mt-6 md:ml-6 md:p-2 md:rounded-t-lg md:mb-4 md:text-white md:bg-primary-darkblue03">
          <Link to={"/"}>
            <button className="flex items-center gap-2">
              <IoMdArrowBack size="20px" />
              Beranda
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col max-w-sm mt-6 font-semibold md:ml-[10rem]">
        <div className="border-b border-slate-500 w-11/12 flex items-center py-4 cursor-pointer">
          <TbPencilMinus className="text-primary-darkblue04 mr-2" size="30px" />
          <button className="flex items-center gap-2" onClick={openModal}>
            Ubah Profil
          </button>
        </div>
        <div className="border-b border-slate-500 w-11/12 flex items-center py-4">
          <FiSettings className="text-primary-darkblue04 mr-2" size="30px" />
          <button className="flex items-center gap-2">Pengaturan Akun</button>
        </div>
        <div className="border-b border-slate-500 w-11/12 flex items-center py-4">
          <ImExit className="text-primary-darkblue04 mr-2" size="30px" />
          <button className="flex items-center gap-2" onClick={(e) => dispatch(logout(navigate))}>
            Keluar
          </button>
        </div>
        <span className="text-slate-500 font-thin text-xs">version 1.1.0</span>
      </div>
      {/* Akhir Komponen Account */}

      {/* Navbar */}
      <div className="fixed bottom-0 left-0 w-full shadow-md py-2 px-4 md:bottom-auto md:top-0 md:mt-2">
        <div className="md:flex md:justify-between md:ml-24 lg:32 xl:ml-44 overflow-x-hidden">
          <div className="hidden md:flex">
            <img src={logo} alt="Logo" className="h-[50px]" />
          </div>
          <div className="flex items-center justify-between md:mr-24 lg:32 xl:mr-44">
            <div className="mr-4 flex flex-col items-center text-slate-500 md:hidden">
              <Link to={"/"}>
                <BiHomeAlt size="25px" />
                <span className="text-xs mt-1">Beranda</span>
              </Link>
            </div>
            <div className="mr-4 flex flex-col items-center text-slate-500">
              <MdEventNote size="25px" />
              <span className="text-xs mt-1 md:hidden">Riwayat</span>
            </div>
            <div className="mr-4 flex flex-col items-center text-slate-500">
              <Link to={"/user/notification"}>
                <IoMdNotificationsOutline size="25px" />
                <span className="text-xs mt-1 md:hidden">Notifikasi</span>
              </Link>
            </div>
            <div className="mr-4 flex flex-col items-center text-primary-darkblue04">
              <Link to={"/user/account"}>
                <MdOutlineAccountCircle className="flex items-center" size="25px" />
                <span className="font-bold text-xs mt-1 md:hidden">Akun</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir Navbar */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="w-10/12 bg-white rounded-lg p-6">
            <h2 className="font-bold text-xl mb-4">Ubah Data Profil</h2>
            <div className="w-9/12 mx-auto mt-4 rounded-lg">
              <h3 className="text-neutral-neutral01 bg-primary-darkblue03 p-2 text-sm rounded-t-lg">
                Data Diri
              </h3>
              <form className="bg-white flex flex-col gap-1 w-10/12 mx-auto" onSubmit={handleSubmit}>
                <label htmlFor="fullName" className="text-xs text-primary-darkblue04 mt-3">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="rounded-sm shadow-md"
                  value={fullName}
                  onChange={handleInputChange}
                />
                <label htmlFor="phoneNumber" className="text-xs text-primary-darkblue04">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="rounded-sm shadow-md"
                  value={phoneNumber}
                  onChange={handleInputChange}
                />
                <label htmlFor="email" className="text-xs text-primary-darkblue04">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="rounded-sm shadow-md"
                  value={email}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className="bg-primary-darkblue02 text-white rounded-sm px-2 py-1 mt-2"
                >
                  Simpan
                </button>
                <button
                  className="bg-primary-darkblue04 text-white rounded-sm px-2 py-1 mt-2"
                  onClick={closeModal}
                >
                  Batal
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Akhir Modal */}
    </div>
  );
};

export default Account;
