import { login as fLogin, logout as fLogout, setIsLoggedIn } from "../reducers/auth";

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

      const { token } = response?.data.datas;

      dispatch(fLogin(token));
      dispatch(setIsLoggedIn(true));

      // reset password and username
      resetUsername();
      resetPassword();
      // redirect to home, don't forget to useNavigate in the component
      navigate("/");
    } catch (error) {
      toast.error(error.message);
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
      // Menggunakan nilai yang diperoleh dari respons API
      const { token } = response?.data.datas;

      dispatch(fLogin(token));
      dispatch(setIsLoggedIn(true));
      // reset all fields
      resetFullName();
      resetUsername();
      resetPhone();
      resetPassword();
      // redirect to home, don't forget to useNavigate in the component
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data.msg);
        return;
      }

      toast.error(error.msg);
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
    }
  }