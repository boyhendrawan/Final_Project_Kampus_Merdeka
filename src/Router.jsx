import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from './pages/Customers/Dashboard';
import Beranda from './pages/Customers/Beranda';
import Navbar from './components/Navbar';
import History from './pages/Customers/History';
import ProtectionAuth from './components/ProtectionAuth';
import ProtectionHasAuth from './components/ProtectionHasAuth';
import FlightOption from './pages/FlightOption';
import Checkout from "./pages/Customers/checkout/Checkout"
import PageError from './components/PageError';
import Login from './pages/login';
import Register from './pages/register';
import HistoryModal from './components/modals/HistoryModal';

const Router = createBrowserRouter([

    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Outlet />
            </>
        ),
        errorElement: <PageError />,
        children: [
            {
                index: true,
                element: <Beranda />,
            },
            {

                path: "detail/:idPenerbangan",
                element: "Detail Penerbangan",
            },
            {

                path:"flightoption",
                element:<FlightOption />,
            },
            {
                path: "beranda",
                element: <Dashboard/>,
            },
            {
                path: "history",
                element: <History />,
                children: [
                    // detail more history  
                    {
                        path: ":uuid_history",
                        element: <HistoryModal />
                    }
                ]
            },
            // here should added element properly and not required login
            
        ]
    },
    {
        path: "auth",
        element: <ProtectionHasAuth />,
        children: [
            {
                path: "login",
                element: <Login/>,
            },

            {
                path: "Register",
                element: <Register />,
            },
            {
                path: "forgotPassword",
                element: "Forgot Password",
            }
        ]
    },
    {
        // required login
        path: "/user",
        element: <ProtectionAuth />,
        children: [
            {
                path: "notification",
                element: "notification"
            },

            {
                path: "infoDetailUser",
                element: "infoDetailUser"
            },
            {
                path: "checkout",
                element: <Checkout />,

            },
            {
                path: "confirmBooking",
                element: "confirmBooking",
            },
            {
                path: "history",
                element:"History",
                children: [
                    // detail more history  
                    {
                        path: ":idDetailHisotry",
                        element: "detail history"
                    }
                ]
            },

        ]
    }



])



export default Router;
