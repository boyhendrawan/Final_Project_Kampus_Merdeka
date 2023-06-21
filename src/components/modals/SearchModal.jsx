import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchModal = ({ show, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan logika pencarian sesuai dengan kebutuhan Anda
    // Misalnya, panggil API atau lakukan manipulasi data di sini
    // Simpan hasil pencarian ke dalam state searchResults

    // Contoh sederhana pencarian dengan data statis
    const results = [
      { id: 1, name: "Penerbangan 1" },
      { id: 2, name: "Penerbangan 2" },
      { id: 3, name: "Penerbangan 3" },
    ];

    // Simpan hasil pencarian ke dalam state searchResults
    setSearchResults(results);
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
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          ) : (
            <p>Tidak ada hasil pencarian.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
