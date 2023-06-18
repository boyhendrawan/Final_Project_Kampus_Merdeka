import React, { useEffect, useReducer, useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { HiSwitchVertical } from "react-icons/hi";
import { AiFillSetting, AiOutlineArrowRight } from "react-icons/ai";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PassengerModal from "../../components/PassengerModal";
import ClassModal from "../../components/ClassModal";
import FlightModal from "../../components/FlightModal";
import Slides from "../../components/Slides";
import Destinasi from "../../components/Destinasi";
import { berandaReducer, initialState } from "../../reducer/BerandaState";

const Beranda = () => {
  const [jumlahDewasa, setJumlahDewasa] = useState(1);
  const [jumlahAnak, setJumlahAnak] = useState(0);
  const [jumlahBayi, setJumlahBayi] = useState(0);
  const [state, dispatch] = useReducer(berandaReducer, initialState);
  const navigate = useNavigate();
  

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("flightFormData"));
    if (storedFormData) {
      setJumlahDewasa(storedFormData.jumlahDewasa);
      setJumlahAnak(storedFormData.jumlahAnak);
      setJumlahBayi(storedFormData.jumlahBayi);
      dispatch({ type: "SET_DATE", payload: storedFormData.date });
      dispatch({ type: "SET_DEPARTURE", payload: storedFormData.departure });
      dispatch({ type: "SET_ARRIVAL", payload: storedFormData.arrival });
      dispatch({
        type: "SET_FLIGHT_CLASS",
        payload: storedFormData.flightClass,
      });
      dispatch({ type: "TOGGLE_SWITCHED" });
    }
  }, []);

  const handleSearchFlights = () => {
    const formData = {
      jumlahDewasa: jumlahDewasa,
      jumlahAnak: jumlahAnak,
      jumlahBayi: jumlahBayi,
      departure: state.departure,
      arrival: state.arrival,
      flightClass: state.flightClass,
      date: state.date,
    };

    // Menyimpan data ke localStorage
    localStorage.setItem("flightFormData", JSON.stringify(formData));

    navigate("/");
    console.log(formData);
  };

  const handlePassengerModal = () => {
    dispatch({ type: "TOGGLE_PASSENGER_MODAL" });
  };

  const handleDepartureModal = () => {
    dispatch({ type: "TOGGLE_DEPARTURE_MODAL" });
  };

  const handleClassModal = () => {
    dispatch({ type: "TOGGLE_CLASS_MODAL" });
  };

  const handleArrivalModal = () => {
    dispatch({ type: "TOGGLE_ARRIVAL_MODAL" });
  };

  const handleDepartureSelect = (selectedDeparture) => {
    dispatch({ type: "SET_DEPARTURE", payload: selectedDeparture });
    dispatch({ type: "TOGGLE_DEPARTURE_MODAL" });
  };

  const handleClassSelect = (selectedClass) => {
    dispatch({ type: "SET_FLIGHT_CLASS", payload: selectedClass });
    dispatch({ type: "TOGGLE_CLASS_MODAL" });
  };

  const handleArrivalSelect = (selectedArrival) => {
    dispatch({ type: "SET_ARRIVAL", payload: selectedArrival });
    dispatch({ type: "TOGGLE_ARRIVAL_MODAL" });
  };

  const handleSwitch = () => {
    dispatch({ type: "TOGGLE_SWITCHED" });
  };

  const handleChangeDate = (event) => {
    const selectedDate = event.target.value;
    dispatch({ type: "SET_DATE", payload: selectedDate });
  };

  return (
    <div className="font-poppins">
      <div className="bg-gradient-to-b to-white">
        <Slides />
        <div className="mx-5 grid lg:mx-auto lg:max-w-5xl py-10">
          <div className="bg-transparent rounded-2xl mt-[-520px] md:mt-[-550px] relative z-20 my-4">
            <div className="grid gap-1">
              <div
                className="p-5 flex justify-between items-center gap-3 rounded-2xl bg-gray-800 py-3 lg:py-5 mb-[-22px]"
                onClick={handleDepartureModal}
              >
                <div className="grid gap-2">
                  <p className="text-gray-300">Jakarta</p>
                  <h1 className="text-xl text-gray-300 font-semibold">
                    {state.departure}
                  </h1>
                </div>
                <p className="text-slate-400 text-2xl pt-8">
                  <FaPlaneDeparture />
                </p>
              </div>
              <div className="grid mx-5 relative">
                <div className="flex justify-center items-center">
                  <h1
                    name="switch"
                    className={`text-2xl p-2 rounded-full border bg-gray-400 ${
                      state.switched
                        ? "border-green-500 text-green-500"
                        : "border-gray-300 text-gray-300"
                    }`}
                    onClick={handleSwitch}
                  >
                    <HiSwitchVertical />
                  </h1>
                </div>
              </div>
              <div
                className="p-5 flex justify-between items-center gap-3 rounded-xl bg-gray-800 py-3 lg:py-5 mt-[-22px]"
                onClick={handleArrivalModal}
              >
                <div className="grid gap-2">
                  <p className="text-gray-300">Jakarta</p>
                  <h1 className="text-xl text-gray-300 font-semibold">
                    {state.arrival}
                  </h1>
                </div>
                <p className="text-slate-400 text-2xl pt-8">
                  <FaPlaneArrival />
                </p>
              </div>
              <div className="grid gap-1 bg-white rounded-t-2xl">
                <div className="px-5 py-3 grid">
                  <label className="font-semibold text-gray-700">Date</label>
                  <input
                    onChange={handleChangeDate}
                    type="date"
                    className="rounded-2xl mb-2 w-full border-none bg-gray-200 font-semibold"
                    value={state.date}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 bg-white px-5 py-3 rounded-b-2xl">
                <div className="grid gap-1">
                  <label className="text-gray-700 font-semibold">
                    Passengers
                  </label>
                  <div
                    className="flex border gap-10 border-none bg-gray-200 p-2 rounded-2xl"
                    onClick={handlePassengerModal}
                  >
                    <span className="text-2xl mt-1.5">
                      <MdAirlineSeatReclineNormal />
                    </span>{" "}
                    <span className="text-xl pl-2 pt-1 font-semibold">
                      {jumlahDewasa + jumlahAnak + jumlahBayi}
                    </span>
                  </div>
                </div>
                <div className="grid gap-1">
                  <label className="text-gray-700 font-semibold">Class</label>
                  <div
                    className="flex border border-none bg-gray-200 p-2 rounded-2xl"
                    onClick={handleClassModal}
                  >
                    <span className="text-xl pt-2 py-1">
                      <AiFillSetting />
                    </span>{" "}
                    <h1 className="pt-1 pl-5 font-semibold">
                      {state.flightClass}
                    </h1>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSearchFlights}
                className="bg-[#7126B5] rounded-2xl py-4 text-white flex justify-between px-3"
              >
                <p className="text-xl">Cari Penerbangan</p>
                <p className="text-2xl pt-0.5 font-semibold ">
                  <AiOutlineArrowRight />
                </p>
              </button>
            </div>
          </div>
        </div>
        <Destinasi />
        {state.showPassengerModal && (
          <PassengerModal
            show={state.showPassengerModal}
            onClose={handlePassengerModal}
            setJumlahAnak={setJumlahAnak}
            setJumlahBayi={setJumlahBayi}
            setJumlahDewasa={setJumlahDewasa}
            jumlahAnak={jumlahAnak}
            jumlahDewasa={jumlahDewasa}
            jumlahBayi={jumlahBayi}
          />
        )}
        {state.showDepartureModal && (
          <FlightModal
            show={state.showDepartureModal}
            onClose={handleDepartureModal}
            onSelect={handleDepartureSelect}
            title="Select Departure"
          />
        )}
        {state.showArrivalModal && (
          <FlightModal
            show={state.showArrivalModal}
            onClose={handleArrivalModal}
            onSelect={handleArrivalSelect}
            title="Select Arrival"
          />
        )}
        {state.showClassModal && (
          <ClassModal
            show={state.showClassModal}
            onClose={handleClassModal}
            onSelect={handleClassSelect}
            title="Select Class"
          />
        )}
      </div>
    </div>
  );
};

export default Beranda;
