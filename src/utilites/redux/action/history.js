import axios from "axios";
import {
  setPosts,
  setPostsStatus,
  setPostsDetails,
  setSearchResults,
} from "../reducers/history";
import { toast } from "react-toastify";

export const getPosts = () => async (dispatch, getState) => {
  try {
    const { token, dataUser } = getState().auth; // Ambil token dan dataUser dari state auth
    const { uuid } = dataUser; // Ambil UUID pengguna dari dataUser
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/${uuid}`,
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
};

export const getPostStatus = () => async (dispatch, getState) => {
  try {
    const { token, dataUser } = getState().auth; // Ambil token dan dataUser dari state auth
    const { uuid } = dataUser; // Ambil UUID pengguna dari dataUser
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/${uuid}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setPostsStatus(response.data.datas[0].status.trim()));
    console.log(response.data.datas.status);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getPostDetails = (uuid_history) => async (dispatch, getState) => {
  const { token, dataUser } = getState().auth;
  const { uuid } = dataUser;

  try {
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/uuid/${uuid}/${uuid_history}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setPostsDetails(response.data.datas.uuid_history));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getSearch = (searchTerm) => async (dispatch, getState) => {
  const { token, dataUser } = getState().auth;
  const { uuid } = dataUser;

  try {
    const apiUrl = `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/${uuid}`;
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
