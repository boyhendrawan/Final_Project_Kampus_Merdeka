
import React, { useState, useEffect } from "react";
import { div } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineProfile,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineCaretDown,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineHistory,
} from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";

import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import logo from "../assets/logo.png";

import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../utilites/redux/action/login";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const { isLoggedIn, dataUser } = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // define global state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get data from global var
  const { isLoggedIn, token, dataUser } = useSelector(
    (features) => features.auth
  );
  // console.log(datadataUser)
  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile());
    }
    //  else navigate("/login");
  }, [isLoggedIn, token, dispatch]);

  const toggleDropdown = () => {
    setRotate(!rotate);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [rotate, setRotate] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleClickHome = () => {
    navigate(`/`);
  };

  const handleClickLogin = () => {

    navigate(`/auth/login/allData?statusLogin=false`);
  };

  const handleClickHistory = () => {
    navigate(`/user/history/`);
  };

  const handleClickAccount = () => {
    navigate(`/user/infoDetailUser/`);
  };

  const handleClickNotification = () => {
    navigate(`/user/notification/`);

  };

  return (
    <div

      className={`fixed shadow-lg bg-gray-100 md:bg-transparent backdrop-blur-sm font-poppins w-full left-0 top-0 lg:px-32 p-5 drop-shadow-lg z-50 ${
        sticky &&
        "md:bg-slate-50 md:bg-opacity-75 md:text-white md:h-20 md:items-center md:shadow-lg"
      }`}

    >
      <div className="flex justify-between items-center w-full text-white">
        <div
          className="font-bold lg:text-4xl text-2xl text-subMain cursor-pointer"
          onClick={handleClickHome}
        >
          <img src={logo} alt="" className="w-24" />
        </div>
        <div className="hidden md:flex font-bold md:gap-0">
          <ul className="flex gap-4 text-slate-800">
            <li
              className="hover:text-purple-500 font-semibold relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-purple-500 hover:before:w-full hover:before:opacity-100"
            >
              <div onClick={handleClickHome} duration={500}>
                <span className="flex gap-1 justify-center">
                  <p>Home</p>
                </span>
              </div>
            </li>
            <li
              className="hover:text-purple-500 font-semibold relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-purple-500 hover:before:w-full hover:before:opacity-100"
            >
              <div onClick={handleClickHistory} duration={500}>
                <span className="flex gap-1 justify-center">
                  <p>History</p>
                </span>
              </div>
            </li>
            <li
              className="hover:text-purple-500 font-semibold  relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-purple-500 hover:before:w-full hover:before:opacity-100"
            >
              <div onClick={handleClickNotification} duration={500}>
                <span className="flex gap-1 justify-center">
                  <p>Notification</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          {isLoggedIn ? (
            <ul className="flex gap-0 items-center">
              <h1 className={` font-semibold text-md`}></h1>
              <div className="relative bg-gray-800 py-1.5 rounded-3xl">
                <button
                  className={` text-white bg-transparent  font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out`}

                  onClick={toggleDropdown}
                >
                  Welcome,{" "}
                  {dataUser && dataUser.full_name
                    ? dataUser.full_name
                    : "Guest"}
                  <span
                    className={`text-purple-400 ml-2  ${
                      rotate ? "rotate-180" : ""
                    }`}
                  >
                    <AiOutlineCaretDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute text-black font-medium bg-white grid gap-3 mt-5 max-w-lg w-56 py-5 px-3 top-10 right-0 text-center rounded-lg">
                    <button className="flex gap-2" onClick={handleClickAccount}>
                      <p className="pt-1 text-xl">
                        <AiOutlineUser />
                      </p>
                      <p>Account</p>
                    </button>
                    <button className="flex gap-2" onClick={handleClickHome}>
                      <p className="pt-1 text-xl">
                        <VscSignOut />
                      </p>
                      <p>Log Out</p>
                    </button>
                  </div>
                )}
              </div>
            </ul>
          ) : (
            <ul className="flex gap-3">
              <button
                className="bg-purple-600 rounded-md font-bold px-4 py-2 hover:bg-purple-800"
                onClick={handleClickLogin}
              >
                <div className="flex gap-2">
                  <p className="pt-1 text-xl">
                    <FiLogIn />
                  </p>
                  <p>Login</p>
                </div>
              </button>
            </ul>
          )}
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <p className="text-black">
              <AiOutlineMenu className="w-5  " />
            </p>
          ) : (
            <p className="text-black">
              <AiOutlineClose className="w-5  " />
            </p>
          )}
        </div>
      </div>
      <ul
        className={!nav ? "hidden" : "mt-2 w-full text-center text-white z-40"}
      >
        <li className="border-b-2 border-zinc-300 py-3 w-full hover:text-white hover:bg-purple-500 text-slate-700">
          <div onClick={handleClickHome} duration={500}>
            <span className="flex gap-1 justify-center">
              <span className="text-xl pt-0.5">
                {" "}
                <AiOutlineHome />
              </span>
              <p>Home</p>
            </span>
          </div>
        </li>
        <li className="border-b-2 border-zinc-300 py-3 w-full hover:text-white hover:bg-purple-500 text-slate-700">
          <div onClick={handleClickHome} duration={500}>
            <span className="flex gap-1 justify-center">
              <span className="text-xl pt-0.5">
                {" "}
                <AiOutlineHistory />
              </span>
              <p>History</p>
            </span>
          </div>
        </li>
        <li className="border-b-2 border-zinc-300 py-3 w-full hover:text-white hover:bg-purple-500 text-slate-700">
          <div onClick={handleClickHome} duration={500}>
            <span className="flex gap-1 justify-center">
              <span className="text-xl pt-0.5">
                {" "}
                <AiOutlineUser />
              </span>

              <p>Notification</p>
            </span>
          </div>
        </li>
        <li className=" border-zinc-300 py-3 w-full hover:text-subMain">
          {isLoggedIn ? (
            <ul className="flex gap-2 items-center justify-center">
              <div className="relative bg-gray-800 py-1.5 rounded-3xl">
                <button
                  className={` text-white bg-transparent  font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out`}
                  onClick={toggleDropdown}
                >
                  Welcome,{" "}
                  {dataUser && dataUser.full_name
                    ? dataUser.full_name
                    : "Guest"}
                  <span
                    className={`text-purple-400 ml-2  ${
                      rotate ? "rotate-180" : ""
                    }`}
                  >
                    <AiOutlineCaretDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute text-black font-medium bg-white grid gap-3 mt-5 max-w-lg w-56 py-5 px-3 top-10 right-0 text-center rounded-lg">
                    <button className="flex gap-2" onClick={handleClickAccount}>
                      <p className="pt-1 text-xl">
                        <AiOutlineUser />
                      </p>
                      <p>Account</p>
                    </button>
                    <button
                      className="flex gap-2"
                      onClick={() => dispatch(logout(navigate))}
                    >
                      <p className="pt-1 text-xl">
                        <VscSignOut />
                      </p>
                      <p>Log Out</p>
                    </button>
                  </div>
                )}
              </div>
            </ul>
          ) : (
            <ul className="flex gap-3 justify-center">
              <button
                className="bg-purple-700 hover:bg-transparent hover:border rounded-md px-3 py-2"
                onClick={handleClickLogin}
              >
                <div className="flex gap-2">
                  <p className="pt-1 text-xl">
                    <FiLogIn />
                  </p>
                  <p className="font-semibold">Masuk</p>
                </div>
              </button>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
