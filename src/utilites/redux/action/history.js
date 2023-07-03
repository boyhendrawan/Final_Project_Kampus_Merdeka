import axios from "axios";
import {
  setPosts,
  setPostsStatus,
  setPostsDetails,
  setSearchResults,
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
    if(response.data.status !=='200') throw new Error(`Opps Got error ${response.data.status}`)
    
    if(response.data.datas.length>0)dispatch(setPostsStatus(response.data.datas[0].status.trim()));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getPostDetails = (uuid_history,setIsLoading) => async (dispatch, getState) => {
  const { token, dataUser } = getState().auth;
  const { uuid_user } = dataUser;
  setIsLoading(true);
  try {
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/uuid/${uuid_user}/${uuid_history}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if(response.data.status !=='200') throw new Error(`Opps Got error ${response.data.status}`)
   
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
