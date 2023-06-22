import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import garuda from "../../assets/garuda.png";
import { useNavigate } from "react-router-dom";

const HistoryModal = ({ show, onClose }) => {
  const [paymentStatus, setPaymentStatus] = useState("unpaid");
  const navigate = useNavigate();

  const handleSave = () => {
    onClose();
  };

  const handleUnpaid = () => {
    navigate("/");
  };
  const handleSuccess = () => {
    navigate("/history");
  };
  const handleCheckout = () => {
    navigate("/");
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-30 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50 font-poppins"></div>
      <div className="bg-white w-96 md:w-[800px] p-6 rounded-2xl z-10 mx-3 ">
        <div className="">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-2">Detail Pemesanan</h2>{" "}
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mb-2"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex justify-between items-center">
            {" "}
            <h1>
              Booking Code:{" "}
              <span className="text-purple-600 font-bold">code.example</span>
            </h1>
            {paymentStatus === "unpaid" && (
              <h1
                className={`text-center py-1 my-2 font-semibold w-20 rounded-3xl text-sm ${
                  paymentStatus === "unpaid"
                    ? "bg-red-400 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                unpaid
              </h1>
            )}
            {paymentStatus === "success" && (
              <h1
                className={`text-center py-1 my-2 font-semibold w-20 rounded-3xl text-sm ${
                  paymentStatus === "success"
                    ? "bg-green-400 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                success
              </h1>
            )}
            {paymentStatus === "cancel" && (
              <h1
                className={`text-center py-1 my-2 font-semibold w-20 rounded-3xl text-sm ${
                  paymentStatus === "cancel"
                    ? "bg-gray-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                cancel
              </h1>
            )}
            {paymentStatus === "checkout" && (
              <h1
                className={`text-center py-1 my-2 font-semibold w-20 rounded-3xl text-sm ${
                  paymentStatus === "checkout"
                    ? "bg-blue-400 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                checkout
              </h1>
            )}
          </div>
        </div>
        <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
        <div className="text-sm">
          <h1 className="text-purple-600 font-semibold pb-1">Keberangkatan</h1>
          <h1 className="font-semibold">00.09</h1>
          <h1>5 Maret 2102</h1>
          <h1 className="">
            <span>Soekarno Hatta</span> - <span>Terminal 1A Domestik</span>
          </h1>
        </div>
        <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
        <div className="text-sm ">
          <div className="flex gap-2 items-center">
            <img src={garuda} alt="" className="w-14" />
            <div className="font-semibold">
              <h1>Garuda Indonesia</h1>
              <h1>JT - 231</h1>
            </div>
          </div>
          <div>
            <h1 className="font-semibold pt-3">Informasi :</h1>
            <h1>
              Penumpang 1: <span>Mr. Messi</span>
            </h1>
            <h1>
              ID: <span>12345</span>
            </h1>
            <h1>
              Penumpang 2: <span>Mr. Messi</span>
            </h1>
            <h1>
              ID: <span>12345</span>
            </h1>
          </div>
        </div>
        <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
        <div className="text-sm">
          <h1 className="text-purple-600 font-semibold pb-1">Kedatangan</h1>
          <h1 className="font-semibold">21:23</h1>
          <h1>6 Juni 20032</h1>
          <h1>Melborne International</h1>
        </div>
        <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
        <div className="text-sm">
          <h1 className="font-semibold pb-3">Rincian Harga</h1>
          <div className="flex justify-between">
            {" "}
            <div className="grid gap-0.5">
              <h1>2 Adults</h1>
              <h1>1 Baby</h1>
              <h1>Tax</h1>
            </div>
            <div className="grid gap-0.5">
              <h1>IDR. 9.500.000</h1>
              <h1>0</h1>
              <h1>IDR. 300.000</h1>
            </div>
          </div>
        </div>
        <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
        <div className="flex justify-between text-xl font-bold">
          {" "}
          <h1>Total</h1>
          <h1 className="text-purple-600">IDR. 9.850.000</h1>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          {paymentStatus === "unpaid" && (
            <button
              onClick={handleUnpaid}
              className={`px-4 py-2 text-sm rounded-md w-full ${
                paymentStatus === "unpaid"
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Lanjut Bayar
            </button>
          )}
          {paymentStatus === "checkout" && (
            <button
              onClick={handleCheckout}
              className={`px-4 py-2 text-sm rounded-md w-full ${
                paymentStatus === "checkout"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Checkout
            </button>
          )}
          {paymentStatus === "success" && (
            <button
              onClick={handleSuccess}
              className={`px-4 py-2 text-sm rounded-md w-full ${
                paymentStatus === "success"
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Cetak Tiket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HistoryModal;
