import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from '../Views/HomePage/HomePage';


function Routes() {

    const router = createBrowserRouter([{
        path: "/",
        element: <HomePage/>
    }
    ])

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default Routes