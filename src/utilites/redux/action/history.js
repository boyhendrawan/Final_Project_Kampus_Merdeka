import axios from "axios";
import {
  setPosts,
  setPostsStatus,
  setPostsDetails,
  setSearchResults,
  setFilterData,
  setFilterDataReq,
} from "../reducers/history";
import { toast } from "react-toastify";

export const getPosts = (setIsloading) => async (dispatch, getState) => {
  setIsloading(true)
  try {
    const { token, dataUser } = getState().auth; // Ambil token dan dataUser dari state auth
    const { uuid_user } = dataUser; // Ambil UUID pengguna dari dataUser
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/${uuid_user}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setPosts(response.data.datas));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
  setIsloading(false)
};

export const getPostStatus = () => async (dispatch, getState) => {
  try {
    const { token, dataUser } = getState().auth; // Ambil token dan dataUser dari state auth
    const { uuid_user } = dataUser; // Ambil UUID pengguna dari dataUser
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/${uuid_user}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.status !== "200")
      throw new Error(`Opps Got error ${response.data.status}`);
    dispatch(setPostsStatus(response.data.datas[0].status.trim()));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getPostDetails =
  (uuid_history, setIsLoading) => async (dispatch, getState) => {
    const { token, dataUser } = getState().auth;
    const { uuid_user } = dataUser;
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/uuid/${uuid_user}/${uuid_history}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status !== "200")
        throw new Error(`Opps Got error ${response.data.status}`);

      dispatch(setPostsDetails(response.data.datas));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
    setIsLoading(false);
  };

export const getSearch = (searchTerm) => async (dispatch, getState) => {
  const { token, dataUser } = getState().auth;
  const { uuid_user } = dataUser;

  try {
    const apiUrl = `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/${uuid_user}`;
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const filteredResults = response.data.datas.filter((item) => {
      const uuidStart = item.uuid_history.substring(0, searchTerm.length);
      return uuidStart.toLowerCase() === searchTerm.toLowerCase();
    });

    if (filteredResults.length === 0) {
      toast.error("Data tidak ditemukan");
    } else {
      dispatch(setSearchResults(filteredResults));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getFilter = () => {
  return async (dispatch, getState) => {
    dispatch(setFilterDataReq());

    const { selectedDate } = getState(); // Get selectedDate from state

    if (!(selectedDate instanceof Date)) {
      toast.error("Invalid date");
      return;
    }

    const formattedDate = formatDate(selectedDate);
    const apiUrl = `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/date/${formattedDate}/57de8b62-ca57-4710-8e47-0614e0da68d7`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;

      if (data && Array.isArray(data.datas)) {
        const filteredData = data.datas.filter((item) =>
          String(item.title)
            .toLocaleLowerCase()
            .includes(selectedDate.toLocaleLowerCase())
        );
        dispatch(setFilterData(filteredData)); // Dispatch action fetchFilteredDataSuccess
      } else {
        toast.error("Data not found"); // Dispatch action fetchFilteredDataFailure
      }
    } catch (error) {
      toast.error("Error: " + error.message); // Display error message
    }
  };
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// const getUserUuidFromToken = async () => {
//   try {
//     const response = await axios.get('https://example.com/api/user', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const { uuid_user } = response.data.datas; // Mendapatkan uuid_user dari respons server
//     return uuid_user;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Gagal mendapatkan uuid_user');
//   }
// };
