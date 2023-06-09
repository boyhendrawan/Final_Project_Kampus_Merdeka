import React, { useState, useEffect } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { HiSwitchVertical } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import gambar from "../../assets/gambar1.jpg";
import PassengerModal from "../../components/PassangerModal";
import ClassModal from "../../components/ClassModal";
import FlightModal from "../../components/FlightModal";
import Slides from "../../components/Slides";

const Beranda = () => {
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [showDepartureModal, setShowDepartureModal] = useState(false);
  const [showArrivalModal, setShowArrivalModal] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [jumlahDewasa, setJumlahDewasa] = useState(1);
  const [jumlahAnak, setJumlahAnak] = useState(0);
  const [jumlahBayi, setJumlahBayi] = useState(0);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [flightClass, setFlightClass] = useState("");
  const [defaultDate, setDefaultDate] = useState("");
  const [switched, setSwitched] = useState(false);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const defaultFormattedDate = `${year}-${month}-${day}`;
    setDefaultDate(defaultFormattedDate);
  }, []);

  const handlePassengerModal = () => {
    setShowPassengerModal(!showPassengerModal);
  };

  const handleDepartureModal = () => {
    setShowDepartureModal(!showDepartureModal);
  };

  const handleArrivalModal = () => {
    setShowArrivalModal(!showArrivalModal);
  };

  const handleDepartureSelect = (selectedDeparture) => {
    setDeparture(selectedDeparture);
    setShowDepartureModal(false);
  };

  const handleClassModal = () => {
    setShowClassModal(!showClassModal);
  };

  const handleClassSelect = (selectedClass) => {
    setFlightClass(selectedClass);
    setShowClassModal(false);
  };

  const handleArrivalSelect = (selectedArrival) => {
    setArrival(selectedArrival);
    setShowArrivalModal(false);
  };

  const handleSwitch = () => {
    setSwitched(!switched);
    const temp = departure;
    setDeparture(arrival);
    setArrival(temp);
  };

  return (
    <div className="font-poppins">
      <div className="bg-gradient-to-b from-purple-500 to-white md:bg-white">
        <Slides />
        <div className="mx-5 grid lg:mx-auto lg:max-w-6xl py-10">
          <div className="bg-white rounded-md mt-[-320px] md:mt-[-200px] relative z-20 my-4">
            <div className="grid gap-4 p-8">
              <div className="border border-slate-400 rounded-lg">
                <div
                  className="p-5 pb-0 flex gap-3"
                  onClick={handleDepartureModal}
                >
                  <p className="text-slate-400 text-2xl">
                    <FaPlaneDeparture />
                  </p>
                  <p>From</p>
                  <h1 className="text-xl pl-6">{departure}</h1>
                </div>
                <div className="grid mx-5">
                  <div className="flex justify-center items-center">
                    <hr className="w-full border-gray-500 mx-2" />
                    <h1
                      name="switch"
                      className={`text-2xl p-2 rounded-full border ${
                        switched
                          ? "border-green-500 text-green-500"
                          : "border-purple-700 text-purple-700"
                      }`}
                      onClick={handleSwitch}
                    >
                      <HiSwitchVertical />
                    </h1>
                  </div>
                </div>
                <div
                  className="p-5 pt-0 flex gap-3"
                  onClick={handleArrivalModal}
                >
                  <p className="text-slate-400 text-2xl">
                    <FaPlaneArrival />
                  </p>
                  <p>To</p>
                  <h1 className="text-xl pl-11">{arrival}</h1>
                </div>
              </div>
              <div className="grid gap-1">
                <label>Date</label>
                <input
                  type="date"
                  className="rounded-lg"
                  defaultValue={defaultDate}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="grid gap-1">
                  <label>Passengers</label>
                  <div
                    className="flex border gap-10 border-slate-400 p-2 rounded-lg"
                    onClick={handlePassengerModal}
                  >
                    <span className="text-2xl mt-1.5">
                      <MdAirlineSeatReclineNormal />
                    </span>{" "}
                    <span className="text-xl pl-2 pt-1">
                      {jumlahDewasa + jumlahAnak + jumlahBayi}
                    </span>
                  </div>
                </div>
                <div className="grid gap-1">
                  <label>Class</label>
                  <div
                    className="flex border border-slate-400 p-2 rounded-lg"
                    onClick={handleClassModal}
                  >
                    <span className="text-xl pt-2 py-1">
                      <AiFillSetting />
                    </span>{" "}
                    <h1 className="pt-1 pl-5">{flightClass}</h1>
                  </div>
                </div>
              </div>
              <button className="bg-[#7126B5] rounded-lg py-2.5 text-white font-semibold">
                Cari Penerbangan
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Destinasi Favorit</h1>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  src={gambar}
                  className="w-full rounded-t-lg"
                  alt="Destination"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {showPassengerModal && (
          <PassengerModal
            show={showPassengerModal}
            onClose={handlePassengerModal}
            jumlahDewasa={jumlahDewasa}
            jumlahAnak={jumlahAnak}
            jumlahBayi={jumlahBayi}
            setJumlahAnak={setJumlahAnak}
            setJumlahDewasa={setJumlahDewasa}
            setJumlahBayi={setJumlahBayi}
            showPassengerModal={showPassengerModal}
            setShowPassengerModal={setShowPassengerModal}
          />
        )}
        {showDepartureModal && (
          <FlightModal
            show={showDepartureModal}
            onClose={handleDepartureModal}
            onSelect={handleDepartureSelect}
            title="Select Departure"
          />
        )}
        {showArrivalModal && (
          <FlightModal
            show={showArrivalModal}
            onClose={handleArrivalModal}
            onSelect={handleArrivalSelect}
            title="Select Arrival"
          />
        )}
        {showClassModal && (
          <ClassModal
            show={showClassModal}
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
