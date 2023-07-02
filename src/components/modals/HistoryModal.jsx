import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getPostDetails,
  getPostStatus,
} from "../../utilites/redux/action/post";
import { AiOutlineClose } from "react-icons/ai";
import plane from "../../assets/plane.svg";

const HistoryModal = ({ show, onClose }) => {
  const { uuid_history } = useParams();
  const navigate = useNavigate();
  const { postDetail, postStatus } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetails(uuid_history));
  }, [dispatch, uuid_history]);

  useEffect(() => {
    dispatch(getPostStatus());
  }, [dispatch]);

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
        <div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-2">Detail Pemesanan</h2>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mb-2"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <h1>
              Booking Code:{" "}
              <span className="font-semibold truncate text-purple-500">
                {postDetail?.uuid_history?.substring(0, 8)}
              </span>
            </h1>
            {postStatus === "Unpaid" && (
              <h1 className="text-center my-2 font-semibold w-20 rounded-3xl text-sm bg-red-400 text-white py-2">
                Unpaid
              </h1>
            )}
            {postStatus === "Paid" && (
              <h1 className="text-center my-2 font-semibold w-20 rounded-3xl text-sm bg-green-400 text-white py-2">
                {postDetail?.status}
              </h1>
            )}
            {postStatus === "Cancel" && (
              <h1 className="text-center my-2 font-semibold w-20 rounded-3xl text-sm bg-gray-500 text-white py-2">
                {postDetail?.status}
              </h1>
            )}
            {postStatus === "Checkout" && (
              <h1 className="text-center my-2 font-semibold w-20 rounded-3xl text-sm bg-blue-400 text-white py-2">
                Chekout
              </h1>
            )}
          </div>
          <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
          <div className="text-sm">
            <h1 className="text-purple-600 font-semibold pb-1">
              Keberangkatan
            </h1>
            <h1 className="font-semibold">{postDetail?.departure_time}</h1>
            <h1>{postDetail?.departure_date}</h1>
            <h1 className="">
              <span>{postDetail?.departure_airport}</span>
              <span>{postDetail?.arrival_airport}</span>
            </h1>
          </div>
          <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
          <div className="text-sm ">
            <div className="flex gap-2 items-center">
              <img src={plane} alt="" className="w-14" />
              <div className="font-semibold pl-2">
                <h1>{postDetail?.airplane_name}</h1>
                <h1>{postDetail?.airplane_type}</h1>
              </div>
            </div>
            <div>
              <h1 className="font-semibold pt-3">Informasi :</h1>
              <h1>
                Penumpang 1: <span>Mr. Messi</span>
              </h1>
              <span>
                ID :{" "}
                <span className="font-semibold truncate">
                  {postDetail?.uuid_user?.substring(0, 8)}
                </span>
              </span>
            </div>
          </div>
          <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
          <div className="text-sm">
            <h1 className="text-purple-600 font-semibold pb-1">Kedatangan</h1>
            <h1 className="font-semibold">{postDetail?.arrival_time}</h1>
            <h1>{postDetail?.arrival_date}</h1>
            <h1>{postDetail?.arrival_airport}</h1>
          </div>
          <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
          <div className="text-sm">
            <h1 className="font-semibold pb-3">Rincian Harga</h1>
            <div className="flex justify-between">
              <div className="grid gap-0.5">
                <h1>
                  <span>{postDetail?.passenger} Passenger</span>
                </h1>
              </div>
              <div className="grid gap-0.5">
                <h1>
                  IDR. <span>{postDetail?.price}</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
          <div className="flex justify-between text-xl font-bold">
            <h1>Total</h1>
            <h1 className="text-purple-600">IDR. {postDetail?.price}</h1>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            {postStatus === "Unpaid" && (
              <button
                className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md w-full"
                onClick={handleUnpaid}
              >
                Bayar Pesanan
              </button>
            )}
            {postStatus === "Paid" && (
              <button
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-md w-full"
                onClick={handleSuccess}
              >
                Cetak Tiket
              </button>
            )}
            {postStatus === "Checkout" && (
              <button
                className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-md w-full"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
