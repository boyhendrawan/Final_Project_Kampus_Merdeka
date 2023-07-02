
import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from './pages/Customers/Dashboard';
import Beranda from './pages/searchSchedule/Beranda';
import Account from './pages/Customers/Account';
import Checkout from "./pages/Customers/checkout/Checkout"
import FlightOption from './pages/searchSchedule/FlightOption';
import History from './pages/Customers/History';
import Login from './pages/login';
import Navbar from './components/Navbar';
import Notifications from './pages/Customers/Notifications';
import PageError from './components/PageError';
import ProtectionAuth from './components/ProtectionAuth';
import ProtectionHasAuth from './components/ProtectionHasAuth';
import Register from './pages/register';
import HistoryModal from './components/modals/HistoryModal';
import UpdatePassword from './pages/UpdatePassword';
import SideFooter from './components/Footer.jsx';
const Router = createBrowserRouter([

    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Outlet />
                <SideFooter/>
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

                path:"flightoption/:allData",
                element:<FlightOption />,
            },
            {
                path: "beranda",
                element: <Dashboard/>,
            },
           
            // here should added element properly and not required login
            
        ]
    },
    {
        path: "auth",
        element: <ProtectionHasAuth />,
        children: [
            {
                path: "login/:tokenTiket",
                element: <Login/>,
            },
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
                element:<UpdatePassword/>,
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
                element: <Notifications/>
            },

            {
                path: "infoDetailUser",
                element: <Account/>
            },
            {
                path: "checkout/:idTiket",
                element: <Checkout />,

            },
            {
                path: "confirmBooking",
                element: "confirmBooking",
            },
            {
                path: "history",
                element: <History />,
                // children: [
                //     // detail more history  
                //     {
                //         path: ":uuid_history",
                //         element: <HistoryModal />
                //     }
                // ]
            },

        ]
    }



])



export default Router;
