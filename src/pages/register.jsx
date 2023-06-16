import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Alert from "../components/alert/alert";
import { FiEyeOff } from "react-icons/fi";
import bgLogin from "../assests/bgWeb.png";
import logo from "../assests/logo.png";
import { register } from "../utilities/redux/action/login";
import { useDispatch } from "react-redux";
import useInput from "../utilities/customHooks/use-input";

const Register = () => {
  // define distpach for get global function
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // define for alert is worng
  const [failedLogin, SetFailedLogin] = useState(false);
  const [requestRegister, setRequest] = useState(false);

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
  //handle when close clicked
  const handlerCloseAlert = (e) => {
    const element = e.target.parentElement;
    element.classList.add("opacity-0");
    // console.log(e);
    setTimeout(() => {
      SetFailedLogin(false);
    }, 320);
  };
  // handle when submit clicked

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (valueUsername.length <= 0 || valuePassword.length <= 0)
      return toast.error("You must add all of input", {
        position: toast.POSITION.TOP_CENTER,
      });
    const data = {
      email: valueUsername,
      password: valuePassword,
      full_name: valueFullName,
      phone: valuePhone,
    };
    console.log(data)
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

  return (
    <div className="overflow-hidden sm:flex sm:flex-wrap sm:overflow-auto md:flex">
      {/* Image */}
      <div className="relative overflow-hidden hidden md:flex md:w-1/2">
        <img src={bgLogin} alt="Login page" className="w-full h-screen" />
        <img
          src={logo}
          alt="logo page"
          className="absolute left-[2rem] top-[17rem] h-[10%] w-auto md:h-[12%] lg:h-[13%]"
        />
      </div>

      {/* Form */}
      <div className="overflow-hidden flex h-screen md:flex md:w-1/2 md:p-5 md:shadow-md">
        <div className="flex flex-col mx-5 h-screen w-screen mt-[5.3rem] lg:mx-auto lg:w-7/12 lg:mt-[7rem] ">
          {failedLogin && (
            <Alert
              onClose={handlerCloseAlert}
              className="bg-rose-700  text-white"
              classNameBtn=" text-rose-200 hover:text-rose-500 hover:bg-rose-200"
            >
              Error ,Filed check again Username and password
            </Alert>
          )}

          <form
            onSubmit={handlerSubmit}
            className="relative space-y-6 lg:space-y-13 lg:mt-[5rem] xl:mt-[7rem] "
          >
            <h1 className="font-bold mb-10 text-3xl md:text-3xl lg:text-5xl ">
              Daftar
            </h1>
            <div>
              <label className="block mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl ">
                Nama
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Nama Lengkap"
                className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg mb-3 w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-main focus:border-primary-main invalid:text-primary-main invalid:focus:ring-primary-main"
                onChange={handleChangeFullName}
                onBlur={handleBlurFullName}
                value={valueFullName}
              />
              {invalidFullName && (
                <p className="message-error-input">
                  your name must more than 3 words
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email.."
                className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg mb-3 w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-main focus:border-primary-main invalid:text-primary-main invalid:focus:ring-primary-main"
                onChange={handleChangeUsername}
                onBlur={handleBlurUsername}
                value={valueUsername}
              />
              {invalidUsername && (
                <p className="message-error-input">
                  your Email must includes @
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
                name="phone"
                placeholder="Masukan Nomor Telepon.."
                className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg mb-3 w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-main focus:border-primary-main invalid:text-primary-main invalid:focus:ring-primary-main"
                onChange={handleChangePhone}
                onBlur={handleBlurPhone}
                value={valuePhone}
              />
              {invalidPhone && (
                <p className="message-error-input">
                  your Number must grater than 10 digits
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
                  type="password"
                  name="password"
                  placeholder="Masukan Password.."
                  className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-main focus:border-primary-main invalid:text-primary-main invalid:focus:ring-primary-main"
                  onChange={handleChangePassword}
                  onBlur={handleBlurPassword}
                  value={valuePassword}
                />
                <FiEyeOff className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
                {invalidPassword && (
                  <p className="message-error-input">
                    your password must grater than 3 words
                  </p>
                )}
              </div>
            </div>
            {requestRegister && "loading"}
            {!requestRegister && (
              <button className="bg-primary-main h-[48px] mt-8 p-2 w-full cursor-pointer text-neutral-neutral01 font-semibold rounded-lg">
                Daftar
              </button>
            )}
            <p className="text-center whitespace-nowrap justify-self-center absolute -bottom-[11rem] left-1/2 transform -translate-x-1/2 md:-bottom-[8rem] lg:-bottom-[5rem]">
              Sudah punya akun?
              <Link
                to="/login"
                className="text-primary-main font-bold ml-3 cursor-pointer"
              >
                Masuk di sini
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
