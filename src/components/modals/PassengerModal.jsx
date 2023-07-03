import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const PassengerModal = ({
  show,
  onClose,
  state,
  dispatch
}) => {
  


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
                    onClick={ ()=> dispatch({type:"DECREASE_DEWASA"})}
                  >
                    -
                  </button>
                  <span className="mx-2">{state.jumlahDewasa}</span>
                  <button
                    className="text-purple-700 text-lg"
                    onClick={ ()=>dispatch({type:"INCREASE_DEWASA"})}
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
                    onClick={()=>dispatch({type:"DECREASE_ANAK"})}
                  >
                    -
                  </button>
                  <span className="mx-2">{state.jumlahAnak}</span>
                  <button
                    className="text-purple-700 text-lg"
                    onClick={()=>dispatch({type:"INCREASE_ANAK"})}
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
                    onClick={()=> dispatch({type:"DECREASE_BAYI"})}
                  >
                    -
                  </button>
                  <span className="mx-2">{state.jumlahBayi}</span>
                  <button
                    className="text-purple-700 text-lg"
                    onClick={()=> dispatch({type:"INCREASE_BAYI"})}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="border-b border-slate-600 h-0 "></div>
              <span className="text-xl pl-2 pt-1 font-semibold text-end mx-8">
                Total: {state.jumlahAnak + state.jumlahBayi + state.jumlahDewasa}
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
