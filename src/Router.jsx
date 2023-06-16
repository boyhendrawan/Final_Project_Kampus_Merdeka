import AboutUs from './pages/Customers/AboutUs';
import Account from './pages/Customers/Account';
import Notifications from './pages/Customers/Notifications';
import Dashboard from './pages/Customers/Dashboard';
import Index from './pages/Customers/Index';
import Login from './pages/login';
import React from 'react';
import Register from './pages/register';
import {createBrowserRouter} from "react-router-dom";

// this file contain all the Route of this apps
const Router=createBrowserRouter([
    {
        path:"/",
        element:<Index/>,
        children:[
            {
                index:true,
                element:<Dashboard/>,
            },
            {
                path:"aboutUs",
                element:<AboutUs/>,
            },
            {
                path:"login",
                element:<Login/>,
            },            
            {
                path:"register",
                element:<Register/>,
            },
            {
                path:"Akun",
                element:<Account/>
            },
            {
                path:"Notifications",
                element:<Notifications/>
            }
        ]
        
    }
])

export default Router