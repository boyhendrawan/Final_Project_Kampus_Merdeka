import React from "react";
import { FaPlane } from "react-icons/fa";
import garuda from "../../assets/garuda.png";

const History = () => {
  return (
    <div className="mt-20 mx-5 max-w-7xl md:mx-auto">
      <h1>Riwayat Pesanan</h1>
      <div>
        <div className="rounded-3xl bg-white border border-gray-300 p-5 shadow-lg">
          <div className="flex justify-between">
            <img src={garuda} alt="" className="w-10" />
            <h1 className="text-center pt-2.5 text-green-500 font-semibold bg-green-300 w-20 rounded-3xl text-sm">
              Success
            </h1>
          </div>

          <div className="flex justify-between pt-5">
            <div className="flex-1" style={{ flexBasis: "20%" }}>
              <p>Jakarta, Indonesia</p>
              <h1 className="text-2xl font-semibold">JKTA</h1>
            </div>
            <div className="flex-2" style={{ flexBasis: "60%" }}>
              <div className="flex items-center">
                <div className="flex-1 border-dashed border border-gray-400"></div>
                <span className="mx-4 text-gray-400 text-2xl md:text-4xl">
                  <FaPlane />
                </span>
                <div className="flex-1 border-dashed border border-gray-400"></div>
              </div>
            </div>
            <div className="flex-1 text-end" style={{ flexBasis: "20%" }}>
              <p>Jakarta, Indonesia</p>
              <h1 className="text-2xl font-semibold">JKTA</h1>
            </div>
          </div>
          <div className="flex-1 border-dashed border border-gray-400 mt-8"></div>
          <div className="flex justify-between pt-5">
            <div>
              <h1 className="text-sm">
                Booking Code : <span>code.example</span>
              </h1>
            </div>
            <dv>
              <h1 className="text-sm text-end">
                Class:<span> Economy</span>
              </h1>
              <h1 className="text-xl font-bold text-green-500">IDR. 2.400.000</h1>
            </dv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
