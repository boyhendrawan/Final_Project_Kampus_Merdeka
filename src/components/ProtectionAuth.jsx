import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'

import Navbar from './Navbar';

import { Outlet } from 'react-router-dom';
import React from 'react'
import Footer from './Footer';


// import { useDispatch, useSelector } from 'react-redux';



const ProtectionAuth = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { isLoggedIn, token } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!token && !isLoggedIn) {
  //     navigate("/login");
  //     return;
  //   }
  //   // dispatch(getProfile());
  // }, [isLoggedIn, navigate, token, dispatch]);
  // console.log("protection Auth")


  // const {isLoggedIn,token}=useSelector(features=>features.auth);
  //   const Navigate=useNavigate();

  //   // handle is loggin with effet to make sure it first running when this file opened
  //   useEffect(()=>{
  //       if(isLoggedIn || token )Navigate("/");
  //   },[isLoggedIn,token,Navigate])

  const { isLoggedIn,token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!(isLoggedIn && token)) return navigate("/auth/login");
  }, [isLoggedIn, token, navigate]);

  return (

  <>
  <Navbar/>
  <Outlet/>
  <Footer />
  </>
  )
}

export default ProtectionAuth

