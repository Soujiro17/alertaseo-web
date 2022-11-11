import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Rutas from "../pages/Rutas";

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
    path: "/registros",
    element: <Registros />,

    children: [
      {
        path: "edit",
        element: <p>Edit</p>,
      },
      {
        path: "agregar",
        element: <p>Edit</p>,
      },
    ],
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

export default routes;
