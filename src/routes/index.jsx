import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Registro from "../pages/Registro";

const Registros = React.lazy(() => import("../pages/Registros"));
// const Mapa = React.lazy(() => import("../pages/Mapa"));

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registros" element={<Registros />} />
          <Route path="/registro" element={<Registro />}>
            <Route path="edit" element={<p>Edit</p>} />
            <Route path="agregar" element={<p>Agregar</p>} />
          </Route>
          <Route path="/recuperar-contrasena" element={<ForgetPassword />} />
          {/* <Route path="/mapa" element={<Mapa />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRoutes;
