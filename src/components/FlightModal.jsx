import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FlightModal = ({ show, onClose, onSelect, title }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSave = () => {
    onSelect(selectedOption);
    onClose();
  };

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
            className="bg-gray-200 mb-2 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>
        <hr className="border-gray-700 my-2" />
        <ul className="space-y-2">
          <li
            className={`cursor-pointer ${
              selectedOption === "Option 1"
                ? "bg-purple-300"
                : "hover:bg-purple-300"
            } p-2 rounded-md`}
            onClick={() => handleSelect("Option 1")}
          >
            Option 1
          </li>
          <li
            className={`cursor-pointer ${
              selectedOption === "Option 2"
                ? "bg-purple-300"
                : "hover:bg-purple-300"
            } p-2 rounded-md`}
            onClick={() => handleSelect("Option 2")}
          >
            Option 2
          </li>
        </ul>
        <button
          className="bg-purple-700 text-white px-4 py-2 rounded-lg w-full mt-4"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FlightModal;
