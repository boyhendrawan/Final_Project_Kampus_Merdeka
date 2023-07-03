import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getPostDetails,
} from "../../utilites/redux/action/history";
import { AiOutlineClose } from "react-icons/ai";
import plane from "../../assets/plane.svg";
import LoadingRequest from "../LoadingRequest";
import queryString from 'query-string';
import { getCetakTiket } from "../../utilites/redux/action/checkout";
const HistoryModal = ({ show, onClose }) => {
  // const { uuid_history } = useParams();
  const [isLoading,setIsLoading]=useState(false);
  const navigate = useNavigate();
  const { postDetail, uuidHistory } = useSelector((state) => state.post);
  const {isLoading:IsloadingTiket}= useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetails(uuidHistory,setIsLoading));
  }, [dispatch, uuidHistory]);


  const handleUnpaid = () => {
    const paramsData={
      stepper:3,
      pessengers:postDetail[0].passenger,
      transaction:postDetail[0].uuid_history
    }
    navigate(`/user/checkout/allData?${queryString.stringify(paramsData)}`)
  };

  const handleSuccess = () => {
    
    dispatch(getCetakTiket(postDetail[0].uuid_history))
  };

  const handleCheckout = () => {
    const paramsData={
      stepper:2,
      pessengers:postDetail[0].passenger,
      uuid_schedule:postDetail[0].uuid_schedules,
      uuid_transaction:postDetail[0].uuid_history
    }
    navigate(`/user/checkout/allData?${queryString.stringify(paramsData)}`)
  };

  return (
    <>
      
      
        <div
          className={`fixed inset-0 flex items-center justify-center z-50  ${show ? "" : "hidden"
            }`}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-50 font-poppins"></div>
          <div className="bg-white w-96 md:w-[800px] p-6 rounded-2xl z-10 mx-3 my-10">
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
              {postDetail == null && isLoading &&  <LoadingRequest />}
              {postDetail && !isLoading && 
              <>
              <div className="flex justify-between items-center">
                <h1>
                  Booking Code:{" "}
                  <span className="font-semibold truncate text-purple-500">
                    {postDetail[0]?.uuid_history?.substring(0, 8)}
                  </span>
                </h1>
                {postDetail[0]?.status.trim() === "Unpaid" && (
                  <h1 className="text-center my-2 font-semibold w-20 rounded-3xl text-sm bg-red-400 text-white py-2">
                    {postDetail[0]?.status}
                  </h1>
                )}
                {postDetail[0]?.status.trim() === "Paid" && (
                  <h1 className="text-center my-2 font-semibold w-20 rounded-3xl text-sm bg-green-400 text-white py-2">
                    {postDetail[0]?.status}
                  </h1>
                )}
                {postDetail[0]?.status.trim() === "Cancel" && (
                  <h1 className="text-center my-2 font-semibold w-20 rounded-3xl text-sm bg-gray-500 text-white py-2">
                    {postDetail[0]?.status}
                  </h1>
                )}
                {postDetail[0]?.status.trim() === "Checkout" && (
                  <h1 className="text-center my-2 font-semibold w-20 rounded-3xl text-sm bg-blue-400 text-white py-2">
                    {postDetail[0]?.status}
                  </h1>
                )}
              </div>
              <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
              <div className="text-sm">
                <h1 className="text-purple-600 font-semibold pb-1">
                  Keberangkatan
                </h1>
                <h1 className="font-semibold">{postDetail[0]?.departure_time}</h1>
                <h1>{postDetail[0]?.departure_date}</h1>
                <h1 className="">
                  <span>{postDetail[0]?.departure_airport}</span>
                  <span>{postDetail[0]?.arrival_airport}</span>
                </h1>
              </div>
              <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
              <div className="text-sm ">
                <div className="flex gap-2 items-center">
                  <img src={plane} alt="" className="w-14" />
                  <div className="font-semibold pl-2">
                    <h1>{postDetail[0]?.airplane_name}</h1>
                    <h1>{postDetail[0]?.airplane_type}</h1>
                  </div>
                </div>
                {postDetail[0]?.status.trim() !== 'Checkout' &&
                  <div>
                    <h1 className="font-semibold pt-3">Informasi :</h1>
                    {
                      postDetail?.map((e,i) => {
                       return <div key={i}>
                            <h1 >
                            Penumpang {i+1}: <span>{e.full_name}</span>
                          </h1>
                          <span>
                            ID :
                            <span className="font-semibold truncate">
                              {postDetail[0]?.uuid_user?.substring(0, 8)}
                            </span>
                          </span>
                        </div>
                      })
                    }

                  </div>
                }
              </div>
              <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
              <div className="text-sm">
                <h1 className="text-purple-600 font-semibold pb-1">Kedatangan</h1>
                <h1 className="font-semibold">{postDetail[0]?.arrival_time}</h1>
                <h1>{postDetail[0]?.arrival_date}</h1>
                <h1>{postDetail[0]?.arrival_airport}</h1>
              </div>
              <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
              <div className="text-sm">
                <h1 className="font-semibold pb-3">Rincian Harga</h1>
                <div className="flex justify-between">
                  <div className="grid gap-0.5">
                    <h1>
                      <span>{postDetail.length} Passenger</span>
                    </h1>
                  </div>
                  <div className="grid gap-0.5">
                    <h1>
                      <span>{postDetail.reduce((accumulator, current) => accumulator + current.price, 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex-1 border-dashed border border-gray-400 my-2"></div>
              <div className="flex justify-between text-xl font-bold">
                <h1>Total</h1>
                <h1 className="text-purple-600">{postDetail.reduce((accumulator, current) => accumulator + current.price, 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                {postDetail[0]?.status.trim() === "Unpaid" && (
                  <button
                    className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md w-full"
                    onClick={handleUnpaid}
                  >
                    Bayar Pesanan
                  </button>
                )}
                {postDetail[0]?.status.trim() === "Paid" && !IsloadingTiket && (
                  <button
                    className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-md w-full"
                    onClick={handleSuccess}
                  >
                    Cetak Tiket
                  </button>
                )}
                {
                  IsloadingTiket && <LoadingRequest/>
                }
                {postDetail[0]?.status.trim() === "Checkout" && (
                  <button
                    className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-md w-full"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                )}
              </div>
              </>
            }
            </div>
          </div>
        </div>
      
    </>
  );
};

export default HistoryModal;
