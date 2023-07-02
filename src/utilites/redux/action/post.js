import axios from "axios";
import { setPosts, setPostsStatus, setPostsDetails, setSearchResults} from "../reducers/post";
import { toast } from "react-toastify";

export const getposts = (uuid_user) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth; // Ambil token dari state auth
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/57de8b62-ca57-4710-8e47-0614e0da68d7`,
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
    const { token } = getState().auth; // Ambil token dari state auth
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/57de8b62-ca57-4710-8e47-0614e0da68d7`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setPostsStatus(response.data.datas[0].status.trim()));
    console.log(response.data.datas);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getPostDetails = (uuid_history) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth; // Ambil token dari state auth
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/uuid/57de8b62-ca57-4710-8e47-0614e0da68d7/${uuid_history}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setPostsDetails(response.data.datas));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getSearch = (searchTerm) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth; // Ambil token dari state auth
    const apiUrl = `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/57de8b62-ca57-4710-8e47-0614e0da68d7`;
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

