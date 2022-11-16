import React, { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Rutas from "../pages/Rutas";
import Registro from "../pages/Registro";
import RegistroEdit from "../components/RegistroEdit";
import RegistroView from "../components/RegistroView";
import { getLoggedIn } from "../app/apis/Users";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

const Registros = React.lazy(() => import("../pages/Registros"));

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
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

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();

  const location = useLocation();

  if (!auth?.token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PageRoutes;
