import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";


function Routes() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <Error></Error>,
          children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
          ]
        },
      ]);


  return (
    <section>
        <RouterProvider router={router} />
    </section>
  )
}

export default Routes
