import { axiosPublic } from "../../services/axios";

export const logIn = async ({ userName, password }) => {
  const { data } = await axiosPublic.post("user/authenticate", { userName, password })

  return data
}

export const getLoggedIn = async ({ axiosPrivate }) => {
  const { data } = await axiosPrivate.get("user/get")

  return data
}