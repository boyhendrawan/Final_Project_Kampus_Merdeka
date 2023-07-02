
import "react-toastify/dist/ReactToastify.css";

import { FiEye, FiEyeOff } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import bgLogin from "../assets/Gradient.png";
import logo from "../assets/logo.png";
import plant from "../assets/Plantshome.png";
import { login as requestLogin } from "../utilites/redux/action/login";
import { useDispatch } from "react-redux";
import useInput from "../utilites/customHooks/use-input";

import { useSearchParams } from "react-router-dom";
import queryString from "query-string";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
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

  const handleCloseAlert = () => {
    setFailedLogin(false);
  };
  // this function to convert data into a object from params
  const convertAndCheck = (data) => {
    const paramsObject = {};
    for (let [key, value] of data.entries()) {
        if (value.trim().length <= 0) return false;
        paramsObject[key] = value;
    }
    return paramsObject;
}
// get Params
const [getParmas]=useSearchParams();
// determine url;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueUsername.length <= 0 || valuePassword.length <= 0) {
      toast.error("Harap isi semua inputan", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "absolute bottom-0 right-1/2",
      });
      return;
    } 

    // check url
    let url;
    const objParams=convertAndCheck(getParmas);
    if(objParams.hasOwnProperty('pessegers') && objParams.hasOwnProperty('schedule') && objParams.hasOwnProperty('stepper')){
    url=`/user/checkout/allData?${queryString.stringify(objParams)}`;
    } else url="/";

    console.log(url);
    dispatch(
      requestLogin(
        { valueUsername, valuePassword },
        navigate,
        resetUsername,
        resetPassword,
        url
      )
    );
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-screen overflow-auto">
      <div className="mx-auto flex flex-col h-screen md:flex-row">
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
        <div className="container w-full h-screen md:w-1/2 md:p-5 md:shadow-md">
          <div className="relative flex flex-col max-h-max mx-auto sm:mt-[10%] md:mt-[12%] lg:w-10/12">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 my-auto mx-auto w-10/12 mt-[8rem] md:space-y-13 md:mt-[8rem] xl:mt-[5rem]"
            >
              <h1 className="font-bold mb-10 text-3xl md:text-3xl lg:text-5xl">
                Masuk
              </h1>
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
                  name="username"
                  placeholder="Masukan Email.."
                  className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg mb-3 w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-darkblue04 focus:border-primary-darkblue04 invalid:text-red-500 invalid:focus:ring-red-500"
                  onChange={handleChangeUsername}
                  onBlur={handleBlurUsername}
                  value={valueUsername}
                />
                {invalidUsername && (
                  <p className="message-error-input">
                    Email harus mengandung karakter '@'
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
                  <span className="mb-1 -ml-2 text-primary-darkblue04 font-semibold absolute -right-[0.7rem] after:content-['*'] after:text-pink-600 after:ml-0.5">
                    <Link to="/auth/forgotPassword">Lupa Password</Link>
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder={showPassword ? "********" : "Masukan Password"}
                    className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg w-full block text-sm appearance-none placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                    onChange={handleChangePassword}
                    onBlur={handleBlurPassword}
                    value={valuePassword}
                  />
                  {showPassword ? (
                    <FiEye
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                  ) : (
                    <FiEyeOff
                      className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                      onClick={toggleShowPassword}
                    />
                  )}
                  {invalidPassword && (
                    <p className="message-error-input">
                      Password harus terdiri dari minimal 3 karakter
                    </p>
                  )}
                </div>
                <p className="text-center whitespace-nowrap justify-self-center absolute -bottom-[4rem] left-1/2 transform -translate-x-1/2 md:-bottom-[8rem] lg:-bottom-[5rem]">
                  Belum punya akun?
                  <Link
                    to="/auth/register"
                    className="text-primary-darkblue04 font-bold ml-3 cursor-pointer"
                  >
                    Daftar di sini
                  </Link>
                </p>
              </div>
              <button className="bg-primary-darkblue04 h-[48px] mt-8 p-2 w-full cursor-pointer text-neutral-neutral01 font-semibold rounded-lg">
                Masuk
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
