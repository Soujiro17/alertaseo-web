import LoginForm from "../../components/LoginForm";
import HomeLayout from "../../layouts/HomeLayout";
import ForgetPassword from "./style";

const Login = () => {
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
