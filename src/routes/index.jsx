import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Rutas from "../pages/Rutas";
import Registro from "../pages/Registro";

const Registros = React.lazy(() => import("../pages/Registros"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/rutas",
    element: <Rutas />,
  },
  {
    path: "/registro",
    element: <Registro />,
    children: [
      {
        path: ":id",
        element: <p>Registro</p>,
      },
      {
        path: "edit",
        element: <p>Edit</p>,
      },
    ],
  },
  {
    path: "/registros",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Registros />
      </Suspense>
    ),
  },
  {
    path: "/recuperar-contrasena",
    element: <ForgetPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />;
};

export default Router;
