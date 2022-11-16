import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import useAuth from "../../hooks/useAuth";
import HomeLayout from "../../layouts/HomeLayout";
import ForgetPassword from "./style";

const Login = () => {
  const { auth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.token) {
      navigate("/dashboard");
    }
  }, [auth?.token]);

  return (
    <HomeLayout>
      <LoginForm />
      <ForgetPassword to="/recuperar-contrasena">
        Olvidaste tu contraseña
      </ForgetPassword>
    </HomeLayout>
  );
};

export default Login;
