import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Dashboard from './pages/Customers/Dashboard';
import Index from './pages/Customers/Index';
import AboutUs from './pages/Customers/AboutUs';
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
            }
        ]
        
    }
])

export default Router