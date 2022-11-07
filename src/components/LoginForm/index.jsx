import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import Form from "./style";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/dashboard");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Rut" type="text" width="300px" />
      <Input placeholder="Contraseña" type="password" width="300px" />
      <Button>Iniciar sesión</Button>
    </Form>
  );
};

export default LoginForm;
