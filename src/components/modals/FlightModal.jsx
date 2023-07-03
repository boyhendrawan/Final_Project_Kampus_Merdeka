import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const FlightModal = ({ show, onClose, onSelect, title,currentValue,data }) => {
 
  console.log(currentValue);
  const handleSelect = (option) => {
    onSelect(option)
  };

  // const handleSave = () => {
  //   onSelect(selectedOption);
  //   onClose();
  // };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-30 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50 font-poppins"></div>
      <div className="bg-white w-96 p-6 rounded-lg z-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <button
            className="bg-gray-200 mb-2 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md group"
            onClick={onClose}
          >
            <AiOutlineClose className="group-hover:text-rose-600"/>
          </button>
        </div>
        <hr className="border-gray-700 my-2" />
        <form action="">
          <select name="" id="" onChange={e=>handleSelect(e.target.value)} value={currentValue} className="bg-gray-50 border-primary-darkblue03 bordercursor-pointer  text-gray-900 text-sm rounded-lg focus:ring-primary-darkblue04 focus:border-darkring-primary-darkblue03 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-darkblue03">
            <option disabled>{title}</option>
            {data.map((city,i)=>{
              return  <option value={city.city_name} key={i}>{city.city_name} ({city.city_code})</option>
            })}
          </select>
        </form>
        {/* <ul className="space-y-2">
          <li
            className={`cursor-pointer ${
              selectedOption === "Surabaya"
                ? "bg-purple-300"
                : "hover:bg-purple-300"
            } p-2 rounded-md`}
            onClick={() => handleSelect("Surabaya")}
          >
            Surabaya
          </li>
          <li
            className={`cursor-pointer ${
              selectedOption === "Semarang"
                ? "bg-purple-300"
                : "hover:bg-purple-300"
            } p-2 rounded-md`}
            onClick={() => handleSelect("Semarang")}
          >
            Semarang
          </li>
        </ul> */}
        <div className="w-full flex justify-end">
          <button
            className="bg-rose-500 text-white px-4 py-2 rounded-lg  mt-4 hover:bg-rose-700 text-xs md:text-sm lg:text-base"
            onClick={() => onClose()}
          >
          Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightModal;
