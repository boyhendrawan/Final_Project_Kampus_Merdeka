import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HistoryModal from "./HistoryModal";
import notFound from "../../assets/notfound.png";
import CardHistory from "../CardHistory";
import { useSelector } from "react-redux";
import axios from "axios";

const FilterModal = () => {
  const [modalState, setModalState] = useState({
    showFilterModal: true,
    showHistoryModal: false,
    filteredData: [],
    selectedDate: new Date(),
    dataNotFound: false,
  });

  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (modalState.showFilterModal) {
      fetchFilteredData();
    }
  }, [modalState.showFilterModal]);

  const fetchFilteredData = () => {
    const formattedDate = formatDate(modalState.selectedDate);

    axios
      .get(
        `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/date/${formattedDate}/57de8b62-ca57-4710-8e47-0614e0da68d7`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data;
        setModalState((prevState) => ({
          ...prevState,
          dataNotFound: data.datas.length === 0,
          filteredData: data.datas,
        }));
        console.log("Filtered data:", data.datas);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleHistoryModal = () => {
    setModalState((prevState) => ({
      ...prevState,
      showHistoryModal: !prevState.showHistoryModal,
    }));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleFilterByDate = (date) => {
    setModalState((prevState) => ({
      ...prevState,
      selectedDate: date,
    }));
  };

  const filteredResults =
    modalState.filteredData.length > 0 &&
    modalState.filteredData.filter(
      (item) =>
        item.title &&
        item.title
          .toLowerCase()
          .includes(
            modalState.selectedDate.toLocaleDateString("en-US").toLowerCase()
          )
    );

  const handleSave = () => {
    fetchFilteredData();
    setModalState((prevState) => ({
      ...prevState,
      showFilterModal: false,
    }));
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div>
      {modalState.showFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="absolute inset-0 bg-gray-900 opacity-50 font-poppins"></div>
          <div className="bg-white w-96 md:w-[800px] p-6 rounded-2xl z-10 mx-3">
            <div className="">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-2">Filter</h2>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mb-2"
                  onClick={() =>
                    setModalState((prevState) => ({
                      ...prevState,
                      showFilterModal: false,
                    }))
                  }
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>

            <div>
              <DatePicker
                selected={modalState.selectedDate}
                onChange={handleFilterByDate}
                className="border border-gray-300 rounded-md p-2 mb-2"
              />
            </div>

            <button
              onClick={handleSave}
              className="bg-purple-700 text-white px-3 py-2 w-full text-xl mt-5 rounded-2xl"
            >
              Cari
            </button>
          </div>
        </div>
      )}
      {modalState.dataNotFound && (
        <div className="text-center mt-20 flex-1">
          <img src={notFound} alt="" className="mx-auto items-center flex" />
          <h1>
            Oops, riwayat pemesanan tidak ditemukan. Anda belum melakukan
            transaksi penerbangan.
          </h1>{" "}
          <button
            onClick={handleHome}
            className="py-2 px-3 bg-purple-700 rounded-2xl mt-3 text-white"
          >
            Cari Penerbangan
          </button>
        </div>
      )}
      {!modalState.dataNotFound && (
        <CardHistory filteredData={filteredResults} />
      )}
      {modalState.showHistoryModal && (
        <HistoryModal
          show={modalState.showHistoryModal}
          onClose={handleHistoryModal}
        />
      )}
      {filteredResults && <CardHistory filteredData={filteredResults} />}
    </div>
  );
};

export default FilterModal;
