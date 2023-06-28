import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Alert from "../components/alert/alert";
import LoadingRequest from "../components/LoadingRequest";
import bgLogin from "../assets/Gradient.png";
import logo from "../assets/logo.png";
import plant from "../assets/Plantshome.png";
import { register } from "../utilites/redux/action/login";
import { useDispatch } from "react-redux";
import useInput from "../utilites/customHooks/use-input";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [failedLogin, setFailedLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [requestRegister, setRequest] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    value: valueUsername,
    isInvalid: invalidUsername,
    handlerBlur: handleBlurUsername,
    handlerChange: handleChangeUsername,
    reset: resetUsername,
  } = useInput((e) => e.includes("@"));

  const {
    value: valuePassword,
    isInvalid: invalidPassword,
    handlerBlur: handleBlurPassword,
    handlerChange: handleChangePassword,
    reset: resetPassword,
  } = useInput((e) => e.length > 3);

  const {
    value: valueFullName,
    isInvalid: invalidFullName,
    handlerBlur: handleBlurFullName,
    handlerChange: handleChangeFullName,
    reset: resetFullName,
  } = useInput((e) => e.length > 3);

  const {
    value: valuePhone,
    isInvalid: invalidPhone,
    handlerBlur: handleBlurPhone,
    handlerChange: handleChangePhone,
    reset: resetPhone,
  } = useInput((e) => e.length > 10);

  const handlerCloseAlert = (e) => {
    const element = e.target.parentElement;
    element.classList.add("opacity-0");
    setTimeout(() => {
      setFailedLogin(false);
    }, 320);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (invalidUsername || invalidPassword || invalidFullName || invalidPhone) {
      return toast.error("Mohon isi semua input dengan benar", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "absolute bottom-0 right-1/2",
      });
    }
    const data = {
      full_name: valueFullName,
      email: valueUsername,
      phone: valuePhone,
      password: valuePassword,
      gender: "L",
      roles: "ROLE_USER",
    };
    setRequest(true);
    dispatch(
      register(
        data,
        navigate,
        resetUsername,
        resetPassword,
        resetFullName,
        resetPhone,
        setRequest
      )
    );
  };

  // Menambahkan kondisi disabled pada tombol "Daftar" berdasarkan hasil pengecekan input
  const isRegisterDisabled =
    invalidUsername || invalidPassword || invalidFullName || invalidPhone;

  return (
    <div className="overflow-auto h-screen md:h-3/6">
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
        <div className="container w-full md:w-1/2 md:p-5">
          <div className="relative flex flex-col max-h-max mx-auto sm:mt-[10%] md:mt-[9%] lg:w-10/12">
            {failedLogin && (
              <Alert
                onClose={handlerCloseAlert}
                className="bg-rose-700 text-white"
                classNameBtn="text-rose-200 hover:text-rose-500 hover:bg-rose-200"
              >
                Error, please check your username and password
              </Alert>
            )}
            <form
              onSubmit={handlerSubmit}
              className="space-y-6 my-auto mx-auto w-10/12 mt-[8rem] md:space-y-13 md:mt-[6rem] xl:mt-[2rem]"
            >
              <h1 className="font-bold mb-10 text-3xl md:text-3xl lg:text-5xl">
                Daftar
              </h1>
              <div>
                <label
                  htmlFor="full_name"
                  className="block mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  placeholder="Nama Lengkap"
                  className={`px-3 py-2 h-[48px] border font-semibold shadow rounded-lg mb-3 w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-darkblue04 focus:border-primary-darkblue04 invalid:text-red-500 invalid:focus:ring-red-500 ${invalidFullName ? 'text-opacity-50 cursor-not-allowed' : ''
                    }`}
                  onChange={handleChangeFullName}
                  onBlur={handleBlurFullName}
                  value={valueFullName}
                />
                {invalidFullName && (
                  <p className="message-error-input">
                    Your name must be more than 3 characters
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Masukan Email.."
                  className={`px-3 py-2 h-[48px] border font-semibold shadow rounded-lg mb-3 w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-darkblue04 focus:border-primary-darkblue04 invalid:text-red-500 invalid:focus:ring-red-500 ${invalidUsername ? 'text-opacity-50 cursor-not-allowed' : ''
                    }`}
                  onChange={handleChangeUsername}
                  onBlur={handleBlurUsername}
                  value={valueUsername}
                />
                {invalidUsername && (
                  <p className="message-error-input">
                    Your email must include @
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl"
                >
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Masukan Nomor Telepon.."
                  className={`px-3 py-2 h-[48px] border font-semibold shadow rounded-lg mb-3 w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-darkblue04 focus:border-primary-darkblue04 invalid:text-red-500 invalid:focus:ring-red-500 ${invalidPhone ? 'text-opacity-50 cursor-not-allowed' : ''
                    }`}
                  onChange={handleChangePhone}
                  onBlur={handleBlurPhone}
                  value={valuePhone}
                />
                {invalidPhone && (
                  <p className="message-error-input">
                    Your number must have more than 10 digits
                  </p>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between relative">
                  <label
                    htmlFor="password"
                    className="mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder={showPassword ? "********" : "Masukan Password"}
                    className={`px-3 py-2 h-[48px] border font-semibold shadow rounded-lg w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-red-500 invalid:focus:ring-red-500 ${invalidPassword ? 'text-opacity-50 cursor-not-allowed' : ''
                      }`}
                    onChange={handleChangePassword}
                    onBlur={handleBlurPassword}
                    value={valuePassword}
                  />
                  <div
                    className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </div>
                  {invalidPassword && (
                    <p className="message-error-input">
                      Your password must be more than 3 characters
                    </p>
                  )}
                </div>
                <p className="text-center whitespace-nowrap justify-self-center absolute -bottom-[4rem] left-1/2 transform -translate-x-1/2 md:-bottom-[8rem] lg:-bottom-[5rem]">
                  Sudah punya akun?
                  <Link
                    to="/auth/login"
                    className="text-primary-darkblue04 font-bold ml-3 cursor-pointer"
                  >
                    Masuk di sini
                  </Link>
                </p>
              </div>
              {requestRegister ? (
                <LoadingRequest />
              ) : (
                <button
                  disabled={isRegisterDisabled}
                  className={`bg-primary-darkblue04 h-[48px] mt-8 p-2 w-full cursor-pointer text-neutral-neutral01 font-semibold rounded-lg ${isRegisterDisabled ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  type="submit"
                >
                  Daftar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
