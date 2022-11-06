import Card from "../../components/Card";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import Container from "./style";

const Login = () => {
  return (
    <Container>
      <Card>
        <Logo />
        <LoginForm />
      </Card>
    </Container>
  );
};

export default Login;
