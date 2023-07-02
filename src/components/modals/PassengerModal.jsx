import React, { useState } from "react";
import { berandaReducer, initialState } from "../../reducer/BerandaState";
import { AiOutlineClose } from "react-icons/ai";

const PassengerModal = ({
  show,
  onClose,
  jumlahDewasa,
  jumlahAnak,
  jumlahBayi,
  setJumlahAnak,
  setJumlahDewasa,
  setJumlahBayi,
}) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    const newState = berandaReducer(state, action);
    setState(newState);
  };

  const handleIncreaseDewasa = () => {
    setJumlahDewasa((prevCount) => prevCount + 1);
  };

  const handleDecreaseDewasa = () => {
    if (jumlahDewasa > 0) {
      setJumlahDewasa((prevCount) => prevCount - 1);
    }
  };

  const handleIncreaseAnak = () => {
    setJumlahAnak((prevCount) => prevCount + 1);
  };

  const handleDecreaseAnak = () => {
    if (jumlahAnak > 0) {
      setJumlahAnak((prevCount) => prevCount - 1);
    }
  };

  const handleIncreaseBayi = () => {
    setJumlahBayi((prevCount) => prevCount + 1);
  };

  const handleDecreaseBayi = () => {
    if (jumlahBayi > 0) {
      setJumlahBayi((prevCount) => prevCount - 1);
    }
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <>
      {show && (
        <div className="fixed font-poppins inset-0 flex justify-center items-center z-30 bg-black bg-opacity-50">
          <div className="bg-white rounded-md p-8 mx-2">
            <div className="flex justify-between">
              {" "}
              <h1 className="font-bold text-xl mb-4">Passengers</h1>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mb-2"
                onClick={onClose}
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className="border border-slate-600 h-0 mb-4 w-full"></div>
            <div className="grid justify-center gap-4">
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <h1>Dewasa</h1>
                  <p>(12 tahun ke atas)</p>
                </div>
                <div className="flex items-center border mx-auto border-slate-400 rounded-lg p-2">
                  <button
                    className="text-purple-700 text-lg"
                    onClick={handleDecreaseDewasa}
                  >
                    -
                  </button>
                  <span className="mx-2">{jumlahDewasa}</span>
                  <button
                    className="text-purple-700 text-lg"
                    onClick={handleIncreaseDewasa}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="border-b border-slate-600 h-0 "></div>
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <h1>Anak</h1>
                  <p>(2 - 11 tahun)</p>
                </div>
                <div className="flex items-center border mx-auto border-slate-400 rounded-lg p-2">
                  <button
                    className="text-purple-700 text-lg"
                    onClick={handleDecreaseAnak}
                  >
                    -
                  </button>
                  <span className="mx-2">{jumlahAnak}</span>
                  <button
                    className="text-purple-700 text-lg"
                    onClick={handleIncreaseAnak}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="border-b border-slate-600 h-0 "></div>
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <h1>Bayi</h1>
                  <p>(Dibawah 2 tahun)</p>
                </div>
                <div className="flex items-center border mx-auto border-slate-400 rounded-lg p-2">
                  <button
                    className="text-purple-700 text-lg"
                    onClick={handleDecreaseBayi}
                  >
                    -
                  </button>
                  <span className="mx-2">{jumlahBayi}</span>
                  <button
                    className="text-purple-700 text-lg"
                    onClick={handleIncreaseBayi}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="border-b border-slate-600 h-0 "></div>
              <span className="text-xl pl-2 pt-1 font-semibold text-end mx-8">
                Total: {jumlahAnak + jumlahBayi + jumlahDewasa}
              </span>
              <div className="border-b border-slate-600 h-0 "></div>
              <button
                className="bg-purple-700 text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PassengerModal;
