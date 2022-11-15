import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logIn } from "../../app/apis/Users";
import useFormHook from "../../hooks/useFormHook";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import Form from "./style";
import { loginSchema } from "../../constants/schemas";
import { loginDefaultValues } from "../../constants/defaultValues";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormHook(loginSchema, loginDefaultValues);

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => logIn({ ...data }),
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => navigate("/dashboard"),
      onError: (data) => toast.error(`Error: ${data.response.data?.message}`),
    });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("userName")}
        placeholder="Rut"
        type="text"
        width="300px"
      />
      <Input
        {...register("password")}
        placeholder="Contraseña"
        type="password"
        width="300px"
      />
      <Button>Iniciar sesión</Button>
    </Form>
  );
};

export default LoginForm;
