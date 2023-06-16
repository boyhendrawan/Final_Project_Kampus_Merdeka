import { login as fLogin, setIsLoggedIn } from "../reducers/auth";

import axios from "axios";
import { toast } from "react-toastify";

export const login =
  (data, navigate, resetUsername, resetPassword) => async (dispatch) => {
    try {
      const response = await axios.post(
        `https://km4-challenge-5-api.up.railway.app/api/v1/auth/login`,
        {
          email: data.valueUsername,
          password: data.valuePassword,
        },
        { "Content-Type": "application/json" }
      );

      const { token } = response?.data.data;

      dispatch(fLogin(token));
      dispatch(setIsLoggedIn(true));

      // reset password and useranme
      resetUsername();
      resetPassword();
      // redirect to home, don't forget to useNavigate in the component
      navigate("/akun");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data.message);
        return;
      }

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
        `http://localhost:8080/Users/Register`,
        data,
        { "Content-Type": "application/json" }
      );
      const { status, msg, Datas } = response?.data;

      // Mengakses nilai email dan password dari Datas
      const { email, password } = Datas;
      
      // Menggunakan nilai yang diperoleh dari respons API
      console.log("Status:", status);
      console.log("Message:", msg);
      console.log("Email:", email);
      console.log("Password:", password);
      const { token } = response?.data.datas;

      dispatch(fLogin(token));
      dispatch(setIsLoggedIn(true));
      // reset al field
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
