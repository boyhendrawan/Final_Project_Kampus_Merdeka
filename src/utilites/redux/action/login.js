import {
  login as fLogin,
  logout as fLogout,
  setIsLoggedIn,
} from "../reducers/auth";

import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../reducers/auth";


export const getProfile =()=>async(dispatch,getState)=>{
  try{
    // get token 
    const {token} =getState().auth;

    const response=await axios.get(`${process.env.REACT_APP_API}/Users/token`,{
      headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type":"application/json",
        "token":`${token}`
      }
    });
    // console.log(response);
    if(response.status !==200) throw new Error(`Opps get error when fetching  data ${response.status}`);
    // status ok
    dispatch(setUser(response.data.datas));
    // done
  }catch (error) {
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
}
export const login =
  (data, navigate, resetUsername, resetPassword,url) => async (dispatch) => {
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
      navigate(url);

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
