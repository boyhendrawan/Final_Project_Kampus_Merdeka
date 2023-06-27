import {
  login as fLogin,
  logout as fLogout,
  setIsLoggedIn,
} from "../reducers/auth";

import axios from "axios";
import { toast } from "react-toastify";

export const login =
  (data, navigate, resetUsername, resetPassword) => async (dispatch) => {
    try {
      const response = await axios.post(
        `https://novel-tomatoes-production.up.railway.app/Users/login`,
        {
          email: data.valueUsername,
          password: data.valuePassword,
        },
        { "Content-Type": "application/json" }
      );

      const token = response?.data.datas.token;

      dispatch(fLogin(token));
      dispatch(setIsLoggedIn(true));

      // reset password and username
      resetUsername();
      resetPassword();
      // redirect to home, don't forget to useNavigate in the component
      navigate("/");
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
