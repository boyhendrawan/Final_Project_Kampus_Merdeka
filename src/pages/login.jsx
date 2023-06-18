import React, { useState } from "react";
import Alert from "../components/alert/alert";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import bgLogin from "../assests/bgWeb.png";
import logo from "../assests/logo.png";
import { toast } from "react-toastify";
import useInput from "../utilities/customHooks/use-input";

const Login = () => {
  const [failedLogin, SetFailedLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    value: valueUsername,
    isInvalid: invalidUsername,
    handlerBlur: handleBlurUsername,
    handlerChange: handleChangeUsername,
  } = useInput((e) => e.includes("@"));

  const {
    value: valuePassword,
    isInvalid: invalidPassword,
    handlerBlur: handleBlurPassword,
    handlerChange: handleChangePassword,
  } = useInput((e) => e.length > 3);

  const handlerCloseAlert = (e) => {
    const element = e.target.parentElement;
    element.classList.add("opacity-0");

    setTimeout(() => {
      SetFailedLogin(false);
    }, 320);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (valueUsername.length <= 0 || valuePassword.length <= 0)
      return toast.info("hello", { position: toast.POSITION.BOTTOM_CENTER });
    localStorage.setItem("username", valueUsername);
    localStorage.setItem("password", valuePassword);

    window.location.href = "/";
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
        <div className="flex flex-col mx-5 h-screen w-screen mt-[5.3rem] lg:mx-3 lg:mt-[7rem]">
          {failedLogin && (
            <Alert
              onClose={handlerCloseAlert}
              className="bg-primary-darkblue04   text-white"
              classNameBtn=" text-rose-200 hover:text-rose-500 hover:bg-rose-200"
            >
              Error ,Filed check again Username and password
            </Alert>
          )}
          <form
            onSubmit={handlerSubmit}
            className="relative space-y-10 lg:space-y-13"
          >
            <h1 className="font-bold mb-10 text-3xl md:text-3xl lg:text-5xl">
              Masuk
            </h1>
            <div>
              <label className="block mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl">
                Email/Nomor Telepon
              </label>
              <input
                type="email"
                name="username"
                placeholder="Masukan Email.."
                className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg mb-3 w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-darkblue04 focus:border-primary-darkblue04 invalid:text-primary-darkblue04 invalid:focus:ring-primary-darkblue04"
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
            <div className="mt-4">
              <div className="flex justify-between relative">
                <label className="mb-1 -ml-2 text-slate-700 after:content-['*'] lg:text-xl">
                  Password
                </label>
                <span className="mb-1 -ml-2 text-primary-darkblue04 font-semibold absolute -right-[0.7rem] after:content-['*'] after:text-pink-600 after:ml-0.5">
                  <Link to="/forget">Lupa Password</Link>
                </span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder={showPassword ? "********" : "Masukan Password"}
                  className="px-3 py-2 h-[48px] border font-semibold shadow rounded-lg w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-900 invalid:focus:ring-pink-700"
                  onChange={handleChangePassword}
                  onBlur={handleBlurPassword}
                  value={valuePassword}
                />
                <FiEyeOff
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                  onClick={toggleShowPassword}
                />
                {invalidPassword && (
                  <p className="message-error-input">
                    your password must grater than 3 words
                  </p>
                )}
              </div>
            </div>
            <button className="bg-primary-darkblue04 h-[48px] mt-8 p-2 w-full cursor-pointer text-neutral-neutral01 font-semibold rounded-lg">
              Masuk
            </button>
            <p className="text-center whitespace-nowrap justify-self-center absolute -bottom-[16rem] left-1/2 transform -translate-x-1/2">
              Belum punya akun?
              <Link
                to="/register"
                className="text-primary-darkblue04 font-bold ml-3 cursor-pointer"
              >
                Daftar di sini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
