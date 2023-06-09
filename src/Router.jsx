import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from './pages/Customers/Dashboard';
import Index from './pages/Customers/Index';
import AboutUs from './pages/Customers/AboutUs';
import Login from './pages/Customers/Login';
import Beranda from './pages/Customers/Beranda';
import Navbar from './components/Navbar';

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /> {/* Navbar ditampilkan di atas semua komponen */}
        <Outlet /> {/* Komponen-komponen lain ditampilkan di sini */}
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Index /> {/* Komponen Index ditampilkan di sini */}
            <Dashboard /> {/* Komponen Dashboard ditampilkan di sini */}
          </>
        ),
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "beranda",
        element: <Beranda />,
      },
      {
        path: "navbar",
        element: <Navbar />,
      },
    ],
  },
]);

export default Router;
