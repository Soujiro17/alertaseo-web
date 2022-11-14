import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useFormHook = (schema, defaultValues) => {
  const data = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return { ...data };
};

export default useFormHook;
