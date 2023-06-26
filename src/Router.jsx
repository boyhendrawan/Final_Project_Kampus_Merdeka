import { Outlet, createBrowserRouter } from "react-router-dom";

import Account from "./pages/Customers/Account";
import Beranda from './pages/Customers/Beranda';
import Checkout from "./pages/Customers/checkout/Checkout"
import Dashboard from './pages/Customers/Dashboard';
import Login from './pages/login';
import Navbar from './components/Navbar';
import Notifications from "./pages/Customers/Notifications";
import PageError from './components/PageError';
import ProtectionAuth from './components/ProtectionAuth';
import ProtectionHasAuth from './components/ProtectionHasAuth';
import React from 'react';
import Register from "./pages/register";
import UpdatePassword from "./pages/UpdatePassword";

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
            // test register and login 
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            },
            {
                path: "updatePassword",
                element: <UpdatePassword/>,
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
                element: <Notifications/>,
            },

            {
                path: "account",
                element: <Account/>
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
                element: "history",
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
