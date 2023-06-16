import React from 'react'
import { Outlet } from 'react-router-dom'
const ProtectionAuth = () => {
  return (
  <>
  <p>this handle with protection Auth</p>
  <Outlet/>
  </>
  )
}

export default ProtectionAuth