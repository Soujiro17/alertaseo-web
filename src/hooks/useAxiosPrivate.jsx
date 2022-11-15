/* eslint-disable no-param-reassign */
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { axiosPrivate } from "../services/axios";

const useAxiosPrivate = () => {
  const queryClient = useQueryClient();
  const auth = queryClient.getQueryData(["auth"]);

  console.log("auth", auth);

  const token = auth?.token;

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;

        if (err?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          // const newAccessToken = await auth?.refresh();
          prevRequest.headers.Authorization = `Bearer ${token}`;
          return axiosPrivate(prevRequest);
        }

        return Promise.reject(err);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, token]);

  return axiosPrivate;
};

export default useAxiosPrivate;
