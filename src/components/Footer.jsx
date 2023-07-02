import React from "react";
import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-300 shadow">
        <div class="w-full mx-auto md:py-8">
          <div class="mx-16 pt-5 md:pt-0">
              <img
                src={logo}
                alt=""
                className="w-28"
              />
          </div>
          <hr class="my-6 border-purple-600 w-full" />
          <span class="block text-sm text-purple-600 text-center pb-3 md:pb-0">
            © 2023{" "}
            <a href="https://flowbite.com/">
              Tiketku
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
