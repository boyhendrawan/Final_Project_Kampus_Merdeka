import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineCaretDown } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import logo from "../assets/logo.png";
import { logout } from "../utilites/redux/action/login"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isLoggedIn, user } = useSelector(state => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setRotate(!rotate);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [rotate, setRotate] = useState(false);

  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(`/`);
  };

  const handleClickLogin = () => {
    navigate(`/auth/login`);

  };

  return (
    <div
      className={`fixed shadow-lg backdrop-blur-md font-poppins w-full left-0 top-0 lg:px-32 p-5 drop-shadow-lg z-50 

    ${sticky
          ? "bg-slate-50 bg-opacity-75 text-white h-20 z-50 items-center shadow-lg"
          : "text-white"
        }`}
    >
      <div className="flex justify-between items-center w-full text-white">
        <div
          className="font-bold lg:text-4xl text-2xl text-subMain cursor-pointer"
          onClick={handleClickHome}
        >
          <img src={logo} alt="" className="w-24" />
        </div>
        <div className="hidden md:flex pr-4">
          {isLoggedIn ? (
            <ul className="flex gap-0 items-center">
              <h1 className="text-white">
                Welcome, {user && user.name ? user.name : "Guest"}
              </h1>
              <div className="relative">
                <button
                  className={`bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out ${rotate ? "rotate-180" : ""
                    }`}
                  onClick={toggleDropdown}
                >
                  <span className="text-white">
                    <AiOutlineCaretDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute text-purple-700 font-medium bg-white rounded-sm w-28 px-3 py-2 top-10 right-0 text-center">
                    <button className="flex gap-2" onClick={(e) => dispatch(logout(navigate))}>
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
        className={
          !nav
            ? "hidden"
            : " bg-slate-50 rounded-lg shadow-md mt-2 w-full text-center text-white z-40"
        }
      >
        <li className="border-b-2 border-zinc-300 py-3 w-full hover:text-subMain text-slate-700">
          <Link onClick={handleClickHome} duration={500}>
            Home
          </Link>
        </li>
        <li className=" border-zinc-300 py-3 w-full hover:text-subMain">
          {isLoggedIn ? (
            <ul className="flex gap-0 items-center">
              <h1 className="text-white hover:text-subMain">
                Welcome, {user && user.name ? user.name : "Guest"}
              </h1>
              <div className="relative">
                <button
                  className={`bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out ${rotate ? "rotate-180" : ""
                    }`}
                  onClick={toggleDropdown}
                >
                  <span className="text-white">
                    <AiOutlineCaretDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute text-red-700 font-medium bg-white rounded-sm w-28 px-3 py-2 top-10 left-0 text-center">
                    <button className="flex gap-2" onClick={(e) => {
                      dispatch(logout());
                      navigate('/'); // Assuming you want to navigate to the homepage after logout.
                    }}>
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
