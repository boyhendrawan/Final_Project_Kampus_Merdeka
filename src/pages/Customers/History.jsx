import React, { useState } from "react";
import HistoryModal from "../../components/modals/HistoryModal";
import FilterModal from "../../components/modals/FilterModal";
import {
  AiOutlineArrowLeft,
  AiOutlineFilter,
  AiOutlineSearch,
} from "react-icons/ai";
import CardHistory from "../../components/CardHistory";
import SearchModal from "./../../components/modals/SearchModal";

const History = () => {
  const [state, setState] = useState({
    showHistoryModal: false,
    showFilterModal: false,
    showSearchModal: false,
    filteredData: [],
    searchTerm: "",
    showHistoryContent: true,
  });

  const handleHistoryModal = () => {
    setState((prevState) => ({
      ...prevState,
      showHistoryModal: !prevState.showHistoryModal,
    }));
  };

  const handleFilterModal = () => {
    setState((prevState) => ({
      ...prevState,
      showFilterModal: !prevState.showFilterModal,
      showHistoryContent: false,
    }));
  };

  const handleSearchModal = () => {
    setState((prevState) => ({
      ...prevState,
      showSearchModal: !prevState.showSearchModal,
    }));
  };

  const handleFilterData = (filteredData) => {
    setState((prevState) => ({
      ...prevState,
      filteredData: filteredData,
      showFilterModal: false,
      showHistoryContent: filteredData.length > 0,
    }));
  };

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    setState((prevState) => ({
      ...prevState,
      searchTerm: searchTerm,
    }));
  };

  const filteredResults = state.filteredData.filter((item) =>
    String(item.airplane_name)
      .toLocaleLowerCase()
      .includes(state.searchTerm.toLocaleLowerCase())
  );

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
          className="flex gap-1 bg-purple-500 items-center text-white px-2 py-2 rounded-2xl cursor-pointer"
        >
          <span className="flex items-center">
            <AiOutlineFilter />
          </span>
          <h1>Filter</h1>
        </div>
        <div
          onClick={handleSearchModal}
          className="flex gap-1 bg-purple-500 items-center text-white px-2 py-2 rounded-2xl cursor-pointer"
        >
          <span className="flex items-center">
            <AiOutlineSearch />
          </span>
          <h1>Cari</h1>
        </div>
      </div>{" "}
      {state.showHistoryContent && <CardHistory filteredData={filteredResults} />}
      {state.showHistoryModal && (
        <HistoryModal handleHistoryModal={handleHistoryModal} />
      )}
      {state.showFilterModal && (
        <FilterModal
          show={state.showFilterModal}
          onClose={handleFilterModal}
          onFilter={handleFilterData}
        />
      )}
      {state.showSearchModal && (
        <SearchModal
          show={state.showSearchModal}
          onClose={handleSearchModal}
          searchTerm={state.searchTerm}
          onSearchInputChange={handleSearchInputChange}
        />
      )}
    </div>
  );
};

export default History;
