import { Outlet } from 'react-router-dom'
import React from 'react'

const ProtectionHasAuth = () => {
  // const navigate = useNavigate();

  // const {  dataUser,isLoggedIn } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!isLoggedIn || dataUser) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate,dataUser]);

  // console.log("protection Has Auth")
  return <Outlet />
  // return children
}

export default ProtectionHasAuth