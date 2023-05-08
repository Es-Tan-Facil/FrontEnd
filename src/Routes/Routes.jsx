import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import AdminPage from '../Pages/AdminPage/AdminPage';
import LoginPage from '../Pages/LoginPage/LoginPage';

function Routes() {

    const router = createBrowserRouter([{
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/admin",
        element: <AdminPage />
    }
    ])

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default Routes