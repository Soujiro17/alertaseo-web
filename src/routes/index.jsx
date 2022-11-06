import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Registros = React.lazy(() => import("../pages/Registros"));
const Mapa = React.lazy(() => import("../pages/Mapa"));

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registros" element={<Registros />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRoutes;
