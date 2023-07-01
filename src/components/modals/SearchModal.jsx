import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import HistoryModal from "./HistoryModal";

const SearchModal = ({ show, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDataNotFound, setIsDataNotFound] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleHistoryModal = () => {
    setShowHistoryModal(!showHistoryModal);
  };

  const handleCloseModal = () => {
    setShowHistoryModal(false);
  };

  const handleSearch = () => {
    const searchTermLength = searchTerm.length;

    if (searchTermLength < 8) {
      setIsDataNotFound(false);
      return;
    }

    const apiUrl = `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/uuid/8dfabfbb-89f6-4022-845f-16ec6f7a5cc0`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const filteredResults = data.datas.filter((item) => {
          const uuidStart = item.uuid_history.substring(0, searchTermLength);
          return uuidStart.toLowerCase() === searchTerm.toLowerCase();
        });

        if (filteredResults.length === 0) {
          setIsDataNotFound(true);
        } else {
          setSearchResults(filteredResults);
          setIsDataNotFound(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-30 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50 font-poppins"></div>
      <div className="bg-white w-96 md:w-[800px] p-6 rounded-2xl z-10 mx-3">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-2">Cari riwayat penerbanganmu</h2>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mb-2"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <input
            type="text"
            className="w-full mt-5 rounded-2xl"
            placeholder="Masukkan nomor penerbangan"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-purple-700 text-white px-3 py-2 w-full text-xl mt-5 rounded-2xl"
          onClick={handleSearch}
        >
          Cari
        </button>
        <div className="mt-5">
          {isDataNotFound ? (
            <p>Tidak ada hasil pencarian.</p>
          ) : searchResults.length > 0 ? (
            <ul>
              {searchResults.map((item) => (
                <li key={item.id}><span onClick={handleHistoryModal} className="font-semibold truncate">
                {item.uuid_history.length > 10
                  ? item.uuid_history.substring(0, 8)
                  : item.uuid_history}
              </span></li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <HistoryModal
        show={showHistoryModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default SearchModal;
