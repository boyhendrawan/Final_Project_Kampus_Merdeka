import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react'

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
  return (
  <>
  <Navbar/>
  <Outlet/>
  </>
  )
}

export default ProtectionAuth