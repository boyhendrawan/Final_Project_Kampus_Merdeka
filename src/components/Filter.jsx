// Filter.js
import React, { useState } from "react";
import FilterModal from "./modals/FilterModal";

const Filter = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = "https://novel-tomatoes-production.up.railway.app/HistoryTransaction/date/";

  const handleFilterByDate = (date) => {
    const formattedDate = formatDate(date);
    const apiUrl = API_URL + formattedDate + "/c7267395-7b45-4624-9f99-056dbb36b1a3";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFilteredData(data.datas);
        console.log('Filtered data:', data.datas);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredResults = filteredData.filter((item) =>
    String(item.title).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      {/* Komponen lain di sini */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
        placeholder="Cari..."
      />

      <button onClick={() => setShowFilterModal(true)}>Buka Filter</button>

      <FilterModal
        show={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onFilterByDate={handleFilterByDate}
      />

      {/* Tampilkan data yang telah difilter */}
      {filteredResults.map((item) => (
        // Render item data di sini
        <div key={item.id}>{item.uuid_history}</div>
      ))}
    </div>
  );
};

export default Filter;
