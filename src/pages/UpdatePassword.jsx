import "react-toastify/dist/ReactToastify.css";

import { FiEye, FiEyeOff } from "react-icons/fi";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import bgLogin from "../assets/Gradient.png";
import logo from "../assets/logo.png";
import plant from "../assets/Plantshome.png";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password tidak sama", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "absolute bottom-0 right-1/2",
      });
      return;
    }


    // Lakukan pengiriman formulir atau tindakan lain yang diinginkan
    // ...

    // Jika sukses
    toast.success("Password berhasil diubah")
  };

  return (
    <div className="overflow-auto md:h-3/6">
      <div className="flex flex-col h-screen md:flex-row">
        {/* Right Bar */}
        <div className="relative hidden w-full max-h-max md:flex md:w-1/2">
          <img src={bgLogin} alt="Login page" className="w-full h-screen" />
          <img
            src={plant}
            alt="Login page"
            className="absolute z-2 bottom-0 w-full opacity-80"
          />
          <img
            src={logo}
            alt="logo page"
            className="absolute left-[2rem] top-[17rem] h-[8%] w-auto lg:h-[10%] xl:h-[12%]"
          />
        </div>

        {/* Left Bar */}
        <div className="w-full h-screen md:w-1/2 md:p-5 md:shadow-md">
          <div className="relative flex flex-col max-h-max mx-auto sm:mt-[10%] md:mt-[12%] lg:w-10/12">
            <form
              className="space-y-6 my-auto mx-auto w-10/12 mt-[8rem] md:space-y-13 md:mt-[8rem] xl:mt-[5rem]"
              onSubmit={handleSubmit}
            >
              <h1 className="font-bold mb-10 text-3xl md:text-3xl lg:text-5xl">
                Reset Password
              </h1>
              <div className="mt-4">
                <div className="flex justify-between relative">
                  <label className="mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl">
                    Password Baru
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={
                      showPassword ? "********" : "Masukkan Password Baru"
                    }
                    className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {showPassword ? (
                    <FiEyeOff
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                  ) : (
                    <FiEye
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between relative">
                  <label className="mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl">
                    Konfirmasi Password Baru
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder={
                      showConfirmPassword
                        ? "********"
                        : "Konfirmasi Password Baru"
                    }
                    className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {showConfirmPassword ? (
                    <FiEyeOff
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                      onClick={toggleShowConfirmPassword}
                    />
                  ) : (
                    <FiEye
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                      onClick={toggleShowConfirmPassword}
                    />
                  )}
                </div>
              </div>
              <button
                className="bg-primary-darkblue04 h-[48px] mt-8 p-2 w-full cursor-pointer text-neutral-neutral01 font-semibold rounded-lg"
                type="submit"
              >
                Simpan
              </button>
              <ToastContainer /> {/* Memindahkan ToastContainer di bawah tombol Simpan */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
