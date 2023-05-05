import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import Login from '../Pages/Login';


function Routes() {

    const router = createBrowserRouter([{
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <Login />
    }
    ])

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default Routes