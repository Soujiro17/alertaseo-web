import { axiosPublic } from "../../services/axios";

export const logIn = async ({ userName, password }) => {
  const { data } = await axiosPublic.post("user/authenticate", { userName, password })

  if(data?.token){
    sessionStorage.setItem("token", data?.token)
  }

  return data
}

export const getLoggedIn = async ({ axiosPrivate }) => {
  const { data } = await axiosPrivate.get("user/get")

  return data
}