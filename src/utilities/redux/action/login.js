import { login as fLogin, setIsLoggedIn } from "../reducers/auth";

import axios from "axios";
import { toast } from "react-toastify";

export const login =
  (data, navigate, resetUsername, resetPassword) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/Users/Login`,
        {
          email: data.valueUsername,
          password: data.valuePassword,
        },
        { "Content-Type": "application/json" }
      );

      const { token } = response?.datas;

      dispatch(fLogin(token));
      dispatch(setIsLoggedIn(true));

      // reset password and useranme
      resetUsername();
      resetPassword();
      // redirect to home, don't forget to useNavigate in the component
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.msg);
        return;
      }

      toast.error(error.msg);
    }
  };

  export const register = (data, navigate,resetUsername,resetPassword,resetFullName,resetPhone,setRequest) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/Users/Register`,
        data,
        { "Content-Type": "application/json" }
      );
  
      const { token } = response?.datas;
  
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
        toast.error(error?.response?.msg);
        return;
      }
  
      toast.error(error.msg);
    }
    // if request has done
    setRequest(false);
  };