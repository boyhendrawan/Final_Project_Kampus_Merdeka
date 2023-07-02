import React from "react";
import logo from "../assets/logo.svg";
import { FaTwitter, FaFacebookSquare, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-300 shadow">
        <div class="w-full mx-auto md:py-8">
          <div class="mx-16 pt-5 md:pt-0 flex justify-between">
            <img src={logo} alt="" className="w-28" />
            <div class="mt-3 lg:mb-0 mb-3">
              <button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="flex justify-center text-sky-500">
                  <FaFacebookSquare />
                </i>
              </button>
              <button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="flex justify-center text-blue-600">
                  <FaTwitter />
                </i>
              </button>
              <button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="flex justify-center">
                  <FaDribbble />
                </i>
              </button>
            </div>
          </div>
          <hr class="my-6 border-purple-600 w-full" />
          <span class="block text-sm text-purple-600 text-center pb-3 md:pb-0">
            © 2023 <a href="https://flowbite.com/">Tiketku</a>. All Rights
            Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
