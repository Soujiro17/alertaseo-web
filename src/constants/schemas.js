import { object, string } from "yup"

export const loginSchema = object().shape({
  userName: string().required().trim(),
  password: string().required().trim()
})

export const registroSchema = object().shape({
  
})