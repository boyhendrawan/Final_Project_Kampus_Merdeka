import React, { useState } from "react";

const ClassModal = ({ show, onClose, onSelect, title }) => {
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
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <ul className="space-y-2">
          <li
            className={`cursor-pointer hover:bg-purple-200 p-2 rounded-md ${
              selectedOption === "Option 1" ? "bg-purple-200" : ""
            }`}
            onClick={() => handleSelect("Option 1")}
          >
            Option 1
          </li>
          <li
            className={`cursor-pointer hover:bg-purple-200 p-2 rounded-md ${
              selectedOption === "Option 2" ? "bg-purple-200" : ""
            }`}
            onClick={() => handleSelect("Option 2")}
          >
            Option 2
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
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
            onClick={handleSave}
            disabled={!selectedOption}
          >
            Save
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassModal;
