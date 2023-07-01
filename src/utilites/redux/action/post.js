import axios from "axios";
import { setPosts, setPostsStatus, setPostsDetails } from "../reducers/post";
import { toast } from "react-toastify";

export const getposts = (uuid_user) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/57de8b62-ca57-4710-8e47-0614e0da68d7`,
      {
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      },
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

export const getPostStatus = (uuid_user) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/user/57de8b62-ca57-4710-8e47-0614e0da68d7`,
      {
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      },
    );
    dispatch(setPostsStatus(response.data.datas[0].status.trim()));
    console.log(response.data.datas)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getPostDetails = (uuid_history, uuid_user) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://novel-tomatoes-production.up.railway.app/HistoryTransaction/uuid/57de8b62-ca57-4710-8e47-0614e0da68d7/${uuid_history}`,
      {
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      },
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

