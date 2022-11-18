import React, { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Rutas from "../pages/Rutas";
import Mapa from "../pages/Mapa";
import Registro from "../pages/Registro";
import RegistroEdit from "../components/RegistroEdit";
import RegistroView from "../components/RegistroView";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";

const Registros = React.lazy(() => import("../pages/Registros"));

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
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
          <Route path="/mapa" element={<Mapa />} />
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

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageRoutes;
