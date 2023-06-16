import React, { useState, useEffect } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { HiSwitchVertical } from "react-icons/hi";
import { AiFillSetting, AiOutlineArrowRight } from "react-icons/ai";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
// import gambar from "../../assets/gambar1.jpg";
import PassengerModal from "../../components/PassangerModal";
import ClassModal from "../../components/ClassModal";
import FlightModal from "../../components/FlightModal";
import Slides from "../../components/Slides";
import Destinasi from "../../components/Destinasi";
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [showDepartureModal, setShowDepartureModal] = useState(false);
  const [showArrivalModal, setShowArrivalModal] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [jumlahDewasa, setJumlahDewasa] = useState(1);
  const [jumlahAnak, setJumlahAnak] = useState(0);
  const [jumlahBayi, setJumlahBayi] = useState(0);
  const [departure, setDeparture] = useState("Option 1");
  const [arrival, setArrival] = useState("Option 2");
  const [flightClass, setFlightClass] = useState("Economy");
  const [defaultDate, setDefaultDate] = useState("");
  const [switched, setSwitched] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const defaultFormattedDate = `${year}-${month}-${day}`;
    setDefaultDate(defaultFormattedDate);

    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setJumlahDewasa(storedData.jumlahDewasa);
      setJumlahAnak(storedData.jumlahAnak);
      setJumlahBayi(storedData.jumlahBayi);
      setDeparture(storedData.departure);
      setArrival(storedData.arrival);
      setFlightClass(storedData.flightClass);
      setSwitched(storedData.switched);
    }
  }, []);

  const handleSearchFlights = () => {
    const formData = {
      jumlahDewasa,
      jumlahAnak,
      jumlahBayi,
      departure,
      arrival,
      flightClass,
      switched,
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));
  
   navigate("/")
    // console.log(formData);
  };

  const handlePassengerModal = () => {
    setShowPassengerModal(!showPassengerModal);
  };

  const handleDepartureModal = () => {
    setShowDepartureModal(!showDepartureModal);
  };

  const handleClassModal = () => {
    setShowClassModal(!showClassModal);
  };

  const handleArrivalModal = () => {
    setShowArrivalModal(!showArrivalModal);
  };

  const handleDepartureSelect = (selectedDeparture) => {
    setDeparture(selectedDeparture);
    setShowDepartureModal(false);
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
                    {departure}
                  </h1>
                </div>
                <p className="text-slate-400 text-2xl pt-8">
                  <FaPlaneDeparture />
                </p>
              </div>
              <div className="grid mx-5 relative">
                <div className="flex justify-center items-center">
                  {/* <div className="w-1/2">
                    <hr className="border-gray-500" />
                  </div> */}

                  <h1
                    name="switch"
                    className={`text-2xl p-2 rounded-full border bg-gray-400 ${
                      switched
                        ? "border-green-500 text-green-500"
                        : "border-gray-300 text-gray-300"
                    }`}
                    onClick={handleSwitch}
                  >
                    <HiSwitchVertical />
                  </h1>

                  {/* <div className="w-1/2">
                    <hr className="border-gray-500" />
                  </div> */}
                </div>
              </div>
              <div
                className="p-5 flex justify-between items-center gap-3 rounded-xl bg-gray-800 py-3 lg:py-5 mt-[-22px]"
                onClick={handleArrivalModal}
              >
                <div className="grid gap-2">
                  <p className="text-gray-300">Jakarta</p>
                  <h1 className="text-xl text-gray-300 font-semibold">
                    {arrival}
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
                    type="date"
                    className="rounded-2xl mb-2 w-full border-none bg-gray-200 font-semibold"
                    defaultValue={defaultDate}
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
                    <h1 className="pt-1 pl-5 font-semibold">{flightClass}</h1>
                  </div>
                </div>
              </div>
              <button onClick={handleSearchFlights} className="bg-[#7126B5] rounded-2xl py-4 text-white flex justify-between px-3">
                <p className="text-xl">Cari Penerbangan</p>
                <p className="text-2xl pt-0.5 font-semibold ">
                  <AiOutlineArrowRight />
                </p>
              </button>
            </div>
          </div>
        </div>
        <Destinasi />
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
