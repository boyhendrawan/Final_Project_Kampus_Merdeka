import React from 'react';
import {createBrowserRouter} from "react-router-dom";

import Dashboard from './pages/Customers/Dashboard';
import Index from './pages/Customers/Index';
import ProtectionAuth from './components/ProtectionAuth';
import ProtectionHasAuth from './components/ProtectionHasAuth';
import Checkout from "./pages/Admin/checkout/Checkout";
// this file contain all the Route of this apps
const Router=createBrowserRouter([
    
    {
        // router not require login
        path:"/",
        element:<Index/>,
        children:[
            {
                index:true,
                element:<Dashboard/>,
            },
            {
                path:"detail/:idPenerbangan",
                element:"Detail Penerbangan",
            },
                    // here should added element properly and not required login
           {
            path:"auth",
            element:<ProtectionHasAuth/>,
            children:[
                {
                    path:"login",
                    element:"login",
                },
                {
                    path:"Register",
                    element:"Register",
                },
                {
                    path:"forgotPassword",
                    element:"Forgot Password",
                }
            ]
           }
        ]   
    },
    {
        // required login
        path:"/user",
        element:<ProtectionAuth/>,
        children:[
            {
                path:"notification",
                element:"notification"
            },
            {
                path:"infoDetailUser",
                element:"infoDetailUser"
            },
            {
                path:"checkout",
                element:<Checkout/>,

            },
            {
                path:"confirmBooking",
                element:"confirmBooking",
            },
            {
                path:"history",
                element:"history",
                children:[
                    // detail more history  
                    {
                        path:":idDetailHisotry",
                        element:"detail history"
                    }
                ]
            },

        ]
    }
   


])

export default Router