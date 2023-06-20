import { useState } from "react";
import { FaPlane } from "react-icons/fa";
import garuda from "../../assets/garuda.png";
import HistoryModal from "../../components/modals/HistoryModal";
import FilterModal from "../../components/modals/FilterModal";
import {
  AiOutlineArrowLeft,
  AiOutlineFilter,
  AiOutlineSearch,
} from "react-icons/ai";
import SearchModal from "../../components/modals/SearchModal";

const History = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleHistoryModal = () => {
    setShowHistoryModal(!showHistoryModal);
  };
  const handleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };
  const handleSearchrModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  return (
    <div className="mt-28 mx-5 max-w-7xl xl:mx-auto md:mx-8">
      <h1 className="text-xl font-semibold">Riwayat Pesanan</h1>
      <div className="flex gap-1 py-3 items-center">
        <div className="bg-purple-500 w-full flex gap-3 text-white font-semibold rounded-2xl py-2 px-3">
          <span className="flex items-center">
            <AiOutlineArrowLeft />
          </span>
          <h1 className="">Beranda</h1>
        </div>
        <div
          onClick={handleFilterModal}
          className="flex gap-1 bg-purple-500 items-center text-white px-2 py-2 rounded-2xl"
        >
          <span>
            <AiOutlineFilter />
          </span>
          <h1>Filter</h1>
        </div>
        <div onClick={handleSearchrModal} className="flex gap-1 bg-purple-500 items-center text-white px-2 py-2 rounded-2xl">
          <AiOutlineSearch />
          <h1>Search</h1>
        </div>
      </div>
      <div className="grid gap-6">
        <div
          onClick={handleHistoryModal}
          className="rounded-3xl bg-white border border-gray-300 p-5 shadow-lg"
        >
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
              <div className="flex items-center ">
                <div className="flex-1 border-dashed border border-gray-400 mx-3 md:mx-0"></div>
                <span className="text-gray-400 text-2xl md:text-4xl mt-6 md:mx-3">
                  <p className="pl-1.5 md:pl-0">
                    <FaPlane />
                  </p>
                  <p className="text-sm">Time</p>
                </span>
                <div className="flex-1 border-dashed border border-gray-400 mx-3 md:mx-0"></div>
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
                Booking Code :{" "}
                <span className="font-semibold">code.example</span>
              </h1>
            </div>
            <div>
              <h1 className="text-sm text-end">
                Class:<span> Economy</span>
              </h1>
              <h1 className="md:text-xl font-bold text-green-500">
                IDR. 2.400.000
              </h1>
            </div>
          </div>
        </div>
      </div>
      {showHistoryModal && (
        <HistoryModal show={showHistoryModal} onClose={handleHistoryModal} />
      )}
      {showFilterModal && (
        <FilterModal show={showFilterModal} onClose={handleFilterModal} />
      )}
      {showSearchModal && (
        <SearchModal show={showSearchModal} onClose={handleSearchrModal} />
      )}
    </div>
  );
};

export default History;
