import { BsCircle } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import React from "react";

const Card = ({ promo }) => {
  const { title, date, time, discount, description } = promo;

  return (
    <div className="mx-auto mt-[2rem] w-full flex flex-wrap border-b-2 border-slate-250 ">
      <div className="w-full flex items-start ">
        <div className="flex items-center 0">
          <div className="rounded-full bg-primary-darkblue04 p-2">
            <FaBell className="text-white text-4xl" />
          </div>
        </div>
        <div className="ml-3 w-11/12 ">
          <div className="md:flex md:justify-between  ">
            <h1 className="text-xl font-bold whitespace-nowrap">{title}</h1>
            <div className="flex items-center gap-2">
              <p className="text-sm text-slate-400">{date}</p>
              <p className="text-sm text-slate-400 flex gap-1 items-center">
                {time}
                <BsCircle className="bg-red-400 rounded-full" />
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-slate-400">{discount}</p>
            <p className="text-sm text-slate-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
