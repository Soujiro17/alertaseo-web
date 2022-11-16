import { useMemo, useState, createContext } from "react";
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";
import useGetUser from "../hooks/useGetUser";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const values = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth],
  );

  const { isLoading } = useGetUser({
    retry: 3,
    onSuccess: (res) => {
      setAuth({ ...res.user, token: res.token });
    },
  });

  if (isLoading) return <Spinner />;

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
