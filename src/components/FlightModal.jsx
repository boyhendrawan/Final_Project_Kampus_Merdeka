import React from "react";

const FlightModal = ({ show, onClose, onSelect, title }) => {
  const handleSelect = (option) => {
    onSelect(option);
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
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <ul className="space-y-2">
          <li
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            onClick={() => handleSelect("Option 1")}
            defaultValue="Option 1"
          >
            Option 1
          </li>
          <li
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            onClick={() => handleSelect("Option 2")}
          >
            Option 2
          </li>
          <li
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            onClick={() => handleSelect("Option 3")}
          >
            Option 3
          </li>
          {/* Add more options here */}
        </ul>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 mt-4 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FlightModal;
