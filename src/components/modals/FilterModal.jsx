import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterModal = ({ show, onClose }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setShowCalendar(show);
  }, [show]);

  const handleSave = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-30 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50 font-poppins"></div>
      <div className="bg-white w-96 md:w-[800px] p-6 rounded-2xl z-10 mx-3">
        <div className="">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-2">Filter</h2>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mb-2"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>

        {showCalendar && (
          <div>
            <DatePicker
              selected={new Date()}
              onChange={() => {}}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
          </div>
        )}

        <button
          onClick={handleSave}
          className="bg-purple-700 text-white px-3 py-2 w-full text-xl mt-5 rounded-2xl"
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
