import React, { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa";
import HistoryModal from "./modals/HistoryModal";
import plane from "../assets/plane.svg";
import { useDispatch, useSelector } from "react-redux";
import { setUuidHistory } from "../utilites/redux/reducers/history";
import {  getPosts, getPostStatus} from "../utilites/redux/action/history";

const CardHistory = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const dispatch = useDispatch();
  const { posts, postStatus } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getPostStatus());
  }, [dispatch]);

  const handleHistoryModal = (uuid_history) => {
    dispatch(setUuidHistory(uuid_history));
    setShowHistoryModal(true);
  };

  const handleCloseModal = () => {
    setShowHistoryModal(false);
  };
  return (
    <div className="max-w-6xl">
      {posts.map((item) => (
        <div
          key={item.uuid_history}
          onClick={() => handleHistoryModal(item.uuid_history)}
          className="rounded-3xl bg-white border mb-5 border-gray-300 p-5 shadow-lg"
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img src={plane} alt="" className="w-7" />{" "}
              <h1 className="font-semibold">{item?.airplane_name}</h1>
            </div>

            <h1
              className={`text-center py-1 my-2 font-semibold w-20 rounded-3xl text-sm ${
                postStatus === item?.status
                  ? "bg-red-400 text-white py-2"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {item?.status}
            </h1>
          </div>
          <div className="flex justify-between pt-5 items-center">
            <div className="flex-1" style={{ flexBasis: "20%" }}>
              <p className="text-xl md:text-2xl font-semibold">
                {item?.departure_city}
              </p>
              <p className="text-sm">{item?.departure_airport}</p>
            </div>
            <div className="flex-2" style={{ flexBasis: "60%" }}>
              <div className="flex items-center ">
                <div className="flex-1 border-dashed border border-gray-400 mx-3 md:mx-0"></div>
                <span className="text-gray-400 text-2xl md:text-4xl md:mx-3">
                  <p className="flex items-center">
                    <FaPlane />
                  </p>
                </span>
                <div className="flex-1 border-dashed border border-gray-400 mx-3 md:mx-0"></div>
              </div>
            </div>
            <div className="flex-1 text-end" style={{ flexBasis: "20%" }}>
              <p className="text-xl md:text-2xl font-semibold">
                {item.arrival_city}
              </p>
              <p className="text-sm">{item?.arrival_airport}</p>
            </div>
          </div>
          <div className="flex-1 border-dashed border border-gray-400 mt-8"></div>
          <div className="flex justify-between pt-5">
            <div>
              {" "}
              <h1 className="text-sm text-end">
                Booking Code :{" "}
                <span className="font-semibold truncate">
                  {item?.uuid_history.length > 10
                    ? item?.uuid_history.substring(0, 8)
                    : item?.uuid_history}
                </span>
              </h1>{" "}
              <h1 className="text-sm pt-3">
                Class:<span className="font-semibold"> {item?.seat_type}</span>
              </h1>
            </div>
            <h1 className="md:text-xl font-bold text-green-500 flex items-center">
              IDR. {item?.price}
            </h1>
          </div>
        </div>
      ))}
      {showHistoryModal && (
        <HistoryModal show={showHistoryModal} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CardHistory;
