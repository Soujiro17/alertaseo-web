import { useQuery } from "@tanstack/react-query";
import { getLoggedIn } from "../app/apis/Users";
import useAxiosPrivate from "./useAxiosPrivate";

const useGetUser = (options) => {
  const axiosPrivate = useAxiosPrivate();

  const data = useQuery(["auth"], () => getLoggedIn({ axiosPrivate }), options);

  return { ...data };
};

export default useGetUser;
