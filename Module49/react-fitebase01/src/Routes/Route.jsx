import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import App from "../App"

export const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <App></App>
            }
        ]
    }
])

