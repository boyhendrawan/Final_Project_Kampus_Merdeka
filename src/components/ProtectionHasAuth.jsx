import { Outlet, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux';

const ProtectionHasAuth = () => {
  // const navigate = useNavigate();

  // const {  dataUser,isLoggedIn } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!isLoggedIn || dataUser) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate,dataUser]);

  // console.log("protection Has Auth")
  // define navigation 
  // const navigate=useNavigate();
  // // define global var to proved the use has been login
  // const { isLoggedIn,token}=useSelector(features=>features.auth);
  // //checked if user loggin or not
  // useEffect(()=>{
  //     if(!(isLoggedIn && token)) return navigate("/auth/login");
  // },[isLoggedIn,token,navigate]);

  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn || token) {
      navigate("/");
    }
  }, [isLoggedIn, token, navigate]);

  return <Outlet />;
};

export default ProtectionHasAuth;