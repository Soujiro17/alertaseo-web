/* eslint-disable no-param-reassign */
import { useEffect } from "react";
import { axiosPrivate } from "../services/axios";

const useAxiosPrivate = () => {
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["x-access-token"]) {
          config.headers["x-access-token"] = token;
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
          prevRequest.headers["x-access-token"] =
            sessionStorage.getItem("token");
          return axiosPrivate(prevRequest);
        }

        return Promise.reject(err);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [token]);

  return axiosPrivate;
};

export default useAxiosPrivate;
