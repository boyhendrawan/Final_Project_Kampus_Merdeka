import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ClassModal = ({ show, onClose, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSave = () => {
    if (selectedOption) {
      onSelect(selectedOption);
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-30 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50 font-poppins"></div>
      <div className="bg-white w-96 p-6 rounded-lg z-10 mx-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mb-2">Select Class</h2>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mb-2"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>

        <hr className="border-gray-500 mb-2" />
        <ul className="space-y-2">
          <li
            className={`cursor-pointer hover:bg-purple-200 p-2 rounded-md ${
              selectedOption === "Bussiness" ? "bg-purple-200" : ""
            }`}
            onClick={() => handleSelect("Bussiness")}
          >
            Bussiness
          </li>
          <li
            className={`cursor-pointer hover:bg-purple-200 p-2 rounded-md ${
              selectedOption === "Economy" ? "bg-purple-200" : ""
            }`}
            onClick={() => handleSelect("Economy")}
          >
            Economy
          </li>
          <li
            className={`cursor-pointer hover:bg-purple-200 p-2 rounded-md ${
              selectedOption === "Option 3" ? "bg-purple-200" : ""
            }`}
            onClick={() => handleSelect("Option 3")}
          >
            Option 3
          </li>
        </ul>
        <div className="flex justify-center w-full mt-4">
          <button
            className="bg-purple-700 w-full text-gray-300 px-4 py-2 rounded-md mr-2"
            onClick={() => {
              handleSave();
              onClose();
            }}
            disabled={!selectedOption}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassModal;
