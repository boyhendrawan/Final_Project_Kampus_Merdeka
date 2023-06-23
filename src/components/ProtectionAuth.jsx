import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react'

const ProtectionAuth = () => {
  return (
  <>
  <Navbar/>
  <Outlet/>
  </>
  )
}

export default ProtectionAuth