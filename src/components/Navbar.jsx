import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";
import { FiLogIn } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isLoggedIn, token, user } = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

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
    window.location.reload();
  };

  const handleClickLogin = () => {
    navigate(`/Login`);
    window.location.reload();
  };

  return (
    <div
      className={`fixed font-poppins w-full left-0 top-0 md:px-10 p-5 drop-shadow-lg z-10 
    ${
      sticky
        ? "bg-slate-50 bg-opacity-75 text-white h-20 z-50 items-center"
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
                  className={`bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out ${
                    rotate ? "rotate-180" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  <span className="text-white">
                    <AiOutlineCaretDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute text-purple-700 font-medium bg-white rounded-sm w-28 px-3 py-2 top-10 right-0 text-center">
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
                className="bg-purple-600 rounded-md font-bold px-4 py-2 "
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
            : " bg-slate-400 rounded-lg shadow-md mt-2 w-full text-center text-white z-40"
        }
      >
        <li className="border-b-2 border-zinc-300 py-3 w-full hover:text-subMain">
          <Link onClick={handleClickHome} smooth={true} duration={500} classna>
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
                  className={`bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out ${
                    rotate ? "rotate-180" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  <span className="text-white">
                    <AiOutlineCaretDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute text-red-700 font-medium bg-white rounded-sm w-28 px-3 py-2 top-10 left-0 text-center">
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
            <ul className="flex gap-3 justify-center">
              <button
                className="bg-red-600 hover:bg-transparent hover:border rounded-md px-3 py-2"
                onClick={handleClickLogin}
              >
                <div className="flex gap-2">
                  <p className="pt-1 text-xl">
                    <FiLogIn />
                  </p>
                  <p className="font-semibold">Login</p>
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