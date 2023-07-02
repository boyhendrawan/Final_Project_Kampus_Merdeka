import {
  login as fLogin,
  logout as fLogout,
  setIsLoggedIn,
} from "../reducers/auth";
import { getPostDetails, getPostStatus } from "./post";

import axios from "axios";
import { toast } from "react-toastify";

export const login =
  (data, navigate, resetUsername, resetPassword) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_AUTH_API}/api/v1/auth/login`,
        data,
        { "Content-Type": "application/json" }
      );

      const { token } = response?.data?.data;

      dispatch(fLogin(token));
      dispatch(setIsLoggedIn(true));

      // reset password and username
      resetUsername();
      resetPassword();
      // redirect to home, don't forget to useNavigate in the component
      navigate("/");

      // Call the required functions to fetch additional data
      const uuid_user = response?.data?.datas?.uuid_user;
      const uuid_history = response?.data?.datas?.uuid_history;
      dispatch(getPostStatus(uuid_user));
      dispatch(getPostDetails(uuid_history, uuid_user));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "absolute bottom-0 right-1/2",
      });
    }
  };

export const register =
  (
    data,
    navigate,
    resetUsername,
    resetPassword,
    resetFullName,
    resetPhone,
    setRequest
  ) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `https://novel-tomatoes-production.up.railway.app/Users/register`,
        data,
        {
          "Content-Type": "application/json",
        }
      );
      const code = response?.data?.status

      if (code === 200 ){
        dispatch(setIsLoggedIn(true));

        // reset all fields
        resetUsername();
        resetFullName();
        resetPhone();
        resetPassword();

        // redirect to home, don't forget to useNavigate in the component
        toast.success(response?.data?.msg, {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "absolute bottom-0 right-1/2",
        });
        navigate("/auth/login");
      } else {
        // reset all fields
        resetUsername();
        resetFullName();
        resetPhone();
        resetPassword();

        toast.error(response?.data?.msg, {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "absolute bottom-0 right-1/2",
        });
      }
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "absolute bottom-0 right-1/2",
        });
        return;
      }

      toast.error(error.msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "absolute bottom-0 right-1/2",
      });
    }

    // if request has done
    setRequest(false);
  };

export const logout = (navigate) => {
  return (dispatch) => {
    console.log("masuk");
    dispatch(fLogout());
    dispatch(fLogin());
    dispatch(setIsLoggedIn(false));
    navigate("/auth/login");
  };
};
