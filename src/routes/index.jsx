import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Rutas from "../pages/Rutas";
import Registro from "../pages/Registro";
import RegistroEdit from "../components/RegistroEdit";
import RegistroView from "../components/RegistroView";

const Registros = React.lazy(() => import("../pages/Registros"));

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/registros" element={<Registros />} />
          <Route path="/recuperar-contrasena" element={<ForgetPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/registro" element={<Registro />}>
            <Route path="edit" element={<RegistroEdit />} />
            <Route path="view" element={<RegistroView />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRoutes;
